import useNavigator from "@saleor/hooks/useNavigator";
import { Sort } from "@saleor/types";
import { useEffect } from "react";

export type SortByRankUrlQueryParams<T extends string> = Sort<T> & {
  query?: string;
};

export interface UseSortRedirectsOpts<SortField extends string> {
  params: SortByRankUrlQueryParams<SortField>;
  defaultSortField: SortField;
  urlFunc: (params: SortByRankUrlQueryParams<SortField>) => string;
  resetToDefault?: boolean;
}

export function useSortRedirects<SortField extends string>({
  params,
  defaultSortField,
  urlFunc,
  resetToDefault,
}: UseSortRedirectsOpts<SortField>) {
  const navigate = useNavigator();

  const hasQuery = !!params.query?.trim();

  useEffect(() => {
    const sortWithQuery = "rank" as SortField;
    const sortWithoutQuery =
      params.sort === "rank" ? defaultSortField : params.sort;
    navigate(
      urlFunc({
        ...params,
        asc: hasQuery ? false : params.asc,
        sort: hasQuery ? sortWithQuery : sortWithoutQuery,
      }),
    );
  }, [params.query]);

  useEffect(() => {
    if (resetToDefault) {
      navigate(
        urlFunc({
          ...params,
          sort: defaultSortField,
        }),
      );
    }
  }, [params]);
}
