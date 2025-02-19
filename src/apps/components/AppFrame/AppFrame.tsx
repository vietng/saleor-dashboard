import { getAppDeepPathFromDashboardUrl } from "@saleor/apps/urls";
import useShop from "@saleor/hooks/useShop";
import { useTheme } from "@saleor/macaw-ui";
import clsx from "clsx";
import React, { useEffect } from "react";
import { useLocation } from "react-router";
import urlJoin from "url-join";

import { useStyles } from "./styles";
import { useAppActions } from "./useAppActions";

interface Props {
  src: string;
  appToken: string;
  appId: string;
  className?: string;
  onLoad?(): void;
  onError?(): void;
}

const getOrigin = (url: string) => new URL(url).origin;

export const AppFrame: React.FC<Props> = ({
  src,
  appToken,
  appId,
  className,
  onLoad,
  onError,
}) => {
  const shop = useShop();
  const frameRef = React.useRef<HTMLIFrameElement>();
  const { sendThemeToExtension } = useTheme();
  const classes = useStyles();
  const appOrigin = getOrigin(src);
  const { postToExtension } = useAppActions(frameRef, appOrigin, appId);
  const location = useLocation();

  useEffect(() => {
    postToExtension({
      type: "redirect",
      payload: {
        path: getAppDeepPathFromDashboardUrl(location.pathname, appId),
      },
    });
  }, [location.pathname]);

  const handleLoad = () => {
    postToExtension({
      type: "handshake",
      payload: {
        token: appToken,
        version: 1,
      },
    });
    sendThemeToExtension();

    if (onLoad) {
      onLoad();
    }
  };

  if (!shop?.domain.host) {
    return null;
  }

  return (
    <iframe
      ref={frameRef}
      src={urlJoin(
        src,
        window.location.search,
        `?domain=${shop.domain.host}&id=${appId}`,
      )}
      onError={onError}
      onLoad={handleLoad}
      className={clsx(classes.iframe, className)}
      sandbox="allow-same-origin allow-forms allow-scripts"
    />
  );
};
