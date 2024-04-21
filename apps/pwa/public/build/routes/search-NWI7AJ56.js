import {
  FindSelfButton
} from "/build/_shared/chunk-PLRLSXIH.js";
import {
  formatMetadata
} from "/build/_shared/chunk-SYL3D5JD.js";
import {
  useMapCenter
} from "/build/_shared/chunk-ZYE5DG2T.js";
import {
  header_default
} from "/build/_shared/chunk-GT3SSOVI.js";
import {
  body_default
} from "/build/_shared/chunk-VMFWIM66.js";
import {
  text_default
} from "/build/_shared/chunk-X6YQIRGR.js";
import "/build/_shared/chunk-2UUH35UR.js";
import "/build/_shared/chunk-ESEVYU34.js";
import {
  toast_default
} from "/build/_shared/chunk-3KD3VM5A.js";
import {
  footer_default
} from "/build/_shared/chunk-WMTHVS4E.js";
import {
  Bumper
} from "/build/_shared/chunk-SHPJFARJ.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react,
  useActionData,
  useNavigate,
  useNavigation,
  useSubmit
} from "/build/_shared/chunk-PXIIMERU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/search.tsx
var import_react = __toESM(require_react());

// ../../node_modules/nanoid/index.browser.js
var nanoid = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
  byte &= 63;
  if (byte < 36) {
    id += byte.toString(36);
  } else if (byte < 62) {
    id += (byte - 26).toString(36).toUpperCase();
  } else if (byte > 62) {
    id += "-";
  } else {
    id += "_";
  }
  return id;
}, "");

// app/routes/search.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return formatMetadata({
    title: "Search"
  });
};
function Search() {
  const submit = useSubmit();
  const search = useActionData();
  const { state } = useNavigation();
  const navigate = useNavigate();
  const [, setCenter] = useMapCenter();
  const timeoutRef = (0, import_react.useRef)(
    void 0
  );
  const handleChange = (event) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      submit(
        { query: event.target.value },
        { method: "post", action: "/search" }
      );
    }, 400);
  };
  const handleKeyDown = () => {
    clearTimeout(timeoutRef.current);
  };
  const handleClickResult = (feature) => {
    if (feature.center)
      setCenter(feature.center);
    navigate("/");
  };
  const hasNoResults = !search || search.isEmpty;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(toast_default, { content: "Finding results...", show: state === "submitting" }, void 0, false, {
      fileName: "app/routes/search.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(header_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row items-center bg-white p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "btn btn-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "btn-icon icon icon-arrow-left" }, void 0, false, {
        fileName: "app/routes/search.tsx",
        lineNumber: 100,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/search.tsx",
        lineNumber: 99,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col px-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-base text-base-700", children: [
          hasNoResults ? "No" : search.resultsCount,
          " results found"
        ] }, void 0, true, {
          fileName: "app/routes/search.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-base-400", children: hasNoResults ? "Type in an address below." : "Select a location to jump to." }, void 0, false, {
          fileName: "app/routes/search.tsx",
          lineNumber: 106,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/search.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/search.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/search.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(body_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bumper, { isShow: !(search == null ? void 0 : search.isEmpty), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex max-h-48 flex-col items-center divide-y divide-base-100 overflow-y-scroll bg-white", children: search == null ? void 0 : search.results.map(
      (feature) => feature.center ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          onClick: () => handleClickResult(feature),
          className: "flex w-full flex-col bg-white p-3 transition-all hover:cursor-pointer hover:bg-gray-100",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base text-base-700", children: feature.heading }, void 0, false, {
              fileName: "app/routes/search.tsx",
              lineNumber: 124,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-base-400", children: feature.subheading }, void 0, false, {
              fileName: "app/routes/search.tsx",
              lineNumber: 125,
              columnNumber: 19
            }, this)
          ]
        },
        nanoid(),
        true,
        {
          fileName: "app/routes/search.tsx",
          lineNumber: 119,
          columnNumber: 17
        },
        this
      ) : null
    ) }, void 0, false, {
      fileName: "app/routes/search.tsx",
      lineNumber: 116,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/search.tsx",
      lineNumber: 115,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/search.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(footer_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row items-center space-x-2 bg-white p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        text_default,
        {
          onChange: handleChange,
          onKeyDown: handleKeyDown,
          icon: "icon-search",
          placeholder: "Search for an address..."
        },
        void 0,
        false,
        {
          fileName: "app/routes/search.tsx",
          lineNumber: 134,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FindSelfButton, { onFound: () => navigate("/") }, void 0, false, {
        fileName: "app/routes/search.tsx",
        lineNumber: 140,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/search.tsx",
      lineNumber: 133,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/search.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/search.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}
export {
  Search as default,
  meta
};
//# sourceMappingURL=/build/routes/search-NWI7AJ56.js.map
