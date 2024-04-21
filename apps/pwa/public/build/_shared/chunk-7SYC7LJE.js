import {
  useFilterStore
} from "/build/_shared/chunk-E74VXSKV.js";
import {
  require_react
} from "/build/_shared/chunk-PXIIMERU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/hooks/filter/use-filter-types.ts
var import_react = __toESM(require_react());
function useFilterTypes(handle) {
  const { types } = useFilterStore();
  function getType(handle2) {
    return types.find((type2) => {
      return type2.handle === handle2;
    });
  }
  const [type, setType] = (0, import_react.useState)(getType(handle));
  (0, import_react.useEffect)(() => {
    if (handle)
      setType(getType(handle));
  }, [handle]);
  return handle ? type : [types, getType];
}

export {
  useFilterTypes
};
//# sourceMappingURL=/build/_shared/chunk-7SYC7LJE.js.map
