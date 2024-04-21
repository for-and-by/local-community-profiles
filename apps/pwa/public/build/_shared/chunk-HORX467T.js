import {
  useFilterTypes
} from "/build/_shared/chunk-7SYC7LJE.js";
import {
  useController,
  useFormContext
} from "/build/_shared/chunk-UXRUZFHF.js";
import {
  useAsyncAction
} from "/build/_shared/chunk-2UUH35UR.js";
import {
  Wrapper
} from "/build/_shared/chunk-ESEVYU34.js";
import {
  Warning,
  useWarning
} from "/build/_shared/chunk-HVLVQROG.js";
import {
  parseFileAsBase64
} from "/build/_shared/chunk-F2G6SP3I.js";
import {
  toast_default
} from "/build/_shared/chunk-3KD3VM5A.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-PXIIMERU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/inputs/image.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ImageInput({
  onUpload,
  onRemove,
  value,
  error,
  placeholder
}) {
  const inputRef = (0, import_react.useRef)(null);
  const [image, setImage] = (0, import_react.useState)(value);
  (0, import_react.useEffect)(() => {
    setImage(value);
  }, [value]);
  const [isShow, { showWarning, hideWarning, confirmWarning }] = useWarning(
    () => {
      onRemove == null ? void 0 : onRemove();
      setImage(void 0);
      if (inputRef.current)
        inputRef.current.value = "";
    }
  );
  const { isLoading, handleAsyncAction: handleProcessFile } = useAsyncAction({
    action: parseFileAsBase64,
    onSuccess: (data) => {
      if (onUpload)
        onUpload(data);
      setImage(data);
    }
  });
  const handleChange = (event) => {
    var _a, _b;
    const file = (_b = (_a = event == null ? void 0 : event.target) == null ? void 0 : _a.files) == null ? void 0 : _b[0];
    if (file)
      handleProcessFile(file);
  };
  const handleUpload = () => {
    var _a;
    (_a = inputRef == null ? void 0 : inputRef.current) == null ? void 0 : _a.click();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { error, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(toast_default, { content: "Processing Image...", show: isLoading }, void 0, false, {
        fileName: "app/components/inputs/image.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      !image ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "flex h-40 flex-grow flex-col items-center justify-center space-y-4 hover:cursor-pointer",
          onClick: handleUpload,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "icon icon-image before:text-5xl before:text-gray-400" }, void 0, false, {
              fileName: "app/components/inputs/image.tsx",
              lineNumber: 68,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400", children: placeholder }, void 0, false, {
              fileName: "app/components/inputs/image.tsx",
              lineNumber: 69,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/inputs/image.tsx",
          lineNumber: 64,
          columnNumber: 11
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative h-40 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -inset-3 overflow-hidden rounded-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: image,
            alt: "User's Upload",
            className: "h-full w-full object-cover"
          },
          void 0,
          false,
          {
            fileName: "app/components/inputs/image.tsx",
            lineNumber: 74,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/inputs/image.tsx",
          lineNumber: 73,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -inset-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute right-0 top-0 flex space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "btn btn-white", onClick: handleUpload, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "btn-icon icon icon-save-over" }, void 0, false, {
            fileName: "app/components/inputs/image.tsx",
            lineNumber: 83,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/inputs/image.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Warning.Trigger, { className: "btn btn-white", onShow: showWarning, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "btn-icon icon icon-trash before:text-red-600" }, void 0, false, {
            fileName: "app/components/inputs/image.tsx",
            lineNumber: 86,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/inputs/image.tsx",
            lineNumber: 85,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/inputs/image.tsx",
          lineNumber: 81,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/inputs/image.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/inputs/image.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          ref: inputRef,
          type: "file",
          accept: "image/png,image/jpeg",
          className: "hidden",
          onChange: handleChange
        },
        void 0,
        false,
        {
          fileName: "app/components/inputs/image.tsx",
          lineNumber: 92,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/inputs/image.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Warning.Panel,
      {
        heading: "Remove Image",
        body: "Are you sure you want to remove this image?",
        isShow,
        onHide: hideWarning,
        onConfirm: confirmWarning
      },
      void 0,
      false,
      {
        fileName: "app/components/inputs/image.tsx",
        lineNumber: 100,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/inputs/image.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

// app/components/fields/image-field.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ImageField() {
  const { control, resetField, getValues } = useFormContext();
  const type = useFilterTypes(getValues("type"));
  const { field, fieldState } = useController({
    name: "image",
    control,
    rules: {
      required: {
        value: !!(type == null ? void 0 : type.image_required),
        message: "An image is required for this type of report"
      }
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    ImageInput,
    {
      placeholder: (type == null ? void 0 : type.image_required) ? "Upload a photo (required)" : "Upload a photo (optional)",
      value: field.value,
      onUpload: (image) => field.onChange(image),
      onRemove: () => resetField("image"),
      error: fieldState.error
    },
    void 0,
    false,
    {
      fileName: "app/components/fields/image-field.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
}

export {
  ImageField
};
//# sourceMappingURL=/build/_shared/chunk-HORX467T.js.map
