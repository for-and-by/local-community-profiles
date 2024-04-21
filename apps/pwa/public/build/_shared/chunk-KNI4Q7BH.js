import {
  useMap
} from "/build/_shared/chunk-ZYE5DG2T.js";
import {
  require_maplibre_gl
} from "/build/_shared/chunk-GT3SSOVI.js";
import {
  require_react,
  require_react_dom
} from "/build/_shared/chunk-PXIIMERU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/molecules/markers/base.tsx
var import_react = __toESM(require_react());
var import_maplibre_gl = __toESM(require_maplibre_gl());
var import_react_dom = __toESM(require_react_dom());
function BaseMarker({
  coordinates,
  children,
  onDragEnd = () => {
  },
  onDragStart = () => {
  },
  ...props
}) {
  const [marker, setMarker] = (0, import_react.useState)(null);
  const { map } = useMap();
  (0, import_react.useEffect)(() => {
    if (!marker) {
      setMarker(
        new import_maplibre_gl.Marker({
          element: document.createElement("div"),
          ...props
        })
      );
    }
  }, [marker]);
  (0, import_react.useEffect)(() => {
    if (!!marker && !!map) {
      marker.setLngLat(coordinates).addTo(map).on("dragstart", onDragStart).on("dragend", onDragEnd);
    }
  }, [marker, map]);
  (0, import_react.useEffect)(() => {
    if (marker) {
      marker.setLngLat(coordinates);
    }
  }, [marker, coordinates]);
  if (!marker)
    return null;
  return (0, import_react_dom.createPortal)(children, marker.getElement());
}

export {
  BaseMarker
};
//# sourceMappingURL=/build/_shared/chunk-KNI4Q7BH.js.map
