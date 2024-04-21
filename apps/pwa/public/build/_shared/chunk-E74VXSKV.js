import {
  create,
  persist
} from "/build/_shared/chunk-PVJHJIFI.js";

// app/hooks/filter/use-filter-store.ts
var initialState = {
  severities: [],
  types: []
};
var store = (set) => ({
  ...initialState,
  setSeverities: (severities) => {
    set({ severities });
  },
  setTypes: (types) => {
    set({ types });
  }
});
var useFilterStore = create()(
  persist(store, {
    name: "filter"
  })
);

export {
  useFilterStore
};
//# sourceMappingURL=/build/_shared/chunk-E74VXSKV.js.map
