import {
  require_react
} from "/build/_shared/chunk-PXIIMERU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/hooks/use-async-action.ts
var import_react = __toESM(require_react());
function useAsyncAction(props) {
  const [isLoading, setIsLoading] = (0, import_react.useState)();
  const handleAsyncAction = (0, import_react.useCallback)((...args) => {
    setIsLoading(true);
    props.action(...args).then((data) => {
      var _a;
      (_a = props == null ? void 0 : props.onSuccess) == null ? void 0 : _a.call(props, data);
    }).catch((error) => {
      var _a;
      (_a = props == null ? void 0 : props.onError) == null ? void 0 : _a.call(props, error);
    }).finally(() => {
      var _a;
      (_a = props == null ? void 0 : props.onEnd) == null ? void 0 : _a.call(props);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, handleAsyncAction };
}

export {
  useAsyncAction
};
//# sourceMappingURL=/build/_shared/chunk-2UUH35UR.js.map
