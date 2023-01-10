// USER
export const LOGIN = "api/v1/login";
export const ME = "api/v1/me";
export const GET_USER_LIST = "api/v1/getAllUsers_p";

// Roles
export const GET_ALL_ROLES = "api/v1/role/getAllRoles";
export const GET_ALL_ROLES_PAGE = "api/v1/role/getAllRoles_p";
export const CREATE_ROLE = "api/v1/role/createRole";
export const UPDATE_ROLE = "api/v1/role/updateRole";
export const GET_ROLE_INFO = "api/v1/role/getRole";

// Moduls
export const GET_ALL_MODULES = "api/v1/module/getAllModules";

// Users
export const CREATE_USER = "api/v1/createUser";
export const UPDATE_USER = "api/v1/updateUser";

// Products
export const ALL_PRODUCT_LIST = "api/v1/general/product/product-list";
export const ALL_PRODUCT_LIST_PAGINATION =
  "api/v1/general/product/product-list-paginate";
export const CREATE_PRODUCT = "api/v1/general/product/product-create";
export const UPDATE_PRODUCT = "api/v1/general/product/product-update";
export const PRODUCT_INFO = "api/v1/general/product/single-product-data";
export const PRODUCT_COLOR = "api/v1/general/color/color-list";
export const PRODUCT_COLOR_CREATE = "api/v1/general/color/color-create";

// General
export const FILE_UPLOAD = "api/v1/general/file/file-upload";

// PI
export const SUPPLIER_LIST_PI = "api/v1/import/pi/supplier-list";
export const PI_CREATE = "api/v1/import/pi/pi-create";
export const PI_UPDATE = "api/v1/import/pi/pi-update";
export const ALL_PI_PRODUCT_LIST = "api/v1/import/pi/product-list";
export const ALL_PI_LIST = "api/v1/import/pi/pi-list-paginate";
export const SINGLE_PI_DATA = "api/v1/import/pi/single-pi-data";

// CI
export const CI_CREATE = "api/v1/import/ci/ci-create";
export const CI_UPDATE = "api/v1/import/ci/ci-update";
export const SUPPLIER_LIST_CI = "api/v1/import/ci/supplier-list";
export const CI_IMPORT_LC_LIST = "api/v1/import/ci/import-lc-list";
export const IMPORT_PI_LIST = "api/v1/import/ci/import-pi-list";
export const IMPORT_CI_PRODUCT_LIST = "api/v1/import/ci/import-pi-product-list";
export const IMPORT_CI_LIST = "api/v1/import/ci/ci-list-paginate";
export const CI_SHIPMENT_UNIT_LIST = "api/v1/import/shipment/import-shipment-unit-list";
export const CI_INFO = "api/v1/import/ci/single-ci-data";

//LC
export const IMPORT_LC_LIST = "api/v1/import/lc/lc-list-paginate";
export const LC_SUPPLIER_LIST = "api/v1/import/lc/supplier-list";
export const LC_IMPORT_PI_LIST = "api/v1/import/lc/import-pi-list";
export const LC_IMPORT_CI_LIST = "api/v1/import/lc/import-ci-list";
export const LC_CREATE = "api/v1/import/lc/lc-create";
export const LC_UPDATE = "api/v1/import/lc/lc-update";
export const LC_STATUS_LIST = "api/v1/import/lc/import-lc-status-list";
export const LC_TENURE_LIST = "api/v1/import/lc/import-lc-tenure-list";
export const LC_INFO = "api/v1/import/lc/single-lc-data";

//permit
export const PERMIT_IMPORT_CI_LIST = "api/v1/import/permit/import-ci-list"
export const IMPORT_PERMIT_LIST = "api/v1/import/permit/permit-list-paginate";
export const IMPORT_PERMIT_CREATE = "api/v1/import/permit/permit-create";
export const IMPORT_PERMIT_UPDATE = "api/v1/import/permit/permit-update";
export const PERMIT_INFO = "api/v1/import/permit/single-permit-data";
export const IMPORT_CUSTOM_CLEARENCE_CREATE = "api/v1/import/custom-clearance/custom-clearance-create";
export const PERMIT_SHIPMENT_LIST = "api/v1/import/permit/import-shipment-list";

//custom clearence
export const IMPORT_CUSTOM_CLEARANCE_LIST = "api/v1/import/custom-clearance/custom-clearance-list-paginate";
export const CUSTOM_CLEARANCE_CREATE = "api/v1/import/custom-clearance/custom-clearance-create";
export const CUSTOM_CLEARANCE_UPDATE = "api/v1/import/custom-clearance/custom-clearance-update";
export const CUSTOM_CLEARANCE_SUPPLIER_LIST = "api/v1/import/ci/supplier-list";
export const CUSTOM_CLEARANCE_PI_LIST = "api/v1/import/ci/import-pi-list";
export const CUSTOM_CLEARANCE_INFO = "api/v1/import/custom-clearance/single-custom-clearance-data";
export const CUSTOME_CLEARANCE_CI_LIST = "api/v1/import/custom-clearance/import-ci-list";
export const CUSTOME_CLEARANCE_SHIPMENT_MODE = "api/v1/import/custom-clearance/import-shipment-data"

// Shipment PRICE QUOTATION
export const IMPORT_SUPPLIER_PRICE_QUOTATION =
  "api/v1/import/supplier-price-quotation/supplier-price-quotation-list-paginate";
export const SUPPLIER_PRICE_QUOTATION_CREATE =
  "api/v1/import/supplier-price-quotation/supplier-price-quotation-create";
export const SUPPLIER_PRICE_QUOTATION_UPDATE =
  "api/v1/import/supplier-price-quotation/supplier-price-quotation-update";
export const SUPPLIER_PRICE_QUOTATION_INFO =
  "api/v1/import/supplier-price-quotation/single-supplier-price-quotation-data";
export const SUPPLIER_PRICE_QUOTATION_PRODUCT_LIST =
  "api/v1/import/pi/product-list";
export const SUPPLIER_PRICE_QUOTATION_SUPPLIER_LIST =
  "api/v1/import/pi/supplier-list";

// Shipment
export const IMPORT_SHIPMENT = "api/v1/import/shipment/shipment-list-paginate";
export const SHIPMENT_IMPORT_CI_LIST = "api/v1/import/shipment/import-ci-list";
export const SHIPMENT_SUPPLIER_LIST = "api/v1/import/ci/supplier-list";
export const SHIPMENT_PI_LIST = "api/v1/import/ci/import-pi-list";
export const SHIPMENT_LSD_LOD_AGANINST_CI_LIST = "api/v1/import/shipment/lsd-lod-against-ci";
export const SHIPMENT_SHIPMENT_MODE_LIST = "api/v1/import/shipment/import-shipment-mode-list";
export const SHIPMENT_TYPE_LIST = "api/v1/import/shipment/import-shipment-type-list";
export const SHIPMENT_UNIT_LIST = "api/v1/import/shipment/import-shipment-unit-list";
export const SHIPMENT_CREATE = "api/v1/import/shipment/shipment-create";
export const SUPPLIER_CREATE = "api/v1/general/supplier/supplier-create";
export const SHIPMENT_INFO = "api/v1/import/shipment/single-shipment-data";
export const SHIPMENT_UPDATE = "api/v1/import/shipment/shipment-update";
export const COUNTRY_LIST = "api/v1/general/country/country-list";

//customers
export const CONFIGURATION_CUSTOMERS_LIST =
  "api/v1/general/customer/customer-list-paginate";
export const COMPETITOR_LIST = "api/v1/general/competitor/competitor-list";
export const PRODUCT_TYPE_LIST = "api/v1/general/product/product-type-list";
export const UNIT_LIST = "api/v1/general/unit/unit-list";
export const SUPPLIER_LIST = "api/v1/import/pi/supplier-list";
export const SUPPLIER_INFO = "api/v1/general/supplier/single-supplier-data";
export const SUPPLIER_UPDATE = "api/v1/general/supplier/supplier-update";
export const IMPORT_CONPANSATION_ADJASMENT =
  "api/v1/import/compensation/import-compensation-list-paginate";

export const SUPPLIER_LIST_ALL =
  "api/v1/general/supplier/supplier-list-paginate";
export const ORG_TYPE_LIST = "api/v1/general/supplier/org-type-list";

export const PI_PRODUCT_LIST = "api/v1/import/ci/import-pi-product-list";
export const COMPENSATION_ACTION_TYPES =
  "api/v1/import/compensation/import-compensation-action-type-list";
export const COMPENSATION_CLAIM_REASON_LIST =
  "api/v1/import/compensation/import-compensation-claim-reason-list";
export const COMPENSATION_CREATE =
  "api/v1/import/compensation/import-compensation-create";
export const COMPENSATION_UPDATE =
  "api/v1/import/compensation/import-compensation-update";
export const COMPENSATION_INFO =
  "api/v1/import/compensation/single-import-compensation-data";

export const CUSTOMER_CREATE = "api/v1/general/customer/customer-create";
export const CUSTOMER_TYPE_LIST = "api/v1/general/customer/customer-type-list";
export const CUSTOMER_GROUP_NAME_LIST = "api/v1/general/group/group-list";
export const CUSTOMER_DIVISION_LIST = "api/v1/general/division/division-list";
export const CUSTOMER_ZONE_LIST = "api/v1/general/zone/zone-list";
export const CUSTOMER_BANK_LIST = "api/v1/general/bank/bank-list";
export const CUSTOMER_BRAND_LIST = "api/v1/general/brand/brand-list";

export const CUSTOMER_MERCHANDISER_LIST =
  "api/v1/general/merchandiser/merchandiser-list";
export const COMPOSITION_LIST = "api/v1/general/composition/composition-list";
export const CUSTOMER_UPDATE = "api/v1/general/customer/customer-update";
export const CUSTOMER_INFO = "api/v1/general/customer/single-customer-data";
export const CUSTOMER_BUSSINESS_STATUS_LIST =
  "api/v1/general/customer/customer-business-status-list";
export const COMPOSTION_CREATE =
  "api/v1/general/composition/composition-create";

// Adjustment Claim

export const COMPENSATION_CLAIM_TOTAL_AGAINST =
  "api/v1/import/compensation/import-compensation-total-claim-against-supplier";

export const BRAND_CREATE = "api/v1/general/brand/brand-create";
export const MERCHANDISER_CREATE =
  "api/v1/general/merchandiser/merchandiser-create";
export const COMPETITOR_CREATE = "api/v1/general/competitor/competitor-create";

// Booking 
export const BOOKING_ORGANIZATION_LIST = "api/v1/general/organization/organization-list";
export const BOOKING_CREATE = "api/v1/export/booking/booking-create";
export const BOOKING_UPDATE = "api/v1/export/booking/booking-update";
export const SINGLE_BOOKING_DATA = "api/v1/export/booking/single-booking-data";
export const BOOKING_LIST_PAGINATION = "api/v1/export/booking/booking-list-paginate";
export const SALES_MODE_LIST = "api/v1/general/sales-mode/sales-mode-list";
export const BOOKING_PRODUCT_LIST = "api/v1/general/product/product-list";
export const EXPORT_LC_TENURE_LIST = "api/v1/export/export-lc-tenure/export-lc-tenure-list";
export const EXPORT_BOOKING_STATUS_LIST = "api/v1/export/booking/export-booking-status-list";
export const BOOKING_REVISION_CREATE = "api/v1/export/booking/booking-revision-create";
export const CUSTOMER_LIST = "api/v1/general/customer/customer-list"
export const MARKETING_PERSON_LIST = "api/v1/general/marketing-person/marketing-person-list";
export const BOOKING_BRAND_LIST = "api/v1/export/booking/brand-list";

// Export PI
export const EXPORT_PI_CREATE = "api/v1/export/pi/pi-create";
export const EXPORT_PI_UPDATE = "api/v1/export/pi/pi-update";
export const EXPORT_PI_SINGLE_DATA = "api/v1/export/pi/single-pi-data";
export const EXPORT_PI_LIST_PAGINATION = "api/v1/export/pi/pi-list-paginate";
export const EXPORT_PI_STATUS = "api/v1/export/pi/export-pi-status-list";
export const EXPORT_PI_BOOKING_LIST = "api/v1/export/pi/booking-list";
export const EXPORT_PI_REVISION_CREATE = "api/v1/export/pi/pi-revision-create";
export const EXPORT_SINGLE_PI_REVISION = "api/v1/export/pi/single-pi-revision";
export const EXPORT_PI_PRODUCT_LIST = "api/v1/general/product/product-list";
export const EXPORT_PI_ORGANIZATION_LIST = "api/v1/general/organization/organization-list";
export const EXPORT_PI_CUSTOMER_LIST = "api/v1/general/customer/customer-list";
export const EXPORT_PI_MARKETING_PERSON_LIST = "api/v1/general/marketing-person/marketing-person-list";
export const EXPORT_PI_BRAND_LIST = "api/v1/general/brand/brand-list";
export const EXPORT_PI_SALES_MODE = "api/v1/general/sales-mode/sales-mode-list";
export const EXPORT_PI_LC_TENURE = "api/v1/export/export-lc-tenure/export-lc-tenure-list";

// Export LC
export const EXPORT_LCSC_CREATE = "api/v1/export/lcsc/lcsc-create"
export const EXPORT_LCSC_UPDATE = "api/v1/export/lcsc/lcsc-update"
export const EXPORT_LCSC_SINGLE_DATA = "api/v1/export/lcsc/single-lcsc-data"
export const EXPORT_LCSC_LSIT_PAGINATION = "api/v1/export/lcsc/lcsc-list-paginate"
export const EXPORT_LCSC_SECURITY_TYPE = "api/v1/export/lcsc/export-lc-security-type-list"
export const EXPORT_LCSC_TENURE_LIST = "api/v1/export/export-lc-tenure/export-lc-tenure-list"
export const EXPORT_LCSC_STATUS_LIST = "api/v1/export/lcsc/export-lc-status-list"
export const EXPORT_LCSC_SINGLE_PI_DATA = "api/v1/export/lcsc/single-pi-data";
export const EXPORT_LCSC_PI_LIST = "api/v1/export/lcsc/pi-list"

// Export CI
export const EXPORT_CI_CREATE = "api/v1/export/ci/ci-create"
export const EXPORT_CI_UPDATE = "api/v1/export/ci/ci-update"
export const EXPORT_CI_SINGLE_DATA = "api/v1/export/ci/single-ci-data"
export const EXPORT_CI_LIST_PAGINATION = "api/v1/export/ci/ci-list-paginate"
export const EXPORT_CI_CARRIER_LIST = "api/v1/general/carrier/carrier-list"
export const EXPORT_CI_STATUS = "api/v1/export/ci/ci-status-list"
export const EXPORT_CI_LCSC_LIST = "api/v1/export/ci/lcsc-list"
export const EXPORT_CI_PI_LIST = "api/v1/export/ci/pi-list"

// Documentation
export const EXPORT_DOC_CREATE = "api/v1/export/doc/doc-create"
export const EXPORT_DOC_UPDATE = "api/v1/export/doc/doc-update"
export const EXPORT_DOC_SINGLE_DATA = "api/v1/export/doc/single-doc-data"
export const EXPORT_DOC_LIST_PAGINATION = "api/v1/export/doc/doc-list-paginate"
export const EXPORT_DOC_PI_LIST = "api/v1/export/doc/pi-list"
export const EXPORT_DOC_CI_LIST= "api/v1/export/doc/ci-list"
export const EXPORT_DOC_LCSC_LIST = "api/v1/export/doc/lcsc-list";

// Payment 
export const EXPORT_PAYMENT_CREATE = "api/v1/export/payment/payment-create"
export const EXPORT_PAYMENT_UPDATE = "api/v1/export/payment/payment-update"
export const EXPORT_PAYMENT_SINGLE_DATE = "api/v1/export/payment/single-payment-data"
export const EXPORT_PAYMENT_LIST_PAGINATION = "api/v1/export/payment/payment-list-paginate"
export const EXPORT_PAYMENT_PI_LIST = "api/v1/export/payment/pi-list"
export const EXPORT_PAYMENT_CI_LIST = "api/v1/export/payment/ci-list"
export const EXPORT_PAYMENT_LCSC_LIST = "api/v1/export/payment/lcsc-list"
export const EXPORT_PAYMENT_DUE_STATUS_LIST = "api/v1/export/payment/due-status-list";
