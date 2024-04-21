import {
  useFilterTypes
} from "/build/_shared/chunk-7SYC7LJE.js";
import {
  Controller,
  useController,
  useFormContext,
  useWatch
} from "/build/_shared/chunk-UXRUZFHF.js";
import {
  text_default
} from "/build/_shared/chunk-X6YQIRGR.js";
import {
  Wrapper
} from "/build/_shared/chunk-ESEVYU34.js";
import {
  useFilterStore
} from "/build/_shared/chunk-E74VXSKV.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-PXIIMERU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/hooks/filter/use-filter-severities.ts
var import_react = __toESM(require_react());
function useFilterSeverities(handle) {
  const { severities } = useFilterStore();
  function getSeverity(handle2) {
    return severities.find((severity2) => {
      return severity2.handle === handle2;
    });
  }
  const [severity, setSeverity] = (0, import_react.useState)(getSeverity(handle));
  (0, import_react.useEffect)(() => {
    setSeverity(getSeverity(handle));
  }, [handle]);
  return handle ? severity : [severities, getSeverity];
}

// app/components/inputs/select.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Select = (0, import_react2.forwardRef)(
  ({ label, options, name, loading, placeholder, error, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { label, name, error, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "select",
        {
          className: "flex-grow appearance-none bg-transparent focus:outline-none",
          name,
          ...props,
          ref,
          children: [
            loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { disabled: true, hidden: true, value: "", children: placeholder }, void 0, false, {
              fileName: "app/components/inputs/select.tsx",
              lineNumber: 29,
              columnNumber: 13
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { disabled: true, hidden: true, value: "", children: "Please select..." }, void 0, false, {
              fileName: "app/components/inputs/select.tsx",
              lineNumber: 33,
              columnNumber: 13
            }, this),
            options == null ? void 0 : options.map((option) => {
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: option.value, children: option.label }, option.value, false, {
                fileName: "app/components/inputs/select.tsx",
                lineNumber: 39,
                columnNumber: 15
              }, this);
            })
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/inputs/select.tsx",
          lineNumber: 22,
          columnNumber: 9
        },
        this
      ),
      loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "icon icon-is-spinning icon-circle-anim z-20 text-gray-700" }, void 0, false, {
        fileName: "app/components/inputs/select.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "icon icon-arrow-down icon-sm absolute right-4 top-1/2 -translate-y-1/2 text-gray-700" }, void 0, false, {
        fileName: "app/components/inputs/select.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/inputs/select.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this);
  }
);
Select.displayName = "Select";
var select_default = Select;

// app/components/fields/severity-field.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function SeverityField() {
  const [severities] = useFilterSeverities();
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error }
  } = useController({
    name: "severity",
    control,
    rules: {
      required: "A severity is required"
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    select_default,
    {
      label: "Severity",
      options: severities == null ? void 0 : severities.map((result) => ({
        label: result.title,
        value: result.handle
      })),
      error,
      ...field
    },
    void 0,
    false,
    {
      fileName: "app/components/fields/severity-field.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
}

// app/components/fields/type-field.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function TypeField() {
  const [types] = useFilterTypes();
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error }
  } = useController({
    name: "type",
    control,
    rules: {
      required: "A report type is required"
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    select_default,
    {
      label: "Type",
      options: types == null ? void 0 : types.map((result) => ({
        label: result.title,
        value: result.handle
      })),
      error,
      ...field
    },
    void 0,
    false,
    {
      fileName: "app/components/fields/type-field.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
}

// app/utils/string.ts
function capitaliseString(string) {
  const head = string.charAt(0);
  const tail = string.slice(1);
  return head.toUpperCase() + tail.toLowerCase();
}

// app/components/fields/custom-field.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function CustomField() {
  const { control } = useFormContext();
  const typeValue = useWatch({ name: "type" });
  const type = useFilterTypes(typeValue);
  if (!(type == null ? void 0 : type.custom_fields))
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: Object.keys(type == null ? void 0 : type.custom_fields).map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    Controller,
    {
      control,
      name: `custom.${key}`,
      render: ({ field, fieldState: { error } }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(text_default, { ...field, label: capitaliseString(key), error }, void 0, false, {
        fileName: "app/components/fields/custom-field.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this),
      defaultValue: ""
    },
    key,
    false,
    {
      fileName: "app/components/fields/custom-field.tsx",
      lineNumber: 19,
      columnNumber: 9
    },
    this
  )) }, void 0, false, {
    fileName: "app/components/fields/custom-field.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/components/inputs/textarea.tsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var Textarea = import_react3.default.forwardRef(
  ({ icon = void 0, label, name, error, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Wrapper, { label, name: name != null ? name : "", align: "top", error, children: [
    icon && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: `icon ${icon}` }, void 0, false, {
      fileName: "app/components/inputs/textarea.tsx",
      lineNumber: 15,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "textarea",
      {
        className: "flex-grow bg-transparent focus:outline-none",
        ref,
        name,
        ...props
      },
      void 0,
      false,
      {
        fileName: "app/components/inputs/textarea.tsx",
        lineNumber: 16,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/inputs/textarea.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this)
);
var textarea_default = Textarea;

// app/components/fields/details-field.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function DetailsField() {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error }
  } = useController({
    name: "details",
    control,
    rules: {
      required: "A brief description of the report is required"
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(textarea_default, { label: "Details", ...field, error }, void 0, false, {
    fileName: "app/components/fields/details-field.tsx",
    lineNumber: 18,
    columnNumber: 10
  }, this);
}

export {
  SeverityField,
  TypeField,
  CustomField,
  DetailsField
};
//# sourceMappingURL=/build/_shared/chunk-SQM4ROMO.js.map
