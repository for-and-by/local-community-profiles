import {
  require_jsx_dev_runtime,
  require_react,
  require_react_dom
} from "/build/_shared/chunk-PXIIMERU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/atoms/bumper.tsx
var import_react2 = __toESM(require_react());

// app/hooks/use-style-vars.ts
var import_react = __toESM(require_react());
function useStyleVars(vars, deps) {
  return (0, import_react.useMemo)(() => {
    return Object.keys(vars).reduce((style, key) => {
      if (!vars[key])
        return style;
      return Object.assign(style, { [`--${key}`]: vars[key] });
    }, {});
  }, deps != null ? deps : Object.values(vars));
}

// app/components/atoms/bumper.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Bumper(props) {
  const { isShow = true, className, children } = props;
  const ref = (0, import_react2.useRef)(null);
  const [height, setHeight] = (0, import_react2.useState)(0);
  (0, import_react2.useEffect)(() => {
    if (!ref.current)
      return;
    if (!isShow)
      return setHeight(0);
    const { current: node } = ref;
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "childList") {
          setHeight(node.offsetHeight);
        }
      }
    });
    observer.observe(node, {
      childList: true,
      subtree: true
    });
    return () => {
      observer.disconnect();
    };
  }, [isShow]);
  const style = useStyleVars({
    height: `${height}px`
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      style,
      className: "h-[--height] overflow-hidden bg-white transition-all duration-300",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className, children }, void 0, false, {
        fileName: "app/components/atoms/bumper.tsx",
        lineNumber: 51,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/atoms/bumper.tsx",
      lineNumber: 47,
      columnNumber: 5
    },
    this
  );
}

// app/components/atoms/portal.tsx
var import_react_dom = __toESM(require_react_dom());

// app/hooks/use-query-selector.ts
var import_react3 = __toESM(require_react());
function useQuerySelector(selector) {
  const [ref, setRef] = (0, import_react3.useState)(null);
  (0, import_react3.useEffect)(() => {
    if (!ref) {
      setRef(document.querySelector(selector));
    }
  }, []);
  return ref;
}

// app/components/atoms/portal.tsx
function Portal(props) {
  const { children, selector = "body" } = props;
  const parent = useQuerySelector(selector);
  if (!parent)
    return null;
  return (0, import_react_dom.createPortal)(children, parent);
}

export {
  Portal,
  useStyleVars,
  Bumper
};
//# sourceMappingURL=/build/_shared/chunk-SHPJFARJ.js.map
