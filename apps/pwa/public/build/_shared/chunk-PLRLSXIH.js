import {
  useMapCenter
} from "/build/_shared/chunk-ZYE5DG2T.js";
import {
  useAsyncAction
} from "/build/_shared/chunk-2UUH35UR.js";
import {
  toast_default
} from "/build/_shared/chunk-3KD3VM5A.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-PXIIMERU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/lib/maplibre.ts
function parseLngLat(value) {
  return Array.isArray(value) ? [value[0], value[1]] : typeof value === "object" && "lon" in value ? [value.lon, value.lat] : typeof value === "object" && "lng" in value ? [value.lng, value.lat] : value;
}

// app/errors.ts
var CANT_GEOLOCATE = "Geolocation not available on this browser.";

// app/components/atoms/find-self-button.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function FindSelfButton(props) {
  const { onFound } = props;
  const [, setCenter] = useMapCenter();
  const { isLoading, handleAsyncAction } = useAsyncAction({
    action: () => {
      return new Promise((resolve, reject) => {
        if (!(navigator && "geolocation" in navigator))
          reject(CANT_GEOLOCATE);
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    },
    onSuccess: (data) => {
      const { longitude, latitude } = data.coords;
      if (onFound)
        onFound();
      setCenter([longitude, latitude]);
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "btn btn-primary", onClick: handleAsyncAction, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(toast_default, { show: isLoading, content: "Finding your location..." }, void 0, false, {
      fileName: "app/components/atoms/find-self-button.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "btn-icon icon icon-find-self" }, void 0, false, {
      fileName: "app/components/atoms/find-self-button.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/atoms/find-self-button.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

export {
  parseLngLat,
  FindSelfButton
};
//# sourceMappingURL=/build/_shared/chunk-PLRLSXIH.js.map
