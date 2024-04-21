import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-PXIIMERU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/inputs/wrapper.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Wrapper({
  label,
  children,
  name,
  align = "center",
  error
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        "data-align": align,
        "data-error": !!(error == null ? void 0 : error.message),
        className: "\n          relative flex\n          w-full gap-2 rounded-sm bg-gray-100 p-3\n          focus-within:outline focus-within:outline-brand-700/40\n          data-error:outline data-error:outline-error-600/40\n          data-align-center:items-center\n          data-align-top:items-start",
        children: [
          label ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "w-16 text-gray-400", htmlFor: name != null ? name : "", children: label }, void 0, false, {
            fileName: "app/components/inputs/wrapper.tsx",
            lineNumber: 34,
            columnNumber: 11
          }, this) : null,
          children
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/inputs/wrapper.tsx",
        lineNumber: 22,
        columnNumber: 7
      },
      this
    ),
    error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-error-50 p-2 text-error-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: error == null ? void 0 : error.message }, void 0, false, {
      fileName: "app/components/inputs/wrapper.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/inputs/wrapper.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/components/inputs/wrapper.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

export {
  Wrapper
};
//# sourceMappingURL=/build/_shared/chunk-ESEVYU34.js.map
