import {
  formatMetadata
} from "/build/_shared/chunk-SYL3D5JD.js";
import {
  BaseMarker
} from "/build/_shared/chunk-KNI4Q7BH.js";
import {
  useMapCenter
} from "/build/_shared/chunk-ZYE5DG2T.js";
import {
  header_default
} from "/build/_shared/chunk-GT3SSOVI.js";
import {
  FormProvider,
  useForm
} from "/build/_shared/chunk-UXRUZFHF.js";
import {
  Warning,
  useWarning
} from "/build/_shared/chunk-HVLVQROG.js";
import {
  useStyleVars
} from "/build/_shared/chunk-SHPJFARJ.js";
import {
  Outlet,
  require_jsx_dev_runtime,
  require_react,
  useNavigate,
  useOutletContext
} from "/build/_shared/chunk-PXIIMERU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/create.tsx
var import_react2 = __toESM(require_react());

// app/components/molecules/markers/center.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CenterMarker() {
  const [dragging, setDragging] = (0, import_react.useState)(false);
  const [center, setCenter] = useMapCenter();
  if (!center)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    BaseMarker,
    {
      coordinates: center,
      anchor: "bottom-right",
      onDragStart: () => {
        setDragging(true);
      },
      onDragEnd: (event) => {
        setCenter(event.target.getLngLat());
        setDragging(false);
      },
      draggable: true,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          "data-dragging": dragging,
          className: "\n          relative flex h-8 w-8\n          origin-bottom-right rotate-45 scale-110\n          items-center justify-center\n          rounded-full rounded-br-none\n          bg-emerald-600 text-white transition-all\n          data-dragging:scale-125",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "icon icon-sm icon-circle -rotate-45" }, void 0, false, {
            fileName: "app/components/molecules/markers/center.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/molecules/markers/center.tsx",
          lineNumber: 27,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/components/molecules/markers/center.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}

// app/components/atoms/progress-bar.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ProgressBar(props) {
  const { value = 10 } = props;
  const style = useStyleVars({
    progress: `${value.toString()}%`
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style, className: "block h-0.5 w-full bg-base-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "block h-full w-[--progress] bg-brand-700 transition-all" }, void 0, false, {
    fileName: "app/components/atoms/progress-bar.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/atoms/progress-bar.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/create.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return formatMetadata({
    title: "Create New Report"
  });
};
function CreateIndex() {
  const navigate = useNavigate();
  const [stage, setStage] = (0, import_react2.useState)({
    step: 1,
    progress: 20,
    heading: "Confirm a location"
  });
  const methods = useForm({
    defaultValues: {
      type: "",
      severity: ""
    },
    mode: "onChange"
  });
  const [isShow, { showWarning, hideWarning, confirmWarning }] = useWarning(
    () => {
      navigate("/");
    }
  );
  const value = {
    stage,
    setStage,
    showWarning
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FormProvider, { ...methods, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CenterMarker, {}, void 0, false, {
      fileName: "app/routes/create.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(header_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-row p-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Warning.Trigger, { className: "btn btn-light", onShow: showWarning, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "btn-icon icon icon-arrow-left" }, void 0, false, {
          fileName: "app/routes/create.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/create.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col px-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "font-medium", children: stage.heading }, void 0, false, {
            fileName: "app/routes/create.tsx",
            lineNumber: 72,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-sm text-base-400", children: [
            "Step ",
            stage.step,
            " of 4"
          ] }, void 0, true, {
            fileName: "app/routes/create.tsx",
            lineNumber: 73,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/create.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/create.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProgressBar, { value: stage.progress }, void 0, false, {
        fileName: "app/routes/create.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/create.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/create.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, { context: value }, void 0, false, {
      fileName: "app/routes/create.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      Warning.Panel,
      {
        heading: "Cancel Report Submission",
        body: "Are you sure you want to cancel this submission? All data submitted up to this point will be lost.",
        isShow,
        onHide: hideWarning,
        onConfirm: confirmWarning
      },
      void 0,
      false,
      {
        fileName: "app/routes/create.tsx",
        lineNumber: 80,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/create.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}
function useCreateOutlet() {
  return useOutletContext();
}

export {
  meta,
  CreateIndex,
  useCreateOutlet
};
//# sourceMappingURL=/build/_shared/chunk-PVL5ANBZ.js.map
