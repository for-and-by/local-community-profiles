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
  ImageField
} from "/build/_shared/chunk-HORX467T.js";
import "/build/_shared/chunk-7SYC7LJE.js";
import {
  useFormContext
} from "/build/_shared/chunk-UXRUZFHF.js";
import "/build/_shared/chunk-2UUH35UR.js";
import "/build/_shared/chunk-ESEVYU34.js";
import "/build/_shared/chunk-E74VXSKV.js";
import "/build/_shared/chunk-PVJHJIFI.js";
import "/build/_shared/chunk-HVLVQROG.js";
import "/build/_shared/chunk-F2G6SP3I.js";
import "/build/_shared/chunk-3KD3VM5A.js";
import {
  footer_default
} from "/build/_shared/chunk-WMTHVS4E.js";
import "/build/_shared/chunk-SHPJFARJ.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react,
  useNavigate
} from "/build/_shared/chunk-PXIIMERU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/create/photo.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CreateImage() {
  const [, { setLock }] = useMapLock();
  const { setStage } = useCreateOutlet();
  const navigate = useNavigate();
  const { trigger } = useFormContext();
  const handleNext = () => {
    trigger().then((result) => {
      if (result) {
        navigate("/create/confirm");
      }
    });
  };
  (0, import_react.useEffect)(() => {
    setLock();
    setStage({
      heading: "Add Photo",
      step: 3,
      progress: 80
    });
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(footer_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "divider-gray-200 flex flex-col divide-y bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base", children: "Add an image to the reports." }, void 0, false, {
      fileName: "app/routes/create/photo.tsx",
      lineNumber: 40,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/create/photo.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImageField, {}, void 0, false, {
      fileName: "app/routes/create/photo.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/create/photo.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row justify-between p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/create/details", className: "btn btn-light", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "btn-icon icon icon-arrow-left" }, void 0, false, {
          fileName: "app/routes/create/photo.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "btn-text", children: "Add Details" }, void 0, false, {
          fileName: "app/routes/create/photo.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/create/photo.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleNext, className: "btn btn-light", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "btn-text", children: "Confirm" }, void 0, false, {
          fileName: "app/routes/create/photo.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "btn-icon icon icon-arrow-right" }, void 0, false, {
          fileName: "app/routes/create/photo.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/create/photo.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/create/photo.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/create/photo.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/create/photo.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
export {
  CreateImage as default
};
//# sourceMappingURL=/build/routes/create/photo-2CIAAKAU.js.map
