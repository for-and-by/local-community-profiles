import {
  useMapContext
} from "/build/_shared/chunk-GT3SSOVI.js";

// app/hooks/map/use-map-lock.ts
function useMapLock() {
  const { isLocked, setIsLocked } = useMapContext();
  const actions = {
    setIsLocked,
    setLock: () => setIsLocked(true),
    setUnlock: () => setIsLocked(false)
  };
  return [isLocked, actions];
}

export {
  useMapLock
};
//# sourceMappingURL=/build/_shared/chunk-CUKQ563J.js.map
