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

// app/components/composites/modal.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function useModal(initial) {
  var _a;
  const [isShow, setIsShow] = (0, import_react.useState)((_a = initial == null ? void 0 : initial.isShow) != null ? _a : false);
  const actions = {
    hideModal: () => setIsShow(false),
    showModal: () => setIsShow(true)
  };
  return [isShow, actions];
}
function Trigger(props) {
  const { className, children, onShow } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className, onClick: onShow, children }, void 0, false, {
    fileName: "app/components/composites/modal.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
function Body(props) {
  const { children, isShow } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      "data-visible": isShow,
      className: "\n          group/modal\n          pointer-events-none\n          fixed inset-0 z-20\n          opacity-0 transition-all\n          data-visible:pointer-events-auto data-visible:opacity-100",
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/composites/modal.tsx",
      lineNumber: 38,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/composites/modal.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
function Tint(props) {
  const { onHide } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: onHide, className: "absolute inset-0 bg-black/50" }, void 0, false, {
    fileName: "app/components/composites/modal.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
function Panel(props) {
  const { children, className } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: `
        clamp group absolute bottom-8 left-1/2 
        -translate-x-1/2 translate-y-8 
        rounded bg-white transition-all 
        group-data-visible/modal:translate-y-0 
        ${className}
      `,
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/composites/modal.tsx",
      lineNumber: 67,
      columnNumber: 5
    },
    this
  );
}
function Close(props) {
  const { children, className, onHide } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className, onClick: onHide, children }, void 0, false, {
    fileName: "app/components/composites/modal.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}
var Modal = { Trigger, Body, Panel, Tint, Close };

// app/components/composites/warning.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function useWarning(onConfirm) {
  const [modalState, modalActions] = useModal();
  function handleConfirm() {
    modalActions.hideModal();
    onConfirm();
  }
  const actions = {
    hideWarning: modalActions.hideModal,
    showWarning: modalActions.showModal,
    confirmWarning: handleConfirm
  };
  return [modalState, actions];
}
function Panel2(props) {
  const { isShow, onHide, onConfirm, heading, body } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal.Body, { isShow, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal.Tint, { onHide }, void 0, false, {
      fileName: "app/components/composites/warning.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal.Panel, { className: "divide-y divide-base-200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "sticky top-0 flex items-center justify-between p-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "ml-2 font-medium", children: heading }, void 0, false, {
          fileName: "app/components/composites/warning.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal.Close, { className: "btn btn-light", onHide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "btn-icon icon icon-close" }, void 0, false, {
          fileName: "app/components/composites/warning.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/composites/warning.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/composites/warning.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: body }, void 0, false, {
        fileName: "app/components/composites/warning.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/composites/warning.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "sticky top-0 flex items-center justify-between p-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal.Close, { className: "btn btn-light", onHide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "btn-text", children: "Cancel" }, void 0, false, {
          fileName: "app/components/composites/warning.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/composites/warning.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal.Close, { className: "btn btn-primary", onHide: onConfirm, children: "Confirm" }, void 0, false, {
          fileName: "app/components/composites/warning.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/composites/warning.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/composites/warning.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/composites/warning.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
function Trigger2(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal.Trigger, { ...props }, void 0, false, {
    fileName: "app/components/composites/warning.tsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
}
var Warning = { Panel: Panel2, Trigger: Trigger2 };

export {
  useWarning,
  Warning
};
//# sourceMappingURL=/build/_shared/chunk-HVLVQROG.js.map
