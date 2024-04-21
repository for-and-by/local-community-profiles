import {
  formatMetadata
} from "/build/_shared/chunk-SYL3D5JD.js";
import {
  useReportOpen
} from "/build/_shared/chunk-5GUPT3AU.js";
import {
  useMapLock
} from "/build/_shared/chunk-CUKQ563J.js";
import {
  BaseMarker
} from "/build/_shared/chunk-KNI4Q7BH.js";
import {
  useMapCenter
} from "/build/_shared/chunk-ZYE5DG2T.js";
import {
  header_default
} from "/build/_shared/chunk-GT3SSOVI.js";
import "/build/_shared/chunk-PVJHJIFI.js";
import "/build/_shared/chunk-SHPJFARJ.js";
import {
  Link,
  Outlet,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-PXIIMERU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/report/$id.tsx
var import_react = __toESM(require_react());

// app/components/molecules/markers/report.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ReportMarker({ coordinates }) {
  if (!coordinates)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    BaseMarker,
    {
      coordinates,
      anchor: "bottom-right",
      offset: [0, -16],
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex h-8 w-8 origin-bottom-right rotate-45 items-center justify-center rounded-full rounded-br-none bg-emerald-900 text-white transition-all", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "icon icon-sm icon-circle -rotate-45" }, void 0, false, {
        fileName: "app/components/molecules/markers/report.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/components/molecules/markers/report.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/molecules/markers/report.tsx",
      lineNumber: 13,
      columnNumber: 5
    },
    this
  );
}

// app/routes/report/$id.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  return formatMetadata({
    title: `${data.report.type.title} Report #${data.report.id}`,
    description: data.report.content.details,
    image: data.report.content.image_url
  });
};
function Report() {
  const loader = useLoaderData();
  const data = loader == null ? void 0 : loader.report;
  const [, open] = useReportOpen();
  const [isLocked, { setLock }] = useMapLock();
  const [, setCenter] = useMapCenter();
  (0, import_react.useEffect)(() => {
    if (!isLocked)
      setLock();
    open(data.content_id);
    setCenter(data);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ReportMarker, { coordinates: data }, void 0, false, {
      fileName: "app/routes/report/$id.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(header_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col divide-y divide-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-row items-center bg-white p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", className: "btn btn-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "btn-icon icon icon-arrow-left" }, void 0, false, {
        fileName: "app/routes/report/$id.tsx",
        lineNumber: 75,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/report/$id.tsx",
        lineNumber: 74,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col px-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "font-medium", children: "Report Details" }, void 0, false, {
          fileName: "app/routes/report/$id.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm text-base-400", children: [
          "Details for Report #",
          data.id
        ] }, void 0, true, {
          fileName: "app/routes/report/$id.tsx",
          lineNumber: 79,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/report/$id.tsx",
        lineNumber: 77,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/report/$id.tsx",
      lineNumber: 73,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/report/$id.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/report/$id.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/report/$id.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/report/$id.tsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
}
export {
  Report as default,
  meta
};
//# sourceMappingURL=/build/routes/report/$id-JRB7CYC5.js.map
