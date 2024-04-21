import {
  useCreateOutlet
} from "/build/_shared/chunk-PVL5ANBZ.js";
import "/build/_shared/chunk-SYL3D5JD.js";
import {
  useMapLock
} from "/build/_shared/chunk-CUKQ563J.js";
import "/build/_shared/chunk-KNI4Q7BH.js";
import "/build/_shared/chunk-ZYE5DG2T.js";
import "/build/_shared/chunk-GT3SSOVI.js";
import {
  useFormContext
} from "/build/_shared/chunk-UXRUZFHF.js";
import "/build/_shared/chunk-HVLVQROG.js";
import {
  toast_default
} from "/build/_shared/chunk-3KD3VM5A.js";
import {
  footer_default
} from "/build/_shared/chunk-WMTHVS4E.js";
import "/build/_shared/chunk-SHPJFARJ.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react,
  useFetcher
} from "/build/_shared/chunk-PXIIMERU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/create/confirm.tsx
var import_react = __toESM(require_react());

// app/components/fields/summary-field.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SummaryField() {
  var _a;
  const { getValues } = useFormContext();
  const values = getValues();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex max-h-64 flex-grow flex-col divide-y-2 divide-white overflow-scroll", children: [
    (values == null ? void 0 : values.image) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        className: "h-32 w-full object-cover",
        alt: "Preview thumbnail",
        src: values.image
      },
      void 0,
      false,
      {
        fileName: "app/components/fields/summary-field.tsx",
        lineNumber: 12,
        columnNumber: 9
      },
      this
    ) : null,
    Object.keys(values).map(
      (key) => !["location", "image", "details", "custom"].includes(key) && !!values[key] ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4 bg-gray-100 p-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "w-24 capitalize text-gray-400", children: key }, void 0, false, {
          fileName: "app/components/fields/summary-field.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "capitalize", children: values[key] }, void 0, false, {
          fileName: "app/components/fields/summary-field.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this)
      ] }, key, true, {
        fileName: "app/components/fields/summary-field.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this) : null
    ),
    Object.keys((_a = values == null ? void 0 : values.custom) != null ? _a : {}).map(
      (key) => values.custom[key] ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4 bg-gray-100 p-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "w-24 capitalize text-gray-400", children: key }, void 0, false, {
          fileName: "app/components/fields/summary-field.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "capitalize", children: values.custom[key] }, void 0, false, {
          fileName: "app/components/fields/summary-field.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this)
      ] }, key, true, {
        fileName: "app/components/fields/summary-field.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this) : null
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4 bg-gray-100 p-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "w-24 capitalize text-gray-400", children: "Details" }, void 0, false, {
        fileName: "app/components/fields/summary-field.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: values.details }, void 0, false, {
        fileName: "app/components/fields/summary-field.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/fields/summary-field.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/fields/summary-field.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/create/confirm.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function CreateConfirm() {
  const fetcher = useFetcher();
  const [, { setLock }] = useMapLock();
  const { setStage } = useCreateOutlet();
  (0, import_react.useEffect)(() => {
    setLock();
    setStage({
      heading: "Confirm Location",
      step: 1,
      progress: 20
    });
  }, []);
  const { handleSubmit } = useFormContext();
  const handleSuccess = (values) => {
    const data = new FormData();
    data.append("create", JSON.stringify(values));
    fetcher.submit(data, { method: "post", action: "/create/submit" });
  };
  const handleError = (errors) => {
    throw errors;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      toast_default,
      {
        show: fetcher.state === "submitting",
        content: "Uploading report..."
      },
      void 0,
      false,
      {
        fileName: "app/routes/create/confirm.tsx",
        lineNumber: 44,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(footer_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "divider-gray-200 flex flex-col divide-y bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-base", children: "Please confirm that the following details were correct" }, void 0, false, {
        fileName: "app/routes/create/confirm.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/create/confirm.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-2 p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SummaryField, {}, void 0, false, {
        fileName: "app/routes/create/confirm.tsx",
        lineNumber: 56,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/create/confirm.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-row justify-between p-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/create/photo", className: "btn btn-light", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "btn-icon icon icon-arrow-left" }, void 0, false, {
            fileName: "app/routes/create/confirm.tsx",
            lineNumber: 60,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "btn-text", children: "Add Photo" }, void 0, false, {
            fileName: "app/routes/create/confirm.tsx",
            lineNumber: 61,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/create/confirm.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "button",
          {
            onClick: handleSubmit(handleSuccess, handleError),
            className: "btn btn-primary",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "btn-text", children: "Submit" }, void 0, false, {
              fileName: "app/routes/create/confirm.tsx",
              lineNumber: 67,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/create/confirm.tsx",
            lineNumber: 63,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/create/confirm.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/create/confirm.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/create/confirm.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/create/confirm.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
export {
  CreateConfirm as default
};
//# sourceMappingURL=/build/routes/create/confirm-XFFMUVA4.js.map
