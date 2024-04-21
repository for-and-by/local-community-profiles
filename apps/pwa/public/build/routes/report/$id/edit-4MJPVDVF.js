import {
  CustomField,
  DetailsField,
  SeverityField,
  TypeField
} from "/build/_shared/chunk-SQM4ROMO.js";
import {
  ImageField
} from "/build/_shared/chunk-HORX467T.js";
import "/build/_shared/chunk-7SYC7LJE.js";
import {
  FormProvider,
  useForm
} from "/build/_shared/chunk-UXRUZFHF.js";
import "/build/_shared/chunk-X6YQIRGR.js";
import "/build/_shared/chunk-2UUH35UR.js";
import "/build/_shared/chunk-ESEVYU34.js";
import "/build/_shared/chunk-E74VXSKV.js";
import "/build/_shared/chunk-PVJHJIFI.js";
import "/build/_shared/chunk-HVLVQROG.js";
import "/build/_shared/chunk-YDUTGTTK.js";
import {
  parseImageUrl
} from "/build/_shared/chunk-F2G6SP3I.js";
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
  useMatches,
  useNavigation,
  useSubmit
} from "/build/_shared/chunk-PXIIMERU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/report/$id/edit.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ReportEditTemplate() {
  const { state } = useNavigation();
  const submit = useSubmit();
  const [, loader] = useMatches();
  const data = loader.data.report;
  const methods = useForm({
    defaultValues: {
      type: data.type_handle,
      severity: data.content.severity_handle,
      image: parseImageUrl(data.content.image_url),
      details: data.content.details
    },
    mode: "onChange"
  });
  const invoke = methods.formState.dirtyFields;
  const onSubmit = (values) => {
    const { dirtyFields } = methods.formState;
    const dirtyValues = Object.keys(values).reduce((obj, key) => {
      const value = values[key];
      const isDirty = dirtyFields[key];
      return isDirty ? { ...obj, [key]: value } : obj;
    }, {});
    submit(
      { update: JSON.stringify(dirtyValues) },
      { method: "post", action: `report/${data.id}/edit` }
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(toast_default, { content: "Saving new details...", show: state === "submitting" }, void 0, false, {
      fileName: "app/routes/report/$id/edit.tsx",
      lineNumber: 150,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(footer_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-h-[50vh] divide-y divide-gray-200 overflow-y-scroll", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Update the details of this report" }, void 0, false, {
        fileName: "app/routes/report/$id/edit.tsx",
        lineNumber: 154,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/report/$id/edit.tsx",
        lineNumber: 153,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormProvider, { ...methods, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col space-y-2 p-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImageField, {}, void 0, false, {
          fileName: "app/routes/report/$id/edit.tsx",
          lineNumber: 158,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SeverityField, {}, void 0, false, {
          fileName: "app/routes/report/$id/edit.tsx",
          lineNumber: 159,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TypeField, {}, void 0, false, {
          fileName: "app/routes/report/$id/edit.tsx",
          lineNumber: 160,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomField, {}, void 0, false, {
          fileName: "app/routes/report/$id/edit.tsx",
          lineNumber: 161,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailsField, {}, void 0, false, {
          fileName: "app/routes/report/$id/edit.tsx",
          lineNumber: 162,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/report/$id/edit.tsx",
        lineNumber: 157,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/report/$id/edit.tsx",
        lineNumber: 156,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sticky bottom-0 flex justify-between bg-white p-2 shadow-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/report/${data.id}`, className: "btn btn-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "btn-text", children: "Cancel" }, void 0, false, {
          fileName: "app/routes/report/$id/edit.tsx",
          lineNumber: 167,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/report/$id/edit.tsx",
          lineNumber: 166,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            className: "btn btn-primary",
            onClick: methods.handleSubmit(onSubmit),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "btn-text", children: "Save" }, void 0, false, {
              fileName: "app/routes/report/$id/edit.tsx",
              lineNumber: 173,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/report/$id/edit.tsx",
            lineNumber: 169,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/report/$id/edit.tsx",
        lineNumber: 165,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/report/$id/edit.tsx",
      lineNumber: 152,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/report/$id/edit.tsx",
      lineNumber: 151,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/report/$id/edit.tsx",
    lineNumber: 149,
    columnNumber: 5
  }, this);
}
export {
  ReportEditTemplate as default
};
//# sourceMappingURL=/build/routes/report/$id/edit-4MJPVDVF.js.map
