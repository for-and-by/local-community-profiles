import type { Severity, Type } from "~/types/db";
import type { StateCreator } from "zustand";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { fetchSeverities, fetchTypes } from "~/lib/supabase";

interface State {
  severities: Severity[];
  types: Type[];
  isLoading: {
    severities: boolean;
    types: boolean;
  };
}

interface Actions {
  fetchSeverities: () => Promise<void>;
  fetchTypes: () => Promise<void>;
}

interface Store extends Actions, State {}

const initialState: State = {
  severities: [],
  types: [],
  isLoading: {
    severities: false,
    types: false,
  },
};

const store: StateCreator<Store, [["zustand/persist", unknown]]> = (
  set,
  get
) => ({
  ...initialState,
  fetchSeverities: async () => {
    const { severities } = get();
    if (severities.length === 0) {
      set((state) => ({ isLoading: { ...state.isLoading, severities: true } }));
      const data = await fetchSeverities();
      set((state) => ({
        ...state,
        severities: data,
        isLoading: { ...state.isLoading, severities: false },
      }));
    }
  },
  fetchTypes: async () => {
    const { types } = get();
    if (types.length === 0) {
      set((state) => ({ isLoading: { ...state.isLoading, types: true } }));
      const data = await fetchTypes();
      set((state) => ({
        ...state,
        types: data,
        isLoading: { ...state.isLoading, types: false },
      }));
    }
  },
});

export const useFilterStore = create<Store>()(
  persist(store, {
    name: "filter",
  })
);
