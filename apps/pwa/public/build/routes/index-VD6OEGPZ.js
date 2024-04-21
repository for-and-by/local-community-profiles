import {
  formatMetadata
} from "/build/_shared/chunk-SYL3D5JD.js";
import {
  useMapLock
} from "/build/_shared/chunk-CUKQ563J.js";
import {
  header_default
} from "/build/_shared/chunk-GT3SSOVI.js";
import {
  footer_default
} from "/build/_shared/chunk-WMTHVS4E.js";
import "/build/_shared/chunk-SHPJFARJ.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-PXIIMERU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/index.tsx
var import_react = __toESM(require_react());

// app/components/atoms/logo.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Logo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row items-center gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "icon icon-logo before:text-brand-700" }, void 0, false, {
      fileName: "app/components/atoms/logo.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-base font-medium text-base-900", children: "Safer Streets" }, void 0, false, {
      fileName: "app/components/atoms/logo.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/atoms/logo.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return formatMetadata({
    title: "Home"
  });
};
function Home() {
  const [isLocked, { setUnlock }] = useMapLock();
  (0, import_react.useEffect)(() => {
    if (isLocked)
      setUnlock();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(header_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-row items-center bg-white p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-3 flex-grow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Logo, {}, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/search", className: "btn btn-light", "aria-label": "Search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "btn-icon icon icon-search" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(footer_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-row items-center space-x-2 bg-white p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/create", className: "btn btn-primary w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "btn-icon icon icon-create" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "btn-text", children: "Create a Report" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
export {
  Home as default,
  meta
};
//# sourceMappingURL=/build/routes/index-VD6OEGPZ.js.map
