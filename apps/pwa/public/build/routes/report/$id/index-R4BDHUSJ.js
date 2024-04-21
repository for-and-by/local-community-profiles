import {
  body_default
} from "/build/_shared/chunk-VMFWIM66.js";
import {
  Warning,
  useWarning
} from "/build/_shared/chunk-HVLVQROG.js";
import {
  getMetadataFromContent,
  parseDateAsString
} from "/build/_shared/chunk-YDUTGTTK.js";
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
  require_react,
  useFetcher,
  useRouteLoaderData
} from "/build/_shared/chunk-PXIIMERU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/molecules/image-collapse.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ImageCollapse({ src }) {
  const [isExpanded, setIsExpanded] = (0, import_react.useState)(false);
  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      "data-expanded": isExpanded,
      className: "group/image-collapse relative h-36 overflow-hidden transition-all data-expanded:h-96",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            className: "btn btn-white absolute bottom-2 right-2 z-20",
            onClick: handleToggle,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "i",
              {
                className: `btn-icon icon ${isExpanded ? "icon-minus" : "icon-plus"}`
              },
              void 0,
              false,
              {
                fileName: "app/components/molecules/image-collapse.tsx",
                lineNumber: 24,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/molecules/image-collapse.tsx",
            lineNumber: 20,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: parseImageUrl(src),
            alt: `Report Thumbnail`,
            className: "h-full w-full object-cover"
          },
          void 0,
          false,
          {
            fileName: "app/components/molecules/image-collapse.tsx",
            lineNumber: 28,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/molecules/image-collapse.tsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  );
}

// app/components/molecules/verify-report.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function VerifyReport(props) {
  const { onVerify } = props;
  const [isShow, { showWarning, hideWarning, confirmWarning }] = useWarning(onVerify);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-row items-center justify-between rounded bg-gray-900 p-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-medium text-white", children: "This report is getting old." }, void 0, false, {
      fileName: "app/components/molecules/verify-report.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Warning.Trigger, { onShow: showWarning, className: "text-brand-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "btn-text", children: "Verify" }, void 0, false, {
      fileName: "app/components/molecules/verify-report.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/molecules/verify-report.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      Warning.Panel,
      {
        heading: "Verify Report",
        body: "This report is getting close to it's expiry date. If you know that this report is still relevant, please either verify this report here, or update the information.",
        isShow,
        onHide: hideWarning,
        onConfirm: confirmWarning
      },
      void 0,
      false,
      {
        fileName: "app/components/molecules/verify-report.tsx",
        lineNumber: 19,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/molecules/verify-report.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/report/$id/index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Details() {
  const verifyReport = useFetcher();
  const deleteReport = useFetcher();
  const loader = useRouteLoaderData("routes/report/$id");
  const data = loader.report;
  const { verifyDate } = getMetadataFromContent(data.content, data.type);
  const handleDelete = () => {
    deleteReport.submit(null, {
      action: `/report/${data.id}/delete`,
      method: "delete"
    });
  };
  const handleVerify = () => {
    verifyReport.submit(null, {
      action: `/report/${data.id}/verify`,
      method: "patch"
    });
  };
  const [isShow, { showWarning, hideWarning, confirmWarning }] = useWarning(handleDelete);
  if (!data)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      toast_default,
      {
        content: "Deleting report...",
        show: deleteReport.state === "submitting"
      },
      void 0,
      false,
      {
        fileName: "app/routes/report/$id/index.tsx",
        lineNumber: 48,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      toast_default,
      {
        content: "Verifying report...",
        show: verifyReport.state === "submitting"
      },
      void 0,
      false,
      {
        fileName: "app/routes/report/$id/index.tsx",
        lineNumber: 52,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(body_default, { children: verifyDate && verifyDate.valueOf() < Date.now() ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(VerifyReport, { onVerify: handleVerify }, void 0, false, {
      fileName: "app/routes/report/$id/index.tsx",
      lineNumber: 58,
      columnNumber: 11
    }, this) : null }, void 0, false, {
      fileName: "app/routes/report/$id/index.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(footer_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-h-[40vh] divide-y divide-gray-200 overflow-y-scroll", children: [
      data.content.image_url ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ImageCollapse, { src: data.content.image_url }, void 0, false, {
        fileName: "app/routes/report/$id/index.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-row items-center space-x-2 bg-white p-2", children: [
        verifyDate && verifyDate.valueOf() < Date.now() ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "my-1 rounded bg-gray-800 px-1 text-sm text-white", children: "Needs Verifying" }, void 0, false, {
          fileName: "app/routes/report/$id/index.tsx",
          lineNumber: 68,
          columnNumber: 15
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "my-1 rounded bg-gray-100 px-1 text-sm text-gray-700", children: data.content.severity.title }, void 0, false, {
          fileName: "app/routes/report/$id/index.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/report/$id/index.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "p-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "font-medium", children: "Details" }, void 0, false, {
          fileName: "app/routes/report/$id/index.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: data.content.details }, void 0, false, {
          fileName: "app/routes/report/$id/index.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/report/$id/index.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col p-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-row justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-400", children: "Last Updated" }, void 0, false, {
            fileName: "app/routes/report/$id/index.tsx",
            lineNumber: 82,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: parseDateAsString(data.updated_at) }, void 0, false, {
            fileName: "app/routes/report/$id/index.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/report/$id/index.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-row justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-400", children: "Created On" }, void 0, false, {
            fileName: "app/routes/report/$id/index.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: parseDateAsString(data.created_at) }, void 0, false, {
            fileName: "app/routes/report/$id/index.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/report/$id/index.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-row justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-400", children: "Verified On" }, void 0, false, {
            fileName: "app/routes/report/$id/index.tsx",
            lineNumber: 90,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: parseDateAsString(data.content.verified_at) }, void 0, false, {
            fileName: "app/routes/report/$id/index.tsx",
            lineNumber: 91,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/report/$id/index.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/report/$id/index.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col p-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-row justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-400", children: "Report ID" }, void 0, false, {
            fileName: "app/routes/report/$id/index.tsx",
            lineNumber: 96,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: data.id }, void 0, false, {
            fileName: "app/routes/report/$id/index.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/report/$id/index.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-row justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-400", children: "Content ID" }, void 0, false, {
            fileName: "app/routes/report/$id/index.tsx",
            lineNumber: 100,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: data.content_id }, void 0, false, {
            fileName: "app/routes/report/$id/index.tsx",
            lineNumber: 101,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/report/$id/index.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/report/$id/index.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "sticky bottom-0 flex justify-between bg-white p-2 shadow-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: `/report/${data.id}/edit`, className: "btn btn-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "btn-text", children: "Edit Report" }, void 0, false, {
          fileName: "app/routes/report/$id/index.tsx",
          lineNumber: 107,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/report/$id/index.tsx",
          lineNumber: 106,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Warning.Trigger, { className: "btn btn-light", onShow: showWarning, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "btn-text", children: "Delete" }, void 0, false, {
          fileName: "app/routes/report/$id/index.tsx",
          lineNumber: 110,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/report/$id/index.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/report/$id/index.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/report/$id/index.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/report/$id/index.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      Warning.Panel,
      {
        heading: "Delete Report",
        body: "Are you sure you want to delete this report? You won't be able to recover it without contacting admin.",
        isShow,
        onConfirm: confirmWarning,
        onHide: hideWarning
      },
      void 0,
      false,
      {
        fileName: "app/routes/report/$id/index.tsx",
        lineNumber: 115,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/report/$id/index.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
export {
  Details as default
};
//# sourceMappingURL=/build/routes/report/$id/index-R4BDHUSJ.js.map
