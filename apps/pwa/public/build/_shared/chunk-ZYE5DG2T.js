import {
  config,
  useMapContext
} from "/build/_shared/chunk-GT3SSOVI.js";
import {
  require_react
} from "/build/_shared/chunk-PXIIMERU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/hooks/map/use-map-center.ts
var import_react2 = __toESM(require_react());

// app/hooks/map/use-map-event.ts
var import_react = __toESM(require_react());

// app/hooks/map/use-map.ts
function useMap() {
  const { map, ref } = useMapContext();
  return { map, ref };
}

// app/hooks/map/use-map-event.ts
function useMapEvent(name, callback) {
  const { map } = useMap();
  (0, import_react.useEffect)(() => {
    if (!map)
      return () => {
      };
    map.on(name, callback);
    return () => {
      map.off(name, callback);
    };
  }, [map, callback]);
}

// app/hooks/map/use-map-center.ts
function useMapCenter() {
  const { map } = useMap();
  const [center, setCenter] = (0, import_react2.useState)(config.map.center.default);
  useMapEvent("moveend", (event) => {
    setCenter(event.target.getCenter());
  });
  const updateCenter = (value) => {
    if (!map)
      return;
    map.flyTo({
      center: value
    });
  };
  return [center, updateCenter];
}

export {
  useMap,
  useMapEvent,
  useMapCenter
};
//# sourceMappingURL=/build/_shared/chunk-ZYE5DG2T.js.map
