import {
  create,
  persist
} from "/build/_shared/chunk-PVJHJIFI.js";

// app/utils/json.ts
function stringifyJSON(value) {
  try {
    return value ? JSON.stringify(value, (key, value2) => {
      if (value2 instanceof Set) {
        return {
          __type: "set",
          set: Array.from(value2)
        };
      }
      if (value2 instanceof Map) {
        return {
          __type: "map",
          map: Object.fromEntries(value2)
        };
      }
      return value2;
    }) : void 0;
  } catch (error) {
    console.log("Could not serialize JSON: ", value);
    return void 0;
  }
}
function parseJSON(value) {
  try {
    return value ? JSON.parse(value != null ? value : "", (key, value2) => {
      if (!(typeof value2 === "object" && value2.hasOwnProperty("__type"))) {
        return value2;
      }
      if (value2.__type == "set") {
        return new Set(value2.set);
      }
      if (value2.__type == "map") {
        return new Map(Object.entries(value2.map));
      }
      return value2;
    }) : void 0;
  } catch (error) {
    console.warn("Could not parse as JSON: ", value);
    console.warn(error);
    return void 0;
  }
}

// app/lib/zustand.ts
function createSerializableStorage() {
  return {
    getItem: (name) => {
      let state = { state: {} };
      const storedItem = localStorage.getItem(name);
      if (storedItem)
        state = parseJSON(storedItem);
      return state;
    },
    setItem: (name, newValue) => {
      const storedItem = stringifyJSON(newValue);
      if (storedItem)
        localStorage.setItem(name, storedItem);
    },
    removeItem: (name) => localStorage.removeItem(name)
  };
}

// app/hooks/reports/use-reports-store.ts
var initialState = {
  opened: /* @__PURE__ */ new Set(),
  voted: /* @__PURE__ */ new Map()
};
var store = (set) => ({
  ...initialState,
  open: (id) => {
    if (!id)
      return;
    set((prev) => {
      return {
        opened: new Set(prev == null ? void 0 : prev.opened).add(id),
        voted: new Map(prev == null ? void 0 : prev.voted).set(id, 0)
      };
    });
  },
  voteUp: (id) => {
    if (!id)
      return;
    set((prev) => ({
      voted: new Map(prev == null ? void 0 : prev.voted).set(id, 1)
    }));
  },
  voteDown: (id) => {
    if (!id)
      return;
    set((prev) => ({
      voted: new Map(prev == null ? void 0 : prev.voted).set(id, -1)
    }));
  },
  voteClear: (id) => {
    if (!id)
      return;
    if (!id)
      return;
    set((prev) => ({
      voted: new Map(prev == null ? void 0 : prev.voted).set(id, 0)
    }));
  }
});
var useReportStore = create()(
  persist(store, {
    name: "reports",
    storage: createSerializableStorage()
  })
);

// app/hooks/reports/use-report-open.ts
function useReportOpen() {
  const opened = useReportStore((state) => state.opened);
  const open = useReportStore((state) => state.open);
  return [opened, open];
}

export {
  useReportOpen
};
//# sourceMappingURL=/build/_shared/chunk-5GUPT3AU.js.map
