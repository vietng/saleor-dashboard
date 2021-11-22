/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum AccountErrorCode {
  ACCOUNT_NOT_CONFIRMED = "ACCOUNT_NOT_CONFIRMED",
  ACTIVATE_OWN_ACCOUNT = "ACTIVATE_OWN_ACCOUNT",
  ACTIVATE_SUPERUSER_ACCOUNT = "ACTIVATE_SUPERUSER_ACCOUNT",
  CHANNEL_INACTIVE = "CHANNEL_INACTIVE",
  DEACTIVATE_OWN_ACCOUNT = "DEACTIVATE_OWN_ACCOUNT",
  DEACTIVATE_SUPERUSER_ACCOUNT = "DEACTIVATE_SUPERUSER_ACCOUNT",
  DELETE_NON_STAFF_USER = "DELETE_NON_STAFF_USER",
  DELETE_OWN_ACCOUNT = "DELETE_OWN_ACCOUNT",
  DELETE_STAFF_ACCOUNT = "DELETE_STAFF_ACCOUNT",
  DELETE_SUPERUSER_ACCOUNT = "DELETE_SUPERUSER_ACCOUNT",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INACTIVE = "INACTIVE",
  INVALID = "INVALID",
  INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
  INVALID_PASSWORD = "INVALID_PASSWORD",
  JWT_DECODE_ERROR = "JWT_DECODE_ERROR",
  JWT_INVALID_CSRF_TOKEN = "JWT_INVALID_CSRF_TOKEN",
  JWT_INVALID_TOKEN = "JWT_INVALID_TOKEN",
  JWT_MISSING_TOKEN = "JWT_MISSING_TOKEN",
  JWT_SIGNATURE_EXPIRED = "JWT_SIGNATURE_EXPIRED",
  LEFT_NOT_MANAGEABLE_PERMISSION = "LEFT_NOT_MANAGEABLE_PERMISSION",
  MISSING_CHANNEL_SLUG = "MISSING_CHANNEL_SLUG",
  NOT_FOUND = "NOT_FOUND",
  OUT_OF_SCOPE_GROUP = "OUT_OF_SCOPE_GROUP",
  OUT_OF_SCOPE_PERMISSION = "OUT_OF_SCOPE_PERMISSION",
  OUT_OF_SCOPE_USER = "OUT_OF_SCOPE_USER",
  PASSWORD_ENTIRELY_NUMERIC = "PASSWORD_ENTIRELY_NUMERIC",
  PASSWORD_TOO_COMMON = "PASSWORD_TOO_COMMON",
  PASSWORD_TOO_SHORT = "PASSWORD_TOO_SHORT",
  PASSWORD_TOO_SIMILAR = "PASSWORD_TOO_SIMILAR",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum AddressTypeEnum {
  BILLING = "BILLING",
  SHIPPING = "SHIPPING",
}

export enum AppErrorCode {
  FORBIDDEN = "FORBIDDEN",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  INVALID_MANIFEST_FORMAT = "INVALID_MANIFEST_FORMAT",
  INVALID_PERMISSION = "INVALID_PERMISSION",
  INVALID_STATUS = "INVALID_STATUS",
  INVALID_URL_FORMAT = "INVALID_URL_FORMAT",
  MANIFEST_URL_CANT_CONNECT = "MANIFEST_URL_CANT_CONNECT",
  NOT_FOUND = "NOT_FOUND",
  OUT_OF_SCOPE_APP = "OUT_OF_SCOPE_APP",
  OUT_OF_SCOPE_PERMISSION = "OUT_OF_SCOPE_PERMISSION",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum AppSortField {
  CREATION_DATE = "CREATION_DATE",
  NAME = "NAME",
}

export enum AppTypeEnum {
  LOCAL = "LOCAL",
  THIRDPARTY = "THIRDPARTY",
}

export enum AttributeEntityTypeEnum {
  PAGE = "PAGE",
  PRODUCT = "PRODUCT",
}

export enum AttributeErrorCode {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum AttributeInputTypeEnum {
  BOOLEAN = "BOOLEAN",
  DATE = "DATE",
  DATE_TIME = "DATE_TIME",
  DROPDOWN = "DROPDOWN",
  FILE = "FILE",
  MULTISELECT = "MULTISELECT",
  NUMERIC = "NUMERIC",
  REFERENCE = "REFERENCE",
  RICH_TEXT = "RICH_TEXT",
}

export enum AttributeSortField {
  AVAILABLE_IN_GRID = "AVAILABLE_IN_GRID",
  FILTERABLE_IN_DASHBOARD = "FILTERABLE_IN_DASHBOARD",
  FILTERABLE_IN_STOREFRONT = "FILTERABLE_IN_STOREFRONT",
  IS_VARIANT_ONLY = "IS_VARIANT_ONLY",
  NAME = "NAME",
  SLUG = "SLUG",
  STOREFRONT_SEARCH_POSITION = "STOREFRONT_SEARCH_POSITION",
  VALUE_REQUIRED = "VALUE_REQUIRED",
  VISIBLE_IN_STOREFRONT = "VISIBLE_IN_STOREFRONT",
}

export enum AttributeTypeEnum {
  PAGE_TYPE = "PAGE_TYPE",
  PRODUCT_TYPE = "PRODUCT_TYPE",
}

export enum CategorySortField {
  NAME = "NAME",
  PRODUCT_COUNT = "PRODUCT_COUNT",
  SUBCATEGORY_COUNT = "SUBCATEGORY_COUNT",
}

export enum ChannelErrorCode {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  CHANNELS_CURRENCY_MUST_BE_THE_SAME = "CHANNELS_CURRENCY_MUST_BE_THE_SAME",
  CHANNEL_WITH_ORDERS = "CHANNEL_WITH_ORDERS",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum CollectionErrorCode {
  CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT = "CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum CollectionPublished {
  HIDDEN = "HIDDEN",
  PUBLISHED = "PUBLISHED",
}

export enum CollectionSortField {
  AVAILABILITY = "AVAILABILITY",
  NAME = "NAME",
  PRODUCT_COUNT = "PRODUCT_COUNT",
  PUBLICATION_DATE = "PUBLICATION_DATE",
}

export enum ConfigurationTypeFieldEnum {
  BOOLEAN = "BOOLEAN",
  MULTILINE = "MULTILINE",
  OUTPUT = "OUTPUT",
  PASSWORD = "PASSWORD",
  SECRET = "SECRET",
  SECRETMULTILINE = "SECRETMULTILINE",
  STRING = "STRING",
}

export enum CountryCode {
  AD = "AD",
  AE = "AE",
  AF = "AF",
  AG = "AG",
  AI = "AI",
  AL = "AL",
  AM = "AM",
  AO = "AO",
  AQ = "AQ",
  AR = "AR",
  AS = "AS",
  AT = "AT",
  AU = "AU",
  AW = "AW",
  AX = "AX",
  AZ = "AZ",
  BA = "BA",
  BB = "BB",
  BD = "BD",
  BE = "BE",
  BF = "BF",
  BG = "BG",
  BH = "BH",
  BI = "BI",
  BJ = "BJ",
  BL = "BL",
  BM = "BM",
  BN = "BN",
  BO = "BO",
  BQ = "BQ",
  BR = "BR",
  BS = "BS",
  BT = "BT",
  BV = "BV",
  BW = "BW",
  BY = "BY",
  BZ = "BZ",
  CA = "CA",
  CC = "CC",
  CD = "CD",
  CF = "CF",
  CG = "CG",
  CH = "CH",
  CI = "CI",
  CK = "CK",
  CL = "CL",
  CM = "CM",
  CN = "CN",
  CO = "CO",
  CR = "CR",
  CU = "CU",
  CV = "CV",
  CW = "CW",
  CX = "CX",
  CY = "CY",
  CZ = "CZ",
  DE = "DE",
  DJ = "DJ",
  DK = "DK",
  DM = "DM",
  DO = "DO",
  DZ = "DZ",
  EC = "EC",
  EE = "EE",
  EG = "EG",
  EH = "EH",
  ER = "ER",
  ES = "ES",
  ET = "ET",
  EU = "EU",
  FI = "FI",
  FJ = "FJ",
  FK = "FK",
  FM = "FM",
  FO = "FO",
  FR = "FR",
  GA = "GA",
  GB = "GB",
  GD = "GD",
  GE = "GE",
  GF = "GF",
  GG = "GG",
  GH = "GH",
  GI = "GI",
  GL = "GL",
  GM = "GM",
  GN = "GN",
  GP = "GP",
  GQ = "GQ",
  GR = "GR",
  GS = "GS",
  GT = "GT",
  GU = "GU",
  GW = "GW",
  GY = "GY",
  HK = "HK",
  HM = "HM",
  HN = "HN",
  HR = "HR",
  HT = "HT",
  HU = "HU",
  ID = "ID",
  IE = "IE",
  IL = "IL",
  IM = "IM",
  IN = "IN",
  IO = "IO",
  IQ = "IQ",
  IR = "IR",
  IS = "IS",
  IT = "IT",
  JE = "JE",
  JM = "JM",
  JO = "JO",
  JP = "JP",
  KE = "KE",
  KG = "KG",
  KH = "KH",
  KI = "KI",
  KM = "KM",
  KN = "KN",
  KP = "KP",
  KR = "KR",
  KW = "KW",
  KY = "KY",
  KZ = "KZ",
  LA = "LA",
  LB = "LB",
  LC = "LC",
  LI = "LI",
  LK = "LK",
  LR = "LR",
  LS = "LS",
  LT = "LT",
  LU = "LU",
  LV = "LV",
  LY = "LY",
  MA = "MA",
  MC = "MC",
  MD = "MD",
  ME = "ME",
  MF = "MF",
  MG = "MG",
  MH = "MH",
  MK = "MK",
  ML = "ML",
  MM = "MM",
  MN = "MN",
  MO = "MO",
  MP = "MP",
  MQ = "MQ",
  MR = "MR",
  MS = "MS",
  MT = "MT",
  MU = "MU",
  MV = "MV",
  MW = "MW",
  MX = "MX",
  MY = "MY",
  MZ = "MZ",
  NA = "NA",
  NC = "NC",
  NE = "NE",
  NF = "NF",
  NG = "NG",
  NI = "NI",
  NL = "NL",
  NO = "NO",
  NP = "NP",
  NR = "NR",
  NU = "NU",
  NZ = "NZ",
  OM = "OM",
  PA = "PA",
  PE = "PE",
  PF = "PF",
  PG = "PG",
  PH = "PH",
  PK = "PK",
  PL = "PL",
  PM = "PM",
  PN = "PN",
  PR = "PR",
  PS = "PS",
  PT = "PT",
  PW = "PW",
  PY = "PY",
  QA = "QA",
  RE = "RE",
  RO = "RO",
  RS = "RS",
  RU = "RU",
  RW = "RW",
  SA = "SA",
  SB = "SB",
  SC = "SC",
  SD = "SD",
  SE = "SE",
  SG = "SG",
  SH = "SH",
  SI = "SI",
  SJ = "SJ",
  SK = "SK",
  SL = "SL",
  SM = "SM",
  SN = "SN",
  SO = "SO",
  SR = "SR",
  SS = "SS",
  ST = "ST",
  SV = "SV",
  SX = "SX",
  SY = "SY",
  SZ = "SZ",
  TC = "TC",
  TD = "TD",
  TF = "TF",
  TG = "TG",
  TH = "TH",
  TJ = "TJ",
  TK = "TK",
  TL = "TL",
  TM = "TM",
  TN = "TN",
  TO = "TO",
  TR = "TR",
  TT = "TT",
  TV = "TV",
  TW = "TW",
  TZ = "TZ",
  UA = "UA",
  UG = "UG",
  UM = "UM",
  US = "US",
  UY = "UY",
  UZ = "UZ",
  VA = "VA",
  VC = "VC",
  VE = "VE",
  VG = "VG",
  VI = "VI",
  VN = "VN",
  VU = "VU",
  WF = "WF",
  WS = "WS",
  YE = "YE",
  YT = "YT",
  ZA = "ZA",
  ZM = "ZM",
  ZW = "ZW",
}

export enum DiscountErrorCode {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT = "CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum DiscountStatusEnum {
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED",
  SCHEDULED = "SCHEDULED",
}

export enum DiscountValueTypeEnum {
  FIXED = "FIXED",
  PERCENTAGE = "PERCENTAGE",
}

export enum ExportErrorCode {
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
}

export enum ExportScope {
  ALL = "ALL",
  FILTER = "FILTER",
  IDS = "IDS",
}

export enum FileTypesEnum {
  CSV = "CSV",
  XLSX = "XLSX",
}

export enum FulfillmentStatus {
  CANCELED = "CANCELED",
  FULFILLED = "FULFILLED",
  REFUNDED = "REFUNDED",
  REFUNDED_AND_RETURNED = "REFUNDED_AND_RETURNED",
  REPLACED = "REPLACED",
  RETURNED = "RETURNED",
}

export enum InvoiceErrorCode {
  EMAIL_NOT_SET = "EMAIL_NOT_SET",
  INVALID_STATUS = "INVALID_STATUS",
  NOT_FOUND = "NOT_FOUND",
  NOT_READY = "NOT_READY",
  NUMBER_NOT_SET = "NUMBER_NOT_SET",
  REQUIRED = "REQUIRED",
  URL_NOT_SET = "URL_NOT_SET",
}

export enum JobStatusEnum {
  DELETED = "DELETED",
  FAILED = "FAILED",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
}

export enum LanguageCodeEnum {
  AF = "AF",
  AF_NA = "AF_NA",
  AF_ZA = "AF_ZA",
  AGQ = "AGQ",
  AGQ_CM = "AGQ_CM",
  AK = "AK",
  AK_GH = "AK_GH",
  AM = "AM",
  AM_ET = "AM_ET",
  AR = "AR",
  AR_AE = "AR_AE",
  AR_BH = "AR_BH",
  AR_DJ = "AR_DJ",
  AR_DZ = "AR_DZ",
  AR_EG = "AR_EG",
  AR_EH = "AR_EH",
  AR_ER = "AR_ER",
  AR_IL = "AR_IL",
  AR_IQ = "AR_IQ",
  AR_JO = "AR_JO",
  AR_KM = "AR_KM",
  AR_KW = "AR_KW",
  AR_LB = "AR_LB",
  AR_LY = "AR_LY",
  AR_MA = "AR_MA",
  AR_MR = "AR_MR",
  AR_OM = "AR_OM",
  AR_PS = "AR_PS",
  AR_QA = "AR_QA",
  AR_SA = "AR_SA",
  AR_SD = "AR_SD",
  AR_SO = "AR_SO",
  AR_SS = "AR_SS",
  AR_SY = "AR_SY",
  AR_TD = "AR_TD",
  AR_TN = "AR_TN",
  AR_YE = "AR_YE",
  AS = "AS",
  ASA = "ASA",
  ASA_TZ = "ASA_TZ",
  AST = "AST",
  AST_ES = "AST_ES",
  AS_IN = "AS_IN",
  AZ = "AZ",
  AZ_CYRL = "AZ_CYRL",
  AZ_CYRL_AZ = "AZ_CYRL_AZ",
  AZ_LATN = "AZ_LATN",
  AZ_LATN_AZ = "AZ_LATN_AZ",
  BAS = "BAS",
  BAS_CM = "BAS_CM",
  BE = "BE",
  BEM = "BEM",
  BEM_ZM = "BEM_ZM",
  BEZ = "BEZ",
  BEZ_TZ = "BEZ_TZ",
  BE_BY = "BE_BY",
  BG = "BG",
  BG_BG = "BG_BG",
  BM = "BM",
  BM_ML = "BM_ML",
  BN = "BN",
  BN_BD = "BN_BD",
  BN_IN = "BN_IN",
  BO = "BO",
  BO_CN = "BO_CN",
  BO_IN = "BO_IN",
  BR = "BR",
  BRX = "BRX",
  BRX_IN = "BRX_IN",
  BR_FR = "BR_FR",
  BS = "BS",
  BS_CYRL = "BS_CYRL",
  BS_CYRL_BA = "BS_CYRL_BA",
  BS_LATN = "BS_LATN",
  BS_LATN_BA = "BS_LATN_BA",
  CA = "CA",
  CA_AD = "CA_AD",
  CA_ES = "CA_ES",
  CA_ES_VALENCIA = "CA_ES_VALENCIA",
  CA_FR = "CA_FR",
  CA_IT = "CA_IT",
  CCP = "CCP",
  CCP_BD = "CCP_BD",
  CCP_IN = "CCP_IN",
  CE = "CE",
  CEB = "CEB",
  CEB_PH = "CEB_PH",
  CE_RU = "CE_RU",
  CGG = "CGG",
  CGG_UG = "CGG_UG",
  CHR = "CHR",
  CHR_US = "CHR_US",
  CKB = "CKB",
  CKB_IQ = "CKB_IQ",
  CKB_IR = "CKB_IR",
  CS = "CS",
  CS_CZ = "CS_CZ",
  CU = "CU",
  CU_RU = "CU_RU",
  CY = "CY",
  CY_GB = "CY_GB",
  DA = "DA",
  DAV = "DAV",
  DAV_KE = "DAV_KE",
  DA_DK = "DA_DK",
  DA_GL = "DA_GL",
  DE = "DE",
  DE_AT = "DE_AT",
  DE_BE = "DE_BE",
  DE_CH = "DE_CH",
  DE_DE = "DE_DE",
  DE_IT = "DE_IT",
  DE_LI = "DE_LI",
  DE_LU = "DE_LU",
  DJE = "DJE",
  DJE_NE = "DJE_NE",
  DSB = "DSB",
  DSB_DE = "DSB_DE",
  DUA = "DUA",
  DUA_CM = "DUA_CM",
  DYO = "DYO",
  DYO_SN = "DYO_SN",
  DZ = "DZ",
  DZ_BT = "DZ_BT",
  EBU = "EBU",
  EBU_KE = "EBU_KE",
  EE = "EE",
  EE_GH = "EE_GH",
  EE_TG = "EE_TG",
  EL = "EL",
  EL_CY = "EL_CY",
  EL_GR = "EL_GR",
  EN = "EN",
  EN_AE = "EN_AE",
  EN_AG = "EN_AG",
  EN_AI = "EN_AI",
  EN_AS = "EN_AS",
  EN_AT = "EN_AT",
  EN_AU = "EN_AU",
  EN_BB = "EN_BB",
  EN_BE = "EN_BE",
  EN_BI = "EN_BI",
  EN_BM = "EN_BM",
  EN_BS = "EN_BS",
  EN_BW = "EN_BW",
  EN_BZ = "EN_BZ",
  EN_CA = "EN_CA",
  EN_CC = "EN_CC",
  EN_CH = "EN_CH",
  EN_CK = "EN_CK",
  EN_CM = "EN_CM",
  EN_CX = "EN_CX",
  EN_CY = "EN_CY",
  EN_DE = "EN_DE",
  EN_DG = "EN_DG",
  EN_DK = "EN_DK",
  EN_DM = "EN_DM",
  EN_ER = "EN_ER",
  EN_FI = "EN_FI",
  EN_FJ = "EN_FJ",
  EN_FK = "EN_FK",
  EN_FM = "EN_FM",
  EN_GB = "EN_GB",
  EN_GD = "EN_GD",
  EN_GG = "EN_GG",
  EN_GH = "EN_GH",
  EN_GI = "EN_GI",
  EN_GM = "EN_GM",
  EN_GU = "EN_GU",
  EN_GY = "EN_GY",
  EN_HK = "EN_HK",
  EN_IE = "EN_IE",
  EN_IL = "EN_IL",
  EN_IM = "EN_IM",
  EN_IN = "EN_IN",
  EN_IO = "EN_IO",
  EN_JE = "EN_JE",
  EN_JM = "EN_JM",
  EN_KE = "EN_KE",
  EN_KI = "EN_KI",
  EN_KN = "EN_KN",
  EN_KY = "EN_KY",
  EN_LC = "EN_LC",
  EN_LR = "EN_LR",
  EN_LS = "EN_LS",
  EN_MG = "EN_MG",
  EN_MH = "EN_MH",
  EN_MO = "EN_MO",
  EN_MP = "EN_MP",
  EN_MS = "EN_MS",
  EN_MT = "EN_MT",
  EN_MU = "EN_MU",
  EN_MW = "EN_MW",
  EN_MY = "EN_MY",
  EN_NA = "EN_NA",
  EN_NF = "EN_NF",
  EN_NG = "EN_NG",
  EN_NL = "EN_NL",
  EN_NR = "EN_NR",
  EN_NU = "EN_NU",
  EN_NZ = "EN_NZ",
  EN_PG = "EN_PG",
  EN_PH = "EN_PH",
  EN_PK = "EN_PK",
  EN_PN = "EN_PN",
  EN_PR = "EN_PR",
  EN_PW = "EN_PW",
  EN_RW = "EN_RW",
  EN_SB = "EN_SB",
  EN_SC = "EN_SC",
  EN_SD = "EN_SD",
  EN_SE = "EN_SE",
  EN_SG = "EN_SG",
  EN_SH = "EN_SH",
  EN_SI = "EN_SI",
  EN_SL = "EN_SL",
  EN_SS = "EN_SS",
  EN_SX = "EN_SX",
  EN_SZ = "EN_SZ",
  EN_TC = "EN_TC",
  EN_TK = "EN_TK",
  EN_TO = "EN_TO",
  EN_TT = "EN_TT",
  EN_TV = "EN_TV",
  EN_TZ = "EN_TZ",
  EN_UG = "EN_UG",
  EN_UM = "EN_UM",
  EN_US = "EN_US",
  EN_VC = "EN_VC",
  EN_VG = "EN_VG",
  EN_VI = "EN_VI",
  EN_VU = "EN_VU",
  EN_WS = "EN_WS",
  EN_ZA = "EN_ZA",
  EN_ZM = "EN_ZM",
  EN_ZW = "EN_ZW",
  EO = "EO",
  ES = "ES",
  ES_AR = "ES_AR",
  ES_BO = "ES_BO",
  ES_BR = "ES_BR",
  ES_BZ = "ES_BZ",
  ES_CL = "ES_CL",
  ES_CO = "ES_CO",
  ES_CR = "ES_CR",
  ES_CU = "ES_CU",
  ES_DO = "ES_DO",
  ES_EA = "ES_EA",
  ES_EC = "ES_EC",
  ES_ES = "ES_ES",
  ES_GQ = "ES_GQ",
  ES_GT = "ES_GT",
  ES_HN = "ES_HN",
  ES_IC = "ES_IC",
  ES_MX = "ES_MX",
  ES_NI = "ES_NI",
  ES_PA = "ES_PA",
  ES_PE = "ES_PE",
  ES_PH = "ES_PH",
  ES_PR = "ES_PR",
  ES_PY = "ES_PY",
  ES_SV = "ES_SV",
  ES_US = "ES_US",
  ES_UY = "ES_UY",
  ES_VE = "ES_VE",
  ET = "ET",
  ET_EE = "ET_EE",
  EU = "EU",
  EU_ES = "EU_ES",
  EWO = "EWO",
  EWO_CM = "EWO_CM",
  FA = "FA",
  FA_AF = "FA_AF",
  FA_IR = "FA_IR",
  FF = "FF",
  FF_ADLM = "FF_ADLM",
  FF_ADLM_BF = "FF_ADLM_BF",
  FF_ADLM_CM = "FF_ADLM_CM",
  FF_ADLM_GH = "FF_ADLM_GH",
  FF_ADLM_GM = "FF_ADLM_GM",
  FF_ADLM_GN = "FF_ADLM_GN",
  FF_ADLM_GW = "FF_ADLM_GW",
  FF_ADLM_LR = "FF_ADLM_LR",
  FF_ADLM_MR = "FF_ADLM_MR",
  FF_ADLM_NE = "FF_ADLM_NE",
  FF_ADLM_NG = "FF_ADLM_NG",
  FF_ADLM_SL = "FF_ADLM_SL",
  FF_ADLM_SN = "FF_ADLM_SN",
  FF_LATN = "FF_LATN",
  FF_LATN_BF = "FF_LATN_BF",
  FF_LATN_CM = "FF_LATN_CM",
  FF_LATN_GH = "FF_LATN_GH",
  FF_LATN_GM = "FF_LATN_GM",
  FF_LATN_GN = "FF_LATN_GN",
  FF_LATN_GW = "FF_LATN_GW",
  FF_LATN_LR = "FF_LATN_LR",
  FF_LATN_MR = "FF_LATN_MR",
  FF_LATN_NE = "FF_LATN_NE",
  FF_LATN_NG = "FF_LATN_NG",
  FF_LATN_SL = "FF_LATN_SL",
  FF_LATN_SN = "FF_LATN_SN",
  FI = "FI",
  FIL = "FIL",
  FIL_PH = "FIL_PH",
  FI_FI = "FI_FI",
  FO = "FO",
  FO_DK = "FO_DK",
  FO_FO = "FO_FO",
  FR = "FR",
  FR_BE = "FR_BE",
  FR_BF = "FR_BF",
  FR_BI = "FR_BI",
  FR_BJ = "FR_BJ",
  FR_BL = "FR_BL",
  FR_CA = "FR_CA",
  FR_CD = "FR_CD",
  FR_CF = "FR_CF",
  FR_CG = "FR_CG",
  FR_CH = "FR_CH",
  FR_CI = "FR_CI",
  FR_CM = "FR_CM",
  FR_DJ = "FR_DJ",
  FR_DZ = "FR_DZ",
  FR_FR = "FR_FR",
  FR_GA = "FR_GA",
  FR_GF = "FR_GF",
  FR_GN = "FR_GN",
  FR_GP = "FR_GP",
  FR_GQ = "FR_GQ",
  FR_HT = "FR_HT",
  FR_KM = "FR_KM",
  FR_LU = "FR_LU",
  FR_MA = "FR_MA",
  FR_MC = "FR_MC",
  FR_MF = "FR_MF",
  FR_MG = "FR_MG",
  FR_ML = "FR_ML",
  FR_MQ = "FR_MQ",
  FR_MR = "FR_MR",
  FR_MU = "FR_MU",
  FR_NC = "FR_NC",
  FR_NE = "FR_NE",
  FR_PF = "FR_PF",
  FR_PM = "FR_PM",
  FR_RE = "FR_RE",
  FR_RW = "FR_RW",
  FR_SC = "FR_SC",
  FR_SN = "FR_SN",
  FR_SY = "FR_SY",
  FR_TD = "FR_TD",
  FR_TG = "FR_TG",
  FR_TN = "FR_TN",
  FR_VU = "FR_VU",
  FR_WF = "FR_WF",
  FR_YT = "FR_YT",
  FUR = "FUR",
  FUR_IT = "FUR_IT",
  FY = "FY",
  FY_NL = "FY_NL",
  GA = "GA",
  GA_GB = "GA_GB",
  GA_IE = "GA_IE",
  GD = "GD",
  GD_GB = "GD_GB",
  GL = "GL",
  GL_ES = "GL_ES",
  GSW = "GSW",
  GSW_CH = "GSW_CH",
  GSW_FR = "GSW_FR",
  GSW_LI = "GSW_LI",
  GU = "GU",
  GUZ = "GUZ",
  GUZ_KE = "GUZ_KE",
  GU_IN = "GU_IN",
  GV = "GV",
  GV_IM = "GV_IM",
  HA = "HA",
  HAW = "HAW",
  HAW_US = "HAW_US",
  HA_GH = "HA_GH",
  HA_NE = "HA_NE",
  HA_NG = "HA_NG",
  HE = "HE",
  HE_IL = "HE_IL",
  HI = "HI",
  HI_IN = "HI_IN",
  HR = "HR",
  HR_BA = "HR_BA",
  HR_HR = "HR_HR",
  HSB = "HSB",
  HSB_DE = "HSB_DE",
  HU = "HU",
  HU_HU = "HU_HU",
  HY = "HY",
  HY_AM = "HY_AM",
  IA = "IA",
  ID = "ID",
  ID_ID = "ID_ID",
  IG = "IG",
  IG_NG = "IG_NG",
  II = "II",
  II_CN = "II_CN",
  IS = "IS",
  IS_IS = "IS_IS",
  IT = "IT",
  IT_CH = "IT_CH",
  IT_IT = "IT_IT",
  IT_SM = "IT_SM",
  IT_VA = "IT_VA",
  JA = "JA",
  JA_JP = "JA_JP",
  JGO = "JGO",
  JGO_CM = "JGO_CM",
  JMC = "JMC",
  JMC_TZ = "JMC_TZ",
  JV = "JV",
  JV_ID = "JV_ID",
  KA = "KA",
  KAB = "KAB",
  KAB_DZ = "KAB_DZ",
  KAM = "KAM",
  KAM_KE = "KAM_KE",
  KA_GE = "KA_GE",
  KDE = "KDE",
  KDE_TZ = "KDE_TZ",
  KEA = "KEA",
  KEA_CV = "KEA_CV",
  KHQ = "KHQ",
  KHQ_ML = "KHQ_ML",
  KI = "KI",
  KI_KE = "KI_KE",
  KK = "KK",
  KKJ = "KKJ",
  KKJ_CM = "KKJ_CM",
  KK_KZ = "KK_KZ",
  KL = "KL",
  KLN = "KLN",
  KLN_KE = "KLN_KE",
  KL_GL = "KL_GL",
  KM = "KM",
  KM_KH = "KM_KH",
  KN = "KN",
  KN_IN = "KN_IN",
  KO = "KO",
  KOK = "KOK",
  KOK_IN = "KOK_IN",
  KO_KP = "KO_KP",
  KO_KR = "KO_KR",
  KS = "KS",
  KSB = "KSB",
  KSB_TZ = "KSB_TZ",
  KSF = "KSF",
  KSF_CM = "KSF_CM",
  KSH = "KSH",
  KSH_DE = "KSH_DE",
  KS_ARAB = "KS_ARAB",
  KS_ARAB_IN = "KS_ARAB_IN",
  KU = "KU",
  KU_TR = "KU_TR",
  KW = "KW",
  KW_GB = "KW_GB",
  KY = "KY",
  KY_KG = "KY_KG",
  LAG = "LAG",
  LAG_TZ = "LAG_TZ",
  LB = "LB",
  LB_LU = "LB_LU",
  LG = "LG",
  LG_UG = "LG_UG",
  LKT = "LKT",
  LKT_US = "LKT_US",
  LN = "LN",
  LN_AO = "LN_AO",
  LN_CD = "LN_CD",
  LN_CF = "LN_CF",
  LN_CG = "LN_CG",
  LO = "LO",
  LO_LA = "LO_LA",
  LRC = "LRC",
  LRC_IQ = "LRC_IQ",
  LRC_IR = "LRC_IR",
  LT = "LT",
  LT_LT = "LT_LT",
  LU = "LU",
  LUO = "LUO",
  LUO_KE = "LUO_KE",
  LUY = "LUY",
  LUY_KE = "LUY_KE",
  LU_CD = "LU_CD",
  LV = "LV",
  LV_LV = "LV_LV",
  MAI = "MAI",
  MAI_IN = "MAI_IN",
  MAS = "MAS",
  MAS_KE = "MAS_KE",
  MAS_TZ = "MAS_TZ",
  MER = "MER",
  MER_KE = "MER_KE",
  MFE = "MFE",
  MFE_MU = "MFE_MU",
  MG = "MG",
  MGH = "MGH",
  MGH_MZ = "MGH_MZ",
  MGO = "MGO",
  MGO_CM = "MGO_CM",
  MG_MG = "MG_MG",
  MI = "MI",
  MI_NZ = "MI_NZ",
  MK = "MK",
  MK_MK = "MK_MK",
  ML = "ML",
  ML_IN = "ML_IN",
  MN = "MN",
  MNI = "MNI",
  MNI_BENG = "MNI_BENG",
  MNI_BENG_IN = "MNI_BENG_IN",
  MN_MN = "MN_MN",
  MR = "MR",
  MR_IN = "MR_IN",
  MS = "MS",
  MS_BN = "MS_BN",
  MS_ID = "MS_ID",
  MS_MY = "MS_MY",
  MS_SG = "MS_SG",
  MT = "MT",
  MT_MT = "MT_MT",
  MUA = "MUA",
  MUA_CM = "MUA_CM",
  MY = "MY",
  MY_MM = "MY_MM",
  MZN = "MZN",
  MZN_IR = "MZN_IR",
  NAQ = "NAQ",
  NAQ_NA = "NAQ_NA",
  NB = "NB",
  NB_NO = "NB_NO",
  NB_SJ = "NB_SJ",
  ND = "ND",
  NDS = "NDS",
  NDS_DE = "NDS_DE",
  NDS_NL = "NDS_NL",
  ND_ZW = "ND_ZW",
  NE = "NE",
  NE_IN = "NE_IN",
  NE_NP = "NE_NP",
  NL = "NL",
  NL_AW = "NL_AW",
  NL_BE = "NL_BE",
  NL_BQ = "NL_BQ",
  NL_CW = "NL_CW",
  NL_NL = "NL_NL",
  NL_SR = "NL_SR",
  NL_SX = "NL_SX",
  NMG = "NMG",
  NMG_CM = "NMG_CM",
  NN = "NN",
  NNH = "NNH",
  NNH_CM = "NNH_CM",
  NN_NO = "NN_NO",
  NUS = "NUS",
  NUS_SS = "NUS_SS",
  NYN = "NYN",
  NYN_UG = "NYN_UG",
  OM = "OM",
  OM_ET = "OM_ET",
  OM_KE = "OM_KE",
  OR = "OR",
  OR_IN = "OR_IN",
  OS = "OS",
  OS_GE = "OS_GE",
  OS_RU = "OS_RU",
  PA = "PA",
  PA_ARAB = "PA_ARAB",
  PA_ARAB_PK = "PA_ARAB_PK",
  PA_GURU = "PA_GURU",
  PA_GURU_IN = "PA_GURU_IN",
  PCM = "PCM",
  PCM_NG = "PCM_NG",
  PL = "PL",
  PL_PL = "PL_PL",
  PRG = "PRG",
  PS = "PS",
  PS_AF = "PS_AF",
  PS_PK = "PS_PK",
  PT = "PT",
  PT_AO = "PT_AO",
  PT_BR = "PT_BR",
  PT_CH = "PT_CH",
  PT_CV = "PT_CV",
  PT_GQ = "PT_GQ",
  PT_GW = "PT_GW",
  PT_LU = "PT_LU",
  PT_MO = "PT_MO",
  PT_MZ = "PT_MZ",
  PT_PT = "PT_PT",
  PT_ST = "PT_ST",
  PT_TL = "PT_TL",
  QU = "QU",
  QU_BO = "QU_BO",
  QU_EC = "QU_EC",
  QU_PE = "QU_PE",
  RM = "RM",
  RM_CH = "RM_CH",
  RN = "RN",
  RN_BI = "RN_BI",
  RO = "RO",
  ROF = "ROF",
  ROF_TZ = "ROF_TZ",
  RO_MD = "RO_MD",
  RO_RO = "RO_RO",
  RU = "RU",
  RU_BY = "RU_BY",
  RU_KG = "RU_KG",
  RU_KZ = "RU_KZ",
  RU_MD = "RU_MD",
  RU_RU = "RU_RU",
  RU_UA = "RU_UA",
  RW = "RW",
  RWK = "RWK",
  RWK_TZ = "RWK_TZ",
  RW_RW = "RW_RW",
  SAH = "SAH",
  SAH_RU = "SAH_RU",
  SAQ = "SAQ",
  SAQ_KE = "SAQ_KE",
  SAT = "SAT",
  SAT_OLCK = "SAT_OLCK",
  SAT_OLCK_IN = "SAT_OLCK_IN",
  SBP = "SBP",
  SBP_TZ = "SBP_TZ",
  SD = "SD",
  SD_ARAB = "SD_ARAB",
  SD_ARAB_PK = "SD_ARAB_PK",
  SD_DEVA = "SD_DEVA",
  SD_DEVA_IN = "SD_DEVA_IN",
  SE = "SE",
  SEH = "SEH",
  SEH_MZ = "SEH_MZ",
  SES = "SES",
  SES_ML = "SES_ML",
  SE_FI = "SE_FI",
  SE_NO = "SE_NO",
  SE_SE = "SE_SE",
  SG = "SG",
  SG_CF = "SG_CF",
  SHI = "SHI",
  SHI_LATN = "SHI_LATN",
  SHI_LATN_MA = "SHI_LATN_MA",
  SHI_TFNG = "SHI_TFNG",
  SHI_TFNG_MA = "SHI_TFNG_MA",
  SI = "SI",
  SI_LK = "SI_LK",
  SK = "SK",
  SK_SK = "SK_SK",
  SL = "SL",
  SL_SI = "SL_SI",
  SMN = "SMN",
  SMN_FI = "SMN_FI",
  SN = "SN",
  SN_ZW = "SN_ZW",
  SO = "SO",
  SO_DJ = "SO_DJ",
  SO_ET = "SO_ET",
  SO_KE = "SO_KE",
  SO_SO = "SO_SO",
  SQ = "SQ",
  SQ_AL = "SQ_AL",
  SQ_MK = "SQ_MK",
  SQ_XK = "SQ_XK",
  SR = "SR",
  SR_CYRL = "SR_CYRL",
  SR_CYRL_BA = "SR_CYRL_BA",
  SR_CYRL_ME = "SR_CYRL_ME",
  SR_CYRL_RS = "SR_CYRL_RS",
  SR_CYRL_XK = "SR_CYRL_XK",
  SR_LATN = "SR_LATN",
  SR_LATN_BA = "SR_LATN_BA",
  SR_LATN_ME = "SR_LATN_ME",
  SR_LATN_RS = "SR_LATN_RS",
  SR_LATN_XK = "SR_LATN_XK",
  SU = "SU",
  SU_LATN = "SU_LATN",
  SU_LATN_ID = "SU_LATN_ID",
  SV = "SV",
  SV_AX = "SV_AX",
  SV_FI = "SV_FI",
  SV_SE = "SV_SE",
  SW = "SW",
  SW_CD = "SW_CD",
  SW_KE = "SW_KE",
  SW_TZ = "SW_TZ",
  SW_UG = "SW_UG",
  TA = "TA",
  TA_IN = "TA_IN",
  TA_LK = "TA_LK",
  TA_MY = "TA_MY",
  TA_SG = "TA_SG",
  TE = "TE",
  TEO = "TEO",
  TEO_KE = "TEO_KE",
  TEO_UG = "TEO_UG",
  TE_IN = "TE_IN",
  TG = "TG",
  TG_TJ = "TG_TJ",
  TH = "TH",
  TH_TH = "TH_TH",
  TI = "TI",
  TI_ER = "TI_ER",
  TI_ET = "TI_ET",
  TK = "TK",
  TK_TM = "TK_TM",
  TO = "TO",
  TO_TO = "TO_TO",
  TR = "TR",
  TR_CY = "TR_CY",
  TR_TR = "TR_TR",
  TT = "TT",
  TT_RU = "TT_RU",
  TWQ = "TWQ",
  TWQ_NE = "TWQ_NE",
  TZM = "TZM",
  TZM_MA = "TZM_MA",
  UG = "UG",
  UG_CN = "UG_CN",
  UK = "UK",
  UK_UA = "UK_UA",
  UR = "UR",
  UR_IN = "UR_IN",
  UR_PK = "UR_PK",
  UZ = "UZ",
  UZ_ARAB = "UZ_ARAB",
  UZ_ARAB_AF = "UZ_ARAB_AF",
  UZ_CYRL = "UZ_CYRL",
  UZ_CYRL_UZ = "UZ_CYRL_UZ",
  UZ_LATN = "UZ_LATN",
  UZ_LATN_UZ = "UZ_LATN_UZ",
  VAI = "VAI",
  VAI_LATN = "VAI_LATN",
  VAI_LATN_LR = "VAI_LATN_LR",
  VAI_VAII = "VAI_VAII",
  VAI_VAII_LR = "VAI_VAII_LR",
  VI = "VI",
  VI_VN = "VI_VN",
  VO = "VO",
  VUN = "VUN",
  VUN_TZ = "VUN_TZ",
  WAE = "WAE",
  WAE_CH = "WAE_CH",
  WO = "WO",
  WO_SN = "WO_SN",
  XH = "XH",
  XH_ZA = "XH_ZA",
  XOG = "XOG",
  XOG_UG = "XOG_UG",
  YAV = "YAV",
  YAV_CM = "YAV_CM",
  YI = "YI",
  YO = "YO",
  YO_BJ = "YO_BJ",
  YO_NG = "YO_NG",
  YUE = "YUE",
  YUE_HANS = "YUE_HANS",
  YUE_HANS_CN = "YUE_HANS_CN",
  YUE_HANT = "YUE_HANT",
  YUE_HANT_HK = "YUE_HANT_HK",
  ZGH = "ZGH",
  ZGH_MA = "ZGH_MA",
  ZH = "ZH",
  ZH_HANS = "ZH_HANS",
  ZH_HANS_CN = "ZH_HANS_CN",
  ZH_HANS_HK = "ZH_HANS_HK",
  ZH_HANS_MO = "ZH_HANS_MO",
  ZH_HANS_SG = "ZH_HANS_SG",
  ZH_HANT = "ZH_HANT",
  ZH_HANT_HK = "ZH_HANT_HK",
  ZH_HANT_MO = "ZH_HANT_MO",
  ZH_HANT_TW = "ZH_HANT_TW",
  ZU = "ZU",
  ZU_ZA = "ZU_ZA",
}

export enum MeasurementUnitsEnum {
  ACRE_FT = "ACRE_FT",
  ACRE_IN = "ACRE_IN",
  CM = "CM",
  CUBIC_CENTIMETER = "CUBIC_CENTIMETER",
  CUBIC_DECIMETER = "CUBIC_DECIMETER",
  CUBIC_FOOT = "CUBIC_FOOT",
  CUBIC_INCH = "CUBIC_INCH",
  CUBIC_METER = "CUBIC_METER",
  CUBIC_MILLIMETER = "CUBIC_MILLIMETER",
  CUBIC_YARD = "CUBIC_YARD",
  FL_OZ = "FL_OZ",
  FT = "FT",
  G = "G",
  INCH = "INCH",
  KG = "KG",
  KM = "KM",
  LB = "LB",
  LITER = "LITER",
  M = "M",
  OZ = "OZ",
  PINT = "PINT",
  QT = "QT",
  SQ_CM = "SQ_CM",
  SQ_FT = "SQ_FT",
  SQ_INCH = "SQ_INCH",
  SQ_KM = "SQ_KM",
  SQ_M = "SQ_M",
  SQ_YD = "SQ_YD",
  TONNE = "TONNE",
  YD = "YD",
}

export enum MenuErrorCode {
  CANNOT_ASSIGN_NODE = "CANNOT_ASSIGN_NODE",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  INVALID_MENU_ITEM = "INVALID_MENU_ITEM",
  NOT_FOUND = "NOT_FOUND",
  NO_MENU_ITEM_PROVIDED = "NO_MENU_ITEM_PROVIDED",
  REQUIRED = "REQUIRED",
  TOO_MANY_MENU_ITEMS = "TOO_MANY_MENU_ITEMS",
  UNIQUE = "UNIQUE",
}

export enum MenuSortField {
  ITEMS_COUNT = "ITEMS_COUNT",
  NAME = "NAME",
}

export enum MetadataErrorCode {
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
}

export enum OrderAction {
  CAPTURE = "CAPTURE",
  MARK_AS_PAID = "MARK_AS_PAID",
  REFUND = "REFUND",
  VOID = "VOID",
}

export enum OrderDirection {
  ASC = "ASC",
  DESC = "DESC",
}

export enum OrderDiscountType {
  MANUAL = "MANUAL",
  VOUCHER = "VOUCHER",
}

export enum OrderErrorCode {
  BILLING_ADDRESS_NOT_SET = "BILLING_ADDRESS_NOT_SET",
  CANNOT_CANCEL_FULFILLMENT = "CANNOT_CANCEL_FULFILLMENT",
  CANNOT_CANCEL_ORDER = "CANNOT_CANCEL_ORDER",
  CANNOT_DELETE = "CANNOT_DELETE",
  CANNOT_DISCOUNT = "CANNOT_DISCOUNT",
  CANNOT_REFUND = "CANNOT_REFUND",
  CAPTURE_INACTIVE_PAYMENT = "CAPTURE_INACTIVE_PAYMENT",
  CHANNEL_INACTIVE = "CHANNEL_INACTIVE",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
  FULFILL_ORDER_LINE = "FULFILL_ORDER_LINE",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INSUFFICIENT_STOCK = "INSUFFICIENT_STOCK",
  INVALID = "INVALID",
  INVALID_QUANTITY = "INVALID_QUANTITY",
  NOT_AVAILABLE_IN_CHANNEL = "NOT_AVAILABLE_IN_CHANNEL",
  NOT_EDITABLE = "NOT_EDITABLE",
  NOT_FOUND = "NOT_FOUND",
  ORDER_NO_SHIPPING_ADDRESS = "ORDER_NO_SHIPPING_ADDRESS",
  PAYMENT_ERROR = "PAYMENT_ERROR",
  PAYMENT_MISSING = "PAYMENT_MISSING",
  PRODUCT_NOT_PUBLISHED = "PRODUCT_NOT_PUBLISHED",
  PRODUCT_UNAVAILABLE_FOR_PURCHASE = "PRODUCT_UNAVAILABLE_FOR_PURCHASE",
  REQUIRED = "REQUIRED",
  SHIPPING_METHOD_NOT_APPLICABLE = "SHIPPING_METHOD_NOT_APPLICABLE",
  SHIPPING_METHOD_REQUIRED = "SHIPPING_METHOD_REQUIRED",
  TAX_ERROR = "TAX_ERROR",
  UNIQUE = "UNIQUE",
  VOID_INACTIVE_PAYMENT = "VOID_INACTIVE_PAYMENT",
  ZERO_QUANTITY = "ZERO_QUANTITY",
}

export enum OrderEventsEmailsEnum {
  CONFIRMED = "CONFIRMED",
  DIGITAL_LINKS = "DIGITAL_LINKS",
  FULFILLMENT_CONFIRMATION = "FULFILLMENT_CONFIRMATION",
  ORDER_CANCEL = "ORDER_CANCEL",
  ORDER_CONFIRMATION = "ORDER_CONFIRMATION",
  ORDER_REFUND = "ORDER_REFUND",
  PAYMENT_CONFIRMATION = "PAYMENT_CONFIRMATION",
  SHIPPING_CONFIRMATION = "SHIPPING_CONFIRMATION",
  TRACKING_UPDATED = "TRACKING_UPDATED",
}

export enum OrderEventsEnum {
  ADDED_PRODUCTS = "ADDED_PRODUCTS",
  CANCELED = "CANCELED",
  CONFIRMED = "CONFIRMED",
  DRAFT_CREATED = "DRAFT_CREATED",
  DRAFT_CREATED_FROM_REPLACE = "DRAFT_CREATED_FROM_REPLACE",
  EMAIL_SENT = "EMAIL_SENT",
  EXTERNAL_SERVICE_NOTIFICATION = "EXTERNAL_SERVICE_NOTIFICATION",
  FULFILLMENT_CANCELED = "FULFILLMENT_CANCELED",
  FULFILLMENT_FULFILLED_ITEMS = "FULFILLMENT_FULFILLED_ITEMS",
  FULFILLMENT_REFUNDED = "FULFILLMENT_REFUNDED",
  FULFILLMENT_REPLACED = "FULFILLMENT_REPLACED",
  FULFILLMENT_RESTOCKED_ITEMS = "FULFILLMENT_RESTOCKED_ITEMS",
  FULFILLMENT_RETURNED = "FULFILLMENT_RETURNED",
  INVOICE_GENERATED = "INVOICE_GENERATED",
  INVOICE_REQUESTED = "INVOICE_REQUESTED",
  INVOICE_SENT = "INVOICE_SENT",
  INVOICE_UPDATED = "INVOICE_UPDATED",
  NOTE_ADDED = "NOTE_ADDED",
  ORDER_DISCOUNT_ADDED = "ORDER_DISCOUNT_ADDED",
  ORDER_DISCOUNT_AUTOMATICALLY_UPDATED = "ORDER_DISCOUNT_AUTOMATICALLY_UPDATED",
  ORDER_DISCOUNT_DELETED = "ORDER_DISCOUNT_DELETED",
  ORDER_DISCOUNT_UPDATED = "ORDER_DISCOUNT_UPDATED",
  ORDER_FULLY_PAID = "ORDER_FULLY_PAID",
  ORDER_LINE_DISCOUNT_REMOVED = "ORDER_LINE_DISCOUNT_REMOVED",
  ORDER_LINE_DISCOUNT_UPDATED = "ORDER_LINE_DISCOUNT_UPDATED",
  ORDER_LINE_PRODUCT_DELETED = "ORDER_LINE_PRODUCT_DELETED",
  ORDER_LINE_VARIANT_DELETED = "ORDER_LINE_VARIANT_DELETED",
  ORDER_MARKED_AS_PAID = "ORDER_MARKED_AS_PAID",
  ORDER_REPLACEMENT_CREATED = "ORDER_REPLACEMENT_CREATED",
  OTHER = "OTHER",
  OVERSOLD_ITEMS = "OVERSOLD_ITEMS",
  PAYMENT_AUTHORIZED = "PAYMENT_AUTHORIZED",
  PAYMENT_CAPTURED = "PAYMENT_CAPTURED",
  PAYMENT_FAILED = "PAYMENT_FAILED",
  PAYMENT_REFUNDED = "PAYMENT_REFUNDED",
  PAYMENT_VOIDED = "PAYMENT_VOIDED",
  PLACED = "PLACED",
  PLACED_FROM_DRAFT = "PLACED_FROM_DRAFT",
  REMOVED_PRODUCTS = "REMOVED_PRODUCTS",
  TRACKING_UPDATED = "TRACKING_UPDATED",
  UPDATED_ADDRESS = "UPDATED_ADDRESS",
}

export enum OrderSettingsErrorCode {
  INVALID = "INVALID",
}

export enum OrderSortField {
  CREATION_DATE = "CREATION_DATE",
  CUSTOMER = "CUSTOMER",
  FULFILLMENT_STATUS = "FULFILLMENT_STATUS",
  NUMBER = "NUMBER",
  PAYMENT = "PAYMENT",
}

export enum OrderStatus {
  CANCELED = "CANCELED",
  DRAFT = "DRAFT",
  FULFILLED = "FULFILLED",
  PARTIALLY_FULFILLED = "PARTIALLY_FULFILLED",
  PARTIALLY_RETURNED = "PARTIALLY_RETURNED",
  RETURNED = "RETURNED",
  UNCONFIRMED = "UNCONFIRMED",
  UNFULFILLED = "UNFULFILLED",
}

export enum OrderStatusFilter {
  CANCELED = "CANCELED",
  FULFILLED = "FULFILLED",
  PARTIALLY_FULFILLED = "PARTIALLY_FULFILLED",
  READY_TO_CAPTURE = "READY_TO_CAPTURE",
  READY_TO_FULFILL = "READY_TO_FULFILL",
  UNCONFIRMED = "UNCONFIRMED",
  UNFULFILLED = "UNFULFILLED",
}

export enum PageErrorCode {
  ATTRIBUTE_ALREADY_ASSIGNED = "ATTRIBUTE_ALREADY_ASSIGNED",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum PageSortField {
  CREATION_DATE = "CREATION_DATE",
  PUBLICATION_DATE = "PUBLICATION_DATE",
  SLUG = "SLUG",
  TITLE = "TITLE",
  VISIBILITY = "VISIBILITY",
}

export enum PageTypeSortField {
  NAME = "NAME",
  SLUG = "SLUG",
}

export enum PaymentChargeStatusEnum {
  CANCELLED = "CANCELLED",
  FULLY_CHARGED = "FULLY_CHARGED",
  FULLY_REFUNDED = "FULLY_REFUNDED",
  NOT_CHARGED = "NOT_CHARGED",
  PARTIALLY_CHARGED = "PARTIALLY_CHARGED",
  PARTIALLY_REFUNDED = "PARTIALLY_REFUNDED",
  PENDING = "PENDING",
  REFUSED = "REFUSED",
}

export enum PermissionEnum {
  HANDLE_PAYMENTS = "HANDLE_PAYMENTS",
  IMPERSONATE_USER = "IMPERSONATE_USER",
  MANAGE_APPS = "MANAGE_APPS",
  MANAGE_CHANNELS = "MANAGE_CHANNELS",
  MANAGE_CHECKOUTS = "MANAGE_CHECKOUTS",
  MANAGE_DISCOUNTS = "MANAGE_DISCOUNTS",
  MANAGE_GIFT_CARD = "MANAGE_GIFT_CARD",
  MANAGE_MENUS = "MANAGE_MENUS",
  MANAGE_ORDERS = "MANAGE_ORDERS",
  MANAGE_PAGES = "MANAGE_PAGES",
  MANAGE_PAGE_TYPES_AND_ATTRIBUTES = "MANAGE_PAGE_TYPES_AND_ATTRIBUTES",
  MANAGE_PLUGINS = "MANAGE_PLUGINS",
  MANAGE_PRODUCTS = "MANAGE_PRODUCTS",
  MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES = "MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES",
  MANAGE_SETTINGS = "MANAGE_SETTINGS",
  MANAGE_SHIPPING = "MANAGE_SHIPPING",
  MANAGE_STAFF = "MANAGE_STAFF",
  MANAGE_TRANSLATIONS = "MANAGE_TRANSLATIONS",
  MANAGE_USERS = "MANAGE_USERS",
}

export enum PermissionGroupErrorCode {
  ASSIGN_NON_STAFF_MEMBER = "ASSIGN_NON_STAFF_MEMBER",
  CANNOT_REMOVE_FROM_LAST_GROUP = "CANNOT_REMOVE_FROM_LAST_GROUP",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
  LEFT_NOT_MANAGEABLE_PERMISSION = "LEFT_NOT_MANAGEABLE_PERMISSION",
  OUT_OF_SCOPE_PERMISSION = "OUT_OF_SCOPE_PERMISSION",
  OUT_OF_SCOPE_USER = "OUT_OF_SCOPE_USER",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum PermissionGroupSortField {
  NAME = "NAME",
}

export enum PluginConfigurationType {
  GLOBAL = "GLOBAL",
  PER_CHANNEL = "PER_CHANNEL",
}

export enum PluginErrorCode {
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  PLUGIN_MISCONFIGURED = "PLUGIN_MISCONFIGURED",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum PluginSortField {
  IS_ACTIVE = "IS_ACTIVE",
  NAME = "NAME",
}

export enum PostalCodeRuleInclusionTypeEnum {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum ProductAttributeType {
  PRODUCT = "PRODUCT",
  VARIANT = "VARIANT",
}

export enum ProductErrorCode {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  ATTRIBUTE_ALREADY_ASSIGNED = "ATTRIBUTE_ALREADY_ASSIGNED",
  ATTRIBUTE_CANNOT_BE_ASSIGNED = "ATTRIBUTE_CANNOT_BE_ASSIGNED",
  ATTRIBUTE_VARIANTS_DISABLED = "ATTRIBUTE_VARIANTS_DISABLED",
  CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT = "CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  NOT_PRODUCTS_IMAGE = "NOT_PRODUCTS_IMAGE",
  NOT_PRODUCTS_VARIANT = "NOT_PRODUCTS_VARIANT",
  PRODUCT_NOT_ASSIGNED_TO_CHANNEL = "PRODUCT_NOT_ASSIGNED_TO_CHANNEL",
  PRODUCT_WITHOUT_CATEGORY = "PRODUCT_WITHOUT_CATEGORY",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
  UNSUPPORTED_MEDIA_PROVIDER = "UNSUPPORTED_MEDIA_PROVIDER",
  VARIANT_NO_DIGITAL_CONTENT = "VARIANT_NO_DIGITAL_CONTENT",
}

export enum ProductFieldEnum {
  CATEGORY = "CATEGORY",
  CHARGE_TAXES = "CHARGE_TAXES",
  COLLECTIONS = "COLLECTIONS",
  DESCRIPTION = "DESCRIPTION",
  NAME = "NAME",
  PRODUCT_MEDIA = "PRODUCT_MEDIA",
  PRODUCT_TYPE = "PRODUCT_TYPE",
  PRODUCT_WEIGHT = "PRODUCT_WEIGHT",
  VARIANT_MEDIA = "VARIANT_MEDIA",
  VARIANT_SKU = "VARIANT_SKU",
  VARIANT_WEIGHT = "VARIANT_WEIGHT",
}

export enum ProductMediaType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}

export enum ProductOrderField {
  COLLECTION = "COLLECTION",
  DATE = "DATE",
  MINIMAL_PRICE = "MINIMAL_PRICE",
  NAME = "NAME",
  PRICE = "PRICE",
  PUBLICATION_DATE = "PUBLICATION_DATE",
  PUBLISHED = "PUBLISHED",
  RANK = "RANK",
  RATING = "RATING",
  TYPE = "TYPE",
}

export enum ProductTypeConfigurable {
  CONFIGURABLE = "CONFIGURABLE",
  SIMPLE = "SIMPLE",
}

export enum ProductTypeEnum {
  DIGITAL = "DIGITAL",
  SHIPPABLE = "SHIPPABLE",
}

export enum ProductTypeSortField {
  DIGITAL = "DIGITAL",
  NAME = "NAME",
  SHIPPING_REQUIRED = "SHIPPING_REQUIRED",
}

export enum SaleSortField {
  END_DATE = "END_DATE",
  NAME = "NAME",
  START_DATE = "START_DATE",
  TYPE = "TYPE",
  VALUE = "VALUE",
}

export enum SaleType {
  FIXED = "FIXED",
  PERCENTAGE = "PERCENTAGE",
}

export enum ShippingErrorCode {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  MAX_LESS_THAN_MIN = "MAX_LESS_THAN_MIN",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum ShippingMethodTypeEnum {
  PRICE = "PRICE",
  WEIGHT = "WEIGHT",
}

export enum ShopErrorCode {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  CANNOT_FETCH_TAX_RATES = "CANNOT_FETCH_TAX_RATES",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum StaffMemberStatus {
  ACTIVE = "ACTIVE",
  DEACTIVATED = "DEACTIVATED",
}

export enum StockAvailability {
  IN_STOCK = "IN_STOCK",
  OUT_OF_STOCK = "OUT_OF_STOCK",
}

export enum StockErrorCode {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum UploadErrorCode {
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
}

export enum UserSortField {
  EMAIL = "EMAIL",
  FIRST_NAME = "FIRST_NAME",
  LAST_NAME = "LAST_NAME",
  ORDER_COUNT = "ORDER_COUNT",
}

export enum VoucherDiscountType {
  FIXED = "FIXED",
  PERCENTAGE = "PERCENTAGE",
  SHIPPING = "SHIPPING",
}

export enum VoucherSortField {
  CODE = "CODE",
  END_DATE = "END_DATE",
  MINIMUM_SPENT_AMOUNT = "MINIMUM_SPENT_AMOUNT",
  START_DATE = "START_DATE",
  TYPE = "TYPE",
  USAGE_LIMIT = "USAGE_LIMIT",
  VALUE = "VALUE",
}

export enum VoucherTypeEnum {
  ENTIRE_ORDER = "ENTIRE_ORDER",
  SHIPPING = "SHIPPING",
  SPECIFIC_PRODUCT = "SPECIFIC_PRODUCT",
}

export enum WarehouseErrorCode {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum WarehouseSortField {
  NAME = "NAME",
}

export enum WebhookErrorCode {
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum WebhookEventTypeEnum {
  ANY_EVENTS = "ANY_EVENTS",
  CHECKOUT_CREATED = "CHECKOUT_CREATED",
  CHECKOUT_FILTER_SHIPPING_METHODS = "CHECKOUT_FILTER_SHIPPING_METHODS",
  CHECKOUT_UPDATED = "CHECKOUT_UPDATED",
  CUSTOMER_CREATED = "CUSTOMER_CREATED",
  CUSTOMER_UPDATED = "CUSTOMER_UPDATED",
  DRAFT_ORDER_CREATED = "DRAFT_ORDER_CREATED",
  DRAFT_ORDER_DELETED = "DRAFT_ORDER_DELETED",
  DRAFT_ORDER_UPDATED = "DRAFT_ORDER_UPDATED",
  FULFILLMENT_CREATED = "FULFILLMENT_CREATED",
  INVOICE_DELETED = "INVOICE_DELETED",
  INVOICE_REQUESTED = "INVOICE_REQUESTED",
  INVOICE_SENT = "INVOICE_SENT",
  NOTIFY_USER = "NOTIFY_USER",
  ORDER_CANCELLED = "ORDER_CANCELLED",
  ORDER_CONFIRMED = "ORDER_CONFIRMED",
  ORDER_CREATED = "ORDER_CREATED",
  ORDER_FILTER_SHIPPING_METHODS = "ORDER_FILTER_SHIPPING_METHODS",
  ORDER_FULFILLED = "ORDER_FULFILLED",
  ORDER_FULLY_PAID = "ORDER_FULLY_PAID",
  ORDER_UPDATED = "ORDER_UPDATED",
  PAGE_CREATED = "PAGE_CREATED",
  PAGE_DELETED = "PAGE_DELETED",
  PAGE_UPDATED = "PAGE_UPDATED",
  PAYMENT_AUTHORIZE = "PAYMENT_AUTHORIZE",
  PAYMENT_CAPTURE = "PAYMENT_CAPTURE",
  PAYMENT_CONFIRM = "PAYMENT_CONFIRM",
  PAYMENT_LIST_GATEWAYS = "PAYMENT_LIST_GATEWAYS",
  PAYMENT_PROCESS = "PAYMENT_PROCESS",
  PAYMENT_REFUND = "PAYMENT_REFUND",
  PAYMENT_VOID = "PAYMENT_VOID",
  PRODUCT_CREATED = "PRODUCT_CREATED",
  PRODUCT_DELETED = "PRODUCT_DELETED",
  PRODUCT_UPDATED = "PRODUCT_UPDATED",
  PRODUCT_VARIANT_CREATED = "PRODUCT_VARIANT_CREATED",
  PRODUCT_VARIANT_DELETED = "PRODUCT_VARIANT_DELETED",
  PRODUCT_VARIANT_UPDATED = "PRODUCT_VARIANT_UPDATED",
  TRANSLATION_CREATED = "TRANSLATION_CREATED",
  TRANSLATION_UPDATED = "TRANSLATION_UPDATED",
}

export enum WeightUnitsEnum {
  G = "G",
  KG = "KG",
  LB = "LB",
  OZ = "OZ",
  TONNE = "TONNE",
}

export interface AddressInput {
  firstName?: string | null;
  lastName?: string | null;
  companyName?: string | null;
  streetAddress1?: string | null;
  streetAddress2?: string | null;
  city?: string | null;
  cityArea?: string | null;
  postalCode?: string | null;
  country?: CountryCode | null;
  countryArea?: string | null;
  phone?: string | null;
}

export interface AppFilterInput {
  search?: string | null;
  isActive?: boolean | null;
  type?: AppTypeEnum | null;
}

export interface AppInput {
  name?: string | null;
  permissions?: (PermissionEnum | null)[] | null;
}

export interface AppInstallInput {
  appName?: string | null;
  manifestUrl?: string | null;
  activateAfterInstallation?: boolean | null;
  permissions?: (PermissionEnum | null)[] | null;
}

export interface AppSortingInput {
  direction: OrderDirection;
  field: AppSortField;
}

export interface AppTokenInput {
  name?: string | null;
  app: string;
}

export interface AttributeCreateInput {
  inputType?: AttributeInputTypeEnum | null;
  entityType?: AttributeEntityTypeEnum | null;
  name: string;
  slug?: string | null;
  type: AttributeTypeEnum;
  unit?: MeasurementUnitsEnum | null;
  values?: (AttributeValueCreateInput | null)[] | null;
  valueRequired?: boolean | null;
  isVariantOnly?: boolean | null;
  visibleInStorefront?: boolean | null;
  filterableInStorefront?: boolean | null;
  filterableInDashboard?: boolean | null;
  storefrontSearchPosition?: number | null;
  availableInGrid?: boolean | null;
}

export interface AttributeFilterInput {
  valueRequired?: boolean | null;
  isVariantOnly?: boolean | null;
  visibleInStorefront?: boolean | null;
  filterableInStorefront?: boolean | null;
  filterableInDashboard?: boolean | null;
  availableInGrid?: boolean | null;
  metadata?: (MetadataFilter | null)[] | null;
  search?: string | null;
  ids?: (string | null)[] | null;
  type?: AttributeTypeEnum | null;
  inCollection?: string | null;
  inCategory?: string | null;
  channel?: string | null;
}

export interface AttributeInput {
  slug: string;
  values?: (string | null)[] | null;
  valuesRange?: IntRangeInput | null;
  dateTime?: DateTimeRangeInput | null;
  date?: DateRangeInput | null;
  boolean?: boolean | null;
}

export interface AttributeSortingInput {
  direction: OrderDirection;
  field: AttributeSortField;
}

export interface AttributeUpdateInput {
  name?: string | null;
  slug?: string | null;
  unit?: MeasurementUnitsEnum | null;
  removeValues?: (string | null)[] | null;
  addValues?: (AttributeValueCreateInput | null)[] | null;
  valueRequired?: boolean | null;
  isVariantOnly?: boolean | null;
  visibleInStorefront?: boolean | null;
  filterableInStorefront?: boolean | null;
  filterableInDashboard?: boolean | null;
  storefrontSearchPosition?: number | null;
  availableInGrid?: boolean | null;
}

export interface AttributeValueCreateInput {
  name: string;
  value?: string | null;
  richText?: any | null;
}

export interface AttributeValueInput {
  id?: string | null;
  values?: string[] | null;
  file?: string | null;
  contentType?: string | null;
  references?: string[] | null;
  richText?: any | null;
  boolean?: boolean | null;
  date?: any | null;
  dateTime?: any | null;
}

export interface AttributeValueTranslationInput {
  name?: string | null;
  richText?: any | null;
}

export interface BulkAttributeValueInput {
  id?: string | null;
  values?: string[] | null;
  boolean?: boolean | null;
}

export interface CatalogueInput {
  products?: (string | null)[] | null;
  categories?: (string | null)[] | null;
  collections?: (string | null)[] | null;
  variants?: (string | null)[] | null;
}

export interface CategoryFilterInput {
  search?: string | null;
  metadata?: (MetadataFilter | null)[] | null;
  ids?: (string | null)[] | null;
}

export interface CategoryInput {
  description?: any | null;
  name?: string | null;
  slug?: string | null;
  seo?: SeoInput | null;
  backgroundImage?: any | null;
  backgroundImageAlt?: string | null;
}

export interface CategorySortingInput {
  direction: OrderDirection;
  channel?: string | null;
  field: CategorySortField;
}

export interface ChannelCreateInput {
  isActive?: boolean | null;
  name: string;
  slug: string;
  currencyCode: string;
  defaultCountry: CountryCode;
  addShippingZones?: string[] | null;
}

export interface ChannelDeleteInput {
  channelId: string;
}

export interface ChannelUpdateInput {
  isActive?: boolean | null;
  name?: string | null;
  slug?: string | null;
  defaultCountry?: CountryCode | null;
  addShippingZones?: string[] | null;
  removeShippingZones?: string[] | null;
}

export interface CollectionChannelListingUpdateInput {
  addChannels?: PublishableChannelListingInput[] | null;
  removeChannels?: string[] | null;
}

export interface CollectionCreateInput {
  isPublished?: boolean | null;
  name?: string | null;
  slug?: string | null;
  description?: any | null;
  backgroundImage?: any | null;
  backgroundImageAlt?: string | null;
  seo?: SeoInput | null;
  publicationDate?: any | null;
  products?: (string | null)[] | null;
}

export interface CollectionFilterInput {
  published?: CollectionPublished | null;
  search?: string | null;
  metadata?: (MetadataFilter | null)[] | null;
  ids?: (string | null)[] | null;
  channel?: string | null;
}

export interface CollectionInput {
  isPublished?: boolean | null;
  name?: string | null;
  slug?: string | null;
  description?: any | null;
  backgroundImage?: any | null;
  backgroundImageAlt?: string | null;
  seo?: SeoInput | null;
  publicationDate?: any | null;
}

export interface CollectionSortingInput {
  direction: OrderDirection;
  channel?: string | null;
  field: CollectionSortField;
}

export interface ConfigurationItemInput {
  name: string;
  value?: string | null;
}

export interface CustomerFilterInput {
  dateJoined?: DateRangeInput | null;
  numberOfOrders?: IntRangeInput | null;
  placedOrders?: DateRangeInput | null;
  search?: string | null;
  metadata?: (MetadataFilter | null)[] | null;
}

export interface CustomerInput {
  defaultBillingAddress?: AddressInput | null;
  defaultShippingAddress?: AddressInput | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  isActive?: boolean | null;
  note?: string | null;
  languageCode?: LanguageCodeEnum | null;
}

export interface DateRangeInput {
  gte?: any | null;
  lte?: any | null;
}

export interface DateTimeRangeInput {
  gte?: any | null;
  lte?: any | null;
}

export interface DraftOrderCreateInput {
  billingAddress?: AddressInput | null;
  user?: string | null;
  userEmail?: string | null;
  discount?: any | null;
  shippingAddress?: AddressInput | null;
  shippingMethod?: string | null;
  voucher?: string | null;
  customerNote?: string | null;
  channelId?: string | null;
  redirectUrl?: string | null;
  lines?: (OrderLineCreateInput | null)[] | null;
}

export interface DraftOrderInput {
  billingAddress?: AddressInput | null;
  user?: string | null;
  userEmail?: string | null;
  discount?: any | null;
  shippingAddress?: AddressInput | null;
  shippingMethod?: string | null;
  voucher?: string | null;
  customerNote?: string | null;
  channelId?: string | null;
  redirectUrl?: string | null;
}

export interface ExportInfoInput {
  attributes?: string[] | null;
  warehouses?: string[] | null;
  channels?: string[] | null;
  fields?: ProductFieldEnum[] | null;
}

export interface ExportProductsInput {
  scope: ExportScope;
  filter?: ProductFilterInput | null;
  ids?: string[] | null;
  exportInfo?: ExportInfoInput | null;
  fileType: FileTypesEnum;
}

export interface FulfillmentCancelInput {
  warehouseId: string;
}

export interface FulfillmentUpdateTrackingInput {
  trackingNumber?: string | null;
  notifyCustomer?: boolean | null;
}

export interface IntRangeInput {
  gte?: number | null;
  lte?: number | null;
}

export interface MenuCreateInput {
  name: string;
  slug?: string | null;
  items?: (MenuItemInput | null)[] | null;
}

export interface MenuItemCreateInput {
  name: string;
  url?: string | null;
  category?: string | null;
  collection?: string | null;
  page?: string | null;
  menu: string;
  parent?: string | null;
}

export interface MenuItemInput {
  name?: string | null;
  url?: string | null;
  category?: string | null;
  collection?: string | null;
  page?: string | null;
}

export interface MenuItemMoveInput {
  itemId: string;
  parentId?: string | null;
  sortOrder?: number | null;
}

export interface MenuSortingInput {
  direction: OrderDirection;
  field: MenuSortField;
}

export interface MetadataFilter {
  key: string;
  value?: string | null;
}

export interface MetadataInput {
  key: string;
  value: string;
}

export interface NameTranslationInput {
  name?: string | null;
}

export interface OrderAddNoteInput {
  message: string;
}

export interface OrderDiscountCommonInput {
  valueType: DiscountValueTypeEnum;
  value: any;
  reason?: string | null;
}

export interface OrderDraftFilterInput {
  customer?: string | null;
  created?: DateRangeInput | null;
  search?: string | null;
  metadata?: (MetadataFilter | null)[] | null;
  channels?: (string | null)[] | null;
}

export interface OrderFilterInput {
  paymentStatus?: (PaymentChargeStatusEnum | null)[] | null;
  status?: (OrderStatusFilter | null)[] | null;
  customer?: string | null;
  created?: DateRangeInput | null;
  search?: string | null;
  metadata?: (MetadataFilter | null)[] | null;
  channels?: (string | null)[] | null;
  ids?: (string | null)[] | null;
}

export interface OrderFulfillInput {
  lines: OrderFulfillLineInput[];
  notifyCustomer?: boolean | null;
  allowStockToBeExceeded?: boolean | null;
}

export interface OrderFulfillLineInput {
  orderLineId?: string | null;
  stocks: OrderFulfillStockInput[];
}

export interface OrderFulfillStockInput {
  quantity: number;
  warehouse: string;
}

export interface OrderLineCreateInput {
  quantity: number;
  variantId: string;
}

export interface OrderLineInput {
  quantity: number;
}

export interface OrderRefundFulfillmentLineInput {
  fulfillmentLineId: string;
  quantity: number;
}

export interface OrderRefundLineInput {
  orderLineId: string;
  quantity: number;
}

export interface OrderRefundProductsInput {
  orderLines?: OrderRefundLineInput[] | null;
  fulfillmentLines?: OrderRefundFulfillmentLineInput[] | null;
  amountToRefund?: any | null;
  includeShippingCosts?: boolean | null;
}

export interface OrderReturnFulfillmentLineInput {
  fulfillmentLineId: string;
  quantity: number;
  replace?: boolean | null;
}

export interface OrderReturnLineInput {
  orderLineId: string;
  quantity: number;
  replace?: boolean | null;
}

export interface OrderReturnProductsInput {
  orderLines?: OrderReturnLineInput[] | null;
  fulfillmentLines?: OrderReturnFulfillmentLineInput[] | null;
  amountToRefund?: any | null;
  includeShippingCosts?: boolean | null;
  refund?: boolean | null;
}

export interface OrderSettingsUpdateInput {
  automaticallyConfirmAllNewOrders: boolean;
}

export interface OrderSortingInput {
  direction: OrderDirection;
  field: OrderSortField;
}

export interface OrderUpdateInput {
  billingAddress?: AddressInput | null;
  userEmail?: string | null;
  shippingAddress?: AddressInput | null;
}

export interface OrderUpdateShippingInput {
  shippingMethod?: string | null;
}

export interface PageCreateInput {
  slug?: string | null;
  title?: string | null;
  content?: any | null;
  attributes?: AttributeValueInput[] | null;
  isPublished?: boolean | null;
  publicationDate?: string | null;
  seo?: SeoInput | null;
  pageType: string;
}

export interface PageFilterInput {
  search?: string | null;
  metadata?: (MetadataFilter | null)[] | null;
  pageTypes?: (string | null)[] | null;
  ids?: (string | null)[] | null;
}

export interface PageInput {
  slug?: string | null;
  title?: string | null;
  content?: any | null;
  attributes?: AttributeValueInput[] | null;
  isPublished?: boolean | null;
  publicationDate?: string | null;
  seo?: SeoInput | null;
}

export interface PageSortingInput {
  direction: OrderDirection;
  field: PageSortField;
}

export interface PageTranslationInput {
  seoTitle?: string | null;
  seoDescription?: string | null;
  title?: string | null;
  content?: any | null;
}

export interface PageTypeCreateInput {
  name?: string | null;
  slug?: string | null;
  addAttributes?: string[] | null;
}

export interface PageTypeFilterInput {
  search?: string | null;
}

export interface PageTypeSortingInput {
  direction: OrderDirection;
  field: PageTypeSortField;
}

export interface PageTypeUpdateInput {
  name?: string | null;
  slug?: string | null;
  addAttributes?: string[] | null;
  removeAttributes?: string[] | null;
}

export interface PermissionGroupCreateInput {
  addPermissions?: PermissionEnum[] | null;
  addUsers?: string[] | null;
  name: string;
}

export interface PermissionGroupFilterInput {
  search?: string | null;
}

export interface PermissionGroupSortingInput {
  direction: OrderDirection;
  field: PermissionGroupSortField;
}

export interface PermissionGroupUpdateInput {
  addPermissions?: PermissionEnum[] | null;
  addUsers?: string[] | null;
  name?: string | null;
  removePermissions?: PermissionEnum[] | null;
  removeUsers?: string[] | null;
}

export interface PluginFilterInput {
  statusInChannels?: PluginStatusInChannelsInput | null;
  search?: string | null;
  type?: PluginConfigurationType | null;
}

export interface PluginSortingInput {
  direction: OrderDirection;
  field: PluginSortField;
}

export interface PluginStatusInChannelsInput {
  active: boolean;
  channels: string[];
}

export interface PluginUpdateInput {
  active?: boolean | null;
  configuration?: (ConfigurationItemInput | null)[] | null;
}

export interface PriceRangeInput {
  gte?: number | null;
  lte?: number | null;
}

export interface ProductAttributeAssignInput {
  id: string;
  type: ProductAttributeType;
}

export interface ProductChannelListingAddInput {
  channelId: string;
  isPublished?: boolean | null;
  publicationDate?: any | null;
  visibleInListings?: boolean | null;
  isAvailableForPurchase?: boolean | null;
  availableForPurchaseDate?: any | null;
  addVariants?: string[] | null;
  removeVariants?: string[] | null;
}

export interface ProductChannelListingUpdateInput {
  updateChannels?: ProductChannelListingAddInput[] | null;
  removeChannels?: string[] | null;
}

export interface ProductCreateInput {
  attributes?: AttributeValueInput[] | null;
  category?: string | null;
  chargeTaxes?: boolean | null;
  collections?: string[] | null;
  description?: any | null;
  name?: string | null;
  slug?: string | null;
  taxCode?: string | null;
  seo?: SeoInput | null;
  weight?: any | null;
  rating?: number | null;
  productType: string;
}

export interface ProductFilterInput {
  isPublished?: boolean | null;
  collections?: (string | null)[] | null;
  categories?: (string | null)[] | null;
  hasCategory?: boolean | null;
  attributes?: (AttributeInput | null)[] | null;
  stockAvailability?: StockAvailability | null;
  stocks?: ProductStockFilterInput | null;
  search?: string | null;
  metadata?: (MetadataFilter | null)[] | null;
  price?: PriceRangeInput | null;
  minimalPrice?: PriceRangeInput | null;
  productTypes?: (string | null)[] | null;
  ids?: (string | null)[] | null;
  channel?: string | null;
}

export interface ProductInput {
  attributes?: AttributeValueInput[] | null;
  category?: string | null;
  chargeTaxes?: boolean | null;
  collections?: string[] | null;
  description?: any | null;
  name?: string | null;
  slug?: string | null;
  taxCode?: string | null;
  seo?: SeoInput | null;
  weight?: any | null;
  rating?: number | null;
}

export interface ProductOrder {
  direction: OrderDirection;
  channel?: string | null;
  attributeId?: string | null;
  field?: ProductOrderField | null;
}

export interface ProductStockFilterInput {
  warehouseIds?: string[] | null;
  quantity?: IntRangeInput | null;
}

export interface ProductTypeFilterInput {
  search?: string | null;
  configurable?: ProductTypeConfigurable | null;
  productType?: ProductTypeEnum | null;
  metadata?: (MetadataFilter | null)[] | null;
  ids?: (string | null)[] | null;
}

export interface ProductTypeInput {
  name?: string | null;
  slug?: string | null;
  hasVariants?: boolean | null;
  productAttributes?: (string | null)[] | null;
  variantAttributes?: (string | null)[] | null;
  isShippingRequired?: boolean | null;
  isDigital?: boolean | null;
  weight?: any | null;
  taxCode?: string | null;
}

export interface ProductTypeSortingInput {
  direction: OrderDirection;
  field: ProductTypeSortField;
}

export interface ProductVariantBulkCreateInput {
  attributes: BulkAttributeValueInput[];
  sku: string;
  trackInventory?: boolean | null;
  weight?: any | null;
  stocks?: StockInput[] | null;
  channelListings?: ProductVariantChannelListingAddInput[] | null;
}

export interface ProductVariantChannelListingAddInput {
  channelId: string;
  price: any;
  costPrice?: any | null;
}

export interface ProductVariantCreateInput {
  attributes: AttributeValueInput[];
  sku?: string | null;
  trackInventory?: boolean | null;
  weight?: any | null;
  product: string;
  stocks?: StockInput[] | null;
}

export interface ProductVariantInput {
  attributes?: AttributeValueInput[] | null;
  sku?: string | null;
  trackInventory?: boolean | null;
  weight?: any | null;
}

export interface PublishableChannelListingInput {
  channelId: string;
  isPublished?: boolean | null;
  publicationDate?: any | null;
}

export interface ReorderInput {
  id: string;
  sortOrder?: number | null;
}

export interface SaleChannelListingAddInput {
  channelId: string;
  discountValue: any;
}

export interface SaleChannelListingInput {
  addChannels?: SaleChannelListingAddInput[] | null;
  removeChannels?: string[] | null;
}

export interface SaleFilterInput {
  status?: (DiscountStatusEnum | null)[] | null;
  saleType?: DiscountValueTypeEnum | null;
  started?: DateTimeRangeInput | null;
  search?: string | null;
  metadata?: (MetadataFilter | null)[] | null;
}

export interface SaleInput {
  name?: string | null;
  type?: DiscountValueTypeEnum | null;
  value?: any | null;
  products?: (string | null)[] | null;
  variants?: (string | null)[] | null;
  categories?: (string | null)[] | null;
  collections?: (string | null)[] | null;
  startDate?: any | null;
  endDate?: any | null;
}

export interface SaleSortingInput {
  direction: OrderDirection;
  channel?: string | null;
  field: SaleSortField;
}

export interface SeoInput {
  title?: string | null;
  description?: string | null;
}

export interface ShippingMethodChannelListingAddInput {
  channelId: string;
  price?: any | null;
  minimumOrderPrice?: any | null;
  maximumOrderPrice?: any | null;
}

export interface ShippingMethodChannelListingInput {
  addChannels?: ShippingMethodChannelListingAddInput[] | null;
  removeChannels?: string[] | null;
}

export interface ShippingPostalCodeRulesCreateInputRange {
  start: string;
  end?: string | null;
}

export interface ShippingPriceExcludeProductsInput {
  products: (string | null)[];
}

export interface ShippingPriceInput {
  name?: string | null;
  description?: any | null;
  minimumOrderWeight?: any | null;
  maximumOrderWeight?: any | null;
  maximumDeliveryDays?: number | null;
  minimumDeliveryDays?: number | null;
  type?: ShippingMethodTypeEnum | null;
  shippingZone?: string | null;
  addPostalCodeRules?: ShippingPostalCodeRulesCreateInputRange[] | null;
  deletePostalCodeRules?: string[] | null;
  inclusionType?: PostalCodeRuleInclusionTypeEnum | null;
}

export interface ShippingPriceTranslationInput {
  name?: string | null;
  description?: any | null;
}

export interface ShippingZoneCreateInput {
  name?: string | null;
  description?: string | null;
  countries?: (string | null)[] | null;
  default?: boolean | null;
  addWarehouses?: (string | null)[] | null;
  addChannels?: string[] | null;
}

export interface ShippingZoneFilterInput {
  search?: string | null;
  channels?: (string | null)[] | null;
}

export interface ShippingZoneUpdateInput {
  name?: string | null;
  description?: string | null;
  countries?: (string | null)[] | null;
  default?: boolean | null;
  addWarehouses?: (string | null)[] | null;
  addChannels?: string[] | null;
  removeWarehouses?: (string | null)[] | null;
  removeChannels?: string[] | null;
}

export interface ShopSettingsInput {
  headerText?: string | null;
  description?: string | null;
  includeTaxesInPrices?: boolean | null;
  displayGrossPrices?: boolean | null;
  chargeTaxesOnShipping?: boolean | null;
  trackInventoryByDefault?: boolean | null;
  defaultWeightUnit?: WeightUnitsEnum | null;
  automaticFulfillmentDigitalProducts?: boolean | null;
  defaultDigitalMaxDownloads?: number | null;
  defaultDigitalUrlValidDays?: number | null;
  defaultMailSenderName?: string | null;
  defaultMailSenderAddress?: string | null;
  customerSetPasswordUrl?: string | null;
}

export interface SiteDomainInput {
  domain?: string | null;
  name?: string | null;
}

export interface StaffCreateInput {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  isActive?: boolean | null;
  note?: string | null;
  addGroups?: string[] | null;
  redirectUrl?: string | null;
}

export interface StaffUpdateInput {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  isActive?: boolean | null;
  note?: string | null;
  addGroups?: string[] | null;
  removeGroups?: string[] | null;
}

export interface StaffUserInput {
  status?: StaffMemberStatus | null;
  search?: string | null;
}

export interface StockInput {
  warehouse: string;
  quantity: number;
}

export interface TranslationInput {
  seoTitle?: string | null;
  seoDescription?: string | null;
  name?: string | null;
  description?: any | null;
}

export interface UserCreateInput {
  defaultBillingAddress?: AddressInput | null;
  defaultShippingAddress?: AddressInput | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  isActive?: boolean | null;
  note?: string | null;
  languageCode?: LanguageCodeEnum | null;
  redirectUrl?: string | null;
  channel?: string | null;
}

export interface UserSortingInput {
  direction: OrderDirection;
  field: UserSortField;
}

export interface VoucherChannelListingAddInput {
  channelId: string;
  discountValue?: any | null;
  minAmountSpent?: any | null;
}

export interface VoucherChannelListingInput {
  addChannels?: VoucherChannelListingAddInput[] | null;
  removeChannels?: string[] | null;
}

export interface VoucherFilterInput {
  status?: (DiscountStatusEnum | null)[] | null;
  timesUsed?: IntRangeInput | null;
  discountType?: (VoucherDiscountType | null)[] | null;
  started?: DateTimeRangeInput | null;
  search?: string | null;
  metadata?: (MetadataFilter | null)[] | null;
}

export interface VoucherInput {
  type?: VoucherTypeEnum | null;
  name?: string | null;
  code?: string | null;
  startDate?: any | null;
  endDate?: any | null;
  discountValueType?: DiscountValueTypeEnum | null;
  products?: (string | null)[] | null;
  collections?: (string | null)[] | null;
  categories?: (string | null)[] | null;
  minCheckoutItemsQuantity?: number | null;
  countries?: (string | null)[] | null;
  applyOncePerOrder?: boolean | null;
  applyOncePerCustomer?: boolean | null;
  onlyForStaff?: boolean | null;
  usageLimit?: number | null;
}

export interface VoucherSortingInput {
  direction: OrderDirection;
  channel?: string | null;
  field: VoucherSortField;
}

export interface WarehouseCreateInput {
  slug?: string | null;
  email?: string | null;
  name: string;
  address: AddressInput;
  shippingZones?: (string | null)[] | null;
}

export interface WarehouseFilterInput {
  search?: string | null;
  ids?: (string | null)[] | null;
}

export interface WarehouseSortingInput {
  direction: OrderDirection;
  field: WarehouseSortField;
}

export interface WarehouseUpdateInput {
  slug?: string | null;
  email?: string | null;
  name?: string | null;
  address?: AddressInput | null;
}

export interface WebhookCreateInput {
  name?: string | null;
  targetUrl?: string | null;
  events?: (WebhookEventTypeEnum | null)[] | null;
  app?: string | null;
  isActive?: boolean | null;
  secretKey?: string | null;
}

export interface WebhookUpdateInput {
  name?: string | null;
  targetUrl?: string | null;
  events?: (WebhookEventTypeEnum | null)[] | null;
  app?: string | null;
  isActive?: boolean | null;
  secretKey?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
