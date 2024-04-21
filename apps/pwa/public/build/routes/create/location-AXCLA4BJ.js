import {
  useCreateOutlet
} from "/build/_shared/chunk-PVL5ANBZ.js";
import {
  FindSelfButton,
  parseLngLat
} from "/build/_shared/chunk-PLRLSXIH.js";
import "/build/_shared/chunk-SYL3D5JD.js";
import {
  useMapLock
} from "/build/_shared/chunk-CUKQ563J.js";
import "/build/_shared/chunk-KNI4Q7BH.js";
import {
  useMapCenter
} from "/build/_shared/chunk-ZYE5DG2T.js";
import "/build/_shared/chunk-GT3SSOVI.js";
import {
  useController,
  useFormContext
} from "/build/_shared/chunk-UXRUZFHF.js";
import "/build/_shared/chunk-2UUH35UR.js";
import {
  Warning
} from "/build/_shared/chunk-HVLVQROG.js";
import "/build/_shared/chunk-3KD3VM5A.js";
import {
  footer_default
} from "/build/_shared/chunk-WMTHVS4E.js";
import "/build/_shared/chunk-SHPJFARJ.js";
import {
  require_jsx_dev_runtime,
  require_react,
  useFetcher,
  useNavigate
} from "/build/_shared/chunk-PXIIMERU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/create/location.tsx
var import_react4 = __toESM(require_react());

// app/components/inputs/map-center.tsx
var import_react3 = __toESM(require_react());

// app/hooks/use-search.ts
var import_react = __toESM(require_react());
function useSearch(query) {
  const fetcher = useFetcher();
  (0, import_react.useEffect)(() => {
    const options = { action: "/search", method: "post" };
    if (!query)
      return () => {
      };
    if (typeof query === "string") {
      fetcher.submit({ query }, options);
    } else {
      const [lng, lat] = parseLngLat(query);
      fetcher.submit({ lng: lng.toString(), lat: lat.toString() }, options);
    }
  }, [query]);
  return fetcher;
}

// app/components/inputs/map-center.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function MapCenterInput({
  onCenterChange,
  onAddressChange
}) {
  var _a, _b;
  const [center] = useMapCenter();
  const { state, data } = useSearch(center);
  (0, import_react3.useEffect)(() => {
    if (onCenterChange)
      onCenterChange(parseLngLat(center));
  }, [center]);
  (0, import_react3.useEffect)(() => {
    var _a2, _b2;
    if (onAddressChange && ((_b2 = (_a2 = data == null ? void 0 : data.results) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.heading))
      onAddressChange(data == null ? void 0 : data.results[0].heading);
  }, [data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-row items-center space-x-4 rounded bg-gray-100 p-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y flex flex-grow flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400", children: "Approximate Address" }, void 0, false, {
        fileName: "app/components/inputs/map-center.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-900", children: !(state === "submitting") && !!(data == null ? void 0 : data.results) && ((_a = data.results) == null ? void 0 : _a.length) > 0 ? (_b = data == null ? void 0 : data.results) == null ? void 0 : _b[0].heading : "Searching for address..." }, void 0, false, {
        fileName: "app/components/inputs/map-center.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/inputs/map-center.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    state !== "submitting" ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "icon icon-circle-anim icon-is-spinning before:text-black" }, void 0, false, {
      fileName: "app/components/inputs/map-center.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FindSelfButton, {}, void 0, false, {
      fileName: "app/components/inputs/map-center.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/inputs/map-center.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/components/fields/location-field.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function LocationField() {
  const { control } = useFormContext();
  const { field: coordinatesField } = useController({
    name: "location.coordinates",
    control,
    rules: {
      required: true
    }
  });
  const { field: addressField } = useController({
    name: "location.address",
    control,
    rules: {
      required: true
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    MapCenterInput,
    {
      onCenterChange: coordinatesField.onChange,
      onAddressChange: addressField.onChange
    },
    void 0,
    false,
    {
      fileName: "app/components/fields/location-field.tsx",
      lineNumber: 26,
      columnNumber: 5
    },
    this
  );
}

// app/routes/create/location.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function CreateLocation() {
  const [, { setUnlock }] = useMapLock();
  const { setStage, showWarning } = useCreateOutlet();
  const navigate = useNavigate();
  const { trigger } = useFormContext();
  const handleNext = () => {
    trigger().then((result) => {
      if (result) {
        navigate("/create/details");
      }
    });
  };
  (0, import_react4.useEffect)(() => {
    setUnlock();
    setStage({
      heading: "Set Address",
      step: 1,
      progress: 20
    });
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(footer_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "divider-gray-200 flex flex-col divide-y bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-base", children: "Use the pin or drag the map to where the reports is referring to." }, void 0, false, {
      fileName: "app/routes/create/location.tsx",
      lineNumber: 40,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/create/location.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-2 p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LocationField, {}, void 0, false, {
      fileName: "app/routes/create/location.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/create/location.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-row justify-between p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Warning.Trigger, { className: "btn btn-light", onShow: showWarning, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "btn-text", children: "Cancel" }, void 0, false, {
        fileName: "app/routes/create/location.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/create/location.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: handleNext, className: "btn btn-light", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "btn-text", children: "Add Details" }, void 0, false, {
          fileName: "app/routes/create/location.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "btn-icon icon icon-arrow-right" }, void 0, false, {
          fileName: "app/routes/create/location.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/create/location.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/create/location.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/create/location.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/create/location.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
export {
  CreateLocation as default
};
//# sourceMappingURL=/build/routes/create/location-AXCLA4BJ.js.map
