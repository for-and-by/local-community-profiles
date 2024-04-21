import {
  Portal
} from "/build/_shared/chunk-SHPJFARJ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-PXIIMERU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/regions/toast.tsx
var import_react3 = __toESM(require_react());

// app/hooks/use-debounce.ts
var import_react2 = __toESM(require_react());

// app/hooks/use-timeout.ts
var import_react = __toESM(require_react());
function useTimeout(callback, duration, deps) {
  (0, import_react.useEffect)(() => {
    const timeout = setTimeout(callback, duration);
    return () => {
      clearTimeout(timeout);
    };
  }, [callback, duration, ...deps]);
}

// app/hooks/use-debounce.ts
function useDebounce(value, duration = 500) {
  const [debouncedValue, setDebouncedValue] = (0, import_react2.useState)(value);
  useTimeout(
    () => {
      setDebouncedValue(value);
    },
    duration,
    [value]
  );
  return debouncedValue;
}

// app/components/regions/toast.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var REGION_ID = "toasts";
function Default({ show = false, content }) {
  const debouncedShow = useDebounce(show, 150);
  if (!debouncedShow)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal, { selector: `#${REGION_ID}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      "data-visible": show,
      className: "\n          pointer-events-none flex\n          items-center gap-4 rounded\n          bg-base-900 p-4 text-base-50 opacity-0 transition-all\n          data-visible:pointer-events-auto data-visible:opacity-100\n        ",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "icon icon-is-spinning icon-spinner z-20 before:text-white" }, void 0, false, {
          fileName: "app/components/regions/toast.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: content }, void 0, false, {
          fileName: "app/components/regions/toast.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/regions/toast.tsx",
      lineNumber: 20,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/regions/toast.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
function Error({ content }) {
  const [show, setShow] = (0, import_react3.useState)(false);
  const debouncedShow = useDebounce(show, 150);
  (0, import_react3.useEffect)(() => {
    setShow(!!content);
  }, [content]);
  useTimeout(
    () => {
      if (show)
        setShow(false);
    },
    2e3,
    [show]
  );
  if (!debouncedShow)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal, { selector: `#${REGION_ID}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      "data-visible": show,
      className: "\n          pointer-events-none flex\n          items-center gap-4 rounded\n          bg-base-600 p-4 text-base-50 opacity-0 transition-all\n          data-visible:pointer-events-auto data-visible:opacity-100\n        ",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-bold", children: "Error" }, void 0, false, {
          fileName: "app/components/regions/toast.tsx",
          lineNumber: 69,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: content }, void 0, false, {
          fileName: "app/components/regions/toast.tsx",
          lineNumber: 70,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "btn btn-icon", onClick: () => setShow(false), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "btn-icon icon icon-close z-20 before:text-white" }, void 0, false, {
          fileName: "app/components/regions/toast.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/components/regions/toast.tsx",
          lineNumber: 71,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/regions/toast.tsx",
      lineNumber: 60,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/regions/toast.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
function Container() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      id: REGION_ID,
      className: "inline-flex flex-col justify-end space-y-2"
    },
    void 0,
    false,
    {
      fileName: "app/components/regions/toast.tsx",
      lineNumber: 81,
      columnNumber: 5
    },
    this
  );
}
var Toast = Object.assign(Default, { Container, Error });
var toast_default = Toast;

export {
  toast_default
};
//# sourceMappingURL=/build/_shared/chunk-3KD3VM5A.js.map
