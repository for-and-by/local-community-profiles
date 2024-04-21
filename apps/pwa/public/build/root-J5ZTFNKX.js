import {
  useReportOpen
} from "/build/_shared/chunk-5GUPT3AU.js";
import {
  useMapLock
} from "/build/_shared/chunk-CUKQ563J.js";
import {
  BaseMarker
} from "/build/_shared/chunk-KNI4Q7BH.js";
import {
  useMap,
  useMapCenter,
  useMapEvent
} from "/build/_shared/chunk-ZYE5DG2T.js";
import {
  MapProvider,
  config,
  header_default
} from "/build/_shared/chunk-GT3SSOVI.js";
import {
  body_default
} from "/build/_shared/chunk-VMFWIM66.js";
import {
  useFilterStore
} from "/build/_shared/chunk-E74VXSKV.js";
import "/build/_shared/chunk-PVJHJIFI.js";
import {
  getMetadataFromContent
} from "/build/_shared/chunk-YDUTGTTK.js";
import {
  parseImageUrl
} from "/build/_shared/chunk-F2G6SP3I.js";
import {
  toast_default
} from "/build/_shared/chunk-3KD3VM5A.js";
import {
  footer_default
} from "/build/_shared/chunk-WMTHVS4E.js";
import "/build/_shared/chunk-SHPJFARJ.js";
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  require_jsx_dev_runtime,
  require_react,
  useFetcher,
  useLoaderData,
  useLocation,
  useNavigation
} from "/build/_shared/chunk-PXIIMERU.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// ../../node_modules/picocolors/picocolors.browser.js
var require_picocolors_browser = __commonJS({
  "../../node_modules/picocolors/picocolors.browser.js"(exports, module) {
    var x = String;
    var create = function() {
      return { isColorSupported: false, reset: x, bold: x, dim: x, italic: x, underline: x, inverse: x, hidden: x, strikethrough: x, black: x, red: x, green: x, yellow: x, blue: x, magenta: x, cyan: x, white: x, gray: x, bgBlack: x, bgRed: x, bgGreen: x, bgYellow: x, bgBlue: x, bgMagenta: x, bgCyan: x, bgWhite: x };
    };
    module.exports = create();
    module.exports.createColors = create;
  }
});

// ../../node_modules/tailwindcss/lib/util/log.js
var require_log = __commonJS({
  "../../node_modules/tailwindcss/lib/util/log.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      dim: function() {
        return dim;
      },
      default: function() {
        return _default;
      }
    });
    var _picocolors = /* @__PURE__ */ _interop_require_default(require_picocolors_browser());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var alreadyShown = /* @__PURE__ */ new Set();
    function log(type, messages, key) {
      if (typeof process !== "undefined" && process.env.JEST_WORKER_ID)
        return;
      if (key && alreadyShown.has(key))
        return;
      if (key)
        alreadyShown.add(key);
      console.warn("");
      messages.forEach((message) => console.warn(type, "-", message));
    }
    function dim(input) {
      return _picocolors.default.dim(input);
    }
    var _default = {
      info(key, messages) {
        log(_picocolors.default.bold(_picocolors.default.cyan("info")), ...Array.isArray(key) ? [
          key
        ] : [
          messages,
          key
        ]);
      },
      warn(key, messages) {
        log(_picocolors.default.bold(_picocolors.default.yellow("warn")), ...Array.isArray(key) ? [
          key
        ] : [
          messages,
          key
        ]);
      },
      risk(key, messages) {
        log(_picocolors.default.bold(_picocolors.default.magenta("risk")), ...Array.isArray(key) ? [
          key
        ] : [
          messages,
          key
        ]);
      }
    };
  }
});

// ../../node_modules/tailwindcss/lib/public/colors.js
var require_colors = __commonJS({
  "../../node_modules/tailwindcss/lib/public/colors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _log = /* @__PURE__ */ _interop_require_default(require_log());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function warn({ version, from, to }) {
      _log.default.warn(`${from}-color-renamed`, [
        `As of Tailwind CSS ${version}, \`${from}\` has been renamed to \`${to}\`.`,
        "Update your configuration file to silence this warning."
      ]);
    }
    var _default = {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      slate: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
        950: "#020617"
      },
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712"
      },
      zinc: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
        950: "#09090b"
      },
      neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
        950: "#0a0a0a"
      },
      stone: {
        50: "#fafaf9",
        100: "#f5f5f4",
        200: "#e7e5e4",
        300: "#d6d3d1",
        400: "#a8a29e",
        500: "#78716c",
        600: "#57534e",
        700: "#44403c",
        800: "#292524",
        900: "#1c1917",
        950: "#0c0a09"
      },
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
        950: "#450a0a"
      },
      orange: {
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#f97316",
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12",
        950: "#431407"
      },
      amber: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f",
        950: "#451a03"
      },
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#facc15",
        500: "#eab308",
        600: "#ca8a04",
        700: "#a16207",
        800: "#854d0e",
        900: "#713f12",
        950: "#422006"
      },
      lime: {
        50: "#f7fee7",
        100: "#ecfccb",
        200: "#d9f99d",
        300: "#bef264",
        400: "#a3e635",
        500: "#84cc16",
        600: "#65a30d",
        700: "#4d7c0f",
        800: "#3f6212",
        900: "#365314",
        950: "#1a2e05"
      },
      green: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
        950: "#052e16"
      },
      emerald: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b",
        950: "#022c22"
      },
      teal: {
        50: "#f0fdfa",
        100: "#ccfbf1",
        200: "#99f6e4",
        300: "#5eead4",
        400: "#2dd4bf",
        500: "#14b8a6",
        600: "#0d9488",
        700: "#0f766e",
        800: "#115e59",
        900: "#134e4a",
        950: "#042f2e"
      },
      cyan: {
        50: "#ecfeff",
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
        950: "#083344"
      },
      sky: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e",
        950: "#082f49"
      },
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
        950: "#172554"
      },
      indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81",
        950: "#1e1b4b"
      },
      violet: {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95",
        950: "#2e1065"
      },
      purple: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",
        600: "#9333ea",
        700: "#7e22ce",
        800: "#6b21a8",
        900: "#581c87",
        950: "#3b0764"
      },
      fuchsia: {
        50: "#fdf4ff",
        100: "#fae8ff",
        200: "#f5d0fe",
        300: "#f0abfc",
        400: "#e879f9",
        500: "#d946ef",
        600: "#c026d3",
        700: "#a21caf",
        800: "#86198f",
        900: "#701a75",
        950: "#4a044e"
      },
      pink: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ec4899",
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843",
        950: "#500724"
      },
      rose: {
        50: "#fff1f2",
        100: "#ffe4e6",
        200: "#fecdd3",
        300: "#fda4af",
        400: "#fb7185",
        500: "#f43f5e",
        600: "#e11d48",
        700: "#be123c",
        800: "#9f1239",
        900: "#881337",
        950: "#4c0519"
      },
      get lightBlue() {
        warn({
          version: "v2.2",
          from: "lightBlue",
          to: "sky"
        });
        return this.sky;
      },
      get warmGray() {
        warn({
          version: "v3.0",
          from: "warmGray",
          to: "stone"
        });
        return this.stone;
      },
      get trueGray() {
        warn({
          version: "v3.0",
          from: "trueGray",
          to: "neutral"
        });
        return this.neutral;
      },
      get coolGray() {
        warn({
          version: "v3.0",
          from: "coolGray",
          to: "gray"
        });
        return this.gray;
      },
      get blueGray() {
        warn({
          version: "v3.0",
          from: "blueGray",
          to: "slate"
        });
        return this.slate;
      }
    };
  }
});

// ../../node_modules/tailwindcss/colors.js
var require_colors2 = __commonJS({
  "../../node_modules/tailwindcss/colors.js"(exports, module) {
    var colors2 = require_colors();
    module.exports = (colors2.__esModule ? colors2 : { default: colors2 }).default;
  }
});

// ../../node_modules/tailwindcss/lib/util/createPlugin.js
var require_createPlugin = __commonJS({
  "../../node_modules/tailwindcss/lib/util/createPlugin.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    function createPlugin(plugin, config3) {
      return {
        handler: plugin,
        config: config3
      };
    }
    createPlugin.withOptions = function(pluginFunction, configFunction = () => ({})) {
      const optionsFunction = function(options) {
        return {
          __options: options,
          handler: pluginFunction(options),
          config: configFunction(options)
        };
      };
      optionsFunction.__isOptionsFunction = true;
      optionsFunction.__pluginFunction = pluginFunction;
      optionsFunction.__configFunction = configFunction;
      return optionsFunction;
    };
    var _default = createPlugin;
  }
});

// ../../node_modules/tailwindcss/lib/public/create-plugin.js
var require_create_plugin = __commonJS({
  "../../node_modules/tailwindcss/lib/public/create-plugin.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _createPlugin = /* @__PURE__ */ _interop_require_default(require_createPlugin());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _default = _createPlugin.default;
  }
});

// ../../node_modules/tailwindcss/plugin.js
var require_plugin = __commonJS({
  "../../node_modules/tailwindcss/plugin.js"(exports, module) {
    var createPlugin = require_create_plugin();
    module.exports = (createPlugin.__esModule ? createPlugin : { default: createPlugin }).default;
  }
});

// ../../node_modules/lodash.merge/index.js
var require_lodash = __commonJS({
  "../../node_modules/lodash.merge/index.js"(exports, module) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var asyncTag = "[object AsyncFunction]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var nullTag = "[object Null]";
    var objectTag = "[object Object]";
    var proxyTag = "[object Proxy]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var undefinedTag = "[object Undefined]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var nativeObjectToString = objectProto.toString;
    var objectCtorString = funcToString.call(Object);
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Buffer = moduleExports ? root.Buffer : void 0;
    var Symbol2 = root.Symbol;
    var Uint8Array = root.Uint8Array;
    var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    var objectCreate = Object.create;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var nativeMax = Math.max;
    var nativeNow = Date.now;
    var Map2 = getNative(root, "Map");
    var nativeCreate = getNative(Object, "create");
    var baseCreate = function() {
      function object() {
      }
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assignMergeValue(object, key, value) {
      if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    var baseFor = createBaseFor();
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack());
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        } else {
          var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
          if (newValue === void 0) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
      var isCommon = newValue === void 0;
      if (isCommon) {
        var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          } else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          } else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          } else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          } else {
            newValue = [];
          }
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          } else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        } else {
          isCommon = false;
        }
      }
      if (isCommon) {
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + "");
    }
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? void 0 : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
        return eq(object[index], value);
      }
      return false;
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    function overRest(func, start, transform) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }
    function safeGet(object, key) {
      if (key === "constructor" && typeof object[key] === "function") {
        return;
      }
      if (key == "__proto__") {
        return;
      }
      return object[key];
    }
    var setToString = shortOut(baseSetToString);
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });
    function constant(value) {
      return function() {
        return value;
      };
    }
    function identity(value) {
      return value;
    }
    function stubFalse() {
      return false;
    }
    module.exports = merge;
  }
});

// ../../node_modules/lodash.castarray/index.js
var require_lodash2 = __commonJS({
  "../../node_modules/lodash.castarray/index.js"(exports, module) {
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }
    var isArray = Array.isArray;
    module.exports = castArray;
  }
});

// ../../node_modules/@tailwindcss/typography/src/styles.js
var require_styles = __commonJS({
  "../../node_modules/@tailwindcss/typography/src/styles.js"(exports, module) {
    var colors2 = require_colors2();
    var round = (num) => num.toFixed(7).replace(/(\.[0-9]+?)0+$/, "$1").replace(/\.0$/, "");
    var rem = (px) => `${round(px / 16)}rem`;
    var em = (px, base) => `${round(px / base)}em`;
    var defaultModifiers = {
      sm: {
        css: [
          {
            fontSize: rem(14),
            lineHeight: round(24 / 14),
            p: {
              marginTop: em(16, 14),
              marginBottom: em(16, 14)
            },
            '[class~="lead"]': {
              fontSize: em(18, 14),
              lineHeight: round(28 / 18),
              marginTop: em(16, 18),
              marginBottom: em(16, 18)
            },
            blockquote: {
              marginTop: em(24, 18),
              marginBottom: em(24, 18),
              paddingLeft: em(20, 18)
            },
            h1: {
              fontSize: em(30, 14),
              marginTop: "0",
              marginBottom: em(24, 30),
              lineHeight: round(36 / 30)
            },
            h2: {
              fontSize: em(20, 14),
              marginTop: em(32, 20),
              marginBottom: em(16, 20),
              lineHeight: round(28 / 20)
            },
            h3: {
              fontSize: em(18, 14),
              marginTop: em(28, 18),
              marginBottom: em(8, 18),
              lineHeight: round(28 / 18)
            },
            h4: {
              marginTop: em(20, 14),
              marginBottom: em(8, 14),
              lineHeight: round(20 / 14)
            },
            img: {
              marginTop: em(24, 14),
              marginBottom: em(24, 14)
            },
            video: {
              marginTop: em(24, 14),
              marginBottom: em(24, 14)
            },
            figure: {
              marginTop: em(24, 14),
              marginBottom: em(24, 14)
            },
            "figure > *": {
              marginTop: "0",
              marginBottom: "0"
            },
            figcaption: {
              fontSize: em(12, 14),
              lineHeight: round(16 / 12),
              marginTop: em(8, 12)
            },
            code: {
              fontSize: em(12, 14)
            },
            "h2 code": {
              fontSize: em(18, 20)
            },
            "h3 code": {
              fontSize: em(16, 18)
            },
            pre: {
              fontSize: em(12, 14),
              lineHeight: round(20 / 12),
              marginTop: em(20, 12),
              marginBottom: em(20, 12),
              borderRadius: rem(4),
              paddingTop: em(8, 12),
              paddingRight: em(12, 12),
              paddingBottom: em(8, 12),
              paddingLeft: em(12, 12)
            },
            ol: {
              marginTop: em(16, 14),
              marginBottom: em(16, 14),
              paddingLeft: em(22, 14)
            },
            ul: {
              marginTop: em(16, 14),
              marginBottom: em(16, 14),
              paddingLeft: em(22, 14)
            },
            li: {
              marginTop: em(4, 14),
              marginBottom: em(4, 14)
            },
            "ol > li": {
              paddingLeft: em(6, 14)
            },
            "ul > li": {
              paddingLeft: em(6, 14)
            },
            "> ul > li p": {
              marginTop: em(8, 14),
              marginBottom: em(8, 14)
            },
            "> ul > li > *:first-child": {
              marginTop: em(16, 14)
            },
            "> ul > li > *:last-child": {
              marginBottom: em(16, 14)
            },
            "> ol > li > *:first-child": {
              marginTop: em(16, 14)
            },
            "> ol > li > *:last-child": {
              marginBottom: em(16, 14)
            },
            "ul ul, ul ol, ol ul, ol ol": {
              marginTop: em(8, 14),
              marginBottom: em(8, 14)
            },
            hr: {
              marginTop: em(40, 14),
              marginBottom: em(40, 14)
            },
            "hr + *": {
              marginTop: "0"
            },
            "h2 + *": {
              marginTop: "0"
            },
            "h3 + *": {
              marginTop: "0"
            },
            "h4 + *": {
              marginTop: "0"
            },
            table: {
              fontSize: em(12, 14),
              lineHeight: round(18 / 12)
            },
            "thead th": {
              paddingRight: em(12, 12),
              paddingBottom: em(8, 12),
              paddingLeft: em(12, 12)
            },
            "thead th:first-child": {
              paddingLeft: "0"
            },
            "thead th:last-child": {
              paddingRight: "0"
            },
            "tbody td, tfoot td": {
              paddingTop: em(8, 12),
              paddingRight: em(12, 12),
              paddingBottom: em(8, 12),
              paddingLeft: em(12, 12)
            },
            "tbody td:first-child, tfoot td:first-child": {
              paddingLeft: "0"
            },
            "tbody td:last-child, tfoot td:last-child": {
              paddingRight: "0"
            }
          },
          {
            "> :first-child": {
              marginTop: "0"
            },
            "> :last-child": {
              marginBottom: "0"
            }
          }
        ]
      },
      base: {
        css: [
          {
            fontSize: rem(16),
            lineHeight: round(28 / 16),
            p: {
              marginTop: em(20, 16),
              marginBottom: em(20, 16)
            },
            '[class~="lead"]': {
              fontSize: em(20, 16),
              lineHeight: round(32 / 20),
              marginTop: em(24, 20),
              marginBottom: em(24, 20)
            },
            blockquote: {
              marginTop: em(32, 20),
              marginBottom: em(32, 20),
              paddingLeft: em(20, 20)
            },
            h1: {
              fontSize: em(36, 16),
              marginTop: "0",
              marginBottom: em(32, 36),
              lineHeight: round(40 / 36)
            },
            h2: {
              fontSize: em(24, 16),
              marginTop: em(48, 24),
              marginBottom: em(24, 24),
              lineHeight: round(32 / 24)
            },
            h3: {
              fontSize: em(20, 16),
              marginTop: em(32, 20),
              marginBottom: em(12, 20),
              lineHeight: round(32 / 20)
            },
            h4: {
              marginTop: em(24, 16),
              marginBottom: em(8, 16),
              lineHeight: round(24 / 16)
            },
            img: {
              marginTop: em(32, 16),
              marginBottom: em(32, 16)
            },
            video: {
              marginTop: em(32, 16),
              marginBottom: em(32, 16)
            },
            figure: {
              marginTop: em(32, 16),
              marginBottom: em(32, 16)
            },
            "figure > *": {
              marginTop: "0",
              marginBottom: "0"
            },
            figcaption: {
              fontSize: em(14, 16),
              lineHeight: round(20 / 14),
              marginTop: em(12, 14)
            },
            code: {
              fontSize: em(14, 16)
            },
            "h2 code": {
              fontSize: em(21, 24)
            },
            "h3 code": {
              fontSize: em(18, 20)
            },
            pre: {
              fontSize: em(14, 16),
              lineHeight: round(24 / 14),
              marginTop: em(24, 14),
              marginBottom: em(24, 14),
              borderRadius: rem(6),
              paddingTop: em(12, 14),
              paddingRight: em(16, 14),
              paddingBottom: em(12, 14),
              paddingLeft: em(16, 14)
            },
            ol: {
              marginTop: em(20, 16),
              marginBottom: em(20, 16),
              paddingLeft: em(26, 16)
            },
            ul: {
              marginTop: em(20, 16),
              marginBottom: em(20, 16),
              paddingLeft: em(26, 16)
            },
            li: {
              marginTop: em(8, 16),
              marginBottom: em(8, 16)
            },
            "ol > li": {
              paddingLeft: em(6, 16)
            },
            "ul > li": {
              paddingLeft: em(6, 16)
            },
            "> ul > li p": {
              marginTop: em(12, 16),
              marginBottom: em(12, 16)
            },
            "> ul > li > *:first-child": {
              marginTop: em(20, 16)
            },
            "> ul > li > *:last-child": {
              marginBottom: em(20, 16)
            },
            "> ol > li > *:first-child": {
              marginTop: em(20, 16)
            },
            "> ol > li > *:last-child": {
              marginBottom: em(20, 16)
            },
            "ul ul, ul ol, ol ul, ol ol": {
              marginTop: em(12, 16),
              marginBottom: em(12, 16)
            },
            hr: {
              marginTop: em(48, 16),
              marginBottom: em(48, 16)
            },
            "hr + *": {
              marginTop: "0"
            },
            "h2 + *": {
              marginTop: "0"
            },
            "h3 + *": {
              marginTop: "0"
            },
            "h4 + *": {
              marginTop: "0"
            },
            table: {
              fontSize: em(14, 16),
              lineHeight: round(24 / 14)
            },
            "thead th": {
              paddingRight: em(8, 14),
              paddingBottom: em(8, 14),
              paddingLeft: em(8, 14)
            },
            "thead th:first-child": {
              paddingLeft: "0"
            },
            "thead th:last-child": {
              paddingRight: "0"
            },
            "tbody td, tfoot td": {
              paddingTop: em(8, 14),
              paddingRight: em(8, 14),
              paddingBottom: em(8, 14),
              paddingLeft: em(8, 14)
            },
            "tbody td:first-child, tfoot td:first-child": {
              paddingLeft: "0"
            },
            "tbody td:last-child, tfoot td:last-child": {
              paddingRight: "0"
            }
          },
          {
            "> :first-child": {
              marginTop: "0"
            },
            "> :last-child": {
              marginBottom: "0"
            }
          }
        ]
      },
      lg: {
        css: [
          {
            fontSize: rem(18),
            lineHeight: round(32 / 18),
            p: {
              marginTop: em(24, 18),
              marginBottom: em(24, 18)
            },
            '[class~="lead"]': {
              fontSize: em(22, 18),
              lineHeight: round(32 / 22),
              marginTop: em(24, 22),
              marginBottom: em(24, 22)
            },
            blockquote: {
              marginTop: em(40, 24),
              marginBottom: em(40, 24),
              paddingLeft: em(24, 24)
            },
            h1: {
              fontSize: em(48, 18),
              marginTop: "0",
              marginBottom: em(40, 48),
              lineHeight: round(48 / 48)
            },
            h2: {
              fontSize: em(30, 18),
              marginTop: em(56, 30),
              marginBottom: em(32, 30),
              lineHeight: round(40 / 30)
            },
            h3: {
              fontSize: em(24, 18),
              marginTop: em(40, 24),
              marginBottom: em(16, 24),
              lineHeight: round(36 / 24)
            },
            h4: {
              marginTop: em(32, 18),
              marginBottom: em(8, 18),
              lineHeight: round(28 / 18)
            },
            img: {
              marginTop: em(32, 18),
              marginBottom: em(32, 18)
            },
            video: {
              marginTop: em(32, 18),
              marginBottom: em(32, 18)
            },
            figure: {
              marginTop: em(32, 18),
              marginBottom: em(32, 18)
            },
            "figure > *": {
              marginTop: "0",
              marginBottom: "0"
            },
            figcaption: {
              fontSize: em(16, 18),
              lineHeight: round(24 / 16),
              marginTop: em(16, 16)
            },
            code: {
              fontSize: em(16, 18)
            },
            "h2 code": {
              fontSize: em(26, 30)
            },
            "h3 code": {
              fontSize: em(21, 24)
            },
            pre: {
              fontSize: em(16, 18),
              lineHeight: round(28 / 16),
              marginTop: em(32, 16),
              marginBottom: em(32, 16),
              borderRadius: rem(6),
              paddingTop: em(16, 16),
              paddingRight: em(24, 16),
              paddingBottom: em(16, 16),
              paddingLeft: em(24, 16)
            },
            ol: {
              marginTop: em(24, 18),
              marginBottom: em(24, 18),
              paddingLeft: em(28, 18)
            },
            ul: {
              marginTop: em(24, 18),
              marginBottom: em(24, 18),
              paddingLeft: em(28, 18)
            },
            li: {
              marginTop: em(12, 18),
              marginBottom: em(12, 18)
            },
            "ol > li": {
              paddingLeft: em(8, 18)
            },
            "ul > li": {
              paddingLeft: em(8, 18)
            },
            "> ul > li p": {
              marginTop: em(16, 18),
              marginBottom: em(16, 18)
            },
            "> ul > li > *:first-child": {
              marginTop: em(24, 18)
            },
            "> ul > li > *:last-child": {
              marginBottom: em(24, 18)
            },
            "> ol > li > *:first-child": {
              marginTop: em(24, 18)
            },
            "> ol > li > *:last-child": {
              marginBottom: em(24, 18)
            },
            "ul ul, ul ol, ol ul, ol ol": {
              marginTop: em(16, 18),
              marginBottom: em(16, 18)
            },
            hr: {
              marginTop: em(56, 18),
              marginBottom: em(56, 18)
            },
            "hr + *": {
              marginTop: "0"
            },
            "h2 + *": {
              marginTop: "0"
            },
            "h3 + *": {
              marginTop: "0"
            },
            "h4 + *": {
              marginTop: "0"
            },
            table: {
              fontSize: em(16, 18),
              lineHeight: round(24 / 16)
            },
            "thead th": {
              paddingRight: em(12, 16),
              paddingBottom: em(12, 16),
              paddingLeft: em(12, 16)
            },
            "thead th:first-child": {
              paddingLeft: "0"
            },
            "thead th:last-child": {
              paddingRight: "0"
            },
            "tbody td, tfoot td": {
              paddingTop: em(12, 16),
              paddingRight: em(12, 16),
              paddingBottom: em(12, 16),
              paddingLeft: em(12, 16)
            },
            "tbody td:first-child, tfoot td:first-child": {
              paddingLeft: "0"
            },
            "tbody td:last-child, tfoot td:last-child": {
              paddingRight: "0"
            }
          },
          {
            "> :first-child": {
              marginTop: "0"
            },
            "> :last-child": {
              marginBottom: "0"
            }
          }
        ]
      },
      xl: {
        css: [
          {
            fontSize: rem(20),
            lineHeight: round(36 / 20),
            p: {
              marginTop: em(24, 20),
              marginBottom: em(24, 20)
            },
            '[class~="lead"]': {
              fontSize: em(24, 20),
              lineHeight: round(36 / 24),
              marginTop: em(24, 24),
              marginBottom: em(24, 24)
            },
            blockquote: {
              marginTop: em(48, 30),
              marginBottom: em(48, 30),
              paddingLeft: em(32, 30)
            },
            h1: {
              fontSize: em(56, 20),
              marginTop: "0",
              marginBottom: em(48, 56),
              lineHeight: round(56 / 56)
            },
            h2: {
              fontSize: em(36, 20),
              marginTop: em(56, 36),
              marginBottom: em(32, 36),
              lineHeight: round(40 / 36)
            },
            h3: {
              fontSize: em(30, 20),
              marginTop: em(48, 30),
              marginBottom: em(20, 30),
              lineHeight: round(40 / 30)
            },
            h4: {
              marginTop: em(36, 20),
              marginBottom: em(12, 20),
              lineHeight: round(32 / 20)
            },
            img: {
              marginTop: em(40, 20),
              marginBottom: em(40, 20)
            },
            video: {
              marginTop: em(40, 20),
              marginBottom: em(40, 20)
            },
            figure: {
              marginTop: em(40, 20),
              marginBottom: em(40, 20)
            },
            "figure > *": {
              marginTop: "0",
              marginBottom: "0"
            },
            figcaption: {
              fontSize: em(18, 20),
              lineHeight: round(28 / 18),
              marginTop: em(18, 18)
            },
            code: {
              fontSize: em(18, 20)
            },
            "h2 code": {
              fontSize: em(31, 36)
            },
            "h3 code": {
              fontSize: em(27, 30)
            },
            pre: {
              fontSize: em(18, 20),
              lineHeight: round(32 / 18),
              marginTop: em(36, 18),
              marginBottom: em(36, 18),
              borderRadius: rem(8),
              paddingTop: em(20, 18),
              paddingRight: em(24, 18),
              paddingBottom: em(20, 18),
              paddingLeft: em(24, 18)
            },
            ol: {
              marginTop: em(24, 20),
              marginBottom: em(24, 20),
              paddingLeft: em(32, 20)
            },
            ul: {
              marginTop: em(24, 20),
              marginBottom: em(24, 20),
              paddingLeft: em(32, 20)
            },
            li: {
              marginTop: em(12, 20),
              marginBottom: em(12, 20)
            },
            "ol > li": {
              paddingLeft: em(8, 20)
            },
            "ul > li": {
              paddingLeft: em(8, 20)
            },
            "> ul > li p": {
              marginTop: em(16, 20),
              marginBottom: em(16, 20)
            },
            "> ul > li > *:first-child": {
              marginTop: em(24, 20)
            },
            "> ul > li > *:last-child": {
              marginBottom: em(24, 20)
            },
            "> ol > li > *:first-child": {
              marginTop: em(24, 20)
            },
            "> ol > li > *:last-child": {
              marginBottom: em(24, 20)
            },
            "ul ul, ul ol, ol ul, ol ol": {
              marginTop: em(16, 20),
              marginBottom: em(16, 20)
            },
            hr: {
              marginTop: em(56, 20),
              marginBottom: em(56, 20)
            },
            "hr + *": {
              marginTop: "0"
            },
            "h2 + *": {
              marginTop: "0"
            },
            "h3 + *": {
              marginTop: "0"
            },
            "h4 + *": {
              marginTop: "0"
            },
            table: {
              fontSize: em(18, 20),
              lineHeight: round(28 / 18)
            },
            "thead th": {
              paddingRight: em(12, 18),
              paddingBottom: em(16, 18),
              paddingLeft: em(12, 18)
            },
            "thead th:first-child": {
              paddingLeft: "0"
            },
            "thead th:last-child": {
              paddingRight: "0"
            },
            "tbody td, tfoot td": {
              paddingTop: em(16, 18),
              paddingRight: em(12, 18),
              paddingBottom: em(16, 18),
              paddingLeft: em(12, 18)
            },
            "tbody td:first-child, tfoot td:first-child": {
              paddingLeft: "0"
            },
            "tbody td:last-child, tfoot td:last-child": {
              paddingRight: "0"
            }
          },
          {
            "> :first-child": {
              marginTop: "0"
            },
            "> :last-child": {
              marginBottom: "0"
            }
          }
        ]
      },
      "2xl": {
        css: [
          {
            fontSize: rem(24),
            lineHeight: round(40 / 24),
            p: {
              marginTop: em(32, 24),
              marginBottom: em(32, 24)
            },
            '[class~="lead"]': {
              fontSize: em(30, 24),
              lineHeight: round(44 / 30),
              marginTop: em(32, 30),
              marginBottom: em(32, 30)
            },
            blockquote: {
              marginTop: em(64, 36),
              marginBottom: em(64, 36),
              paddingLeft: em(40, 36)
            },
            h1: {
              fontSize: em(64, 24),
              marginTop: "0",
              marginBottom: em(56, 64),
              lineHeight: round(64 / 64)
            },
            h2: {
              fontSize: em(48, 24),
              marginTop: em(72, 48),
              marginBottom: em(40, 48),
              lineHeight: round(52 / 48)
            },
            h3: {
              fontSize: em(36, 24),
              marginTop: em(56, 36),
              marginBottom: em(24, 36),
              lineHeight: round(44 / 36)
            },
            h4: {
              marginTop: em(40, 24),
              marginBottom: em(16, 24),
              lineHeight: round(36 / 24)
            },
            img: {
              marginTop: em(48, 24),
              marginBottom: em(48, 24)
            },
            video: {
              marginTop: em(48, 24),
              marginBottom: em(48, 24)
            },
            figure: {
              marginTop: em(48, 24),
              marginBottom: em(48, 24)
            },
            "figure > *": {
              marginTop: "0",
              marginBottom: "0"
            },
            figcaption: {
              fontSize: em(20, 24),
              lineHeight: round(32 / 20),
              marginTop: em(20, 20)
            },
            code: {
              fontSize: em(20, 24)
            },
            "h2 code": {
              fontSize: em(42, 48)
            },
            "h3 code": {
              fontSize: em(32, 36)
            },
            pre: {
              fontSize: em(20, 24),
              lineHeight: round(36 / 20),
              marginTop: em(40, 20),
              marginBottom: em(40, 20),
              borderRadius: rem(8),
              paddingTop: em(24, 20),
              paddingRight: em(32, 20),
              paddingBottom: em(24, 20),
              paddingLeft: em(32, 20)
            },
            ol: {
              marginTop: em(32, 24),
              marginBottom: em(32, 24),
              paddingLeft: em(38, 24)
            },
            ul: {
              marginTop: em(32, 24),
              marginBottom: em(32, 24),
              paddingLeft: em(38, 24)
            },
            li: {
              marginTop: em(12, 24),
              marginBottom: em(12, 24)
            },
            "ol > li": {
              paddingLeft: em(10, 24)
            },
            "ul > li": {
              paddingLeft: em(10, 24)
            },
            "> ul > li p": {
              marginTop: em(20, 24),
              marginBottom: em(20, 24)
            },
            "> ul > li > *:first-child": {
              marginTop: em(32, 24)
            },
            "> ul > li > *:last-child": {
              marginBottom: em(32, 24)
            },
            "> ol > li > *:first-child": {
              marginTop: em(32, 24)
            },
            "> ol > li > *:last-child": {
              marginBottom: em(32, 24)
            },
            "ul ul, ul ol, ol ul, ol ol": {
              marginTop: em(16, 24),
              marginBottom: em(16, 24)
            },
            hr: {
              marginTop: em(72, 24),
              marginBottom: em(72, 24)
            },
            "hr + *": {
              marginTop: "0"
            },
            "h2 + *": {
              marginTop: "0"
            },
            "h3 + *": {
              marginTop: "0"
            },
            "h4 + *": {
              marginTop: "0"
            },
            table: {
              fontSize: em(20, 24),
              lineHeight: round(28 / 20)
            },
            "thead th": {
              paddingRight: em(12, 20),
              paddingBottom: em(16, 20),
              paddingLeft: em(12, 20)
            },
            "thead th:first-child": {
              paddingLeft: "0"
            },
            "thead th:last-child": {
              paddingRight: "0"
            },
            "tbody td, tfoot td": {
              paddingTop: em(16, 20),
              paddingRight: em(12, 20),
              paddingBottom: em(16, 20),
              paddingLeft: em(12, 20)
            },
            "tbody td:first-child, tfoot td:first-child": {
              paddingLeft: "0"
            },
            "tbody td:last-child, tfoot td:last-child": {
              paddingRight: "0"
            }
          },
          {
            "> :first-child": {
              marginTop: "0"
            },
            "> :last-child": {
              marginBottom: "0"
            }
          }
        ]
      },
      invert: {
        css: {
          "--tw-prose-body": "var(--tw-prose-invert-body)",
          "--tw-prose-headings": "var(--tw-prose-invert-headings)",
          "--tw-prose-lead": "var(--tw-prose-invert-lead)",
          "--tw-prose-links": "var(--tw-prose-invert-links)",
          "--tw-prose-bold": "var(--tw-prose-invert-bold)",
          "--tw-prose-counters": "var(--tw-prose-invert-counters)",
          "--tw-prose-bullets": "var(--tw-prose-invert-bullets)",
          "--tw-prose-hr": "var(--tw-prose-invert-hr)",
          "--tw-prose-quotes": "var(--tw-prose-invert-quotes)",
          "--tw-prose-quote-borders": "var(--tw-prose-invert-quote-borders)",
          "--tw-prose-captions": "var(--tw-prose-invert-captions)",
          "--tw-prose-code": "var(--tw-prose-invert-code)",
          "--tw-prose-pre-code": "var(--tw-prose-invert-pre-code)",
          "--tw-prose-pre-bg": "var(--tw-prose-invert-pre-bg)",
          "--tw-prose-th-borders": "var(--tw-prose-invert-th-borders)",
          "--tw-prose-td-borders": "var(--tw-prose-invert-td-borders)"
        }
      },
      slate: {
        css: {
          "--tw-prose-body": colors2.slate[700],
          "--tw-prose-headings": colors2.slate[900],
          "--tw-prose-lead": colors2.slate[600],
          "--tw-prose-links": colors2.slate[900],
          "--tw-prose-bold": colors2.slate[900],
          "--tw-prose-counters": colors2.slate[500],
          "--tw-prose-bullets": colors2.slate[300],
          "--tw-prose-hr": colors2.slate[200],
          "--tw-prose-quotes": colors2.slate[900],
          "--tw-prose-quote-borders": colors2.slate[200],
          "--tw-prose-captions": colors2.slate[500],
          "--tw-prose-code": colors2.slate[900],
          "--tw-prose-pre-code": colors2.slate[200],
          "--tw-prose-pre-bg": colors2.slate[800],
          "--tw-prose-th-borders": colors2.slate[300],
          "--tw-prose-td-borders": colors2.slate[200],
          "--tw-prose-invert-body": colors2.slate[300],
          "--tw-prose-invert-headings": colors2.white,
          "--tw-prose-invert-lead": colors2.slate[400],
          "--tw-prose-invert-links": colors2.white,
          "--tw-prose-invert-bold": colors2.white,
          "--tw-prose-invert-counters": colors2.slate[400],
          "--tw-prose-invert-bullets": colors2.slate[600],
          "--tw-prose-invert-hr": colors2.slate[700],
          "--tw-prose-invert-quotes": colors2.slate[100],
          "--tw-prose-invert-quote-borders": colors2.slate[700],
          "--tw-prose-invert-captions": colors2.slate[400],
          "--tw-prose-invert-code": colors2.white,
          "--tw-prose-invert-pre-code": colors2.slate[300],
          "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
          "--tw-prose-invert-th-borders": colors2.slate[600],
          "--tw-prose-invert-td-borders": colors2.slate[700]
        }
      },
      gray: {
        css: {
          "--tw-prose-body": colors2.gray[700],
          "--tw-prose-headings": colors2.gray[900],
          "--tw-prose-lead": colors2.gray[600],
          "--tw-prose-links": colors2.gray[900],
          "--tw-prose-bold": colors2.gray[900],
          "--tw-prose-counters": colors2.gray[500],
          "--tw-prose-bullets": colors2.gray[300],
          "--tw-prose-hr": colors2.gray[200],
          "--tw-prose-quotes": colors2.gray[900],
          "--tw-prose-quote-borders": colors2.gray[200],
          "--tw-prose-captions": colors2.gray[500],
          "--tw-prose-code": colors2.gray[900],
          "--tw-prose-pre-code": colors2.gray[200],
          "--tw-prose-pre-bg": colors2.gray[800],
          "--tw-prose-th-borders": colors2.gray[300],
          "--tw-prose-td-borders": colors2.gray[200],
          "--tw-prose-invert-body": colors2.gray[300],
          "--tw-prose-invert-headings": colors2.white,
          "--tw-prose-invert-lead": colors2.gray[400],
          "--tw-prose-invert-links": colors2.white,
          "--tw-prose-invert-bold": colors2.white,
          "--tw-prose-invert-counters": colors2.gray[400],
          "--tw-prose-invert-bullets": colors2.gray[600],
          "--tw-prose-invert-hr": colors2.gray[700],
          "--tw-prose-invert-quotes": colors2.gray[100],
          "--tw-prose-invert-quote-borders": colors2.gray[700],
          "--tw-prose-invert-captions": colors2.gray[400],
          "--tw-prose-invert-code": colors2.white,
          "--tw-prose-invert-pre-code": colors2.gray[300],
          "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
          "--tw-prose-invert-th-borders": colors2.gray[600],
          "--tw-prose-invert-td-borders": colors2.gray[700]
        }
      },
      zinc: {
        css: {
          "--tw-prose-body": colors2.zinc[700],
          "--tw-prose-headings": colors2.zinc[900],
          "--tw-prose-lead": colors2.zinc[600],
          "--tw-prose-links": colors2.zinc[900],
          "--tw-prose-bold": colors2.zinc[900],
          "--tw-prose-counters": colors2.zinc[500],
          "--tw-prose-bullets": colors2.zinc[300],
          "--tw-prose-hr": colors2.zinc[200],
          "--tw-prose-quotes": colors2.zinc[900],
          "--tw-prose-quote-borders": colors2.zinc[200],
          "--tw-prose-captions": colors2.zinc[500],
          "--tw-prose-code": colors2.zinc[900],
          "--tw-prose-pre-code": colors2.zinc[200],
          "--tw-prose-pre-bg": colors2.zinc[800],
          "--tw-prose-th-borders": colors2.zinc[300],
          "--tw-prose-td-borders": colors2.zinc[200],
          "--tw-prose-invert-body": colors2.zinc[300],
          "--tw-prose-invert-headings": colors2.white,
          "--tw-prose-invert-lead": colors2.zinc[400],
          "--tw-prose-invert-links": colors2.white,
          "--tw-prose-invert-bold": colors2.white,
          "--tw-prose-invert-counters": colors2.zinc[400],
          "--tw-prose-invert-bullets": colors2.zinc[600],
          "--tw-prose-invert-hr": colors2.zinc[700],
          "--tw-prose-invert-quotes": colors2.zinc[100],
          "--tw-prose-invert-quote-borders": colors2.zinc[700],
          "--tw-prose-invert-captions": colors2.zinc[400],
          "--tw-prose-invert-code": colors2.white,
          "--tw-prose-invert-pre-code": colors2.zinc[300],
          "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
          "--tw-prose-invert-th-borders": colors2.zinc[600],
          "--tw-prose-invert-td-borders": colors2.zinc[700]
        }
      },
      neutral: {
        css: {
          "--tw-prose-body": colors2.neutral[700],
          "--tw-prose-headings": colors2.neutral[900],
          "--tw-prose-lead": colors2.neutral[600],
          "--tw-prose-links": colors2.neutral[900],
          "--tw-prose-bold": colors2.neutral[900],
          "--tw-prose-counters": colors2.neutral[500],
          "--tw-prose-bullets": colors2.neutral[300],
          "--tw-prose-hr": colors2.neutral[200],
          "--tw-prose-quotes": colors2.neutral[900],
          "--tw-prose-quote-borders": colors2.neutral[200],
          "--tw-prose-captions": colors2.neutral[500],
          "--tw-prose-code": colors2.neutral[900],
          "--tw-prose-pre-code": colors2.neutral[200],
          "--tw-prose-pre-bg": colors2.neutral[800],
          "--tw-prose-th-borders": colors2.neutral[300],
          "--tw-prose-td-borders": colors2.neutral[200],
          "--tw-prose-invert-body": colors2.neutral[300],
          "--tw-prose-invert-headings": colors2.white,
          "--tw-prose-invert-lead": colors2.neutral[400],
          "--tw-prose-invert-links": colors2.white,
          "--tw-prose-invert-bold": colors2.white,
          "--tw-prose-invert-counters": colors2.neutral[400],
          "--tw-prose-invert-bullets": colors2.neutral[600],
          "--tw-prose-invert-hr": colors2.neutral[700],
          "--tw-prose-invert-quotes": colors2.neutral[100],
          "--tw-prose-invert-quote-borders": colors2.neutral[700],
          "--tw-prose-invert-captions": colors2.neutral[400],
          "--tw-prose-invert-code": colors2.white,
          "--tw-prose-invert-pre-code": colors2.neutral[300],
          "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
          "--tw-prose-invert-th-borders": colors2.neutral[600],
          "--tw-prose-invert-td-borders": colors2.neutral[700]
        }
      },
      stone: {
        css: {
          "--tw-prose-body": colors2.stone[700],
          "--tw-prose-headings": colors2.stone[900],
          "--tw-prose-lead": colors2.stone[600],
          "--tw-prose-links": colors2.stone[900],
          "--tw-prose-bold": colors2.stone[900],
          "--tw-prose-counters": colors2.stone[500],
          "--tw-prose-bullets": colors2.stone[300],
          "--tw-prose-hr": colors2.stone[200],
          "--tw-prose-quotes": colors2.stone[900],
          "--tw-prose-quote-borders": colors2.stone[200],
          "--tw-prose-captions": colors2.stone[500],
          "--tw-prose-code": colors2.stone[900],
          "--tw-prose-pre-code": colors2.stone[200],
          "--tw-prose-pre-bg": colors2.stone[800],
          "--tw-prose-th-borders": colors2.stone[300],
          "--tw-prose-td-borders": colors2.stone[200],
          "--tw-prose-invert-body": colors2.stone[300],
          "--tw-prose-invert-headings": colors2.white,
          "--tw-prose-invert-lead": colors2.stone[400],
          "--tw-prose-invert-links": colors2.white,
          "--tw-prose-invert-bold": colors2.white,
          "--tw-prose-invert-counters": colors2.stone[400],
          "--tw-prose-invert-bullets": colors2.stone[600],
          "--tw-prose-invert-hr": colors2.stone[700],
          "--tw-prose-invert-quotes": colors2.stone[100],
          "--tw-prose-invert-quote-borders": colors2.stone[700],
          "--tw-prose-invert-captions": colors2.stone[400],
          "--tw-prose-invert-code": colors2.white,
          "--tw-prose-invert-pre-code": colors2.stone[300],
          "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
          "--tw-prose-invert-th-borders": colors2.stone[600],
          "--tw-prose-invert-td-borders": colors2.stone[700]
        }
      },
      red: {
        css: {
          "--tw-prose-links": colors2.red[600],
          "--tw-prose-invert-links": colors2.red[500]
        }
      },
      orange: {
        css: {
          "--tw-prose-links": colors2.orange[600],
          "--tw-prose-invert-links": colors2.orange[500]
        }
      },
      amber: {
        css: {
          "--tw-prose-links": colors2.amber[600],
          "--tw-prose-invert-links": colors2.amber[500]
        }
      },
      yellow: {
        css: {
          "--tw-prose-links": colors2.yellow[600],
          "--tw-prose-invert-links": colors2.yellow[500]
        }
      },
      lime: {
        css: {
          "--tw-prose-links": colors2.lime[600],
          "--tw-prose-invert-links": colors2.lime[500]
        }
      },
      green: {
        css: {
          "--tw-prose-links": colors2.green[600],
          "--tw-prose-invert-links": colors2.green[500]
        }
      },
      emerald: {
        css: {
          "--tw-prose-links": colors2.emerald[600],
          "--tw-prose-invert-links": colors2.emerald[500]
        }
      },
      teal: {
        css: {
          "--tw-prose-links": colors2.teal[600],
          "--tw-prose-invert-links": colors2.teal[500]
        }
      },
      cyan: {
        css: {
          "--tw-prose-links": colors2.cyan[600],
          "--tw-prose-invert-links": colors2.cyan[500]
        }
      },
      sky: {
        css: {
          "--tw-prose-links": colors2.sky[600],
          "--tw-prose-invert-links": colors2.sky[500]
        }
      },
      blue: {
        css: {
          "--tw-prose-links": colors2.blue[600],
          "--tw-prose-invert-links": colors2.blue[500]
        }
      },
      indigo: {
        css: {
          "--tw-prose-links": colors2.indigo[600],
          "--tw-prose-invert-links": colors2.indigo[500]
        }
      },
      violet: {
        css: {
          "--tw-prose-links": colors2.violet[600],
          "--tw-prose-invert-links": colors2.violet[500]
        }
      },
      purple: {
        css: {
          "--tw-prose-links": colors2.purple[600],
          "--tw-prose-invert-links": colors2.purple[500]
        }
      },
      fuchsia: {
        css: {
          "--tw-prose-links": colors2.fuchsia[600],
          "--tw-prose-invert-links": colors2.fuchsia[500]
        }
      },
      pink: {
        css: {
          "--tw-prose-links": colors2.pink[600],
          "--tw-prose-invert-links": colors2.pink[500]
        }
      },
      rose: {
        css: {
          "--tw-prose-links": colors2.rose[600],
          "--tw-prose-invert-links": colors2.rose[500]
        }
      }
    };
    module.exports = {
      DEFAULT: {
        css: [
          {
            color: "var(--tw-prose-body)",
            maxWidth: "65ch",
            p: {},
            '[class~="lead"]': {
              color: "var(--tw-prose-lead)"
            },
            a: {
              color: "var(--tw-prose-links)",
              textDecoration: "underline",
              fontWeight: "500"
            },
            strong: {
              color: "var(--tw-prose-bold)",
              fontWeight: "600"
            },
            "a strong": {
              color: "inherit"
            },
            "blockquote strong": {
              color: "inherit"
            },
            "thead th strong": {
              color: "inherit"
            },
            ol: {
              listStyleType: "decimal"
            },
            'ol[type="A"]': {
              listStyleType: "upper-alpha"
            },
            'ol[type="a"]': {
              listStyleType: "lower-alpha"
            },
            'ol[type="A" s]': {
              listStyleType: "upper-alpha"
            },
            'ol[type="a" s]': {
              listStyleType: "lower-alpha"
            },
            'ol[type="I"]': {
              listStyleType: "upper-roman"
            },
            'ol[type="i"]': {
              listStyleType: "lower-roman"
            },
            'ol[type="I" s]': {
              listStyleType: "upper-roman"
            },
            'ol[type="i" s]': {
              listStyleType: "lower-roman"
            },
            'ol[type="1"]': {
              listStyleType: "decimal"
            },
            ul: {
              listStyleType: "disc"
            },
            "ol > li::marker": {
              fontWeight: "400",
              color: "var(--tw-prose-counters)"
            },
            "ul > li::marker": {
              color: "var(--tw-prose-bullets)"
            },
            hr: {
              borderColor: "var(--tw-prose-hr)",
              borderTopWidth: 1
            },
            blockquote: {
              fontWeight: "500",
              fontStyle: "italic",
              color: "var(--tw-prose-quotes)",
              borderLeftWidth: "0.25rem",
              borderLeftColor: "var(--tw-prose-quote-borders)",
              quotes: '"\\201C""\\201D""\\2018""\\2019"'
            },
            "blockquote p:first-of-type::before": {
              content: "open-quote"
            },
            "blockquote p:last-of-type::after": {
              content: "close-quote"
            },
            h1: {
              color: "var(--tw-prose-headings)",
              fontWeight: "800"
            },
            "h1 strong": {
              fontWeight: "900",
              color: "inherit"
            },
            h2: {
              color: "var(--tw-prose-headings)",
              fontWeight: "700"
            },
            "h2 strong": {
              fontWeight: "800",
              color: "inherit"
            },
            h3: {
              color: "var(--tw-prose-headings)",
              fontWeight: "600"
            },
            "h3 strong": {
              fontWeight: "700",
              color: "inherit"
            },
            h4: {
              color: "var(--tw-prose-headings)",
              fontWeight: "600"
            },
            "h4 strong": {
              fontWeight: "700",
              color: "inherit"
            },
            img: {},
            "figure > *": {},
            figcaption: {
              color: "var(--tw-prose-captions)"
            },
            code: {
              color: "var(--tw-prose-code)",
              fontWeight: "600"
            },
            "code::before": {
              content: '"`"'
            },
            "code::after": {
              content: '"`"'
            },
            "a code": {
              color: "inherit"
            },
            "h1 code": {
              color: "inherit"
            },
            "h2 code": {
              color: "inherit"
            },
            "h3 code": {
              color: "inherit"
            },
            "h4 code": {
              color: "inherit"
            },
            "blockquote code": {
              color: "inherit"
            },
            "thead th code": {
              color: "inherit"
            },
            pre: {
              color: "var(--tw-prose-pre-code)",
              backgroundColor: "var(--tw-prose-pre-bg)",
              overflowX: "auto",
              fontWeight: "400"
            },
            "pre code": {
              backgroundColor: "transparent",
              borderWidth: "0",
              borderRadius: "0",
              padding: "0",
              fontWeight: "inherit",
              color: "inherit",
              fontSize: "inherit",
              fontFamily: "inherit",
              lineHeight: "inherit"
            },
            "pre code::before": {
              content: "none"
            },
            "pre code::after": {
              content: "none"
            },
            table: {
              width: "100%",
              tableLayout: "auto",
              textAlign: "left",
              marginTop: em(32, 16),
              marginBottom: em(32, 16)
            },
            thead: {
              borderBottomWidth: "1px",
              borderBottomColor: "var(--tw-prose-th-borders)"
            },
            "thead th": {
              color: "var(--tw-prose-headings)",
              fontWeight: "600",
              verticalAlign: "bottom"
            },
            "tbody tr": {
              borderBottomWidth: "1px",
              borderBottomColor: "var(--tw-prose-td-borders)"
            },
            "tbody tr:last-child": {
              borderBottomWidth: "0"
            },
            "tbody td": {
              verticalAlign: "baseline"
            },
            tfoot: {
              borderTopWidth: "1px",
              borderTopColor: "var(--tw-prose-th-borders)"
            },
            "tfoot td": {
              verticalAlign: "top"
            }
          },
          defaultModifiers.gray.css,
          ...defaultModifiers.base.css
        ]
      },
      ...defaultModifiers
    };
  }
});

// ../../node_modules/lodash.isplainobject/index.js
var require_lodash3 = __commonJS({
  "../../node_modules/lodash.isplainobject/index.js"(exports, module) {
    var objectTag = "[object Object]";
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    var objectToString = objectProto.toString;
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isPlainObject(value) {
      if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module.exports = isPlainObject;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/util/unesc.js
var require_unesc = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/util/unesc.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = unesc;
    function gobbleHex(str) {
      var lower = str.toLowerCase();
      var hex = "";
      var spaceTerminated = false;
      for (var i = 0; i < 6 && lower[i] !== void 0; i++) {
        var code = lower.charCodeAt(i);
        var valid = code >= 97 && code <= 102 || code >= 48 && code <= 57;
        spaceTerminated = code === 32;
        if (!valid) {
          break;
        }
        hex += lower[i];
      }
      if (hex.length === 0) {
        return void 0;
      }
      var codePoint = parseInt(hex, 16);
      var isSurrogate = codePoint >= 55296 && codePoint <= 57343;
      if (isSurrogate || codePoint === 0 || codePoint > 1114111) {
        return ["\uFFFD", hex.length + (spaceTerminated ? 1 : 0)];
      }
      return [String.fromCodePoint(codePoint), hex.length + (spaceTerminated ? 1 : 0)];
    }
    var CONTAINS_ESCAPE = /\\/;
    function unesc(str) {
      var needToProcess = CONTAINS_ESCAPE.test(str);
      if (!needToProcess) {
        return str;
      }
      var ret = "";
      for (var i = 0; i < str.length; i++) {
        if (str[i] === "\\") {
          var gobbled = gobbleHex(str.slice(i + 1, i + 7));
          if (gobbled !== void 0) {
            ret += gobbled[0];
            i += gobbled[1];
            continue;
          }
          if (str[i + 1] === "\\") {
            ret += "\\";
            i++;
            continue;
          }
          if (str.length === i + 1) {
            ret += str[i];
          }
          continue;
        }
        ret += str[i];
      }
      return ret;
    }
    module.exports = exports.default;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/util/getProp.js
var require_getProp = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/util/getProp.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = getProp;
    function getProp(obj) {
      for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        props[_key - 1] = arguments[_key];
      }
      while (props.length > 0) {
        var prop = props.shift();
        if (!obj[prop]) {
          return void 0;
        }
        obj = obj[prop];
      }
      return obj;
    }
    module.exports = exports.default;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/util/ensureObject.js
var require_ensureObject = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/util/ensureObject.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = ensureObject;
    function ensureObject(obj) {
      for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        props[_key - 1] = arguments[_key];
      }
      while (props.length > 0) {
        var prop = props.shift();
        if (!obj[prop]) {
          obj[prop] = {};
        }
        obj = obj[prop];
      }
    }
    module.exports = exports.default;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/util/stripComments.js
var require_stripComments = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/util/stripComments.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = stripComments;
    function stripComments(str) {
      var s = "";
      var commentStart = str.indexOf("/*");
      var lastEnd = 0;
      while (commentStart >= 0) {
        s = s + str.slice(lastEnd, commentStart);
        var commentEnd = str.indexOf("*/", commentStart + 2);
        if (commentEnd < 0) {
          return s;
        }
        lastEnd = commentEnd + 2;
        commentStart = str.indexOf("/*", lastEnd);
      }
      s = s + str.slice(lastEnd);
      return s;
    }
    module.exports = exports.default;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/util/index.js
var require_util = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/util/index.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.stripComments = exports.ensureObject = exports.getProp = exports.unesc = void 0;
    var _unesc = _interopRequireDefault(require_unesc());
    exports.unesc = _unesc["default"];
    var _getProp = _interopRequireDefault(require_getProp());
    exports.getProp = _getProp["default"];
    var _ensureObject = _interopRequireDefault(require_ensureObject());
    exports.ensureObject = _ensureObject["default"];
    var _stripComments = _interopRequireDefault(require_stripComments());
    exports.stripComments = _stripComments["default"];
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/node.js
var require_node = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/node.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = void 0;
    var _util = require_util();
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var cloneNode = function cloneNode2(obj, parent) {
      if (typeof obj !== "object" || obj === null) {
        return obj;
      }
      var cloned = new obj.constructor();
      for (var i in obj) {
        if (!obj.hasOwnProperty(i)) {
          continue;
        }
        var value = obj[i];
        var type = typeof value;
        if (i === "parent" && type === "object") {
          if (parent) {
            cloned[i] = parent;
          }
        } else if (value instanceof Array) {
          cloned[i] = value.map(function(j) {
            return cloneNode2(j, cloned);
          });
        } else {
          cloned[i] = cloneNode2(value, cloned);
        }
      }
      return cloned;
    };
    var Node = /* @__PURE__ */ function() {
      function Node2(opts) {
        if (opts === void 0) {
          opts = {};
        }
        Object.assign(this, opts);
        this.spaces = this.spaces || {};
        this.spaces.before = this.spaces.before || "";
        this.spaces.after = this.spaces.after || "";
      }
      var _proto = Node2.prototype;
      _proto.remove = function remove() {
        if (this.parent) {
          this.parent.removeChild(this);
        }
        this.parent = void 0;
        return this;
      };
      _proto.replaceWith = function replaceWith() {
        if (this.parent) {
          for (var index in arguments) {
            this.parent.insertBefore(this, arguments[index]);
          }
          this.remove();
        }
        return this;
      };
      _proto.next = function next() {
        return this.parent.at(this.parent.index(this) + 1);
      };
      _proto.prev = function prev() {
        return this.parent.at(this.parent.index(this) - 1);
      };
      _proto.clone = function clone(overrides) {
        if (overrides === void 0) {
          overrides = {};
        }
        var cloned = cloneNode(this);
        for (var name in overrides) {
          cloned[name] = overrides[name];
        }
        return cloned;
      };
      _proto.appendToPropertyAndEscape = function appendToPropertyAndEscape(name, value, valueEscaped) {
        if (!this.raws) {
          this.raws = {};
        }
        var originalValue = this[name];
        var originalEscaped = this.raws[name];
        this[name] = originalValue + value;
        if (originalEscaped || valueEscaped !== value) {
          this.raws[name] = (originalEscaped || originalValue) + valueEscaped;
        } else {
          delete this.raws[name];
        }
      };
      _proto.setPropertyAndEscape = function setPropertyAndEscape(name, value, valueEscaped) {
        if (!this.raws) {
          this.raws = {};
        }
        this[name] = value;
        this.raws[name] = valueEscaped;
      };
      _proto.setPropertyWithoutEscape = function setPropertyWithoutEscape(name, value) {
        this[name] = value;
        if (this.raws) {
          delete this.raws[name];
        }
      };
      _proto.isAtPosition = function isAtPosition(line, column) {
        if (this.source && this.source.start && this.source.end) {
          if (this.source.start.line > line) {
            return false;
          }
          if (this.source.end.line < line) {
            return false;
          }
          if (this.source.start.line === line && this.source.start.column > column) {
            return false;
          }
          if (this.source.end.line === line && this.source.end.column < column) {
            return false;
          }
          return true;
        }
        return void 0;
      };
      _proto.stringifyProperty = function stringifyProperty(name) {
        return this.raws && this.raws[name] || this[name];
      };
      _proto.valueToString = function valueToString() {
        return String(this.stringifyProperty("value"));
      };
      _proto.toString = function toString() {
        return [this.rawSpaceBefore, this.valueToString(), this.rawSpaceAfter].join("");
      };
      _createClass(Node2, [{
        key: "rawSpaceBefore",
        get: function get() {
          var rawSpace = this.raws && this.raws.spaces && this.raws.spaces.before;
          if (rawSpace === void 0) {
            rawSpace = this.spaces && this.spaces.before;
          }
          return rawSpace || "";
        },
        set: function set(raw) {
          (0, _util.ensureObject)(this, "raws", "spaces");
          this.raws.spaces.before = raw;
        }
      }, {
        key: "rawSpaceAfter",
        get: function get() {
          var rawSpace = this.raws && this.raws.spaces && this.raws.spaces.after;
          if (rawSpace === void 0) {
            rawSpace = this.spaces.after;
          }
          return rawSpace || "";
        },
        set: function set(raw) {
          (0, _util.ensureObject)(this, "raws", "spaces");
          this.raws.spaces.after = raw;
        }
      }]);
      return Node2;
    }();
    exports["default"] = Node;
    module.exports = exports.default;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/types.js
var require_types = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/types.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.UNIVERSAL = exports.ATTRIBUTE = exports.CLASS = exports.COMBINATOR = exports.COMMENT = exports.ID = exports.NESTING = exports.PSEUDO = exports.ROOT = exports.SELECTOR = exports.STRING = exports.TAG = void 0;
    var TAG = "tag";
    exports.TAG = TAG;
    var STRING = "string";
    exports.STRING = STRING;
    var SELECTOR = "selector";
    exports.SELECTOR = SELECTOR;
    var ROOT = "root";
    exports.ROOT = ROOT;
    var PSEUDO = "pseudo";
    exports.PSEUDO = PSEUDO;
    var NESTING = "nesting";
    exports.NESTING = NESTING;
    var ID = "id";
    exports.ID = ID;
    var COMMENT = "comment";
    exports.COMMENT = COMMENT;
    var COMBINATOR = "combinator";
    exports.COMBINATOR = COMBINATOR;
    var CLASS = "class";
    exports.CLASS = CLASS;
    var ATTRIBUTE = "attribute";
    exports.ATTRIBUTE = ATTRIBUTE;
    var UNIVERSAL = "universal";
    exports.UNIVERSAL = UNIVERSAL;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/container.js
var require_container = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/container.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = void 0;
    var _node = _interopRequireDefault(require_node());
    var types = _interopRequireWildcard(require_types());
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
      var it;
      if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it)
            o = it;
          var i = 0;
          return function() {
            if (i >= o.length)
              return { done: true };
            return { done: false, value: o[i++] };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      it = o[Symbol.iterator]();
      return it.next.bind(it);
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var Container = /* @__PURE__ */ function(_Node) {
      _inheritsLoose(Container2, _Node);
      function Container2(opts) {
        var _this;
        _this = _Node.call(this, opts) || this;
        if (!_this.nodes) {
          _this.nodes = [];
        }
        return _this;
      }
      var _proto = Container2.prototype;
      _proto.append = function append(selector) {
        selector.parent = this;
        this.nodes.push(selector);
        return this;
      };
      _proto.prepend = function prepend(selector) {
        selector.parent = this;
        this.nodes.unshift(selector);
        return this;
      };
      _proto.at = function at(index) {
        return this.nodes[index];
      };
      _proto.index = function index(child) {
        if (typeof child === "number") {
          return child;
        }
        return this.nodes.indexOf(child);
      };
      _proto.removeChild = function removeChild(child) {
        child = this.index(child);
        this.at(child).parent = void 0;
        this.nodes.splice(child, 1);
        var index;
        for (var id in this.indexes) {
          index = this.indexes[id];
          if (index >= child) {
            this.indexes[id] = index - 1;
          }
        }
        return this;
      };
      _proto.removeAll = function removeAll() {
        for (var _iterator = _createForOfIteratorHelperLoose(this.nodes), _step; !(_step = _iterator()).done; ) {
          var node = _step.value;
          node.parent = void 0;
        }
        this.nodes = [];
        return this;
      };
      _proto.empty = function empty() {
        return this.removeAll();
      };
      _proto.insertAfter = function insertAfter(oldNode, newNode) {
        newNode.parent = this;
        var oldIndex = this.index(oldNode);
        this.nodes.splice(oldIndex + 1, 0, newNode);
        newNode.parent = this;
        var index;
        for (var id in this.indexes) {
          index = this.indexes[id];
          if (oldIndex <= index) {
            this.indexes[id] = index + 1;
          }
        }
        return this;
      };
      _proto.insertBefore = function insertBefore(oldNode, newNode) {
        newNode.parent = this;
        var oldIndex = this.index(oldNode);
        this.nodes.splice(oldIndex, 0, newNode);
        newNode.parent = this;
        var index;
        for (var id in this.indexes) {
          index = this.indexes[id];
          if (index <= oldIndex) {
            this.indexes[id] = index + 1;
          }
        }
        return this;
      };
      _proto._findChildAtPosition = function _findChildAtPosition(line, col) {
        var found = void 0;
        this.each(function(node) {
          if (node.atPosition) {
            var foundChild = node.atPosition(line, col);
            if (foundChild) {
              found = foundChild;
              return false;
            }
          } else if (node.isAtPosition(line, col)) {
            found = node;
            return false;
          }
        });
        return found;
      };
      _proto.atPosition = function atPosition(line, col) {
        if (this.isAtPosition(line, col)) {
          return this._findChildAtPosition(line, col) || this;
        } else {
          return void 0;
        }
      };
      _proto._inferEndPosition = function _inferEndPosition() {
        if (this.last && this.last.source && this.last.source.end) {
          this.source = this.source || {};
          this.source.end = this.source.end || {};
          Object.assign(this.source.end, this.last.source.end);
        }
      };
      _proto.each = function each(callback) {
        if (!this.lastEach) {
          this.lastEach = 0;
        }
        if (!this.indexes) {
          this.indexes = {};
        }
        this.lastEach++;
        var id = this.lastEach;
        this.indexes[id] = 0;
        if (!this.length) {
          return void 0;
        }
        var index, result;
        while (this.indexes[id] < this.length) {
          index = this.indexes[id];
          result = callback(this.at(index), index);
          if (result === false) {
            break;
          }
          this.indexes[id] += 1;
        }
        delete this.indexes[id];
        if (result === false) {
          return false;
        }
      };
      _proto.walk = function walk(callback) {
        return this.each(function(node, i) {
          var result = callback(node, i);
          if (result !== false && node.length) {
            result = node.walk(callback);
          }
          if (result === false) {
            return false;
          }
        });
      };
      _proto.walkAttributes = function walkAttributes(callback) {
        var _this2 = this;
        return this.walk(function(selector) {
          if (selector.type === types.ATTRIBUTE) {
            return callback.call(_this2, selector);
          }
        });
      };
      _proto.walkClasses = function walkClasses(callback) {
        var _this3 = this;
        return this.walk(function(selector) {
          if (selector.type === types.CLASS) {
            return callback.call(_this3, selector);
          }
        });
      };
      _proto.walkCombinators = function walkCombinators(callback) {
        var _this4 = this;
        return this.walk(function(selector) {
          if (selector.type === types.COMBINATOR) {
            return callback.call(_this4, selector);
          }
        });
      };
      _proto.walkComments = function walkComments(callback) {
        var _this5 = this;
        return this.walk(function(selector) {
          if (selector.type === types.COMMENT) {
            return callback.call(_this5, selector);
          }
        });
      };
      _proto.walkIds = function walkIds(callback) {
        var _this6 = this;
        return this.walk(function(selector) {
          if (selector.type === types.ID) {
            return callback.call(_this6, selector);
          }
        });
      };
      _proto.walkNesting = function walkNesting(callback) {
        var _this7 = this;
        return this.walk(function(selector) {
          if (selector.type === types.NESTING) {
            return callback.call(_this7, selector);
          }
        });
      };
      _proto.walkPseudos = function walkPseudos(callback) {
        var _this8 = this;
        return this.walk(function(selector) {
          if (selector.type === types.PSEUDO) {
            return callback.call(_this8, selector);
          }
        });
      };
      _proto.walkTags = function walkTags(callback) {
        var _this9 = this;
        return this.walk(function(selector) {
          if (selector.type === types.TAG) {
            return callback.call(_this9, selector);
          }
        });
      };
      _proto.walkUniversals = function walkUniversals(callback) {
        var _this10 = this;
        return this.walk(function(selector) {
          if (selector.type === types.UNIVERSAL) {
            return callback.call(_this10, selector);
          }
        });
      };
      _proto.split = function split(callback) {
        var _this11 = this;
        var current = [];
        return this.reduce(function(memo, node, index) {
          var split2 = callback.call(_this11, node);
          current.push(node);
          if (split2) {
            memo.push(current);
            current = [];
          } else if (index === _this11.length - 1) {
            memo.push(current);
          }
          return memo;
        }, []);
      };
      _proto.map = function map(callback) {
        return this.nodes.map(callback);
      };
      _proto.reduce = function reduce(callback, memo) {
        return this.nodes.reduce(callback, memo);
      };
      _proto.every = function every(callback) {
        return this.nodes.every(callback);
      };
      _proto.some = function some(callback) {
        return this.nodes.some(callback);
      };
      _proto.filter = function filter(callback) {
        return this.nodes.filter(callback);
      };
      _proto.sort = function sort(callback) {
        return this.nodes.sort(callback);
      };
      _proto.toString = function toString() {
        return this.map(String).join("");
      };
      _createClass(Container2, [{
        key: "first",
        get: function get() {
          return this.at(0);
        }
      }, {
        key: "last",
        get: function get() {
          return this.at(this.length - 1);
        }
      }, {
        key: "length",
        get: function get() {
          return this.nodes.length;
        }
      }]);
      return Container2;
    }(_node["default"]);
    exports["default"] = Container;
    module.exports = exports.default;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/root.js
var require_root = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/root.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = void 0;
    var _container = _interopRequireDefault(require_container());
    var _types = require_types();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var Root = /* @__PURE__ */ function(_Container) {
      _inheritsLoose(Root2, _Container);
      function Root2(opts) {
        var _this;
        _this = _Container.call(this, opts) || this;
        _this.type = _types.ROOT;
        return _this;
      }
      var _proto = Root2.prototype;
      _proto.toString = function toString() {
        var str = this.reduce(function(memo, selector) {
          memo.push(String(selector));
          return memo;
        }, []).join(",");
        return this.trailingComma ? str + "," : str;
      };
      _proto.error = function error(message, options) {
        if (this._error) {
          return this._error(message, options);
        } else {
          return new Error(message);
        }
      };
      _createClass(Root2, [{
        key: "errorGenerator",
        set: function set(handler) {
          this._error = handler;
        }
      }]);
      return Root2;
    }(_container["default"]);
    exports["default"] = Root;
    module.exports = exports.default;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/selector.js
var require_selector = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/selector.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = void 0;
    var _container = _interopRequireDefault(require_container());
    var _types = require_types();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var Selector = /* @__PURE__ */ function(_Container) {
      _inheritsLoose(Selector2, _Container);
      function Selector2(opts) {
        var _this;
        _this = _Container.call(this, opts) || this;
        _this.type = _types.SELECTOR;
        return _this;
      }
      return Selector2;
    }(_container["default"]);
    exports["default"] = Selector;
    module.exports = exports.default;
  }
});

// ../../node_modules/cssesc/cssesc.js
var require_cssesc = __commonJS({
  "../../node_modules/cssesc/cssesc.js"(exports, module) {
    "use strict";
    var object = {};
    var hasOwnProperty = object.hasOwnProperty;
    var merge = function merge2(options, defaults) {
      if (!options) {
        return defaults;
      }
      var result = {};
      for (var key in defaults) {
        result[key] = hasOwnProperty.call(options, key) ? options[key] : defaults[key];
      }
      return result;
    };
    var regexAnySingleEscape = /[ -,\.\/:-@\[-\^`\{-~]/;
    var regexSingleEscape = /[ -,\.\/:-@\[\]\^`\{-~]/;
    var regexExcessiveSpaces = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g;
    var cssesc = function cssesc2(string, options) {
      options = merge(options, cssesc2.options);
      if (options.quotes != "single" && options.quotes != "double") {
        options.quotes = "single";
      }
      var quote = options.quotes == "double" ? '"' : "'";
      var isIdentifier = options.isIdentifier;
      var firstChar = string.charAt(0);
      var output = "";
      var counter = 0;
      var length = string.length;
      while (counter < length) {
        var character = string.charAt(counter++);
        var codePoint = character.charCodeAt();
        var value = void 0;
        if (codePoint < 32 || codePoint > 126) {
          if (codePoint >= 55296 && codePoint <= 56319 && counter < length) {
            var extra = string.charCodeAt(counter++);
            if ((extra & 64512) == 56320) {
              codePoint = ((codePoint & 1023) << 10) + (extra & 1023) + 65536;
            } else {
              counter--;
            }
          }
          value = "\\" + codePoint.toString(16).toUpperCase() + " ";
        } else {
          if (options.escapeEverything) {
            if (regexAnySingleEscape.test(character)) {
              value = "\\" + character;
            } else {
              value = "\\" + codePoint.toString(16).toUpperCase() + " ";
            }
          } else if (/[\t\n\f\r\x0B]/.test(character)) {
            value = "\\" + codePoint.toString(16).toUpperCase() + " ";
          } else if (character == "\\" || !isIdentifier && (character == '"' && quote == character || character == "'" && quote == character) || isIdentifier && regexSingleEscape.test(character)) {
            value = "\\" + character;
          } else {
            value = character;
          }
        }
        output += value;
      }
      if (isIdentifier) {
        if (/^-[-\d]/.test(output)) {
          output = "\\-" + output.slice(1);
        } else if (/\d/.test(firstChar)) {
          output = "\\3" + firstChar + " " + output.slice(1);
        }
      }
      output = output.replace(regexExcessiveSpaces, function($0, $1, $2) {
        if ($1 && $1.length % 2) {
          return $0;
        }
        return ($1 || "") + $2;
      });
      if (!isIdentifier && options.wrap) {
        return quote + output + quote;
      }
      return output;
    };
    cssesc.options = {
      "escapeEverything": false,
      "isIdentifier": false,
      "quotes": "single",
      "wrap": false
    };
    cssesc.version = "3.0.0";
    module.exports = cssesc;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/className.js
var require_className = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/className.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = void 0;
    var _cssesc = _interopRequireDefault(require_cssesc());
    var _util = require_util();
    var _node = _interopRequireDefault(require_node());
    var _types = require_types();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var ClassName = /* @__PURE__ */ function(_Node) {
      _inheritsLoose(ClassName2, _Node);
      function ClassName2(opts) {
        var _this;
        _this = _Node.call(this, opts) || this;
        _this.type = _types.CLASS;
        _this._constructed = true;
        return _this;
      }
      var _proto = ClassName2.prototype;
      _proto.valueToString = function valueToString() {
        return "." + _Node.prototype.valueToString.call(this);
      };
      _createClass(ClassName2, [{
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(v) {
          if (this._constructed) {
            var escaped = (0, _cssesc["default"])(v, {
              isIdentifier: true
            });
            if (escaped !== v) {
              (0, _util.ensureObject)(this, "raws");
              this.raws.value = escaped;
            } else if (this.raws) {
              delete this.raws.value;
            }
          }
          this._value = v;
        }
      }]);
      return ClassName2;
    }(_node["default"]);
    exports["default"] = ClassName;
    module.exports = exports.default;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/comment.js
var require_comment = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/comment.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = void 0;
    var _node = _interopRequireDefault(require_node());
    var _types = require_types();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var Comment = /* @__PURE__ */ function(_Node) {
      _inheritsLoose(Comment2, _Node);
      function Comment2(opts) {
        var _this;
        _this = _Node.call(this, opts) || this;
        _this.type = _types.COMMENT;
        return _this;
      }
      return Comment2;
    }(_node["default"]);
    exports["default"] = Comment;
    module.exports = exports.default;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/id.js
var require_id = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/id.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = void 0;
    var _node = _interopRequireDefault(require_node());
    var _types = require_types();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var ID = /* @__PURE__ */ function(_Node) {
      _inheritsLoose(ID2, _Node);
      function ID2(opts) {
        var _this;
        _this = _Node.call(this, opts) || this;
        _this.type = _types.ID;
        return _this;
      }
      var _proto = ID2.prototype;
      _proto.valueToString = function valueToString() {
        return "#" + _Node.prototype.valueToString.call(this);
      };
      return ID2;
    }(_node["default"]);
    exports["default"] = ID;
    module.exports = exports.default;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/namespace.js
var require_namespace = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/namespace.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = void 0;
    var _cssesc = _interopRequireDefault(require_cssesc());
    var _util = require_util();
    var _node = _interopRequireDefault(require_node());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var Namespace = /* @__PURE__ */ function(_Node) {
      _inheritsLoose(Namespace2, _Node);
      function Namespace2() {
        return _Node.apply(this, arguments) || this;
      }
      var _proto = Namespace2.prototype;
      _proto.qualifiedName = function qualifiedName(value) {
        if (this.namespace) {
          return this.namespaceString + "|" + value;
        } else {
          return value;
        }
      };
      _proto.valueToString = function valueToString() {
        return this.qualifiedName(_Node.prototype.valueToString.call(this));
      };
      _createClass(Namespace2, [{
        key: "namespace",
        get: function get() {
          return this._namespace;
        },
        set: function set(namespace) {
          if (namespace === true || namespace === "*" || namespace === "&") {
            this._namespace = namespace;
            if (this.raws) {
              delete this.raws.namespace;
            }
            return;
          }
          var escaped = (0, _cssesc["default"])(namespace, {
            isIdentifier: true
          });
          this._namespace = namespace;
          if (escaped !== namespace) {
            (0, _util.ensureObject)(this, "raws");
            this.raws.namespace = escaped;
          } else if (this.raws) {
            delete this.raws.namespace;
          }
        }
      }, {
        key: "ns",
        get: function get() {
          return this._namespace;
        },
        set: function set(namespace) {
          this.namespace = namespace;
        }
      }, {
        key: "namespaceString",
        get: function get() {
          if (this.namespace) {
            var ns = this.stringifyProperty("namespace");
            if (ns === true) {
              return "";
            } else {
              return ns;
            }
          } else {
            return "";
          }
        }
      }]);
      return Namespace2;
    }(_node["default"]);
    exports["default"] = Namespace;
    module.exports = exports.default;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/tag.js
var require_tag = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/tag.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = void 0;
    var _namespace = _interopRequireDefault(require_namespace());
    var _types = require_types();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var Tag = /* @__PURE__ */ function(_Namespace) {
      _inheritsLoose(Tag2, _Namespace);
      function Tag2(opts) {
        var _this;
        _this = _Namespace.call(this, opts) || this;
        _this.type = _types.TAG;
        return _this;
      }
      return Tag2;
    }(_namespace["default"]);
    exports["default"] = Tag;
    module.exports = exports.default;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/string.js
var require_string = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/string.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = void 0;
    var _node = _interopRequireDefault(require_node());
    var _types = require_types();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var String2 = /* @__PURE__ */ function(_Node) {
      _inheritsLoose(String3, _Node);
      function String3(opts) {
        var _this;
        _this = _Node.call(this, opts) || this;
        _this.type = _types.STRING;
        return _this;
      }
      return String3;
    }(_node["default"]);
    exports["default"] = String2;
    module.exports = exports.default;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/pseudo.js
var require_pseudo = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/pseudo.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = void 0;
    var _container = _interopRequireDefault(require_container());
    var _types = require_types();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var Pseudo = /* @__PURE__ */ function(_Container) {
      _inheritsLoose(Pseudo2, _Container);
      function Pseudo2(opts) {
        var _this;
        _this = _Container.call(this, opts) || this;
        _this.type = _types.PSEUDO;
        return _this;
      }
      var _proto = Pseudo2.prototype;
      _proto.toString = function toString() {
        var params = this.length ? "(" + this.map(String).join(",") + ")" : "";
        return [this.rawSpaceBefore, this.stringifyProperty("value"), params, this.rawSpaceAfter].join("");
      };
      return Pseudo2;
    }(_container["default"]);
    exports["default"] = Pseudo;
    module.exports = exports.default;
  }
});

// ../../node_modules/util-deprecate/browser.js
var require_browser = __commonJS({
  "../../node_modules/util-deprecate/browser.js"(exports, module) {
    module.exports = deprecate;
    function deprecate(fn, msg) {
      if (config3("noDeprecation")) {
        return fn;
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (config3("throwDeprecation")) {
            throw new Error(msg);
          } else if (config3("traceDeprecation")) {
            console.trace(msg);
          } else {
            console.warn(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    }
    function config3(name) {
      try {
        if (!globalThis.localStorage)
          return false;
      } catch (_) {
        return false;
      }
      var val = globalThis.localStorage[name];
      if (null == val)
        return false;
      return String(val).toLowerCase() === "true";
    }
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/attribute.js
var require_attribute = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/attribute.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.unescapeValue = unescapeValue;
    exports["default"] = void 0;
    var _cssesc = _interopRequireDefault(require_cssesc());
    var _unesc = _interopRequireDefault(require_unesc());
    var _namespace = _interopRequireDefault(require_namespace());
    var _types = require_types();
    var _CSSESC_QUOTE_OPTIONS;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var deprecate = require_browser();
    var WRAPPED_IN_QUOTES = /^('|")([^]*)\1$/;
    var warnOfDeprecatedValueAssignment = deprecate(function() {
    }, "Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead.");
    var warnOfDeprecatedQuotedAssignment = deprecate(function() {
    }, "Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead.");
    var warnOfDeprecatedConstructor = deprecate(function() {
    }, "Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");
    function unescapeValue(value) {
      var deprecatedUsage = false;
      var quoteMark = null;
      var unescaped = value;
      var m = unescaped.match(WRAPPED_IN_QUOTES);
      if (m) {
        quoteMark = m[1];
        unescaped = m[2];
      }
      unescaped = (0, _unesc["default"])(unescaped);
      if (unescaped !== value) {
        deprecatedUsage = true;
      }
      return {
        deprecatedUsage,
        unescaped,
        quoteMark
      };
    }
    function handleDeprecatedContructorOpts(opts) {
      if (opts.quoteMark !== void 0) {
        return opts;
      }
      if (opts.value === void 0) {
        return opts;
      }
      warnOfDeprecatedConstructor();
      var _unescapeValue = unescapeValue(opts.value), quoteMark = _unescapeValue.quoteMark, unescaped = _unescapeValue.unescaped;
      if (!opts.raws) {
        opts.raws = {};
      }
      if (opts.raws.value === void 0) {
        opts.raws.value = opts.value;
      }
      opts.value = unescaped;
      opts.quoteMark = quoteMark;
      return opts;
    }
    var Attribute = /* @__PURE__ */ function(_Namespace) {
      _inheritsLoose(Attribute2, _Namespace);
      function Attribute2(opts) {
        var _this;
        if (opts === void 0) {
          opts = {};
        }
        _this = _Namespace.call(this, handleDeprecatedContructorOpts(opts)) || this;
        _this.type = _types.ATTRIBUTE;
        _this.raws = _this.raws || {};
        Object.defineProperty(_this.raws, "unquoted", {
          get: deprecate(function() {
            return _this.value;
          }, "attr.raws.unquoted is deprecated. Call attr.value instead."),
          set: deprecate(function() {
            return _this.value;
          }, "Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.")
        });
        _this._constructed = true;
        return _this;
      }
      var _proto = Attribute2.prototype;
      _proto.getQuotedValue = function getQuotedValue(options) {
        if (options === void 0) {
          options = {};
        }
        var quoteMark = this._determineQuoteMark(options);
        var cssescopts = CSSESC_QUOTE_OPTIONS[quoteMark];
        var escaped = (0, _cssesc["default"])(this._value, cssescopts);
        return escaped;
      };
      _proto._determineQuoteMark = function _determineQuoteMark(options) {
        return options.smart ? this.smartQuoteMark(options) : this.preferredQuoteMark(options);
      };
      _proto.setValue = function setValue(value, options) {
        if (options === void 0) {
          options = {};
        }
        this._value = value;
        this._quoteMark = this._determineQuoteMark(options);
        this._syncRawValue();
      };
      _proto.smartQuoteMark = function smartQuoteMark(options) {
        var v = this.value;
        var numSingleQuotes = v.replace(/[^']/g, "").length;
        var numDoubleQuotes = v.replace(/[^"]/g, "").length;
        if (numSingleQuotes + numDoubleQuotes === 0) {
          var escaped = (0, _cssesc["default"])(v, {
            isIdentifier: true
          });
          if (escaped === v) {
            return Attribute2.NO_QUOTE;
          } else {
            var pref = this.preferredQuoteMark(options);
            if (pref === Attribute2.NO_QUOTE) {
              var quote = this.quoteMark || options.quoteMark || Attribute2.DOUBLE_QUOTE;
              var opts = CSSESC_QUOTE_OPTIONS[quote];
              var quoteValue = (0, _cssesc["default"])(v, opts);
              if (quoteValue.length < escaped.length) {
                return quote;
              }
            }
            return pref;
          }
        } else if (numDoubleQuotes === numSingleQuotes) {
          return this.preferredQuoteMark(options);
        } else if (numDoubleQuotes < numSingleQuotes) {
          return Attribute2.DOUBLE_QUOTE;
        } else {
          return Attribute2.SINGLE_QUOTE;
        }
      };
      _proto.preferredQuoteMark = function preferredQuoteMark(options) {
        var quoteMark = options.preferCurrentQuoteMark ? this.quoteMark : options.quoteMark;
        if (quoteMark === void 0) {
          quoteMark = options.preferCurrentQuoteMark ? options.quoteMark : this.quoteMark;
        }
        if (quoteMark === void 0) {
          quoteMark = Attribute2.DOUBLE_QUOTE;
        }
        return quoteMark;
      };
      _proto._syncRawValue = function _syncRawValue() {
        var rawValue = (0, _cssesc["default"])(this._value, CSSESC_QUOTE_OPTIONS[this.quoteMark]);
        if (rawValue === this._value) {
          if (this.raws) {
            delete this.raws.value;
          }
        } else {
          this.raws.value = rawValue;
        }
      };
      _proto._handleEscapes = function _handleEscapes(prop, value) {
        if (this._constructed) {
          var escaped = (0, _cssesc["default"])(value, {
            isIdentifier: true
          });
          if (escaped !== value) {
            this.raws[prop] = escaped;
          } else {
            delete this.raws[prop];
          }
        }
      };
      _proto._spacesFor = function _spacesFor(name) {
        var attrSpaces = {
          before: "",
          after: ""
        };
        var spaces = this.spaces[name] || {};
        var rawSpaces = this.raws.spaces && this.raws.spaces[name] || {};
        return Object.assign(attrSpaces, spaces, rawSpaces);
      };
      _proto._stringFor = function _stringFor(name, spaceName, concat) {
        if (spaceName === void 0) {
          spaceName = name;
        }
        if (concat === void 0) {
          concat = defaultAttrConcat;
        }
        var attrSpaces = this._spacesFor(spaceName);
        return concat(this.stringifyProperty(name), attrSpaces);
      };
      _proto.offsetOf = function offsetOf(name) {
        var count = 1;
        var attributeSpaces = this._spacesFor("attribute");
        count += attributeSpaces.before.length;
        if (name === "namespace" || name === "ns") {
          return this.namespace ? count : -1;
        }
        if (name === "attributeNS") {
          return count;
        }
        count += this.namespaceString.length;
        if (this.namespace) {
          count += 1;
        }
        if (name === "attribute") {
          return count;
        }
        count += this.stringifyProperty("attribute").length;
        count += attributeSpaces.after.length;
        var operatorSpaces = this._spacesFor("operator");
        count += operatorSpaces.before.length;
        var operator = this.stringifyProperty("operator");
        if (name === "operator") {
          return operator ? count : -1;
        }
        count += operator.length;
        count += operatorSpaces.after.length;
        var valueSpaces = this._spacesFor("value");
        count += valueSpaces.before.length;
        var value = this.stringifyProperty("value");
        if (name === "value") {
          return value ? count : -1;
        }
        count += value.length;
        count += valueSpaces.after.length;
        var insensitiveSpaces = this._spacesFor("insensitive");
        count += insensitiveSpaces.before.length;
        if (name === "insensitive") {
          return this.insensitive ? count : -1;
        }
        return -1;
      };
      _proto.toString = function toString() {
        var _this2 = this;
        var selector = [this.rawSpaceBefore, "["];
        selector.push(this._stringFor("qualifiedAttribute", "attribute"));
        if (this.operator && (this.value || this.value === "")) {
          selector.push(this._stringFor("operator"));
          selector.push(this._stringFor("value"));
          selector.push(this._stringFor("insensitiveFlag", "insensitive", function(attrValue, attrSpaces) {
            if (attrValue.length > 0 && !_this2.quoted && attrSpaces.before.length === 0 && !(_this2.spaces.value && _this2.spaces.value.after)) {
              attrSpaces.before = " ";
            }
            return defaultAttrConcat(attrValue, attrSpaces);
          }));
        }
        selector.push("]");
        selector.push(this.rawSpaceAfter);
        return selector.join("");
      };
      _createClass(Attribute2, [{
        key: "quoted",
        get: function get() {
          var qm = this.quoteMark;
          return qm === "'" || qm === '"';
        },
        set: function set(value) {
          warnOfDeprecatedQuotedAssignment();
        }
      }, {
        key: "quoteMark",
        get: function get() {
          return this._quoteMark;
        },
        set: function set(quoteMark) {
          if (!this._constructed) {
            this._quoteMark = quoteMark;
            return;
          }
          if (this._quoteMark !== quoteMark) {
            this._quoteMark = quoteMark;
            this._syncRawValue();
          }
        }
      }, {
        key: "qualifiedAttribute",
        get: function get() {
          return this.qualifiedName(this.raws.attribute || this.attribute);
        }
      }, {
        key: "insensitiveFlag",
        get: function get() {
          return this.insensitive ? "i" : "";
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(v) {
          if (this._constructed) {
            var _unescapeValue2 = unescapeValue(v), deprecatedUsage = _unescapeValue2.deprecatedUsage, unescaped = _unescapeValue2.unescaped, quoteMark = _unescapeValue2.quoteMark;
            if (deprecatedUsage) {
              warnOfDeprecatedValueAssignment();
            }
            if (unescaped === this._value && quoteMark === this._quoteMark) {
              return;
            }
            this._value = unescaped;
            this._quoteMark = quoteMark;
            this._syncRawValue();
          } else {
            this._value = v;
          }
        }
      }, {
        key: "attribute",
        get: function get() {
          return this._attribute;
        },
        set: function set(name) {
          this._handleEscapes("attribute", name);
          this._attribute = name;
        }
      }]);
      return Attribute2;
    }(_namespace["default"]);
    exports["default"] = Attribute;
    Attribute.NO_QUOTE = null;
    Attribute.SINGLE_QUOTE = "'";
    Attribute.DOUBLE_QUOTE = '"';
    var CSSESC_QUOTE_OPTIONS = (_CSSESC_QUOTE_OPTIONS = {
      "'": {
        quotes: "single",
        wrap: true
      },
      '"': {
        quotes: "double",
        wrap: true
      }
    }, _CSSESC_QUOTE_OPTIONS[null] = {
      isIdentifier: true
    }, _CSSESC_QUOTE_OPTIONS);
    function defaultAttrConcat(attrValue, attrSpaces) {
      return "" + attrSpaces.before + attrValue + attrSpaces.after;
    }
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/universal.js
var require_universal = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/universal.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = void 0;
    var _namespace = _interopRequireDefault(require_namespace());
    var _types = require_types();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var Universal = /* @__PURE__ */ function(_Namespace) {
      _inheritsLoose(Universal2, _Namespace);
      function Universal2(opts) {
        var _this;
        _this = _Namespace.call(this, opts) || this;
        _this.type = _types.UNIVERSAL;
        _this.value = "*";
        return _this;
      }
      return Universal2;
    }(_namespace["default"]);
    exports["default"] = Universal;
    module.exports = exports.default;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/combinator.js
var require_combinator = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/combinator.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = void 0;
    var _node = _interopRequireDefault(require_node());
    var _types = require_types();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var Combinator = /* @__PURE__ */ function(_Node) {
      _inheritsLoose(Combinator2, _Node);
      function Combinator2(opts) {
        var _this;
        _this = _Node.call(this, opts) || this;
        _this.type = _types.COMBINATOR;
        return _this;
      }
      return Combinator2;
    }(_node["default"]);
    exports["default"] = Combinator;
    module.exports = exports.default;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/nesting.js
var require_nesting = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/nesting.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = void 0;
    var _node = _interopRequireDefault(require_node());
    var _types = require_types();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var Nesting = /* @__PURE__ */ function(_Node) {
      _inheritsLoose(Nesting2, _Node);
      function Nesting2(opts) {
        var _this;
        _this = _Node.call(this, opts) || this;
        _this.type = _types.NESTING;
        _this.value = "&";
        return _this;
      }
      return Nesting2;
    }(_node["default"]);
    exports["default"] = Nesting;
    module.exports = exports.default;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/sortAscending.js
var require_sortAscending = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/sortAscending.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = sortAscending;
    function sortAscending(list) {
      return list.sort(function(a, b) {
        return a - b;
      });
    }
    module.exports = exports.default;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/tokenTypes.js
var require_tokenTypes = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/tokenTypes.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.combinator = exports.word = exports.comment = exports.str = exports.tab = exports.newline = exports.feed = exports.cr = exports.backslash = exports.bang = exports.slash = exports.doubleQuote = exports.singleQuote = exports.space = exports.greaterThan = exports.pipe = exports.equals = exports.plus = exports.caret = exports.tilde = exports.dollar = exports.closeSquare = exports.openSquare = exports.closeParenthesis = exports.openParenthesis = exports.semicolon = exports.colon = exports.comma = exports.at = exports.asterisk = exports.ampersand = void 0;
    var ampersand = 38;
    exports.ampersand = ampersand;
    var asterisk = 42;
    exports.asterisk = asterisk;
    var at = 64;
    exports.at = at;
    var comma = 44;
    exports.comma = comma;
    var colon = 58;
    exports.colon = colon;
    var semicolon = 59;
    exports.semicolon = semicolon;
    var openParenthesis = 40;
    exports.openParenthesis = openParenthesis;
    var closeParenthesis = 41;
    exports.closeParenthesis = closeParenthesis;
    var openSquare = 91;
    exports.openSquare = openSquare;
    var closeSquare = 93;
    exports.closeSquare = closeSquare;
    var dollar = 36;
    exports.dollar = dollar;
    var tilde = 126;
    exports.tilde = tilde;
    var caret = 94;
    exports.caret = caret;
    var plus = 43;
    exports.plus = plus;
    var equals = 61;
    exports.equals = equals;
    var pipe = 124;
    exports.pipe = pipe;
    var greaterThan = 62;
    exports.greaterThan = greaterThan;
    var space = 32;
    exports.space = space;
    var singleQuote = 39;
    exports.singleQuote = singleQuote;
    var doubleQuote = 34;
    exports.doubleQuote = doubleQuote;
    var slash = 47;
    exports.slash = slash;
    var bang = 33;
    exports.bang = bang;
    var backslash = 92;
    exports.backslash = backslash;
    var cr = 13;
    exports.cr = cr;
    var feed = 12;
    exports.feed = feed;
    var newline = 10;
    exports.newline = newline;
    var tab = 9;
    exports.tab = tab;
    var str = singleQuote;
    exports.str = str;
    var comment = -1;
    exports.comment = comment;
    var word = -2;
    exports.word = word;
    var combinator = -3;
    exports.combinator = combinator;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/tokenize.js
var require_tokenize = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/tokenize.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = tokenize;
    exports.FIELDS = void 0;
    var t = _interopRequireWildcard(require_tokenTypes());
    var _unescapable;
    var _wordDelimiters;
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    var unescapable = (_unescapable = {}, _unescapable[t.tab] = true, _unescapable[t.newline] = true, _unescapable[t.cr] = true, _unescapable[t.feed] = true, _unescapable);
    var wordDelimiters = (_wordDelimiters = {}, _wordDelimiters[t.space] = true, _wordDelimiters[t.tab] = true, _wordDelimiters[t.newline] = true, _wordDelimiters[t.cr] = true, _wordDelimiters[t.feed] = true, _wordDelimiters[t.ampersand] = true, _wordDelimiters[t.asterisk] = true, _wordDelimiters[t.bang] = true, _wordDelimiters[t.comma] = true, _wordDelimiters[t.colon] = true, _wordDelimiters[t.semicolon] = true, _wordDelimiters[t.openParenthesis] = true, _wordDelimiters[t.closeParenthesis] = true, _wordDelimiters[t.openSquare] = true, _wordDelimiters[t.closeSquare] = true, _wordDelimiters[t.singleQuote] = true, _wordDelimiters[t.doubleQuote] = true, _wordDelimiters[t.plus] = true, _wordDelimiters[t.pipe] = true, _wordDelimiters[t.tilde] = true, _wordDelimiters[t.greaterThan] = true, _wordDelimiters[t.equals] = true, _wordDelimiters[t.dollar] = true, _wordDelimiters[t.caret] = true, _wordDelimiters[t.slash] = true, _wordDelimiters);
    var hex = {};
    var hexChars = "0123456789abcdefABCDEF";
    for (i = 0; i < hexChars.length; i++) {
      hex[hexChars.charCodeAt(i)] = true;
    }
    var i;
    function consumeWord(css, start) {
      var next = start;
      var code;
      do {
        code = css.charCodeAt(next);
        if (wordDelimiters[code]) {
          return next - 1;
        } else if (code === t.backslash) {
          next = consumeEscape(css, next) + 1;
        } else {
          next++;
        }
      } while (next < css.length);
      return next - 1;
    }
    function consumeEscape(css, start) {
      var next = start;
      var code = css.charCodeAt(next + 1);
      if (unescapable[code]) {
      } else if (hex[code]) {
        var hexDigits = 0;
        do {
          next++;
          hexDigits++;
          code = css.charCodeAt(next + 1);
        } while (hex[code] && hexDigits < 6);
        if (hexDigits < 6 && code === t.space) {
          next++;
        }
      } else {
        next++;
      }
      return next;
    }
    var FIELDS = {
      TYPE: 0,
      START_LINE: 1,
      START_COL: 2,
      END_LINE: 3,
      END_COL: 4,
      START_POS: 5,
      END_POS: 6
    };
    exports.FIELDS = FIELDS;
    function tokenize(input) {
      var tokens = [];
      var css = input.css.valueOf();
      var _css = css, length = _css.length;
      var offset = -1;
      var line = 1;
      var start = 0;
      var end = 0;
      var code, content, endColumn, endLine, escaped, escapePos, last, lines, next, nextLine, nextOffset, quote, tokenType;
      function unclosed(what, fix) {
        if (input.safe) {
          css += fix;
          next = css.length - 1;
        } else {
          throw input.error("Unclosed " + what, line, start - offset, start);
        }
      }
      while (start < length) {
        code = css.charCodeAt(start);
        if (code === t.newline) {
          offset = start;
          line += 1;
        }
        switch (code) {
          case t.space:
          case t.tab:
          case t.newline:
          case t.cr:
          case t.feed:
            next = start;
            do {
              next += 1;
              code = css.charCodeAt(next);
              if (code === t.newline) {
                offset = next;
                line += 1;
              }
            } while (code === t.space || code === t.newline || code === t.tab || code === t.cr || code === t.feed);
            tokenType = t.space;
            endLine = line;
            endColumn = next - offset - 1;
            end = next;
            break;
          case t.plus:
          case t.greaterThan:
          case t.tilde:
          case t.pipe:
            next = start;
            do {
              next += 1;
              code = css.charCodeAt(next);
            } while (code === t.plus || code === t.greaterThan || code === t.tilde || code === t.pipe);
            tokenType = t.combinator;
            endLine = line;
            endColumn = start - offset;
            end = next;
            break;
          case t.asterisk:
          case t.ampersand:
          case t.bang:
          case t.comma:
          case t.equals:
          case t.dollar:
          case t.caret:
          case t.openSquare:
          case t.closeSquare:
          case t.colon:
          case t.semicolon:
          case t.openParenthesis:
          case t.closeParenthesis:
            next = start;
            tokenType = code;
            endLine = line;
            endColumn = start - offset;
            end = next + 1;
            break;
          case t.singleQuote:
          case t.doubleQuote:
            quote = code === t.singleQuote ? "'" : '"';
            next = start;
            do {
              escaped = false;
              next = css.indexOf(quote, next + 1);
              if (next === -1) {
                unclosed("quote", quote);
              }
              escapePos = next;
              while (css.charCodeAt(escapePos - 1) === t.backslash) {
                escapePos -= 1;
                escaped = !escaped;
              }
            } while (escaped);
            tokenType = t.str;
            endLine = line;
            endColumn = start - offset;
            end = next + 1;
            break;
          default:
            if (code === t.slash && css.charCodeAt(start + 1) === t.asterisk) {
              next = css.indexOf("*/", start + 2) + 1;
              if (next === 0) {
                unclosed("comment", "*/");
              }
              content = css.slice(start, next + 1);
              lines = content.split("\n");
              last = lines.length - 1;
              if (last > 0) {
                nextLine = line + last;
                nextOffset = next - lines[last].length;
              } else {
                nextLine = line;
                nextOffset = offset;
              }
              tokenType = t.comment;
              line = nextLine;
              endLine = nextLine;
              endColumn = next - nextOffset;
            } else if (code === t.slash) {
              next = start;
              tokenType = code;
              endLine = line;
              endColumn = start - offset;
              end = next + 1;
            } else {
              next = consumeWord(css, start);
              tokenType = t.word;
              endLine = line;
              endColumn = next - offset;
            }
            end = next + 1;
            break;
        }
        tokens.push([
          tokenType,
          line,
          start - offset,
          endLine,
          endColumn,
          start,
          end
        ]);
        if (nextOffset) {
          offset = nextOffset;
          nextOffset = null;
        }
        start = end;
      }
      return tokens;
    }
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/parser.js
var require_parser = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/parser.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = void 0;
    var _root = _interopRequireDefault(require_root());
    var _selector = _interopRequireDefault(require_selector());
    var _className = _interopRequireDefault(require_className());
    var _comment = _interopRequireDefault(require_comment());
    var _id = _interopRequireDefault(require_id());
    var _tag = _interopRequireDefault(require_tag());
    var _string = _interopRequireDefault(require_string());
    var _pseudo = _interopRequireDefault(require_pseudo());
    var _attribute = _interopRequireWildcard(require_attribute());
    var _universal = _interopRequireDefault(require_universal());
    var _combinator = _interopRequireDefault(require_combinator());
    var _nesting = _interopRequireDefault(require_nesting());
    var _sortAscending = _interopRequireDefault(require_sortAscending());
    var _tokenize = _interopRequireWildcard(require_tokenize());
    var tokens = _interopRequireWildcard(require_tokenTypes());
    var types = _interopRequireWildcard(require_types());
    var _util = require_util();
    var _WHITESPACE_TOKENS;
    var _Object$assign;
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var WHITESPACE_TOKENS = (_WHITESPACE_TOKENS = {}, _WHITESPACE_TOKENS[tokens.space] = true, _WHITESPACE_TOKENS[tokens.cr] = true, _WHITESPACE_TOKENS[tokens.feed] = true, _WHITESPACE_TOKENS[tokens.newline] = true, _WHITESPACE_TOKENS[tokens.tab] = true, _WHITESPACE_TOKENS);
    var WHITESPACE_EQUIV_TOKENS = Object.assign({}, WHITESPACE_TOKENS, (_Object$assign = {}, _Object$assign[tokens.comment] = true, _Object$assign));
    function tokenStart(token) {
      return {
        line: token[_tokenize.FIELDS.START_LINE],
        column: token[_tokenize.FIELDS.START_COL]
      };
    }
    function tokenEnd(token) {
      return {
        line: token[_tokenize.FIELDS.END_LINE],
        column: token[_tokenize.FIELDS.END_COL]
      };
    }
    function getSource(startLine, startColumn, endLine, endColumn) {
      return {
        start: {
          line: startLine,
          column: startColumn
        },
        end: {
          line: endLine,
          column: endColumn
        }
      };
    }
    function getTokenSource(token) {
      return getSource(token[_tokenize.FIELDS.START_LINE], token[_tokenize.FIELDS.START_COL], token[_tokenize.FIELDS.END_LINE], token[_tokenize.FIELDS.END_COL]);
    }
    function getTokenSourceSpan(startToken, endToken) {
      if (!startToken) {
        return void 0;
      }
      return getSource(startToken[_tokenize.FIELDS.START_LINE], startToken[_tokenize.FIELDS.START_COL], endToken[_tokenize.FIELDS.END_LINE], endToken[_tokenize.FIELDS.END_COL]);
    }
    function unescapeProp(node, prop) {
      var value = node[prop];
      if (typeof value !== "string") {
        return;
      }
      if (value.indexOf("\\") !== -1) {
        (0, _util.ensureObject)(node, "raws");
        node[prop] = (0, _util.unesc)(value);
        if (node.raws[prop] === void 0) {
          node.raws[prop] = value;
        }
      }
      return node;
    }
    function indexesOf(array, item) {
      var i = -1;
      var indexes = [];
      while ((i = array.indexOf(item, i + 1)) !== -1) {
        indexes.push(i);
      }
      return indexes;
    }
    function uniqs() {
      var list = Array.prototype.concat.apply([], arguments);
      return list.filter(function(item, i) {
        return i === list.indexOf(item);
      });
    }
    var Parser = /* @__PURE__ */ function() {
      function Parser2(rule, options) {
        if (options === void 0) {
          options = {};
        }
        this.rule = rule;
        this.options = Object.assign({
          lossy: false,
          safe: false
        }, options);
        this.position = 0;
        this.css = typeof this.rule === "string" ? this.rule : this.rule.selector;
        this.tokens = (0, _tokenize["default"])({
          css: this.css,
          error: this._errorGenerator(),
          safe: this.options.safe
        });
        var rootSource = getTokenSourceSpan(this.tokens[0], this.tokens[this.tokens.length - 1]);
        this.root = new _root["default"]({
          source: rootSource
        });
        this.root.errorGenerator = this._errorGenerator();
        var selector = new _selector["default"]({
          source: {
            start: {
              line: 1,
              column: 1
            }
          }
        });
        this.root.append(selector);
        this.current = selector;
        this.loop();
      }
      var _proto = Parser2.prototype;
      _proto._errorGenerator = function _errorGenerator() {
        var _this = this;
        return function(message, errorOptions) {
          if (typeof _this.rule === "string") {
            return new Error(message);
          }
          return _this.rule.error(message, errorOptions);
        };
      };
      _proto.attribute = function attribute() {
        var attr = [];
        var startingToken = this.currToken;
        this.position++;
        while (this.position < this.tokens.length && this.currToken[_tokenize.FIELDS.TYPE] !== tokens.closeSquare) {
          attr.push(this.currToken);
          this.position++;
        }
        if (this.currToken[_tokenize.FIELDS.TYPE] !== tokens.closeSquare) {
          return this.expected("closing square bracket", this.currToken[_tokenize.FIELDS.START_POS]);
        }
        var len = attr.length;
        var node = {
          source: getSource(startingToken[1], startingToken[2], this.currToken[3], this.currToken[4]),
          sourceIndex: startingToken[_tokenize.FIELDS.START_POS]
        };
        if (len === 1 && !~[tokens.word].indexOf(attr[0][_tokenize.FIELDS.TYPE])) {
          return this.expected("attribute", attr[0][_tokenize.FIELDS.START_POS]);
        }
        var pos = 0;
        var spaceBefore = "";
        var commentBefore = "";
        var lastAdded = null;
        var spaceAfterMeaningfulToken = false;
        while (pos < len) {
          var token = attr[pos];
          var content = this.content(token);
          var next = attr[pos + 1];
          switch (token[_tokenize.FIELDS.TYPE]) {
            case tokens.space:
              spaceAfterMeaningfulToken = true;
              if (this.options.lossy) {
                break;
              }
              if (lastAdded) {
                (0, _util.ensureObject)(node, "spaces", lastAdded);
                var prevContent = node.spaces[lastAdded].after || "";
                node.spaces[lastAdded].after = prevContent + content;
                var existingComment = (0, _util.getProp)(node, "raws", "spaces", lastAdded, "after") || null;
                if (existingComment) {
                  node.raws.spaces[lastAdded].after = existingComment + content;
                }
              } else {
                spaceBefore = spaceBefore + content;
                commentBefore = commentBefore + content;
              }
              break;
            case tokens.asterisk:
              if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
                node.operator = content;
                lastAdded = "operator";
              } else if ((!node.namespace || lastAdded === "namespace" && !spaceAfterMeaningfulToken) && next) {
                if (spaceBefore) {
                  (0, _util.ensureObject)(node, "spaces", "attribute");
                  node.spaces.attribute.before = spaceBefore;
                  spaceBefore = "";
                }
                if (commentBefore) {
                  (0, _util.ensureObject)(node, "raws", "spaces", "attribute");
                  node.raws.spaces.attribute.before = spaceBefore;
                  commentBefore = "";
                }
                node.namespace = (node.namespace || "") + content;
                var rawValue = (0, _util.getProp)(node, "raws", "namespace") || null;
                if (rawValue) {
                  node.raws.namespace += content;
                }
                lastAdded = "namespace";
              }
              spaceAfterMeaningfulToken = false;
              break;
            case tokens.dollar:
              if (lastAdded === "value") {
                var oldRawValue = (0, _util.getProp)(node, "raws", "value");
                node.value += "$";
                if (oldRawValue) {
                  node.raws.value = oldRawValue + "$";
                }
                break;
              }
            case tokens.caret:
              if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
                node.operator = content;
                lastAdded = "operator";
              }
              spaceAfterMeaningfulToken = false;
              break;
            case tokens.combinator:
              if (content === "~" && next[_tokenize.FIELDS.TYPE] === tokens.equals) {
                node.operator = content;
                lastAdded = "operator";
              }
              if (content !== "|") {
                spaceAfterMeaningfulToken = false;
                break;
              }
              if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
                node.operator = content;
                lastAdded = "operator";
              } else if (!node.namespace && !node.attribute) {
                node.namespace = true;
              }
              spaceAfterMeaningfulToken = false;
              break;
            case tokens.word:
              if (next && this.content(next) === "|" && attr[pos + 2] && attr[pos + 2][_tokenize.FIELDS.TYPE] !== tokens.equals && !node.operator && !node.namespace) {
                node.namespace = content;
                lastAdded = "namespace";
              } else if (!node.attribute || lastAdded === "attribute" && !spaceAfterMeaningfulToken) {
                if (spaceBefore) {
                  (0, _util.ensureObject)(node, "spaces", "attribute");
                  node.spaces.attribute.before = spaceBefore;
                  spaceBefore = "";
                }
                if (commentBefore) {
                  (0, _util.ensureObject)(node, "raws", "spaces", "attribute");
                  node.raws.spaces.attribute.before = commentBefore;
                  commentBefore = "";
                }
                node.attribute = (node.attribute || "") + content;
                var _rawValue = (0, _util.getProp)(node, "raws", "attribute") || null;
                if (_rawValue) {
                  node.raws.attribute += content;
                }
                lastAdded = "attribute";
              } else if (!node.value && node.value !== "" || lastAdded === "value" && !spaceAfterMeaningfulToken) {
                var _unescaped = (0, _util.unesc)(content);
                var _oldRawValue = (0, _util.getProp)(node, "raws", "value") || "";
                var oldValue = node.value || "";
                node.value = oldValue + _unescaped;
                node.quoteMark = null;
                if (_unescaped !== content || _oldRawValue) {
                  (0, _util.ensureObject)(node, "raws");
                  node.raws.value = (_oldRawValue || oldValue) + content;
                }
                lastAdded = "value";
              } else {
                var insensitive = content === "i" || content === "I";
                if ((node.value || node.value === "") && (node.quoteMark || spaceAfterMeaningfulToken)) {
                  node.insensitive = insensitive;
                  if (!insensitive || content === "I") {
                    (0, _util.ensureObject)(node, "raws");
                    node.raws.insensitiveFlag = content;
                  }
                  lastAdded = "insensitive";
                  if (spaceBefore) {
                    (0, _util.ensureObject)(node, "spaces", "insensitive");
                    node.spaces.insensitive.before = spaceBefore;
                    spaceBefore = "";
                  }
                  if (commentBefore) {
                    (0, _util.ensureObject)(node, "raws", "spaces", "insensitive");
                    node.raws.spaces.insensitive.before = commentBefore;
                    commentBefore = "";
                  }
                } else if (node.value || node.value === "") {
                  lastAdded = "value";
                  node.value += content;
                  if (node.raws.value) {
                    node.raws.value += content;
                  }
                }
              }
              spaceAfterMeaningfulToken = false;
              break;
            case tokens.str:
              if (!node.attribute || !node.operator) {
                return this.error("Expected an attribute followed by an operator preceding the string.", {
                  index: token[_tokenize.FIELDS.START_POS]
                });
              }
              var _unescapeValue = (0, _attribute.unescapeValue)(content), unescaped = _unescapeValue.unescaped, quoteMark = _unescapeValue.quoteMark;
              node.value = unescaped;
              node.quoteMark = quoteMark;
              lastAdded = "value";
              (0, _util.ensureObject)(node, "raws");
              node.raws.value = content;
              spaceAfterMeaningfulToken = false;
              break;
            case tokens.equals:
              if (!node.attribute) {
                return this.expected("attribute", token[_tokenize.FIELDS.START_POS], content);
              }
              if (node.value) {
                return this.error('Unexpected "=" found; an operator was already defined.', {
                  index: token[_tokenize.FIELDS.START_POS]
                });
              }
              node.operator = node.operator ? node.operator + content : content;
              lastAdded = "operator";
              spaceAfterMeaningfulToken = false;
              break;
            case tokens.comment:
              if (lastAdded) {
                if (spaceAfterMeaningfulToken || next && next[_tokenize.FIELDS.TYPE] === tokens.space || lastAdded === "insensitive") {
                  var lastComment = (0, _util.getProp)(node, "spaces", lastAdded, "after") || "";
                  var rawLastComment = (0, _util.getProp)(node, "raws", "spaces", lastAdded, "after") || lastComment;
                  (0, _util.ensureObject)(node, "raws", "spaces", lastAdded);
                  node.raws.spaces[lastAdded].after = rawLastComment + content;
                } else {
                  var lastValue = node[lastAdded] || "";
                  var rawLastValue = (0, _util.getProp)(node, "raws", lastAdded) || lastValue;
                  (0, _util.ensureObject)(node, "raws");
                  node.raws[lastAdded] = rawLastValue + content;
                }
              } else {
                commentBefore = commentBefore + content;
              }
              break;
            default:
              return this.error('Unexpected "' + content + '" found.', {
                index: token[_tokenize.FIELDS.START_POS]
              });
          }
          pos++;
        }
        unescapeProp(node, "attribute");
        unescapeProp(node, "namespace");
        this.newNode(new _attribute["default"](node));
        this.position++;
      };
      _proto.parseWhitespaceEquivalentTokens = function parseWhitespaceEquivalentTokens(stopPosition) {
        if (stopPosition < 0) {
          stopPosition = this.tokens.length;
        }
        var startPosition = this.position;
        var nodes = [];
        var space = "";
        var lastComment = void 0;
        do {
          if (WHITESPACE_TOKENS[this.currToken[_tokenize.FIELDS.TYPE]]) {
            if (!this.options.lossy) {
              space += this.content();
            }
          } else if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.comment) {
            var spaces = {};
            if (space) {
              spaces.before = space;
              space = "";
            }
            lastComment = new _comment["default"]({
              value: this.content(),
              source: getTokenSource(this.currToken),
              sourceIndex: this.currToken[_tokenize.FIELDS.START_POS],
              spaces
            });
            nodes.push(lastComment);
          }
        } while (++this.position < stopPosition);
        if (space) {
          if (lastComment) {
            lastComment.spaces.after = space;
          } else if (!this.options.lossy) {
            var firstToken = this.tokens[startPosition];
            var lastToken = this.tokens[this.position - 1];
            nodes.push(new _string["default"]({
              value: "",
              source: getSource(firstToken[_tokenize.FIELDS.START_LINE], firstToken[_tokenize.FIELDS.START_COL], lastToken[_tokenize.FIELDS.END_LINE], lastToken[_tokenize.FIELDS.END_COL]),
              sourceIndex: firstToken[_tokenize.FIELDS.START_POS],
              spaces: {
                before: space,
                after: ""
              }
            }));
          }
        }
        return nodes;
      };
      _proto.convertWhitespaceNodesToSpace = function convertWhitespaceNodesToSpace(nodes, requiredSpace) {
        var _this2 = this;
        if (requiredSpace === void 0) {
          requiredSpace = false;
        }
        var space = "";
        var rawSpace = "";
        nodes.forEach(function(n) {
          var spaceBefore = _this2.lossySpace(n.spaces.before, requiredSpace);
          var rawSpaceBefore = _this2.lossySpace(n.rawSpaceBefore, requiredSpace);
          space += spaceBefore + _this2.lossySpace(n.spaces.after, requiredSpace && spaceBefore.length === 0);
          rawSpace += spaceBefore + n.value + _this2.lossySpace(n.rawSpaceAfter, requiredSpace && rawSpaceBefore.length === 0);
        });
        if (rawSpace === space) {
          rawSpace = void 0;
        }
        var result = {
          space,
          rawSpace
        };
        return result;
      };
      _proto.isNamedCombinator = function isNamedCombinator(position) {
        if (position === void 0) {
          position = this.position;
        }
        return this.tokens[position + 0] && this.tokens[position + 0][_tokenize.FIELDS.TYPE] === tokens.slash && this.tokens[position + 1] && this.tokens[position + 1][_tokenize.FIELDS.TYPE] === tokens.word && this.tokens[position + 2] && this.tokens[position + 2][_tokenize.FIELDS.TYPE] === tokens.slash;
      };
      _proto.namedCombinator = function namedCombinator() {
        if (this.isNamedCombinator()) {
          var nameRaw = this.content(this.tokens[this.position + 1]);
          var name = (0, _util.unesc)(nameRaw).toLowerCase();
          var raws = {};
          if (name !== nameRaw) {
            raws.value = "/" + nameRaw + "/";
          }
          var node = new _combinator["default"]({
            value: "/" + name + "/",
            source: getSource(this.currToken[_tokenize.FIELDS.START_LINE], this.currToken[_tokenize.FIELDS.START_COL], this.tokens[this.position + 2][_tokenize.FIELDS.END_LINE], this.tokens[this.position + 2][_tokenize.FIELDS.END_COL]),
            sourceIndex: this.currToken[_tokenize.FIELDS.START_POS],
            raws
          });
          this.position = this.position + 3;
          return node;
        } else {
          this.unexpected();
        }
      };
      _proto.combinator = function combinator() {
        var _this3 = this;
        if (this.content() === "|") {
          return this.namespace();
        }
        var nextSigTokenPos = this.locateNextMeaningfulToken(this.position);
        if (nextSigTokenPos < 0 || this.tokens[nextSigTokenPos][_tokenize.FIELDS.TYPE] === tokens.comma) {
          var nodes = this.parseWhitespaceEquivalentTokens(nextSigTokenPos);
          if (nodes.length > 0) {
            var last = this.current.last;
            if (last) {
              var _this$convertWhitespa = this.convertWhitespaceNodesToSpace(nodes), space = _this$convertWhitespa.space, rawSpace = _this$convertWhitespa.rawSpace;
              if (rawSpace !== void 0) {
                last.rawSpaceAfter += rawSpace;
              }
              last.spaces.after += space;
            } else {
              nodes.forEach(function(n) {
                return _this3.newNode(n);
              });
            }
          }
          return;
        }
        var firstToken = this.currToken;
        var spaceOrDescendantSelectorNodes = void 0;
        if (nextSigTokenPos > this.position) {
          spaceOrDescendantSelectorNodes = this.parseWhitespaceEquivalentTokens(nextSigTokenPos);
        }
        var node;
        if (this.isNamedCombinator()) {
          node = this.namedCombinator();
        } else if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.combinator) {
          node = new _combinator["default"]({
            value: this.content(),
            source: getTokenSource(this.currToken),
            sourceIndex: this.currToken[_tokenize.FIELDS.START_POS]
          });
          this.position++;
        } else if (WHITESPACE_TOKENS[this.currToken[_tokenize.FIELDS.TYPE]]) {
        } else if (!spaceOrDescendantSelectorNodes) {
          this.unexpected();
        }
        if (node) {
          if (spaceOrDescendantSelectorNodes) {
            var _this$convertWhitespa2 = this.convertWhitespaceNodesToSpace(spaceOrDescendantSelectorNodes), _space = _this$convertWhitespa2.space, _rawSpace = _this$convertWhitespa2.rawSpace;
            node.spaces.before = _space;
            node.rawSpaceBefore = _rawSpace;
          }
        } else {
          var _this$convertWhitespa3 = this.convertWhitespaceNodesToSpace(spaceOrDescendantSelectorNodes, true), _space2 = _this$convertWhitespa3.space, _rawSpace2 = _this$convertWhitespa3.rawSpace;
          if (!_rawSpace2) {
            _rawSpace2 = _space2;
          }
          var spaces = {};
          var raws = {
            spaces: {}
          };
          if (_space2.endsWith(" ") && _rawSpace2.endsWith(" ")) {
            spaces.before = _space2.slice(0, _space2.length - 1);
            raws.spaces.before = _rawSpace2.slice(0, _rawSpace2.length - 1);
          } else if (_space2.startsWith(" ") && _rawSpace2.startsWith(" ")) {
            spaces.after = _space2.slice(1);
            raws.spaces.after = _rawSpace2.slice(1);
          } else {
            raws.value = _rawSpace2;
          }
          node = new _combinator["default"]({
            value: " ",
            source: getTokenSourceSpan(firstToken, this.tokens[this.position - 1]),
            sourceIndex: firstToken[_tokenize.FIELDS.START_POS],
            spaces,
            raws
          });
        }
        if (this.currToken && this.currToken[_tokenize.FIELDS.TYPE] === tokens.space) {
          node.spaces.after = this.optionalSpace(this.content());
          this.position++;
        }
        return this.newNode(node);
      };
      _proto.comma = function comma() {
        if (this.position === this.tokens.length - 1) {
          this.root.trailingComma = true;
          this.position++;
          return;
        }
        this.current._inferEndPosition();
        var selector = new _selector["default"]({
          source: {
            start: tokenStart(this.tokens[this.position + 1])
          }
        });
        this.current.parent.append(selector);
        this.current = selector;
        this.position++;
      };
      _proto.comment = function comment() {
        var current = this.currToken;
        this.newNode(new _comment["default"]({
          value: this.content(),
          source: getTokenSource(current),
          sourceIndex: current[_tokenize.FIELDS.START_POS]
        }));
        this.position++;
      };
      _proto.error = function error(message, opts) {
        throw this.root.error(message, opts);
      };
      _proto.missingBackslash = function missingBackslash() {
        return this.error("Expected a backslash preceding the semicolon.", {
          index: this.currToken[_tokenize.FIELDS.START_POS]
        });
      };
      _proto.missingParenthesis = function missingParenthesis() {
        return this.expected("opening parenthesis", this.currToken[_tokenize.FIELDS.START_POS]);
      };
      _proto.missingSquareBracket = function missingSquareBracket() {
        return this.expected("opening square bracket", this.currToken[_tokenize.FIELDS.START_POS]);
      };
      _proto.unexpected = function unexpected() {
        return this.error("Unexpected '" + this.content() + "'. Escaping special characters with \\ may help.", this.currToken[_tokenize.FIELDS.START_POS]);
      };
      _proto.namespace = function namespace() {
        var before = this.prevToken && this.content(this.prevToken) || true;
        if (this.nextToken[_tokenize.FIELDS.TYPE] === tokens.word) {
          this.position++;
          return this.word(before);
        } else if (this.nextToken[_tokenize.FIELDS.TYPE] === tokens.asterisk) {
          this.position++;
          return this.universal(before);
        }
      };
      _proto.nesting = function nesting() {
        if (this.nextToken) {
          var nextContent = this.content(this.nextToken);
          if (nextContent === "|") {
            this.position++;
            return;
          }
        }
        var current = this.currToken;
        this.newNode(new _nesting["default"]({
          value: this.content(),
          source: getTokenSource(current),
          sourceIndex: current[_tokenize.FIELDS.START_POS]
        }));
        this.position++;
      };
      _proto.parentheses = function parentheses() {
        var last = this.current.last;
        var unbalanced = 1;
        this.position++;
        if (last && last.type === types.PSEUDO) {
          var selector = new _selector["default"]({
            source: {
              start: tokenStart(this.tokens[this.position - 1])
            }
          });
          var cache = this.current;
          last.append(selector);
          this.current = selector;
          while (this.position < this.tokens.length && unbalanced) {
            if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) {
              unbalanced++;
            }
            if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
              unbalanced--;
            }
            if (unbalanced) {
              this.parse();
            } else {
              this.current.source.end = tokenEnd(this.currToken);
              this.current.parent.source.end = tokenEnd(this.currToken);
              this.position++;
            }
          }
          this.current = cache;
        } else {
          var parenStart = this.currToken;
          var parenValue = "(";
          var parenEnd;
          while (this.position < this.tokens.length && unbalanced) {
            if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) {
              unbalanced++;
            }
            if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
              unbalanced--;
            }
            parenEnd = this.currToken;
            parenValue += this.parseParenthesisToken(this.currToken);
            this.position++;
          }
          if (last) {
            last.appendToPropertyAndEscape("value", parenValue, parenValue);
          } else {
            this.newNode(new _string["default"]({
              value: parenValue,
              source: getSource(parenStart[_tokenize.FIELDS.START_LINE], parenStart[_tokenize.FIELDS.START_COL], parenEnd[_tokenize.FIELDS.END_LINE], parenEnd[_tokenize.FIELDS.END_COL]),
              sourceIndex: parenStart[_tokenize.FIELDS.START_POS]
            }));
          }
        }
        if (unbalanced) {
          return this.expected("closing parenthesis", this.currToken[_tokenize.FIELDS.START_POS]);
        }
      };
      _proto.pseudo = function pseudo() {
        var _this4 = this;
        var pseudoStr = "";
        var startingToken = this.currToken;
        while (this.currToken && this.currToken[_tokenize.FIELDS.TYPE] === tokens.colon) {
          pseudoStr += this.content();
          this.position++;
        }
        if (!this.currToken) {
          return this.expected(["pseudo-class", "pseudo-element"], this.position - 1);
        }
        if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.word) {
          this.splitWord(false, function(first, length) {
            pseudoStr += first;
            _this4.newNode(new _pseudo["default"]({
              value: pseudoStr,
              source: getTokenSourceSpan(startingToken, _this4.currToken),
              sourceIndex: startingToken[_tokenize.FIELDS.START_POS]
            }));
            if (length > 1 && _this4.nextToken && _this4.nextToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) {
              _this4.error("Misplaced parenthesis.", {
                index: _this4.nextToken[_tokenize.FIELDS.START_POS]
              });
            }
          });
        } else {
          return this.expected(["pseudo-class", "pseudo-element"], this.currToken[_tokenize.FIELDS.START_POS]);
        }
      };
      _proto.space = function space() {
        var content = this.content();
        if (this.position === 0 || this.prevToken[_tokenize.FIELDS.TYPE] === tokens.comma || this.prevToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis || this.current.nodes.every(function(node) {
          return node.type === "comment";
        })) {
          this.spaces = this.optionalSpace(content);
          this.position++;
        } else if (this.position === this.tokens.length - 1 || this.nextToken[_tokenize.FIELDS.TYPE] === tokens.comma || this.nextToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
          this.current.last.spaces.after = this.optionalSpace(content);
          this.position++;
        } else {
          this.combinator();
        }
      };
      _proto.string = function string() {
        var current = this.currToken;
        this.newNode(new _string["default"]({
          value: this.content(),
          source: getTokenSource(current),
          sourceIndex: current[_tokenize.FIELDS.START_POS]
        }));
        this.position++;
      };
      _proto.universal = function universal(namespace) {
        var nextToken = this.nextToken;
        if (nextToken && this.content(nextToken) === "|") {
          this.position++;
          return this.namespace();
        }
        var current = this.currToken;
        this.newNode(new _universal["default"]({
          value: this.content(),
          source: getTokenSource(current),
          sourceIndex: current[_tokenize.FIELDS.START_POS]
        }), namespace);
        this.position++;
      };
      _proto.splitWord = function splitWord(namespace, firstCallback) {
        var _this5 = this;
        var nextToken = this.nextToken;
        var word = this.content();
        while (nextToken && ~[tokens.dollar, tokens.caret, tokens.equals, tokens.word].indexOf(nextToken[_tokenize.FIELDS.TYPE])) {
          this.position++;
          var current = this.content();
          word += current;
          if (current.lastIndexOf("\\") === current.length - 1) {
            var next = this.nextToken;
            if (next && next[_tokenize.FIELDS.TYPE] === tokens.space) {
              word += this.requiredSpace(this.content(next));
              this.position++;
            }
          }
          nextToken = this.nextToken;
        }
        var hasClass = indexesOf(word, ".").filter(function(i) {
          var escapedDot = word[i - 1] === "\\";
          var isKeyframesPercent = /^\d+\.\d+%$/.test(word);
          return !escapedDot && !isKeyframesPercent;
        });
        var hasId = indexesOf(word, "#").filter(function(i) {
          return word[i - 1] !== "\\";
        });
        var interpolations = indexesOf(word, "#{");
        if (interpolations.length) {
          hasId = hasId.filter(function(hashIndex) {
            return !~interpolations.indexOf(hashIndex);
          });
        }
        var indices = (0, _sortAscending["default"])(uniqs([0].concat(hasClass, hasId)));
        indices.forEach(function(ind, i) {
          var index = indices[i + 1] || word.length;
          var value = word.slice(ind, index);
          if (i === 0 && firstCallback) {
            return firstCallback.call(_this5, value, indices.length);
          }
          var node;
          var current2 = _this5.currToken;
          var sourceIndex = current2[_tokenize.FIELDS.START_POS] + indices[i];
          var source = getSource(current2[1], current2[2] + ind, current2[3], current2[2] + (index - 1));
          if (~hasClass.indexOf(ind)) {
            var classNameOpts = {
              value: value.slice(1),
              source,
              sourceIndex
            };
            node = new _className["default"](unescapeProp(classNameOpts, "value"));
          } else if (~hasId.indexOf(ind)) {
            var idOpts = {
              value: value.slice(1),
              source,
              sourceIndex
            };
            node = new _id["default"](unescapeProp(idOpts, "value"));
          } else {
            var tagOpts = {
              value,
              source,
              sourceIndex
            };
            unescapeProp(tagOpts, "value");
            node = new _tag["default"](tagOpts);
          }
          _this5.newNode(node, namespace);
          namespace = null;
        });
        this.position++;
      };
      _proto.word = function word(namespace) {
        var nextToken = this.nextToken;
        if (nextToken && this.content(nextToken) === "|") {
          this.position++;
          return this.namespace();
        }
        return this.splitWord(namespace);
      };
      _proto.loop = function loop() {
        while (this.position < this.tokens.length) {
          this.parse(true);
        }
        this.current._inferEndPosition();
        return this.root;
      };
      _proto.parse = function parse(throwOnParenthesis) {
        switch (this.currToken[_tokenize.FIELDS.TYPE]) {
          case tokens.space:
            this.space();
            break;
          case tokens.comment:
            this.comment();
            break;
          case tokens.openParenthesis:
            this.parentheses();
            break;
          case tokens.closeParenthesis:
            if (throwOnParenthesis) {
              this.missingParenthesis();
            }
            break;
          case tokens.openSquare:
            this.attribute();
            break;
          case tokens.dollar:
          case tokens.caret:
          case tokens.equals:
          case tokens.word:
            this.word();
            break;
          case tokens.colon:
            this.pseudo();
            break;
          case tokens.comma:
            this.comma();
            break;
          case tokens.asterisk:
            this.universal();
            break;
          case tokens.ampersand:
            this.nesting();
            break;
          case tokens.slash:
          case tokens.combinator:
            this.combinator();
            break;
          case tokens.str:
            this.string();
            break;
          case tokens.closeSquare:
            this.missingSquareBracket();
          case tokens.semicolon:
            this.missingBackslash();
          default:
            this.unexpected();
        }
      };
      _proto.expected = function expected(description, index, found) {
        if (Array.isArray(description)) {
          var last = description.pop();
          description = description.join(", ") + " or " + last;
        }
        var an = /^[aeiou]/.test(description[0]) ? "an" : "a";
        if (!found) {
          return this.error("Expected " + an + " " + description + ".", {
            index
          });
        }
        return this.error("Expected " + an + " " + description + ', found "' + found + '" instead.', {
          index
        });
      };
      _proto.requiredSpace = function requiredSpace(space) {
        return this.options.lossy ? " " : space;
      };
      _proto.optionalSpace = function optionalSpace(space) {
        return this.options.lossy ? "" : space;
      };
      _proto.lossySpace = function lossySpace(space, required) {
        if (this.options.lossy) {
          return required ? " " : "";
        } else {
          return space;
        }
      };
      _proto.parseParenthesisToken = function parseParenthesisToken(token) {
        var content = this.content(token);
        if (token[_tokenize.FIELDS.TYPE] === tokens.space) {
          return this.requiredSpace(content);
        } else {
          return content;
        }
      };
      _proto.newNode = function newNode(node, namespace) {
        if (namespace) {
          if (/^ +$/.test(namespace)) {
            if (!this.options.lossy) {
              this.spaces = (this.spaces || "") + namespace;
            }
            namespace = true;
          }
          node.namespace = namespace;
          unescapeProp(node, "namespace");
        }
        if (this.spaces) {
          node.spaces.before = this.spaces;
          this.spaces = "";
        }
        return this.current.append(node);
      };
      _proto.content = function content(token) {
        if (token === void 0) {
          token = this.currToken;
        }
        return this.css.slice(token[_tokenize.FIELDS.START_POS], token[_tokenize.FIELDS.END_POS]);
      };
      _proto.locateNextMeaningfulToken = function locateNextMeaningfulToken(startPosition) {
        if (startPosition === void 0) {
          startPosition = this.position + 1;
        }
        var searchPosition = startPosition;
        while (searchPosition < this.tokens.length) {
          if (WHITESPACE_EQUIV_TOKENS[this.tokens[searchPosition][_tokenize.FIELDS.TYPE]]) {
            searchPosition++;
            continue;
          } else {
            return searchPosition;
          }
        }
        return -1;
      };
      _createClass(Parser2, [{
        key: "currToken",
        get: function get() {
          return this.tokens[this.position];
        }
      }, {
        key: "nextToken",
        get: function get() {
          return this.tokens[this.position + 1];
        }
      }, {
        key: "prevToken",
        get: function get() {
          return this.tokens[this.position - 1];
        }
      }]);
      return Parser2;
    }();
    exports["default"] = Parser;
    module.exports = exports.default;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/processor.js
var require_processor = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/processor.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = void 0;
    var _parser = _interopRequireDefault(require_parser());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var Processor = /* @__PURE__ */ function() {
      function Processor2(func, options) {
        this.func = func || function noop() {
        };
        this.funcRes = null;
        this.options = options;
      }
      var _proto = Processor2.prototype;
      _proto._shouldUpdateSelector = function _shouldUpdateSelector(rule, options) {
        if (options === void 0) {
          options = {};
        }
        var merged = Object.assign({}, this.options, options);
        if (merged.updateSelector === false) {
          return false;
        } else {
          return typeof rule !== "string";
        }
      };
      _proto._isLossy = function _isLossy(options) {
        if (options === void 0) {
          options = {};
        }
        var merged = Object.assign({}, this.options, options);
        if (merged.lossless === false) {
          return true;
        } else {
          return false;
        }
      };
      _proto._root = function _root(rule, options) {
        if (options === void 0) {
          options = {};
        }
        var parser = new _parser["default"](rule, this._parseOptions(options));
        return parser.root;
      };
      _proto._parseOptions = function _parseOptions(options) {
        return {
          lossy: this._isLossy(options)
        };
      };
      _proto._run = function _run(rule, options) {
        var _this = this;
        if (options === void 0) {
          options = {};
        }
        return new Promise(function(resolve, reject) {
          try {
            var root = _this._root(rule, options);
            Promise.resolve(_this.func(root)).then(function(transform) {
              var string = void 0;
              if (_this._shouldUpdateSelector(rule, options)) {
                string = root.toString();
                rule.selector = string;
              }
              return {
                transform,
                root,
                string
              };
            }).then(resolve, reject);
          } catch (e) {
            reject(e);
            return;
          }
        });
      };
      _proto._runSync = function _runSync(rule, options) {
        if (options === void 0) {
          options = {};
        }
        var root = this._root(rule, options);
        var transform = this.func(root);
        if (transform && typeof transform.then === "function") {
          throw new Error("Selector processor returned a promise to a synchronous call.");
        }
        var string = void 0;
        if (options.updateSelector && typeof rule !== "string") {
          string = root.toString();
          rule.selector = string;
        }
        return {
          transform,
          root,
          string
        };
      };
      _proto.ast = function ast(rule, options) {
        return this._run(rule, options).then(function(result) {
          return result.root;
        });
      };
      _proto.astSync = function astSync(rule, options) {
        return this._runSync(rule, options).root;
      };
      _proto.transform = function transform(rule, options) {
        return this._run(rule, options).then(function(result) {
          return result.transform;
        });
      };
      _proto.transformSync = function transformSync(rule, options) {
        return this._runSync(rule, options).transform;
      };
      _proto.process = function process2(rule, options) {
        return this._run(rule, options).then(function(result) {
          return result.string || result.root.toString();
        });
      };
      _proto.processSync = function processSync(rule, options) {
        var result = this._runSync(rule, options);
        return result.string || result.root.toString();
      };
      return Processor2;
    }();
    exports["default"] = Processor;
    module.exports = exports.default;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/constructors.js
var require_constructors = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/constructors.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.universal = exports.tag = exports.string = exports.selector = exports.root = exports.pseudo = exports.nesting = exports.id = exports.comment = exports.combinator = exports.className = exports.attribute = void 0;
    var _attribute = _interopRequireDefault(require_attribute());
    var _className = _interopRequireDefault(require_className());
    var _combinator = _interopRequireDefault(require_combinator());
    var _comment = _interopRequireDefault(require_comment());
    var _id = _interopRequireDefault(require_id());
    var _nesting = _interopRequireDefault(require_nesting());
    var _pseudo = _interopRequireDefault(require_pseudo());
    var _root = _interopRequireDefault(require_root());
    var _selector = _interopRequireDefault(require_selector());
    var _string = _interopRequireDefault(require_string());
    var _tag = _interopRequireDefault(require_tag());
    var _universal = _interopRequireDefault(require_universal());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var attribute = function attribute2(opts) {
      return new _attribute["default"](opts);
    };
    exports.attribute = attribute;
    var className = function className2(opts) {
      return new _className["default"](opts);
    };
    exports.className = className;
    var combinator = function combinator2(opts) {
      return new _combinator["default"](opts);
    };
    exports.combinator = combinator;
    var comment = function comment2(opts) {
      return new _comment["default"](opts);
    };
    exports.comment = comment;
    var id = function id2(opts) {
      return new _id["default"](opts);
    };
    exports.id = id;
    var nesting = function nesting2(opts) {
      return new _nesting["default"](opts);
    };
    exports.nesting = nesting;
    var pseudo = function pseudo2(opts) {
      return new _pseudo["default"](opts);
    };
    exports.pseudo = pseudo;
    var root = function root2(opts) {
      return new _root["default"](opts);
    };
    exports.root = root;
    var selector = function selector2(opts) {
      return new _selector["default"](opts);
    };
    exports.selector = selector;
    var string = function string2(opts) {
      return new _string["default"](opts);
    };
    exports.string = string;
    var tag = function tag2(opts) {
      return new _tag["default"](opts);
    };
    exports.tag = tag;
    var universal = function universal2(opts) {
      return new _universal["default"](opts);
    };
    exports.universal = universal;
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/guards.js
var require_guards = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/guards.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.isNode = isNode;
    exports.isPseudoElement = isPseudoElement;
    exports.isPseudoClass = isPseudoClass;
    exports.isContainer = isContainer;
    exports.isNamespace = isNamespace;
    exports.isUniversal = exports.isTag = exports.isString = exports.isSelector = exports.isRoot = exports.isPseudo = exports.isNesting = exports.isIdentifier = exports.isComment = exports.isCombinator = exports.isClassName = exports.isAttribute = void 0;
    var _types = require_types();
    var _IS_TYPE;
    var IS_TYPE = (_IS_TYPE = {}, _IS_TYPE[_types.ATTRIBUTE] = true, _IS_TYPE[_types.CLASS] = true, _IS_TYPE[_types.COMBINATOR] = true, _IS_TYPE[_types.COMMENT] = true, _IS_TYPE[_types.ID] = true, _IS_TYPE[_types.NESTING] = true, _IS_TYPE[_types.PSEUDO] = true, _IS_TYPE[_types.ROOT] = true, _IS_TYPE[_types.SELECTOR] = true, _IS_TYPE[_types.STRING] = true, _IS_TYPE[_types.TAG] = true, _IS_TYPE[_types.UNIVERSAL] = true, _IS_TYPE);
    function isNode(node) {
      return typeof node === "object" && IS_TYPE[node.type];
    }
    function isNodeType(type, node) {
      return isNode(node) && node.type === type;
    }
    var isAttribute = isNodeType.bind(null, _types.ATTRIBUTE);
    exports.isAttribute = isAttribute;
    var isClassName = isNodeType.bind(null, _types.CLASS);
    exports.isClassName = isClassName;
    var isCombinator = isNodeType.bind(null, _types.COMBINATOR);
    exports.isCombinator = isCombinator;
    var isComment = isNodeType.bind(null, _types.COMMENT);
    exports.isComment = isComment;
    var isIdentifier = isNodeType.bind(null, _types.ID);
    exports.isIdentifier = isIdentifier;
    var isNesting = isNodeType.bind(null, _types.NESTING);
    exports.isNesting = isNesting;
    var isPseudo = isNodeType.bind(null, _types.PSEUDO);
    exports.isPseudo = isPseudo;
    var isRoot = isNodeType.bind(null, _types.ROOT);
    exports.isRoot = isRoot;
    var isSelector = isNodeType.bind(null, _types.SELECTOR);
    exports.isSelector = isSelector;
    var isString = isNodeType.bind(null, _types.STRING);
    exports.isString = isString;
    var isTag = isNodeType.bind(null, _types.TAG);
    exports.isTag = isTag;
    var isUniversal = isNodeType.bind(null, _types.UNIVERSAL);
    exports.isUniversal = isUniversal;
    function isPseudoElement(node) {
      return isPseudo(node) && node.value && (node.value.startsWith("::") || node.value.toLowerCase() === ":before" || node.value.toLowerCase() === ":after" || node.value.toLowerCase() === ":first-letter" || node.value.toLowerCase() === ":first-line");
    }
    function isPseudoClass(node) {
      return isPseudo(node) && !isPseudoElement(node);
    }
    function isContainer(node) {
      return !!(isNode(node) && node.walk);
    }
    function isNamespace(node) {
      return isAttribute(node) || isTag(node);
    }
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/index.js
var require_selectors = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/selectors/index.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _types = require_types();
    Object.keys(_types).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _types[key])
        return;
      exports[key] = _types[key];
    });
    var _constructors = require_constructors();
    Object.keys(_constructors).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _constructors[key])
        return;
      exports[key] = _constructors[key];
    });
    var _guards = require_guards();
    Object.keys(_guards).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _guards[key])
        return;
      exports[key] = _guards[key];
    });
  }
});

// ../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/@tailwindcss/typography/node_modules/postcss-selector-parser/dist/index.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = void 0;
    var _processor = _interopRequireDefault(require_processor());
    var selectors = _interopRequireWildcard(require_selectors());
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var parser = function parser2(processor) {
      return new _processor["default"](processor);
    };
    Object.assign(parser, selectors);
    delete parser.__esModule;
    var _default = parser;
    exports["default"] = _default;
    module.exports = exports.default;
  }
});

// ../../node_modules/@tailwindcss/typography/src/utils.js
var require_utils = __commonJS({
  "../../node_modules/@tailwindcss/typography/src/utils.js"(exports, module) {
    var isPlainObject = require_lodash3();
    var parser = require_dist();
    var parseSelector = parser();
    module.exports = {
      isUsableColor(color, values) {
        return isPlainObject(values) && color !== "gray" && values[600];
      },
      commonTrailingPseudos(selector) {
        let ast = parseSelector.astSync(selector);
        let matrix = [];
        for (let [i, sel] of ast.nodes.entries()) {
          for (const [j, child] of [...sel.nodes].reverse().entries()) {
            if (child.type !== "pseudo" || !child.value.startsWith("::")) {
              break;
            }
            matrix[j] = matrix[j] || [];
            matrix[j][i] = child;
          }
        }
        let trailingPseudos = parser.selector();
        for (const pseudos of matrix) {
          if (!pseudos) {
            continue;
          }
          let values = /* @__PURE__ */ new Set([...pseudos.map((p) => p.value)]);
          if (values.size > 1) {
            break;
          }
          pseudos.forEach((pseudo) => pseudo.remove());
          trailingPseudos.prepend(pseudos[0]);
        }
        if (trailingPseudos.nodes.length) {
          return [trailingPseudos.toString(), ast.toString()];
        }
        return [null, selector];
      }
    };
  }
});

// ../../node_modules/@tailwindcss/typography/src/index.js
var require_src = __commonJS({
  "../../node_modules/@tailwindcss/typography/src/index.js"(exports, module) {
    var plugin = require_plugin();
    var merge = require_lodash();
    var castArray = require_lodash2();
    var styles = require_styles();
    var { commonTrailingPseudos } = require_utils();
    var computed = {};
    function inWhere(selector, { className, modifier, prefix }) {
      let prefixedNot = prefix(`.not-${className}`).slice(1);
      let selectorPrefix = selector.startsWith(">") ? `${modifier === "DEFAULT" ? `.${className}` : `.${className}-${modifier}`} ` : "";
      let [trailingPseudo, rebuiltSelector] = commonTrailingPseudos(selector);
      if (trailingPseudo) {
        return `:where(${selectorPrefix}${rebuiltSelector}):not(:where([class~="${prefixedNot}"] *))${trailingPseudo}`;
      }
      return `:where(${selectorPrefix}${selector}):not(:where([class~="${prefixedNot}"] *))`;
    }
    function isObject(value) {
      return typeof value === "object" && value !== null;
    }
    function configToCss(config3 = {}, { target, className, modifier, prefix }) {
      function updateSelector(k, v) {
        if (target === "legacy") {
          return [k, v];
        }
        if (Array.isArray(v)) {
          return [k, v];
        }
        if (isObject(v)) {
          let nested = Object.values(v).some(isObject);
          if (nested) {
            return [
              inWhere(k, { className, modifier, prefix }),
              v,
              Object.fromEntries(Object.entries(v).map(([k2, v2]) => updateSelector(k2, v2)))
            ];
          }
          return [inWhere(k, { className, modifier, prefix }), v];
        }
        return [k, v];
      }
      return Object.fromEntries(
        Object.entries(
          merge(
            {},
            ...Object.keys(config3).filter((key) => computed[key]).map((key) => computed[key](config3[key])),
            ...castArray(config3.css || {})
          )
        ).map(([k, v]) => updateSelector(k, v))
      );
    }
    module.exports = plugin.withOptions(
      ({ className = "prose", target = "modern" } = {}) => {
        return function({ addVariant, addComponents, theme, prefix }) {
          let modifiers = theme("typography");
          let options = { className, prefix };
          for (let [name, ...selectors] of [
            ["headings", "h1", "h2", "h3", "h4", "h5", "h6", "th"],
            ["h1"],
            ["h2"],
            ["h3"],
            ["h4"],
            ["h5"],
            ["h6"],
            ["p"],
            ["a"],
            ["blockquote"],
            ["figure"],
            ["figcaption"],
            ["strong"],
            ["em"],
            ["code"],
            ["pre"],
            ["ol"],
            ["ul"],
            ["li"],
            ["table"],
            ["thead"],
            ["tr"],
            ["th"],
            ["td"],
            ["img"],
            ["video"],
            ["hr"],
            ["lead", '[class~="lead"]']
          ]) {
            selectors = selectors.length === 0 ? [name] : selectors;
            let selector = target === "legacy" ? selectors.map((selector2) => `& ${selector2}`) : selectors.join(", ");
            addVariant(
              `${className}-${name}`,
              target === "legacy" ? selector : `& :is(${inWhere(selector, options)})`
            );
          }
          addComponents(
            Object.keys(modifiers).map((modifier) => ({
              [modifier === "DEFAULT" ? `.${className}` : `.${className}-${modifier}`]: configToCss(
                modifiers[modifier],
                {
                  target,
                  className,
                  modifier,
                  prefix
                }
              )
            }))
          );
        };
      },
      () => {
        return {
          theme: { typography: styles }
        };
      }
    );
  }
});

// ../../packages/tailwind/src/tailwind.config.cjs
var require_tailwind_config = __commonJS({
  "../../packages/tailwind/src/tailwind.config.cjs"(exports, module) {
    module.exports = {
      theme: {
        data: {
          visible: 'visible~="true"',
          error: 'error~="true"',
          expanded: "expanded~=true",
          dragging: "dragging~=true",
          "align-center": 'align="center"',
          "align-top": 'align="top"'
        },
        extend: {
          colors: {
            action: require_colors2().blue,
            warning: require_colors2().amber,
            danger: require_colors2().red,
            error: require_colors2().red,
            gray: require_colors2().stone,
            base: require_colors2().stone,
            brand: require_colors2().emerald,
            beige: {
              DEFAULT: "#FFFCF2"
            }
          },
          fontFamily: {
            sans: ["Inter", "Helvetica", "system-elements"]
          }
        }
      },
      plugins: [
        require_src()
      ]
    };
  }
});

// tailwind.config.cjs
var require_tailwind_config2 = __commonJS({
  "tailwind.config.cjs"(exports, module) {
    "use strict";
    var baseConfig = require_tailwind_config();
    module.exports = {
      content: ["./app/**/*.{js,ts,jsx,tsx}"],
      ...baseConfig
    };
  }
});

// ../../node_modules/tailwindcss/lib/util/negateValue.js
var require_negateValue = __commonJS({
  "../../node_modules/tailwindcss/lib/util/negateValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return negateValue;
      }
    });
    function negateValue(value) {
      value = `${value}`;
      if (value === "0") {
        return "0";
      }
      if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(value)) {
        return value.replace(/^[+-]?/, (sign) => sign === "-" ? "" : "-");
      }
      let numericFunctions = [
        "var",
        "calc",
        "min",
        "max",
        "clamp"
      ];
      for (const fn of numericFunctions) {
        if (value.includes(`${fn}(`)) {
          return `calc(${value} * -1)`;
        }
      }
    }
  }
});

// ../../node_modules/tailwindcss/lib/corePluginList.js
var require_corePluginList = __commonJS({
  "../../node_modules/tailwindcss/lib/corePluginList.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _default = [
      "preflight",
      "container",
      "accessibility",
      "pointerEvents",
      "visibility",
      "position",
      "inset",
      "isolation",
      "zIndex",
      "order",
      "gridColumn",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRow",
      "gridRowStart",
      "gridRowEnd",
      "float",
      "clear",
      "margin",
      "boxSizing",
      "lineClamp",
      "display",
      "aspectRatio",
      "height",
      "maxHeight",
      "minHeight",
      "width",
      "minWidth",
      "maxWidth",
      "flex",
      "flexShrink",
      "flexGrow",
      "flexBasis",
      "tableLayout",
      "captionSide",
      "borderCollapse",
      "borderSpacing",
      "transformOrigin",
      "translate",
      "rotate",
      "skew",
      "scale",
      "transform",
      "animation",
      "cursor",
      "touchAction",
      "userSelect",
      "resize",
      "scrollSnapType",
      "scrollSnapAlign",
      "scrollSnapStop",
      "scrollMargin",
      "scrollPadding",
      "listStylePosition",
      "listStyleType",
      "listStyleImage",
      "appearance",
      "columns",
      "breakBefore",
      "breakInside",
      "breakAfter",
      "gridAutoColumns",
      "gridAutoFlow",
      "gridAutoRows",
      "gridTemplateColumns",
      "gridTemplateRows",
      "flexDirection",
      "flexWrap",
      "placeContent",
      "placeItems",
      "alignContent",
      "alignItems",
      "justifyContent",
      "justifyItems",
      "gap",
      "space",
      "divideWidth",
      "divideStyle",
      "divideColor",
      "divideOpacity",
      "placeSelf",
      "alignSelf",
      "justifySelf",
      "overflow",
      "overscrollBehavior",
      "scrollBehavior",
      "textOverflow",
      "hyphens",
      "whitespace",
      "wordBreak",
      "borderRadius",
      "borderWidth",
      "borderStyle",
      "borderColor",
      "borderOpacity",
      "backgroundColor",
      "backgroundOpacity",
      "backgroundImage",
      "gradientColorStops",
      "boxDecorationBreak",
      "backgroundSize",
      "backgroundAttachment",
      "backgroundClip",
      "backgroundPosition",
      "backgroundRepeat",
      "backgroundOrigin",
      "fill",
      "stroke",
      "strokeWidth",
      "objectFit",
      "objectPosition",
      "padding",
      "textAlign",
      "textIndent",
      "verticalAlign",
      "fontFamily",
      "fontSize",
      "fontWeight",
      "textTransform",
      "fontStyle",
      "fontVariantNumeric",
      "lineHeight",
      "letterSpacing",
      "textColor",
      "textOpacity",
      "textDecoration",
      "textDecorationColor",
      "textDecorationStyle",
      "textDecorationThickness",
      "textUnderlineOffset",
      "fontSmoothing",
      "placeholderColor",
      "placeholderOpacity",
      "caretColor",
      "accentColor",
      "opacity",
      "backgroundBlendMode",
      "mixBlendMode",
      "boxShadow",
      "boxShadowColor",
      "outlineStyle",
      "outlineWidth",
      "outlineOffset",
      "outlineColor",
      "ringWidth",
      "ringColor",
      "ringOpacity",
      "ringOffsetWidth",
      "ringOffsetColor",
      "blur",
      "brightness",
      "contrast",
      "dropShadow",
      "grayscale",
      "hueRotate",
      "invert",
      "saturate",
      "sepia",
      "filter",
      "backdropBlur",
      "backdropBrightness",
      "backdropContrast",
      "backdropGrayscale",
      "backdropHueRotate",
      "backdropInvert",
      "backdropOpacity",
      "backdropSaturate",
      "backdropSepia",
      "backdropFilter",
      "transitionProperty",
      "transitionDelay",
      "transitionDuration",
      "transitionTimingFunction",
      "willChange",
      "content"
    ];
  }
});

// ../../node_modules/tailwindcss/lib/util/configurePlugins.js
var require_configurePlugins = __commonJS({
  "../../node_modules/tailwindcss/lib/util/configurePlugins.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    function _default(pluginConfig, plugins) {
      if (pluginConfig === void 0) {
        return plugins;
      }
      const pluginNames = Array.isArray(pluginConfig) ? pluginConfig : [
        ...new Set(plugins.filter((pluginName) => {
          return pluginConfig !== false && pluginConfig[pluginName] !== false;
        }).concat(Object.keys(pluginConfig).filter((pluginName) => {
          return pluginConfig[pluginName] !== false;
        })))
      ];
      return pluginNames;
    }
  }
});

// ../../node_modules/tailwindcss/lib/util/defaults.js
var require_defaults = __commonJS({
  "../../node_modules/tailwindcss/lib/util/defaults.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "defaults", {
      enumerable: true,
      get: function() {
        return defaults;
      }
    });
    function defaults(target, ...sources) {
      for (let source of sources) {
        for (let k in source) {
          var _target_hasOwnProperty;
          if (!(target === null || target === void 0 ? void 0 : (_target_hasOwnProperty = target.hasOwnProperty) === null || _target_hasOwnProperty === void 0 ? void 0 : _target_hasOwnProperty.call(target, k))) {
            target[k] = source[k];
          }
        }
        for (let k of Object.getOwnPropertySymbols(source)) {
          var _target_hasOwnProperty1;
          if (!(target === null || target === void 0 ? void 0 : (_target_hasOwnProperty1 = target.hasOwnProperty) === null || _target_hasOwnProperty1 === void 0 ? void 0 : _target_hasOwnProperty1.call(target, k))) {
            target[k] = source[k];
          }
        }
      }
      return target;
    }
  }
});

// ../../node_modules/tailwindcss/lib/util/toPath.js
var require_toPath = __commonJS({
  "../../node_modules/tailwindcss/lib/util/toPath.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "toPath", {
      enumerable: true,
      get: function() {
        return toPath;
      }
    });
    function toPath(path) {
      if (Array.isArray(path))
        return path;
      let openBrackets = path.split("[").length - 1;
      let closedBrackets = path.split("]").length - 1;
      if (openBrackets !== closedBrackets) {
        throw new Error(`Path is invalid. Has unbalanced brackets: ${path}`);
      }
      return path.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
    }
  }
});

// ../../node_modules/tailwindcss/lib/featureFlags.js
var require_featureFlags = __commonJS({
  "../../node_modules/tailwindcss/lib/featureFlags.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      flagEnabled: function() {
        return flagEnabled;
      },
      issueFlagNotices: function() {
        return issueFlagNotices;
      },
      default: function() {
        return _default;
      }
    });
    var _picocolors = /* @__PURE__ */ _interop_require_default(require_picocolors_browser());
    var _log = /* @__PURE__ */ _interop_require_default(require_log());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var defaults = {
      optimizeUniversalDefaults: false,
      generalizedModifiers: true,
      get disableColorOpacityUtilitiesByDefault() {
        return false;
      },
      get relativeContentPathsByDefault() {
        return false;
      }
    };
    var featureFlags = {
      future: [
        "hoverOnlyWhenSupported",
        "respectDefaultRingColorOpacity",
        "disableColorOpacityUtilitiesByDefault",
        "relativeContentPathsByDefault"
      ],
      experimental: [
        "optimizeUniversalDefaults",
        "generalizedModifiers"
      ]
    };
    function flagEnabled(config3, flag) {
      if (featureFlags.future.includes(flag)) {
        var _config_future;
        var _config_future_flag, _ref;
        return config3.future === "all" || ((_ref = (_config_future_flag = config3 === null || config3 === void 0 ? void 0 : (_config_future = config3.future) === null || _config_future === void 0 ? void 0 : _config_future[flag]) !== null && _config_future_flag !== void 0 ? _config_future_flag : defaults[flag]) !== null && _ref !== void 0 ? _ref : false);
      }
      if (featureFlags.experimental.includes(flag)) {
        var _config_experimental;
        var _config_experimental_flag, _ref1;
        return config3.experimental === "all" || ((_ref1 = (_config_experimental_flag = config3 === null || config3 === void 0 ? void 0 : (_config_experimental = config3.experimental) === null || _config_experimental === void 0 ? void 0 : _config_experimental[flag]) !== null && _config_experimental_flag !== void 0 ? _config_experimental_flag : defaults[flag]) !== null && _ref1 !== void 0 ? _ref1 : false);
      }
      return false;
    }
    function experimentalFlagsEnabled(config3) {
      if (config3.experimental === "all") {
        return featureFlags.experimental;
      }
      var _config_experimental;
      return Object.keys((_config_experimental = config3 === null || config3 === void 0 ? void 0 : config3.experimental) !== null && _config_experimental !== void 0 ? _config_experimental : {}).filter((flag) => featureFlags.experimental.includes(flag) && config3.experimental[flag]);
    }
    function issueFlagNotices(config3) {
      if (process.env.JEST_WORKER_ID !== void 0) {
        return;
      }
      if (experimentalFlagsEnabled(config3).length > 0) {
        let changes = experimentalFlagsEnabled(config3).map((s) => _picocolors.default.yellow(s)).join(", ");
        _log.default.warn("experimental-flags-enabled", [
          `You have enabled experimental features: ${changes}`,
          "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
        ]);
      }
    }
    var _default = featureFlags;
  }
});

// ../../node_modules/tailwindcss/lib/util/normalizeConfig.js
var require_normalizeConfig = __commonJS({
  "../../node_modules/tailwindcss/lib/util/normalizeConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "normalizeConfig", {
      enumerable: true,
      get: function() {
        return normalizeConfig;
      }
    });
    var _featureFlags = require_featureFlags();
    var _log = /* @__PURE__ */ _interop_require_wildcard(require_log());
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interop_require_wildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
          default: obj
        };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function normalizeConfig(config3) {
      let valid = (() => {
        if (config3.purge) {
          return false;
        }
        if (!config3.content) {
          return false;
        }
        if (!Array.isArray(config3.content) && !(typeof config3.content === "object" && config3.content !== null)) {
          return false;
        }
        if (Array.isArray(config3.content)) {
          return config3.content.every((path) => {
            if (typeof path === "string")
              return true;
            if (typeof (path === null || path === void 0 ? void 0 : path.raw) !== "string")
              return false;
            if ((path === null || path === void 0 ? void 0 : path.extension) && typeof (path === null || path === void 0 ? void 0 : path.extension) !== "string") {
              return false;
            }
            return true;
          });
        }
        if (typeof config3.content === "object" && config3.content !== null) {
          if (Object.keys(config3.content).some((key) => ![
            "files",
            "relative",
            "extract",
            "transform"
          ].includes(key))) {
            return false;
          }
          if (Array.isArray(config3.content.files)) {
            if (!config3.content.files.every((path) => {
              if (typeof path === "string")
                return true;
              if (typeof (path === null || path === void 0 ? void 0 : path.raw) !== "string")
                return false;
              if ((path === null || path === void 0 ? void 0 : path.extension) && typeof (path === null || path === void 0 ? void 0 : path.extension) !== "string") {
                return false;
              }
              return true;
            })) {
              return false;
            }
            if (typeof config3.content.extract === "object") {
              for (let value of Object.values(config3.content.extract)) {
                if (typeof value !== "function") {
                  return false;
                }
              }
            } else if (!(config3.content.extract === void 0 || typeof config3.content.extract === "function")) {
              return false;
            }
            if (typeof config3.content.transform === "object") {
              for (let value of Object.values(config3.content.transform)) {
                if (typeof value !== "function") {
                  return false;
                }
              }
            } else if (!(config3.content.transform === void 0 || typeof config3.content.transform === "function")) {
              return false;
            }
            if (typeof config3.content.relative !== "boolean" && typeof config3.content.relative !== "undefined") {
              return false;
            }
          }
          return true;
        }
        return false;
      })();
      if (!valid) {
        _log.default.warn("purge-deprecation", [
          "The `purge`/`content` options have changed in Tailwind CSS v3.0.",
          "Update your configuration file to eliminate this warning.",
          "https://tailwindcss.com/docs/upgrade-guide#configure-content-sources"
        ]);
      }
      config3.safelist = (() => {
        var _purge_options;
        let { content, purge, safelist } = config3;
        if (Array.isArray(safelist))
          return safelist;
        if (Array.isArray(content === null || content === void 0 ? void 0 : content.safelist))
          return content.safelist;
        if (Array.isArray(purge === null || purge === void 0 ? void 0 : purge.safelist))
          return purge.safelist;
        if (Array.isArray(purge === null || purge === void 0 ? void 0 : (_purge_options = purge.options) === null || _purge_options === void 0 ? void 0 : _purge_options.safelist))
          return purge.options.safelist;
        return [];
      })();
      config3.blocklist = (() => {
        let { blocklist } = config3;
        if (Array.isArray(blocklist)) {
          if (blocklist.every((item) => typeof item === "string")) {
            return blocklist;
          }
          _log.default.warn("blocklist-invalid", [
            "The `blocklist` option must be an array of strings.",
            "https://tailwindcss.com/docs/content-configuration#discarding-classes"
          ]);
        }
        return [];
      })();
      if (typeof config3.prefix === "function") {
        _log.default.warn("prefix-function", [
          "As of Tailwind CSS v3.0, `prefix` cannot be a function.",
          "Update `prefix` in your configuration to be a string to eliminate this warning.",
          "https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function"
        ]);
        config3.prefix = "";
      } else {
        var _config_prefix;
        config3.prefix = (_config_prefix = config3.prefix) !== null && _config_prefix !== void 0 ? _config_prefix : "";
      }
      config3.content = {
        relative: (() => {
          let { content } = config3;
          if (content === null || content === void 0 ? void 0 : content.relative) {
            return content.relative;
          }
          return (0, _featureFlags.flagEnabled)(config3, "relativeContentPathsByDefault");
        })(),
        files: (() => {
          let { content, purge } = config3;
          if (Array.isArray(purge))
            return purge;
          if (Array.isArray(purge === null || purge === void 0 ? void 0 : purge.content))
            return purge.content;
          if (Array.isArray(content))
            return content;
          if (Array.isArray(content === null || content === void 0 ? void 0 : content.content))
            return content.content;
          if (Array.isArray(content === null || content === void 0 ? void 0 : content.files))
            return content.files;
          return [];
        })(),
        extract: (() => {
          let extract = (() => {
            var _config_purge, _config_content, _config_purge1, _config_purge_extract, _config_content1, _config_content_extract, _config_purge2, _config_purge_options, _config_content2, _config_content_options;
            if ((_config_purge = config3.purge) === null || _config_purge === void 0 ? void 0 : _config_purge.extract)
              return config3.purge.extract;
            if ((_config_content = config3.content) === null || _config_content === void 0 ? void 0 : _config_content.extract)
              return config3.content.extract;
            if ((_config_purge1 = config3.purge) === null || _config_purge1 === void 0 ? void 0 : (_config_purge_extract = _config_purge1.extract) === null || _config_purge_extract === void 0 ? void 0 : _config_purge_extract.DEFAULT)
              return config3.purge.extract.DEFAULT;
            if ((_config_content1 = config3.content) === null || _config_content1 === void 0 ? void 0 : (_config_content_extract = _config_content1.extract) === null || _config_content_extract === void 0 ? void 0 : _config_content_extract.DEFAULT)
              return config3.content.extract.DEFAULT;
            if ((_config_purge2 = config3.purge) === null || _config_purge2 === void 0 ? void 0 : (_config_purge_options = _config_purge2.options) === null || _config_purge_options === void 0 ? void 0 : _config_purge_options.extractors)
              return config3.purge.options.extractors;
            if ((_config_content2 = config3.content) === null || _config_content2 === void 0 ? void 0 : (_config_content_options = _config_content2.options) === null || _config_content_options === void 0 ? void 0 : _config_content_options.extractors)
              return config3.content.options.extractors;
            return {};
          })();
          let extractors = {};
          let defaultExtractor = (() => {
            var _config_purge, _config_purge_options, _config_content, _config_content_options;
            if ((_config_purge = config3.purge) === null || _config_purge === void 0 ? void 0 : (_config_purge_options = _config_purge.options) === null || _config_purge_options === void 0 ? void 0 : _config_purge_options.defaultExtractor) {
              return config3.purge.options.defaultExtractor;
            }
            if ((_config_content = config3.content) === null || _config_content === void 0 ? void 0 : (_config_content_options = _config_content.options) === null || _config_content_options === void 0 ? void 0 : _config_content_options.defaultExtractor) {
              return config3.content.options.defaultExtractor;
            }
            return void 0;
          })();
          if (defaultExtractor !== void 0) {
            extractors.DEFAULT = defaultExtractor;
          }
          if (typeof extract === "function") {
            extractors.DEFAULT = extract;
          } else if (Array.isArray(extract)) {
            for (let { extensions, extractor } of extract !== null && extract !== void 0 ? extract : []) {
              for (let extension of extensions) {
                extractors[extension] = extractor;
              }
            }
          } else if (typeof extract === "object" && extract !== null) {
            Object.assign(extractors, extract);
          }
          return extractors;
        })(),
        transform: (() => {
          let transform = (() => {
            var _config_purge, _config_content, _config_purge1, _config_purge_transform, _config_content1, _config_content_transform;
            if ((_config_purge = config3.purge) === null || _config_purge === void 0 ? void 0 : _config_purge.transform)
              return config3.purge.transform;
            if ((_config_content = config3.content) === null || _config_content === void 0 ? void 0 : _config_content.transform)
              return config3.content.transform;
            if ((_config_purge1 = config3.purge) === null || _config_purge1 === void 0 ? void 0 : (_config_purge_transform = _config_purge1.transform) === null || _config_purge_transform === void 0 ? void 0 : _config_purge_transform.DEFAULT)
              return config3.purge.transform.DEFAULT;
            if ((_config_content1 = config3.content) === null || _config_content1 === void 0 ? void 0 : (_config_content_transform = _config_content1.transform) === null || _config_content_transform === void 0 ? void 0 : _config_content_transform.DEFAULT)
              return config3.content.transform.DEFAULT;
            return {};
          })();
          let transformers = {};
          if (typeof transform === "function") {
            transformers.DEFAULT = transform;
          }
          if (typeof transform === "object" && transform !== null) {
            Object.assign(transformers, transform);
          }
          return transformers;
        })()
      };
      for (let file of config3.content.files) {
        if (typeof file === "string" && /{([^,]*?)}/g.test(file)) {
          _log.default.warn("invalid-glob-braces", [
            `The glob pattern ${(0, _log.dim)(file)} in your Tailwind CSS configuration is invalid.`,
            `Update it to ${(0, _log.dim)(file.replace(/{([^,]*?)}/g, "$1"))} to silence this warning.`
          ]);
          break;
        }
      }
      return config3;
    }
  }
});

// ../../node_modules/tailwindcss/lib/util/isPlainObject.js
var require_isPlainObject = __commonJS({
  "../../node_modules/tailwindcss/lib/util/isPlainObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return isPlainObject;
      }
    });
    function isPlainObject(value) {
      if (Object.prototype.toString.call(value) !== "[object Object]") {
        return false;
      }
      const prototype = Object.getPrototypeOf(value);
      return prototype === null || prototype === Object.prototype;
    }
  }
});

// ../../node_modules/tailwindcss/lib/util/cloneDeep.js
var require_cloneDeep = __commonJS({
  "../../node_modules/tailwindcss/lib/util/cloneDeep.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "cloneDeep", {
      enumerable: true,
      get: function() {
        return cloneDeep;
      }
    });
    function cloneDeep(value) {
      if (Array.isArray(value)) {
        return value.map((child) => cloneDeep(child));
      }
      if (typeof value === "object" && value !== null) {
        return Object.fromEntries(Object.entries(value).map(([k, v]) => [
          k,
          cloneDeep(v)
        ]));
      }
      return value;
    }
  }
});

// ../../node_modules/tailwindcss/lib/util/escapeCommas.js
var require_escapeCommas = __commonJS({
  "../../node_modules/tailwindcss/lib/util/escapeCommas.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return escapeCommas;
      }
    });
    function escapeCommas(className) {
      return className.replace(/\\,/g, "\\2c ");
    }
  }
});

// ../../node_modules/tailwindcss/lib/util/colorNames.js
var require_colorNames = __commonJS({
  "../../node_modules/tailwindcss/lib/util/colorNames.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _default = {
      aliceblue: [
        240,
        248,
        255
      ],
      antiquewhite: [
        250,
        235,
        215
      ],
      aqua: [
        0,
        255,
        255
      ],
      aquamarine: [
        127,
        255,
        212
      ],
      azure: [
        240,
        255,
        255
      ],
      beige: [
        245,
        245,
        220
      ],
      bisque: [
        255,
        228,
        196
      ],
      black: [
        0,
        0,
        0
      ],
      blanchedalmond: [
        255,
        235,
        205
      ],
      blue: [
        0,
        0,
        255
      ],
      blueviolet: [
        138,
        43,
        226
      ],
      brown: [
        165,
        42,
        42
      ],
      burlywood: [
        222,
        184,
        135
      ],
      cadetblue: [
        95,
        158,
        160
      ],
      chartreuse: [
        127,
        255,
        0
      ],
      chocolate: [
        210,
        105,
        30
      ],
      coral: [
        255,
        127,
        80
      ],
      cornflowerblue: [
        100,
        149,
        237
      ],
      cornsilk: [
        255,
        248,
        220
      ],
      crimson: [
        220,
        20,
        60
      ],
      cyan: [
        0,
        255,
        255
      ],
      darkblue: [
        0,
        0,
        139
      ],
      darkcyan: [
        0,
        139,
        139
      ],
      darkgoldenrod: [
        184,
        134,
        11
      ],
      darkgray: [
        169,
        169,
        169
      ],
      darkgreen: [
        0,
        100,
        0
      ],
      darkgrey: [
        169,
        169,
        169
      ],
      darkkhaki: [
        189,
        183,
        107
      ],
      darkmagenta: [
        139,
        0,
        139
      ],
      darkolivegreen: [
        85,
        107,
        47
      ],
      darkorange: [
        255,
        140,
        0
      ],
      darkorchid: [
        153,
        50,
        204
      ],
      darkred: [
        139,
        0,
        0
      ],
      darksalmon: [
        233,
        150,
        122
      ],
      darkseagreen: [
        143,
        188,
        143
      ],
      darkslateblue: [
        72,
        61,
        139
      ],
      darkslategray: [
        47,
        79,
        79
      ],
      darkslategrey: [
        47,
        79,
        79
      ],
      darkturquoise: [
        0,
        206,
        209
      ],
      darkviolet: [
        148,
        0,
        211
      ],
      deeppink: [
        255,
        20,
        147
      ],
      deepskyblue: [
        0,
        191,
        255
      ],
      dimgray: [
        105,
        105,
        105
      ],
      dimgrey: [
        105,
        105,
        105
      ],
      dodgerblue: [
        30,
        144,
        255
      ],
      firebrick: [
        178,
        34,
        34
      ],
      floralwhite: [
        255,
        250,
        240
      ],
      forestgreen: [
        34,
        139,
        34
      ],
      fuchsia: [
        255,
        0,
        255
      ],
      gainsboro: [
        220,
        220,
        220
      ],
      ghostwhite: [
        248,
        248,
        255
      ],
      gold: [
        255,
        215,
        0
      ],
      goldenrod: [
        218,
        165,
        32
      ],
      gray: [
        128,
        128,
        128
      ],
      green: [
        0,
        128,
        0
      ],
      greenyellow: [
        173,
        255,
        47
      ],
      grey: [
        128,
        128,
        128
      ],
      honeydew: [
        240,
        255,
        240
      ],
      hotpink: [
        255,
        105,
        180
      ],
      indianred: [
        205,
        92,
        92
      ],
      indigo: [
        75,
        0,
        130
      ],
      ivory: [
        255,
        255,
        240
      ],
      khaki: [
        240,
        230,
        140
      ],
      lavender: [
        230,
        230,
        250
      ],
      lavenderblush: [
        255,
        240,
        245
      ],
      lawngreen: [
        124,
        252,
        0
      ],
      lemonchiffon: [
        255,
        250,
        205
      ],
      lightblue: [
        173,
        216,
        230
      ],
      lightcoral: [
        240,
        128,
        128
      ],
      lightcyan: [
        224,
        255,
        255
      ],
      lightgoldenrodyellow: [
        250,
        250,
        210
      ],
      lightgray: [
        211,
        211,
        211
      ],
      lightgreen: [
        144,
        238,
        144
      ],
      lightgrey: [
        211,
        211,
        211
      ],
      lightpink: [
        255,
        182,
        193
      ],
      lightsalmon: [
        255,
        160,
        122
      ],
      lightseagreen: [
        32,
        178,
        170
      ],
      lightskyblue: [
        135,
        206,
        250
      ],
      lightslategray: [
        119,
        136,
        153
      ],
      lightslategrey: [
        119,
        136,
        153
      ],
      lightsteelblue: [
        176,
        196,
        222
      ],
      lightyellow: [
        255,
        255,
        224
      ],
      lime: [
        0,
        255,
        0
      ],
      limegreen: [
        50,
        205,
        50
      ],
      linen: [
        250,
        240,
        230
      ],
      magenta: [
        255,
        0,
        255
      ],
      maroon: [
        128,
        0,
        0
      ],
      mediumaquamarine: [
        102,
        205,
        170
      ],
      mediumblue: [
        0,
        0,
        205
      ],
      mediumorchid: [
        186,
        85,
        211
      ],
      mediumpurple: [
        147,
        112,
        219
      ],
      mediumseagreen: [
        60,
        179,
        113
      ],
      mediumslateblue: [
        123,
        104,
        238
      ],
      mediumspringgreen: [
        0,
        250,
        154
      ],
      mediumturquoise: [
        72,
        209,
        204
      ],
      mediumvioletred: [
        199,
        21,
        133
      ],
      midnightblue: [
        25,
        25,
        112
      ],
      mintcream: [
        245,
        255,
        250
      ],
      mistyrose: [
        255,
        228,
        225
      ],
      moccasin: [
        255,
        228,
        181
      ],
      navajowhite: [
        255,
        222,
        173
      ],
      navy: [
        0,
        0,
        128
      ],
      oldlace: [
        253,
        245,
        230
      ],
      olive: [
        128,
        128,
        0
      ],
      olivedrab: [
        107,
        142,
        35
      ],
      orange: [
        255,
        165,
        0
      ],
      orangered: [
        255,
        69,
        0
      ],
      orchid: [
        218,
        112,
        214
      ],
      palegoldenrod: [
        238,
        232,
        170
      ],
      palegreen: [
        152,
        251,
        152
      ],
      paleturquoise: [
        175,
        238,
        238
      ],
      palevioletred: [
        219,
        112,
        147
      ],
      papayawhip: [
        255,
        239,
        213
      ],
      peachpuff: [
        255,
        218,
        185
      ],
      peru: [
        205,
        133,
        63
      ],
      pink: [
        255,
        192,
        203
      ],
      plum: [
        221,
        160,
        221
      ],
      powderblue: [
        176,
        224,
        230
      ],
      purple: [
        128,
        0,
        128
      ],
      rebeccapurple: [
        102,
        51,
        153
      ],
      red: [
        255,
        0,
        0
      ],
      rosybrown: [
        188,
        143,
        143
      ],
      royalblue: [
        65,
        105,
        225
      ],
      saddlebrown: [
        139,
        69,
        19
      ],
      salmon: [
        250,
        128,
        114
      ],
      sandybrown: [
        244,
        164,
        96
      ],
      seagreen: [
        46,
        139,
        87
      ],
      seashell: [
        255,
        245,
        238
      ],
      sienna: [
        160,
        82,
        45
      ],
      silver: [
        192,
        192,
        192
      ],
      skyblue: [
        135,
        206,
        235
      ],
      slateblue: [
        106,
        90,
        205
      ],
      slategray: [
        112,
        128,
        144
      ],
      slategrey: [
        112,
        128,
        144
      ],
      snow: [
        255,
        250,
        250
      ],
      springgreen: [
        0,
        255,
        127
      ],
      steelblue: [
        70,
        130,
        180
      ],
      tan: [
        210,
        180,
        140
      ],
      teal: [
        0,
        128,
        128
      ],
      thistle: [
        216,
        191,
        216
      ],
      tomato: [
        255,
        99,
        71
      ],
      turquoise: [
        64,
        224,
        208
      ],
      violet: [
        238,
        130,
        238
      ],
      wheat: [
        245,
        222,
        179
      ],
      white: [
        255,
        255,
        255
      ],
      whitesmoke: [
        245,
        245,
        245
      ],
      yellow: [
        255,
        255,
        0
      ],
      yellowgreen: [
        154,
        205,
        50
      ]
    };
  }
});

// ../../node_modules/tailwindcss/lib/util/color.js
var require_color = __commonJS({
  "../../node_modules/tailwindcss/lib/util/color.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      parseColor: function() {
        return parseColor;
      },
      formatColor: function() {
        return formatColor;
      }
    });
    var _colorNames = /* @__PURE__ */ _interop_require_default(require_colorNames());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var HEX = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
    var SHORT_HEX = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
    var VALUE = /(?:\d+|\d*\.\d+)%?/;
    var SEP = /(?:\s*,\s*|\s+)/;
    var ALPHA_SEP = /\s*[,/]\s*/;
    var CUSTOM_PROPERTY = /var\(--(?:[^ )]*?)\)/;
    var RGB = new RegExp(`^(rgba?)\\(\\s*(${VALUE.source}|${CUSTOM_PROPERTY.source})(?:${SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?(?:${SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?(?:${ALPHA_SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?\\s*\\)$`);
    var HSL = new RegExp(`^(hsla?)\\(\\s*((?:${VALUE.source})(?:deg|rad|grad|turn)?|${CUSTOM_PROPERTY.source})(?:${SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?(?:${SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?(?:${ALPHA_SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?\\s*\\)$`);
    function parseColor(value, { loose = false } = {}) {
      var _match_, _match__toString;
      if (typeof value !== "string") {
        return null;
      }
      value = value.trim();
      if (value === "transparent") {
        return {
          mode: "rgb",
          color: [
            "0",
            "0",
            "0"
          ],
          alpha: "0"
        };
      }
      if (value in _colorNames.default) {
        return {
          mode: "rgb",
          color: _colorNames.default[value].map((v) => v.toString())
        };
      }
      let hex = value.replace(SHORT_HEX, (_, r, g, b, a) => [
        "#",
        r,
        r,
        g,
        g,
        b,
        b,
        a ? a + a : ""
      ].join("")).match(HEX);
      if (hex !== null) {
        return {
          mode: "rgb",
          color: [
            parseInt(hex[1], 16),
            parseInt(hex[2], 16),
            parseInt(hex[3], 16)
          ].map((v) => v.toString()),
          alpha: hex[4] ? (parseInt(hex[4], 16) / 255).toString() : void 0
        };
      }
      var _value_match;
      let match = (_value_match = value.match(RGB)) !== null && _value_match !== void 0 ? _value_match : value.match(HSL);
      if (match === null) {
        return null;
      }
      let color = [
        match[2],
        match[3],
        match[4]
      ].filter(Boolean).map((v) => v.toString());
      if (color.length === 2 && color[0].startsWith("var(")) {
        return {
          mode: match[1],
          color: [
            color[0]
          ],
          alpha: color[1]
        };
      }
      if (!loose && color.length !== 3) {
        return null;
      }
      if (color.length < 3 && !color.some((part) => /^var\(.*?\)$/.test(part))) {
        return null;
      }
      return {
        mode: match[1],
        color,
        alpha: (_match_ = match[5]) === null || _match_ === void 0 ? void 0 : (_match__toString = _match_.toString) === null || _match__toString === void 0 ? void 0 : _match__toString.call(_match_)
      };
    }
    function formatColor({ mode, color, alpha }) {
      let hasAlpha = alpha !== void 0;
      if (mode === "rgba" || mode === "hsla") {
        return `${mode}(${color.join(", ")}${hasAlpha ? `, ${alpha}` : ""})`;
      }
      return `${mode}(${color.join(" ")}${hasAlpha ? ` / ${alpha}` : ""})`;
    }
  }
});

// ../../node_modules/tailwindcss/lib/util/withAlphaVariable.js
var require_withAlphaVariable = __commonJS({
  "../../node_modules/tailwindcss/lib/util/withAlphaVariable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      withAlphaValue: function() {
        return withAlphaValue;
      },
      default: function() {
        return withAlphaVariable;
      }
    });
    var _color = require_color();
    function withAlphaValue(color, alphaValue, defaultValue) {
      if (typeof color === "function") {
        return color({
          opacityValue: alphaValue
        });
      }
      let parsed = (0, _color.parseColor)(color, {
        loose: true
      });
      if (parsed === null) {
        return defaultValue;
      }
      return (0, _color.formatColor)({
        ...parsed,
        alpha: alphaValue
      });
    }
    function withAlphaVariable({ color, property, variable }) {
      let properties = [].concat(property);
      if (typeof color === "function") {
        return {
          [variable]: "1",
          ...Object.fromEntries(properties.map((p) => {
            return [
              p,
              color({
                opacityVariable: variable,
                opacityValue: `var(${variable})`
              })
            ];
          }))
        };
      }
      const parsed = (0, _color.parseColor)(color);
      if (parsed === null) {
        return Object.fromEntries(properties.map((p) => [
          p,
          color
        ]));
      }
      if (parsed.alpha !== void 0) {
        return Object.fromEntries(properties.map((p) => [
          p,
          color
        ]));
      }
      return {
        [variable]: "1",
        ...Object.fromEntries(properties.map((p) => {
          return [
            p,
            (0, _color.formatColor)({
              ...parsed,
              alpha: `var(${variable})`
            })
          ];
        }))
      };
    }
  }
});

// ../../node_modules/tailwindcss/lib/util/splitAtTopLevelOnly.js
var require_splitAtTopLevelOnly = __commonJS({
  "../../node_modules/tailwindcss/lib/util/splitAtTopLevelOnly.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "splitAtTopLevelOnly", {
      enumerable: true,
      get: function() {
        return splitAtTopLevelOnly;
      }
    });
    function splitAtTopLevelOnly(input, separator) {
      let stack = [];
      let parts = [];
      let lastPos = 0;
      let isEscaped = false;
      for (let idx = 0; idx < input.length; idx++) {
        let char = input[idx];
        if (stack.length === 0 && char === separator[0] && !isEscaped) {
          if (separator.length === 1 || input.slice(idx, idx + separator.length) === separator) {
            parts.push(input.slice(lastPos, idx));
            lastPos = idx + separator.length;
          }
        }
        if (isEscaped) {
          isEscaped = false;
        } else if (char === "\\") {
          isEscaped = true;
        }
        if (char === "(" || char === "[" || char === "{") {
          stack.push(char);
        } else if (char === ")" && stack[stack.length - 1] === "(" || char === "]" && stack[stack.length - 1] === "[" || char === "}" && stack[stack.length - 1] === "{") {
          stack.pop();
        }
      }
      parts.push(input.slice(lastPos));
      return parts;
    }
  }
});

// ../../node_modules/tailwindcss/lib/util/parseBoxShadowValue.js
var require_parseBoxShadowValue = __commonJS({
  "../../node_modules/tailwindcss/lib/util/parseBoxShadowValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      parseBoxShadowValue: function() {
        return parseBoxShadowValue;
      },
      formatBoxShadowValue: function() {
        return formatBoxShadowValue;
      }
    });
    var _splitAtTopLevelOnly = require_splitAtTopLevelOnly();
    var KEYWORDS = /* @__PURE__ */ new Set([
      "inset",
      "inherit",
      "initial",
      "revert",
      "unset"
    ]);
    var SPACE = /\ +(?![^(]*\))/g;
    var LENGTH = /^-?(\d+|\.\d+)(.*?)$/g;
    function parseBoxShadowValue(input) {
      let shadows = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(input, ",");
      return shadows.map((shadow) => {
        let value = shadow.trim();
        let result = {
          raw: value
        };
        let parts = value.split(SPACE);
        let seen = /* @__PURE__ */ new Set();
        for (let part of parts) {
          LENGTH.lastIndex = 0;
          if (!seen.has("KEYWORD") && KEYWORDS.has(part)) {
            result.keyword = part;
            seen.add("KEYWORD");
          } else if (LENGTH.test(part)) {
            if (!seen.has("X")) {
              result.x = part;
              seen.add("X");
            } else if (!seen.has("Y")) {
              result.y = part;
              seen.add("Y");
            } else if (!seen.has("BLUR")) {
              result.blur = part;
              seen.add("BLUR");
            } else if (!seen.has("SPREAD")) {
              result.spread = part;
              seen.add("SPREAD");
            }
          } else {
            if (!result.color) {
              result.color = part;
            } else {
              if (!result.unknown)
                result.unknown = [];
              result.unknown.push(part);
            }
          }
        }
        result.valid = result.x !== void 0 && result.y !== void 0;
        return result;
      });
    }
    function formatBoxShadowValue(shadows) {
      return shadows.map((shadow) => {
        if (!shadow.valid) {
          return shadow.raw;
        }
        return [
          shadow.keyword,
          shadow.x,
          shadow.y,
          shadow.blur,
          shadow.spread,
          shadow.color
        ].filter(Boolean).join(" ");
      }).join(", ");
    }
  }
});

// ../../node_modules/tailwindcss/lib/util/dataTypes.js
var require_dataTypes = __commonJS({
  "../../node_modules/tailwindcss/lib/util/dataTypes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      normalize: function() {
        return normalize;
      },
      url: function() {
        return url;
      },
      number: function() {
        return number;
      },
      percentage: function() {
        return percentage;
      },
      length: function() {
        return length;
      },
      lineWidth: function() {
        return lineWidth;
      },
      shadow: function() {
        return shadow;
      },
      color: function() {
        return color;
      },
      image: function() {
        return image;
      },
      gradient: function() {
        return gradient;
      },
      position: function() {
        return position;
      },
      familyName: function() {
        return familyName;
      },
      genericName: function() {
        return genericName;
      },
      absoluteSize: function() {
        return absoluteSize;
      },
      relativeSize: function() {
        return relativeSize;
      }
    });
    var _color = require_color();
    var _parseBoxShadowValue = require_parseBoxShadowValue();
    var _splitAtTopLevelOnly = require_splitAtTopLevelOnly();
    var cssFunctions = [
      "min",
      "max",
      "clamp",
      "calc"
    ];
    function isCSSFunction(value) {
      return cssFunctions.some((fn) => new RegExp(`^${fn}\\(.*\\)`).test(value));
    }
    var placeholder = "--tw-placeholder";
    var placeholderRe = new RegExp(placeholder, "g");
    function normalize(value, isRoot = true) {
      if (value.startsWith("--")) {
        return `var(${value})`;
      }
      if (value.includes("url(")) {
        return value.split(/(url\(.*?\))/g).filter(Boolean).map((part) => {
          if (/^url\(.*?\)$/.test(part)) {
            return part;
          }
          return normalize(part, false);
        }).join("");
      }
      value = value.replace(/([^\\])_+/g, (fullMatch, characterBefore) => characterBefore + " ".repeat(fullMatch.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_");
      if (isRoot) {
        value = value.trim();
      }
      value = value.replace(/(calc|min|max|clamp)\(.+\)/g, (match) => {
        let vars = [];
        return match.replace(/var\((--.+?)[,)]/g, (match2, g1) => {
          vars.push(g1);
          return match2.replace(g1, placeholder);
        }).replace(/(-?\d*\.?\d(?!\b-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ").replace(placeholderRe, () => vars.shift());
      });
      return value;
    }
    function url(value) {
      return value.startsWith("url(");
    }
    function number(value) {
      return !isNaN(Number(value)) || isCSSFunction(value);
    }
    function percentage(value) {
      return value.endsWith("%") && number(value.slice(0, -1)) || isCSSFunction(value);
    }
    var lengthUnits = [
      "cm",
      "mm",
      "Q",
      "in",
      "pc",
      "pt",
      "px",
      "em",
      "ex",
      "ch",
      "rem",
      "lh",
      "rlh",
      "vw",
      "vh",
      "vmin",
      "vmax",
      "vb",
      "vi",
      "svw",
      "svh",
      "lvw",
      "lvh",
      "dvw",
      "dvh",
      "cqw",
      "cqh",
      "cqi",
      "cqb",
      "cqmin",
      "cqmax"
    ];
    var lengthUnitsPattern = `(?:${lengthUnits.join("|")})`;
    function length(value) {
      return value === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${lengthUnitsPattern}$`).test(value) || isCSSFunction(value);
    }
    var lineWidths = /* @__PURE__ */ new Set([
      "thin",
      "medium",
      "thick"
    ]);
    function lineWidth(value) {
      return lineWidths.has(value);
    }
    function shadow(value) {
      let parsedShadows = (0, _parseBoxShadowValue.parseBoxShadowValue)(normalize(value));
      for (let parsedShadow of parsedShadows) {
        if (!parsedShadow.valid) {
          return false;
        }
      }
      return true;
    }
    function color(value) {
      let colors2 = 0;
      let result = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(value, "_").every((part) => {
        part = normalize(part);
        if (part.startsWith("var("))
          return true;
        if ((0, _color.parseColor)(part, {
          loose: true
        }) !== null)
          return colors2++, true;
        return false;
      });
      if (!result)
        return false;
      return colors2 > 0;
    }
    function image(value) {
      let images = 0;
      let result = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(value, ",").every((part) => {
        part = normalize(part);
        if (part.startsWith("var("))
          return true;
        if (url(part) || gradient(part) || [
          "element(",
          "image(",
          "cross-fade(",
          "image-set("
        ].some((fn) => part.startsWith(fn))) {
          images++;
          return true;
        }
        return false;
      });
      if (!result)
        return false;
      return images > 0;
    }
    var gradientTypes = /* @__PURE__ */ new Set([
      "linear-gradient",
      "radial-gradient",
      "repeating-linear-gradient",
      "repeating-radial-gradient",
      "conic-gradient"
    ]);
    function gradient(value) {
      value = normalize(value);
      for (let type of gradientTypes) {
        if (value.startsWith(`${type}(`)) {
          return true;
        }
      }
      return false;
    }
    var validPositions = /* @__PURE__ */ new Set([
      "center",
      "top",
      "right",
      "bottom",
      "left"
    ]);
    function position(value) {
      let positions = 0;
      let result = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(value, "_").every((part) => {
        part = normalize(part);
        if (part.startsWith("var("))
          return true;
        if (validPositions.has(part) || length(part) || percentage(part)) {
          positions++;
          return true;
        }
        return false;
      });
      if (!result)
        return false;
      return positions > 0;
    }
    function familyName(value) {
      let fonts = 0;
      let result = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(value, ",").every((part) => {
        part = normalize(part);
        if (part.startsWith("var("))
          return true;
        if (part.includes(" ")) {
          if (!/(['"])([^"']+)\1/g.test(part)) {
            return false;
          }
        }
        if (/^\d/g.test(part)) {
          return false;
        }
        fonts++;
        return true;
      });
      if (!result)
        return false;
      return fonts > 0;
    }
    var genericNames = /* @__PURE__ */ new Set([
      "serif",
      "sans-serif",
      "monospace",
      "cursive",
      "fantasy",
      "system-ui",
      "ui-serif",
      "ui-sans-serif",
      "ui-monospace",
      "ui-rounded",
      "math",
      "emoji",
      "fangsong"
    ]);
    function genericName(value) {
      return genericNames.has(value);
    }
    var absoluteSizes = /* @__PURE__ */ new Set([
      "xx-small",
      "x-small",
      "small",
      "medium",
      "large",
      "x-large",
      "x-large",
      "xxx-large"
    ]);
    function absoluteSize(value) {
      return absoluteSizes.has(value);
    }
    var relativeSizes = /* @__PURE__ */ new Set([
      "larger",
      "smaller"
    ]);
    function relativeSize(value) {
      return relativeSizes.has(value);
    }
  }
});

// ../../node_modules/tailwindcss/lib/util/validateFormalSyntax.js
var require_validateFormalSyntax = __commonJS({
  "../../node_modules/tailwindcss/lib/util/validateFormalSyntax.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "backgroundSize", {
      enumerable: true,
      get: function() {
        return backgroundSize;
      }
    });
    var _dataTypes = require_dataTypes();
    var _splitAtTopLevelOnly = require_splitAtTopLevelOnly();
    function backgroundSize(value) {
      let keywordValues = [
        "cover",
        "contain"
      ];
      return (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(value, ",").every((part) => {
        let sizes = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(part, "_").filter(Boolean);
        if (sizes.length === 1 && keywordValues.includes(sizes[0]))
          return true;
        if (sizes.length !== 1 && sizes.length !== 2)
          return false;
        return sizes.every((size) => (0, _dataTypes.length)(size) || (0, _dataTypes.percentage)(size) || size === "auto");
      });
    }
  }
});

// ../../node_modules/tailwindcss/lib/util/pluginUtils.js
var require_pluginUtils = __commonJS({
  "../../node_modules/tailwindcss/lib/util/pluginUtils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      updateAllClasses: function() {
        return updateAllClasses;
      },
      asValue: function() {
        return asValue;
      },
      parseColorFormat: function() {
        return parseColorFormat;
      },
      asColor: function() {
        return asColor;
      },
      asLookupValue: function() {
        return asLookupValue;
      },
      typeMap: function() {
        return typeMap;
      },
      coerceValue: function() {
        return coerceValue;
      },
      getMatchingTypes: function() {
        return getMatchingTypes;
      }
    });
    var _escapeCommas = /* @__PURE__ */ _interop_require_default(require_escapeCommas());
    var _withAlphaVariable = require_withAlphaVariable();
    var _dataTypes = require_dataTypes();
    var _negateValue = /* @__PURE__ */ _interop_require_default(require_negateValue());
    var _validateFormalSyntax = require_validateFormalSyntax();
    var _featureFlags = require_featureFlags();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function updateAllClasses(selectors, updateClass) {
      selectors.walkClasses((sel) => {
        sel.value = updateClass(sel.value);
        if (sel.raws && sel.raws.value) {
          sel.raws.value = (0, _escapeCommas.default)(sel.raws.value);
        }
      });
    }
    function resolveArbitraryValue(modifier, validate) {
      if (!isArbitraryValue(modifier)) {
        return void 0;
      }
      let value = modifier.slice(1, -1);
      if (!validate(value)) {
        return void 0;
      }
      return (0, _dataTypes.normalize)(value);
    }
    function asNegativeValue(modifier, lookup = {}, validate) {
      let positiveValue = lookup[modifier];
      if (positiveValue !== void 0) {
        return (0, _negateValue.default)(positiveValue);
      }
      if (isArbitraryValue(modifier)) {
        let resolved = resolveArbitraryValue(modifier, validate);
        if (resolved === void 0) {
          return void 0;
        }
        return (0, _negateValue.default)(resolved);
      }
    }
    function asValue(modifier, options = {}, { validate = () => true } = {}) {
      var _options_values;
      let value = (_options_values = options.values) === null || _options_values === void 0 ? void 0 : _options_values[modifier];
      if (value !== void 0) {
        return value;
      }
      if (options.supportsNegativeValues && modifier.startsWith("-")) {
        return asNegativeValue(modifier.slice(1), options.values, validate);
      }
      return resolveArbitraryValue(modifier, validate);
    }
    function isArbitraryValue(input) {
      return input.startsWith("[") && input.endsWith("]");
    }
    function splitUtilityModifier(modifier) {
      let slashIdx = modifier.lastIndexOf("/");
      if (slashIdx === -1 || slashIdx === modifier.length - 1) {
        return [
          modifier,
          void 0
        ];
      }
      let arbitrary = isArbitraryValue(modifier);
      if (arbitrary && !modifier.includes("]/[")) {
        return [
          modifier,
          void 0
        ];
      }
      return [
        modifier.slice(0, slashIdx),
        modifier.slice(slashIdx + 1)
      ];
    }
    function parseColorFormat(value) {
      if (typeof value === "string" && value.includes("<alpha-value>")) {
        let oldValue = value;
        return ({ opacityValue = 1 }) => oldValue.replace("<alpha-value>", opacityValue);
      }
      return value;
    }
    function unwrapArbitraryModifier(modifier) {
      return (0, _dataTypes.normalize)(modifier.slice(1, -1));
    }
    function asColor(modifier, options = {}, { tailwindConfig = {} } = {}) {
      var _options_values;
      if (((_options_values = options.values) === null || _options_values === void 0 ? void 0 : _options_values[modifier]) !== void 0) {
        var _options_values1;
        return parseColorFormat((_options_values1 = options.values) === null || _options_values1 === void 0 ? void 0 : _options_values1[modifier]);
      }
      let [color, alpha] = splitUtilityModifier(modifier);
      if (alpha !== void 0) {
        var _options_values2, _tailwindConfig_theme, _tailwindConfig_theme_opacity;
        var _options_values_color;
        let normalizedColor = (_options_values_color = (_options_values2 = options.values) === null || _options_values2 === void 0 ? void 0 : _options_values2[color]) !== null && _options_values_color !== void 0 ? _options_values_color : isArbitraryValue(color) ? color.slice(1, -1) : void 0;
        if (normalizedColor === void 0) {
          return void 0;
        }
        normalizedColor = parseColorFormat(normalizedColor);
        if (isArbitraryValue(alpha)) {
          return (0, _withAlphaVariable.withAlphaValue)(normalizedColor, unwrapArbitraryModifier(alpha));
        }
        if (((_tailwindConfig_theme = tailwindConfig.theme) === null || _tailwindConfig_theme === void 0 ? void 0 : (_tailwindConfig_theme_opacity = _tailwindConfig_theme.opacity) === null || _tailwindConfig_theme_opacity === void 0 ? void 0 : _tailwindConfig_theme_opacity[alpha]) === void 0) {
          return void 0;
        }
        return (0, _withAlphaVariable.withAlphaValue)(normalizedColor, tailwindConfig.theme.opacity[alpha]);
      }
      return asValue(modifier, options, {
        validate: _dataTypes.color
      });
    }
    function asLookupValue(modifier, options = {}) {
      var _options_values;
      return (_options_values = options.values) === null || _options_values === void 0 ? void 0 : _options_values[modifier];
    }
    function guess(validate) {
      return (modifier, options) => {
        return asValue(modifier, options, {
          validate
        });
      };
    }
    var typeMap = {
      any: asValue,
      color: asColor,
      url: guess(_dataTypes.url),
      image: guess(_dataTypes.image),
      length: guess(_dataTypes.length),
      percentage: guess(_dataTypes.percentage),
      position: guess(_dataTypes.position),
      lookup: asLookupValue,
      "generic-name": guess(_dataTypes.genericName),
      "family-name": guess(_dataTypes.familyName),
      number: guess(_dataTypes.number),
      "line-width": guess(_dataTypes.lineWidth),
      "absolute-size": guess(_dataTypes.absoluteSize),
      "relative-size": guess(_dataTypes.relativeSize),
      shadow: guess(_dataTypes.shadow),
      size: guess(_validateFormalSyntax.backgroundSize)
    };
    var supportedTypes = Object.keys(typeMap);
    function splitAtFirst(input, delim) {
      let idx = input.indexOf(delim);
      if (idx === -1)
        return [
          void 0,
          input
        ];
      return [
        input.slice(0, idx),
        input.slice(idx + 1)
      ];
    }
    function coerceValue(types, modifier, options, tailwindConfig) {
      if (options.values && modifier in options.values) {
        for (let { type } of types !== null && types !== void 0 ? types : []) {
          let result = typeMap[type](modifier, options, {
            tailwindConfig
          });
          if (result === void 0) {
            continue;
          }
          return [
            result,
            type,
            null
          ];
        }
      }
      if (isArbitraryValue(modifier)) {
        let arbitraryValue = modifier.slice(1, -1);
        let [explicitType, value] = splitAtFirst(arbitraryValue, ":");
        if (!/^[\w-_]+$/g.test(explicitType)) {
          value = arbitraryValue;
        } else if (explicitType !== void 0 && !supportedTypes.includes(explicitType)) {
          return [];
        }
        if (value.length > 0 && supportedTypes.includes(explicitType)) {
          return [
            asValue(`[${value}]`, options),
            explicitType,
            null
          ];
        }
      }
      let matches = getMatchingTypes(types, modifier, options, tailwindConfig);
      for (let match of matches) {
        return match;
      }
      return [];
    }
    function* getMatchingTypes(types, rawModifier, options, tailwindConfig) {
      let modifiersEnabled = (0, _featureFlags.flagEnabled)(tailwindConfig, "generalizedModifiers");
      let [modifier, utilityModifier] = splitUtilityModifier(rawModifier);
      let canUseUtilityModifier = modifiersEnabled && options.modifiers != null && (options.modifiers === "any" || typeof options.modifiers === "object" && (utilityModifier && isArbitraryValue(utilityModifier) || utilityModifier in options.modifiers));
      if (!canUseUtilityModifier) {
        modifier = rawModifier;
        utilityModifier = void 0;
      }
      if (utilityModifier !== void 0 && modifier === "") {
        modifier = "DEFAULT";
      }
      if (utilityModifier !== void 0) {
        if (typeof options.modifiers === "object") {
          var _options_modifiers;
          var _options_modifiers_utilityModifier;
          let configValue = (_options_modifiers_utilityModifier = (_options_modifiers = options.modifiers) === null || _options_modifiers === void 0 ? void 0 : _options_modifiers[utilityModifier]) !== null && _options_modifiers_utilityModifier !== void 0 ? _options_modifiers_utilityModifier : null;
          if (configValue !== null) {
            utilityModifier = configValue;
          } else if (isArbitraryValue(utilityModifier)) {
            utilityModifier = unwrapArbitraryModifier(utilityModifier);
          }
        }
      }
      for (let { type } of types !== null && types !== void 0 ? types : []) {
        let result = typeMap[type](modifier, options, {
          tailwindConfig
        });
        if (result === void 0) {
          continue;
        }
        yield [
          result,
          type,
          utilityModifier !== null && utilityModifier !== void 0 ? utilityModifier : null
        ];
      }
    }
  }
});

// ../../node_modules/tailwindcss/lib/util/toColorValue.js
var require_toColorValue = __commonJS({
  "../../node_modules/tailwindcss/lib/util/toColorValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return toColorValue;
      }
    });
    function toColorValue(maybeFunction) {
      return typeof maybeFunction === "function" ? maybeFunction({}) : maybeFunction;
    }
  }
});

// ../../node_modules/tailwindcss/lib/util/resolveConfig.js
var require_resolveConfig = __commonJS({
  "../../node_modules/tailwindcss/lib/util/resolveConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return resolveConfig2;
      }
    });
    var _negateValue = /* @__PURE__ */ _interop_require_default(require_negateValue());
    var _corePluginList = /* @__PURE__ */ _interop_require_default(require_corePluginList());
    var _configurePlugins = /* @__PURE__ */ _interop_require_default(require_configurePlugins());
    var _colors = /* @__PURE__ */ _interop_require_default(require_colors());
    var _defaults = require_defaults();
    var _toPath = require_toPath();
    var _normalizeConfig = require_normalizeConfig();
    var _isPlainObject = /* @__PURE__ */ _interop_require_default(require_isPlainObject());
    var _cloneDeep = require_cloneDeep();
    var _pluginUtils = require_pluginUtils();
    var _withAlphaVariable = require_withAlphaVariable();
    var _toColorValue = /* @__PURE__ */ _interop_require_default(require_toColorValue());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function isFunction(input) {
      return typeof input === "function";
    }
    function mergeWith(target, ...sources) {
      let customizer = sources.pop();
      for (let source of sources) {
        for (let k in source) {
          let merged = customizer(target[k], source[k]);
          if (merged === void 0) {
            if ((0, _isPlainObject.default)(target[k]) && (0, _isPlainObject.default)(source[k])) {
              target[k] = mergeWith({}, target[k], source[k], customizer);
            } else {
              target[k] = source[k];
            }
          } else {
            target[k] = merged;
          }
        }
      }
      return target;
    }
    var configUtils = {
      colors: _colors.default,
      negative(scale) {
        return Object.keys(scale).filter((key) => scale[key] !== "0").reduce((negativeScale, key) => {
          let negativeValue = (0, _negateValue.default)(scale[key]);
          if (negativeValue !== void 0) {
            negativeScale[`-${key}`] = negativeValue;
          }
          return negativeScale;
        }, {});
      },
      breakpoints(screens) {
        return Object.keys(screens).filter((key) => typeof screens[key] === "string").reduce((breakpoints, key) => ({
          ...breakpoints,
          [`screen-${key}`]: screens[key]
        }), {});
      }
    };
    function value(valueToResolve, ...args) {
      return isFunction(valueToResolve) ? valueToResolve(...args) : valueToResolve;
    }
    function collectExtends(items) {
      return items.reduce((merged, { extend }) => {
        return mergeWith(merged, extend, (mergedValue, extendValue) => {
          if (mergedValue === void 0) {
            return [
              extendValue
            ];
          }
          if (Array.isArray(mergedValue)) {
            return [
              extendValue,
              ...mergedValue
            ];
          }
          return [
            extendValue,
            mergedValue
          ];
        });
      }, {});
    }
    function mergeThemes(themes) {
      return {
        ...themes.reduce((merged, theme) => (0, _defaults.defaults)(merged, theme), {}),
        extend: collectExtends(themes)
      };
    }
    function mergeExtensionCustomizer(merged, value2) {
      if (Array.isArray(merged) && (0, _isPlainObject.default)(merged[0])) {
        return merged.concat(value2);
      }
      if (Array.isArray(value2) && (0, _isPlainObject.default)(value2[0]) && (0, _isPlainObject.default)(merged)) {
        return [
          merged,
          ...value2
        ];
      }
      if (Array.isArray(value2)) {
        return value2;
      }
      return void 0;
    }
    function mergeExtensions({ extend, ...theme }) {
      return mergeWith(theme, extend, (themeValue, extensions) => {
        if (!isFunction(themeValue) && !extensions.some(isFunction)) {
          return mergeWith({}, themeValue, ...extensions, mergeExtensionCustomizer);
        }
        return (resolveThemePath, utils) => mergeWith({}, ...[
          themeValue,
          ...extensions
        ].map((e) => value(e, resolveThemePath, utils)), mergeExtensionCustomizer);
      });
    }
    function* toPaths(key) {
      let path = (0, _toPath.toPath)(key);
      if (path.length === 0) {
        return;
      }
      yield path;
      if (Array.isArray(key)) {
        return;
      }
      let pattern = /^(.*?)\s*\/\s*([^/]+)$/;
      let matches = key.match(pattern);
      if (matches !== null) {
        let [, prefix, alpha] = matches;
        let newPath = (0, _toPath.toPath)(prefix);
        newPath.alpha = alpha;
        yield newPath;
      }
    }
    function resolveFunctionKeys(object) {
      const resolvePath = (key, defaultValue) => {
        for (const path of toPaths(key)) {
          let index = 0;
          let val = object;
          while (val !== void 0 && val !== null && index < path.length) {
            val = val[path[index++]];
            let shouldResolveAsFn = isFunction(val) && (path.alpha === void 0 || index <= path.length - 1);
            val = shouldResolveAsFn ? val(resolvePath, configUtils) : val;
          }
          if (val !== void 0) {
            if (path.alpha !== void 0) {
              let normalized = (0, _pluginUtils.parseColorFormat)(val);
              return (0, _withAlphaVariable.withAlphaValue)(normalized, path.alpha, (0, _toColorValue.default)(normalized));
            }
            if ((0, _isPlainObject.default)(val)) {
              return (0, _cloneDeep.cloneDeep)(val);
            }
            return val;
          }
        }
        return defaultValue;
      };
      Object.assign(resolvePath, {
        theme: resolvePath,
        ...configUtils
      });
      return Object.keys(object).reduce((resolved, key) => {
        resolved[key] = isFunction(object[key]) ? object[key](resolvePath, configUtils) : object[key];
        return resolved;
      }, {});
    }
    function extractPluginConfigs(configs) {
      let allConfigs = [];
      configs.forEach((config3) => {
        allConfigs = [
          ...allConfigs,
          config3
        ];
        var _config_plugins;
        const plugins = (_config_plugins = config3 === null || config3 === void 0 ? void 0 : config3.plugins) !== null && _config_plugins !== void 0 ? _config_plugins : [];
        if (plugins.length === 0) {
          return;
        }
        plugins.forEach((plugin) => {
          if (plugin.__isOptionsFunction) {
            plugin = plugin();
          }
          var _plugin_config;
          allConfigs = [
            ...allConfigs,
            ...extractPluginConfigs([
              (_plugin_config = plugin === null || plugin === void 0 ? void 0 : plugin.config) !== null && _plugin_config !== void 0 ? _plugin_config : {}
            ])
          ];
        });
      });
      return allConfigs;
    }
    function resolveCorePlugins(corePluginConfigs) {
      const result = [
        ...corePluginConfigs
      ].reduceRight((resolved, corePluginConfig) => {
        if (isFunction(corePluginConfig)) {
          return corePluginConfig({
            corePlugins: resolved
          });
        }
        return (0, _configurePlugins.default)(corePluginConfig, resolved);
      }, _corePluginList.default);
      return result;
    }
    function resolvePluginLists(pluginLists) {
      const result = [
        ...pluginLists
      ].reduceRight((resolved, pluginList) => {
        return [
          ...resolved,
          ...pluginList
        ];
      }, []);
      return result;
    }
    function resolveConfig2(configs) {
      let allConfigs = [
        ...extractPluginConfigs(configs),
        {
          prefix: "",
          important: false,
          separator: ":"
        }
      ];
      var _t_theme, _c_plugins;
      return (0, _normalizeConfig.normalizeConfig)((0, _defaults.defaults)({
        theme: resolveFunctionKeys(mergeExtensions(mergeThemes(allConfigs.map((t) => {
          return (_t_theme = t === null || t === void 0 ? void 0 : t.theme) !== null && _t_theme !== void 0 ? _t_theme : {};
        })))),
        corePlugins: resolveCorePlugins(allConfigs.map((c) => c.corePlugins)),
        plugins: resolvePluginLists(configs.map((c) => {
          return (_c_plugins = c === null || c === void 0 ? void 0 : c.plugins) !== null && _c_plugins !== void 0 ? _c_plugins : [];
        }))
      }, ...allConfigs));
    }
  }
});

// ../../node_modules/tailwindcss/stubs/config.full.js
var require_config_full = __commonJS({
  "../../node_modules/tailwindcss/stubs/config.full.js"(exports, module) {
    module.exports = {
      content: [],
      presets: [],
      darkMode: "media",
      theme: {
        accentColor: ({ theme }) => ({
          ...theme("colors"),
          auto: "auto"
        }),
        animation: {
          none: "none",
          spin: "spin 1s linear infinite",
          ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
          pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          bounce: "bounce 1s infinite"
        },
        aria: {
          checked: 'checked="true"',
          disabled: 'disabled="true"',
          expanded: 'expanded="true"',
          hidden: 'hidden="true"',
          pressed: 'pressed="true"',
          readonly: 'readonly="true"',
          required: 'required="true"',
          selected: 'selected="true"'
        },
        aspectRatio: {
          auto: "auto",
          square: "1 / 1",
          video: "16 / 9"
        },
        backdropBlur: ({ theme }) => theme("blur"),
        backdropBrightness: ({ theme }) => theme("brightness"),
        backdropContrast: ({ theme }) => theme("contrast"),
        backdropGrayscale: ({ theme }) => theme("grayscale"),
        backdropHueRotate: ({ theme }) => theme("hueRotate"),
        backdropInvert: ({ theme }) => theme("invert"),
        backdropOpacity: ({ theme }) => theme("opacity"),
        backdropSaturate: ({ theme }) => theme("saturate"),
        backdropSepia: ({ theme }) => theme("sepia"),
        backgroundColor: ({ theme }) => theme("colors"),
        backgroundImage: {
          none: "none",
          "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
          "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
          "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
          "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
          "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
          "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
          "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
          "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
        },
        backgroundOpacity: ({ theme }) => theme("opacity"),
        backgroundPosition: {
          bottom: "bottom",
          center: "center",
          left: "left",
          "left-bottom": "left bottom",
          "left-top": "left top",
          right: "right",
          "right-bottom": "right bottom",
          "right-top": "right top",
          top: "top"
        },
        backgroundSize: {
          auto: "auto",
          cover: "cover",
          contain: "contain"
        },
        blur: {
          0: "0",
          none: "0",
          sm: "4px",
          DEFAULT: "8px",
          md: "12px",
          lg: "16px",
          xl: "24px",
          "2xl": "40px",
          "3xl": "64px"
        },
        borderColor: ({ theme }) => ({
          ...theme("colors"),
          DEFAULT: theme("colors.gray.200", "currentColor")
        }),
        borderOpacity: ({ theme }) => theme("opacity"),
        borderRadius: {
          none: "0px",
          sm: "0.125rem",
          DEFAULT: "0.25rem",
          md: "0.375rem",
          lg: "0.5rem",
          xl: "0.75rem",
          "2xl": "1rem",
          "3xl": "1.5rem",
          full: "9999px"
        },
        borderSpacing: ({ theme }) => ({
          ...theme("spacing")
        }),
        borderWidth: {
          DEFAULT: "1px",
          0: "0px",
          2: "2px",
          4: "4px",
          8: "8px"
        },
        boxShadow: {
          sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
          DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
          md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
          xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
          inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
          none: "none"
        },
        boxShadowColor: ({ theme }) => theme("colors"),
        brightness: {
          0: "0",
          50: ".5",
          75: ".75",
          90: ".9",
          95: ".95",
          100: "1",
          105: "1.05",
          110: "1.1",
          125: "1.25",
          150: "1.5",
          200: "2"
        },
        caretColor: ({ theme }) => theme("colors"),
        colors: ({ colors: colors2 }) => ({
          inherit: colors2.inherit,
          current: colors2.current,
          transparent: colors2.transparent,
          black: colors2.black,
          white: colors2.white,
          slate: colors2.slate,
          gray: colors2.gray,
          zinc: colors2.zinc,
          neutral: colors2.neutral,
          stone: colors2.stone,
          red: colors2.red,
          orange: colors2.orange,
          amber: colors2.amber,
          yellow: colors2.yellow,
          lime: colors2.lime,
          green: colors2.green,
          emerald: colors2.emerald,
          teal: colors2.teal,
          cyan: colors2.cyan,
          sky: colors2.sky,
          blue: colors2.blue,
          indigo: colors2.indigo,
          violet: colors2.violet,
          purple: colors2.purple,
          fuchsia: colors2.fuchsia,
          pink: colors2.pink,
          rose: colors2.rose
        }),
        columns: {
          auto: "auto",
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7",
          8: "8",
          9: "9",
          10: "10",
          11: "11",
          12: "12",
          "3xs": "16rem",
          "2xs": "18rem",
          xs: "20rem",
          sm: "24rem",
          md: "28rem",
          lg: "32rem",
          xl: "36rem",
          "2xl": "42rem",
          "3xl": "48rem",
          "4xl": "56rem",
          "5xl": "64rem",
          "6xl": "72rem",
          "7xl": "80rem"
        },
        container: {},
        content: {
          none: "none"
        },
        contrast: {
          0: "0",
          50: ".5",
          75: ".75",
          100: "1",
          125: "1.25",
          150: "1.5",
          200: "2"
        },
        cursor: {
          auto: "auto",
          default: "default",
          pointer: "pointer",
          wait: "wait",
          text: "text",
          move: "move",
          help: "help",
          "not-allowed": "not-allowed",
          none: "none",
          "context-menu": "context-menu",
          progress: "progress",
          cell: "cell",
          crosshair: "crosshair",
          "vertical-text": "vertical-text",
          alias: "alias",
          copy: "copy",
          "no-drop": "no-drop",
          grab: "grab",
          grabbing: "grabbing",
          "all-scroll": "all-scroll",
          "col-resize": "col-resize",
          "row-resize": "row-resize",
          "n-resize": "n-resize",
          "e-resize": "e-resize",
          "s-resize": "s-resize",
          "w-resize": "w-resize",
          "ne-resize": "ne-resize",
          "nw-resize": "nw-resize",
          "se-resize": "se-resize",
          "sw-resize": "sw-resize",
          "ew-resize": "ew-resize",
          "ns-resize": "ns-resize",
          "nesw-resize": "nesw-resize",
          "nwse-resize": "nwse-resize",
          "zoom-in": "zoom-in",
          "zoom-out": "zoom-out"
        },
        divideColor: ({ theme }) => theme("borderColor"),
        divideOpacity: ({ theme }) => theme("borderOpacity"),
        divideWidth: ({ theme }) => theme("borderWidth"),
        dropShadow: {
          sm: "0 1px 1px rgb(0 0 0 / 0.05)",
          DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
          md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
          lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
          xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
          "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
          none: "0 0 #0000"
        },
        fill: ({ theme }) => ({
          none: "none",
          ...theme("colors")
        }),
        flex: {
          1: "1 1 0%",
          auto: "1 1 auto",
          initial: "0 1 auto",
          none: "none"
        },
        flexBasis: ({ theme }) => ({
          auto: "auto",
          ...theme("spacing"),
          "1/2": "50%",
          "1/3": "33.333333%",
          "2/3": "66.666667%",
          "1/4": "25%",
          "2/4": "50%",
          "3/4": "75%",
          "1/5": "20%",
          "2/5": "40%",
          "3/5": "60%",
          "4/5": "80%",
          "1/6": "16.666667%",
          "2/6": "33.333333%",
          "3/6": "50%",
          "4/6": "66.666667%",
          "5/6": "83.333333%",
          "1/12": "8.333333%",
          "2/12": "16.666667%",
          "3/12": "25%",
          "4/12": "33.333333%",
          "5/12": "41.666667%",
          "6/12": "50%",
          "7/12": "58.333333%",
          "8/12": "66.666667%",
          "9/12": "75%",
          "10/12": "83.333333%",
          "11/12": "91.666667%",
          full: "100%"
        }),
        flexGrow: {
          0: "0",
          DEFAULT: "1"
        },
        flexShrink: {
          0: "0",
          DEFAULT: "1"
        },
        fontFamily: {
          sans: [
            "ui-sans-serif",
            "system-ui",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            '"Noto Sans"',
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"'
          ],
          serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
          mono: [
            "ui-monospace",
            "SFMono-Regular",
            "Menlo",
            "Monaco",
            "Consolas",
            '"Liberation Mono"',
            '"Courier New"',
            "monospace"
          ]
        },
        fontSize: {
          xs: ["0.75rem", { lineHeight: "1rem" }],
          sm: ["0.875rem", { lineHeight: "1.25rem" }],
          base: ["1rem", { lineHeight: "1.5rem" }],
          lg: ["1.125rem", { lineHeight: "1.75rem" }],
          xl: ["1.25rem", { lineHeight: "1.75rem" }],
          "2xl": ["1.5rem", { lineHeight: "2rem" }],
          "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
          "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
          "5xl": ["3rem", { lineHeight: "1" }],
          "6xl": ["3.75rem", { lineHeight: "1" }],
          "7xl": ["4.5rem", { lineHeight: "1" }],
          "8xl": ["6rem", { lineHeight: "1" }],
          "9xl": ["8rem", { lineHeight: "1" }]
        },
        fontWeight: {
          thin: "100",
          extralight: "200",
          light: "300",
          normal: "400",
          medium: "500",
          semibold: "600",
          bold: "700",
          extrabold: "800",
          black: "900"
        },
        gap: ({ theme }) => theme("spacing"),
        gradientColorStops: ({ theme }) => theme("colors"),
        gradientColorStopPositions: {
          "0%": "0%",
          "5%": "5%",
          "10%": "10%",
          "15%": "15%",
          "20%": "20%",
          "25%": "25%",
          "30%": "30%",
          "35%": "35%",
          "40%": "40%",
          "45%": "45%",
          "50%": "50%",
          "55%": "55%",
          "60%": "60%",
          "65%": "65%",
          "70%": "70%",
          "75%": "75%",
          "80%": "80%",
          "85%": "85%",
          "90%": "90%",
          "95%": "95%",
          "100%": "100%"
        },
        grayscale: {
          0: "0",
          DEFAULT: "100%"
        },
        gridAutoColumns: {
          auto: "auto",
          min: "min-content",
          max: "max-content",
          fr: "minmax(0, 1fr)"
        },
        gridAutoRows: {
          auto: "auto",
          min: "min-content",
          max: "max-content",
          fr: "minmax(0, 1fr)"
        },
        gridColumn: {
          auto: "auto",
          "span-1": "span 1 / span 1",
          "span-2": "span 2 / span 2",
          "span-3": "span 3 / span 3",
          "span-4": "span 4 / span 4",
          "span-5": "span 5 / span 5",
          "span-6": "span 6 / span 6",
          "span-7": "span 7 / span 7",
          "span-8": "span 8 / span 8",
          "span-9": "span 9 / span 9",
          "span-10": "span 10 / span 10",
          "span-11": "span 11 / span 11",
          "span-12": "span 12 / span 12",
          "span-full": "1 / -1"
        },
        gridColumnEnd: {
          auto: "auto",
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7",
          8: "8",
          9: "9",
          10: "10",
          11: "11",
          12: "12",
          13: "13"
        },
        gridColumnStart: {
          auto: "auto",
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7",
          8: "8",
          9: "9",
          10: "10",
          11: "11",
          12: "12",
          13: "13"
        },
        gridRow: {
          auto: "auto",
          "span-1": "span 1 / span 1",
          "span-2": "span 2 / span 2",
          "span-3": "span 3 / span 3",
          "span-4": "span 4 / span 4",
          "span-5": "span 5 / span 5",
          "span-6": "span 6 / span 6",
          "span-full": "1 / -1"
        },
        gridRowEnd: {
          auto: "auto",
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7"
        },
        gridRowStart: {
          auto: "auto",
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7"
        },
        gridTemplateColumns: {
          none: "none",
          1: "repeat(1, minmax(0, 1fr))",
          2: "repeat(2, minmax(0, 1fr))",
          3: "repeat(3, minmax(0, 1fr))",
          4: "repeat(4, minmax(0, 1fr))",
          5: "repeat(5, minmax(0, 1fr))",
          6: "repeat(6, minmax(0, 1fr))",
          7: "repeat(7, minmax(0, 1fr))",
          8: "repeat(8, minmax(0, 1fr))",
          9: "repeat(9, minmax(0, 1fr))",
          10: "repeat(10, minmax(0, 1fr))",
          11: "repeat(11, minmax(0, 1fr))",
          12: "repeat(12, minmax(0, 1fr))"
        },
        gridTemplateRows: {
          none: "none",
          1: "repeat(1, minmax(0, 1fr))",
          2: "repeat(2, minmax(0, 1fr))",
          3: "repeat(3, minmax(0, 1fr))",
          4: "repeat(4, minmax(0, 1fr))",
          5: "repeat(5, minmax(0, 1fr))",
          6: "repeat(6, minmax(0, 1fr))"
        },
        height: ({ theme }) => ({
          auto: "auto",
          ...theme("spacing"),
          "1/2": "50%",
          "1/3": "33.333333%",
          "2/3": "66.666667%",
          "1/4": "25%",
          "2/4": "50%",
          "3/4": "75%",
          "1/5": "20%",
          "2/5": "40%",
          "3/5": "60%",
          "4/5": "80%",
          "1/6": "16.666667%",
          "2/6": "33.333333%",
          "3/6": "50%",
          "4/6": "66.666667%",
          "5/6": "83.333333%",
          full: "100%",
          screen: "100vh",
          min: "min-content",
          max: "max-content",
          fit: "fit-content"
        }),
        hueRotate: {
          0: "0deg",
          15: "15deg",
          30: "30deg",
          60: "60deg",
          90: "90deg",
          180: "180deg"
        },
        inset: ({ theme }) => ({
          auto: "auto",
          ...theme("spacing"),
          "1/2": "50%",
          "1/3": "33.333333%",
          "2/3": "66.666667%",
          "1/4": "25%",
          "2/4": "50%",
          "3/4": "75%",
          full: "100%"
        }),
        invert: {
          0: "0",
          DEFAULT: "100%"
        },
        keyframes: {
          spin: {
            to: {
              transform: "rotate(360deg)"
            }
          },
          ping: {
            "75%, 100%": {
              transform: "scale(2)",
              opacity: "0"
            }
          },
          pulse: {
            "50%": {
              opacity: ".5"
            }
          },
          bounce: {
            "0%, 100%": {
              transform: "translateY(-25%)",
              animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
            },
            "50%": {
              transform: "none",
              animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
            }
          }
        },
        letterSpacing: {
          tighter: "-0.05em",
          tight: "-0.025em",
          normal: "0em",
          wide: "0.025em",
          wider: "0.05em",
          widest: "0.1em"
        },
        lineHeight: {
          none: "1",
          tight: "1.25",
          snug: "1.375",
          normal: "1.5",
          relaxed: "1.625",
          loose: "2",
          3: ".75rem",
          4: "1rem",
          5: "1.25rem",
          6: "1.5rem",
          7: "1.75rem",
          8: "2rem",
          9: "2.25rem",
          10: "2.5rem"
        },
        listStyleType: {
          none: "none",
          disc: "disc",
          decimal: "decimal"
        },
        listStyleImage: {
          none: "none"
        },
        margin: ({ theme }) => ({
          auto: "auto",
          ...theme("spacing")
        }),
        lineClamp: {
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6"
        },
        maxHeight: ({ theme }) => ({
          ...theme("spacing"),
          none: "none",
          full: "100%",
          screen: "100vh",
          min: "min-content",
          max: "max-content",
          fit: "fit-content"
        }),
        maxWidth: ({ theme, breakpoints }) => ({
          none: "none",
          0: "0rem",
          xs: "20rem",
          sm: "24rem",
          md: "28rem",
          lg: "32rem",
          xl: "36rem",
          "2xl": "42rem",
          "3xl": "48rem",
          "4xl": "56rem",
          "5xl": "64rem",
          "6xl": "72rem",
          "7xl": "80rem",
          full: "100%",
          min: "min-content",
          max: "max-content",
          fit: "fit-content",
          prose: "65ch",
          ...breakpoints(theme("screens"))
        }),
        minHeight: {
          0: "0px",
          full: "100%",
          screen: "100vh",
          min: "min-content",
          max: "max-content",
          fit: "fit-content"
        },
        minWidth: {
          0: "0px",
          full: "100%",
          min: "min-content",
          max: "max-content",
          fit: "fit-content"
        },
        objectPosition: {
          bottom: "bottom",
          center: "center",
          left: "left",
          "left-bottom": "left bottom",
          "left-top": "left top",
          right: "right",
          "right-bottom": "right bottom",
          "right-top": "right top",
          top: "top"
        },
        opacity: {
          0: "0",
          5: "0.05",
          10: "0.1",
          20: "0.2",
          25: "0.25",
          30: "0.3",
          40: "0.4",
          50: "0.5",
          60: "0.6",
          70: "0.7",
          75: "0.75",
          80: "0.8",
          90: "0.9",
          95: "0.95",
          100: "1"
        },
        order: {
          first: "-9999",
          last: "9999",
          none: "0",
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7",
          8: "8",
          9: "9",
          10: "10",
          11: "11",
          12: "12"
        },
        outlineColor: ({ theme }) => theme("colors"),
        outlineOffset: {
          0: "0px",
          1: "1px",
          2: "2px",
          4: "4px",
          8: "8px"
        },
        outlineWidth: {
          0: "0px",
          1: "1px",
          2: "2px",
          4: "4px",
          8: "8px"
        },
        padding: ({ theme }) => theme("spacing"),
        placeholderColor: ({ theme }) => theme("colors"),
        placeholderOpacity: ({ theme }) => theme("opacity"),
        ringColor: ({ theme }) => ({
          DEFAULT: theme("colors.blue.500", "#3b82f6"),
          ...theme("colors")
        }),
        ringOffsetColor: ({ theme }) => theme("colors"),
        ringOffsetWidth: {
          0: "0px",
          1: "1px",
          2: "2px",
          4: "4px",
          8: "8px"
        },
        ringOpacity: ({ theme }) => ({
          DEFAULT: "0.5",
          ...theme("opacity")
        }),
        ringWidth: {
          DEFAULT: "3px",
          0: "0px",
          1: "1px",
          2: "2px",
          4: "4px",
          8: "8px"
        },
        rotate: {
          0: "0deg",
          1: "1deg",
          2: "2deg",
          3: "3deg",
          6: "6deg",
          12: "12deg",
          45: "45deg",
          90: "90deg",
          180: "180deg"
        },
        saturate: {
          0: "0",
          50: ".5",
          100: "1",
          150: "1.5",
          200: "2"
        },
        scale: {
          0: "0",
          50: ".5",
          75: ".75",
          90: ".9",
          95: ".95",
          100: "1",
          105: "1.05",
          110: "1.1",
          125: "1.25",
          150: "1.5"
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px"
        },
        scrollMargin: ({ theme }) => ({
          ...theme("spacing")
        }),
        scrollPadding: ({ theme }) => theme("spacing"),
        sepia: {
          0: "0",
          DEFAULT: "100%"
        },
        skew: {
          0: "0deg",
          1: "1deg",
          2: "2deg",
          3: "3deg",
          6: "6deg",
          12: "12deg"
        },
        space: ({ theme }) => ({
          ...theme("spacing")
        }),
        spacing: {
          px: "1px",
          0: "0px",
          0.5: "0.125rem",
          1: "0.25rem",
          1.5: "0.375rem",
          2: "0.5rem",
          2.5: "0.625rem",
          3: "0.75rem",
          3.5: "0.875rem",
          4: "1rem",
          5: "1.25rem",
          6: "1.5rem",
          7: "1.75rem",
          8: "2rem",
          9: "2.25rem",
          10: "2.5rem",
          11: "2.75rem",
          12: "3rem",
          14: "3.5rem",
          16: "4rem",
          20: "5rem",
          24: "6rem",
          28: "7rem",
          32: "8rem",
          36: "9rem",
          40: "10rem",
          44: "11rem",
          48: "12rem",
          52: "13rem",
          56: "14rem",
          60: "15rem",
          64: "16rem",
          72: "18rem",
          80: "20rem",
          96: "24rem"
        },
        stroke: ({ theme }) => ({
          none: "none",
          ...theme("colors")
        }),
        strokeWidth: {
          0: "0",
          1: "1",
          2: "2"
        },
        supports: {},
        data: {},
        textColor: ({ theme }) => theme("colors"),
        textDecorationColor: ({ theme }) => theme("colors"),
        textDecorationThickness: {
          auto: "auto",
          "from-font": "from-font",
          0: "0px",
          1: "1px",
          2: "2px",
          4: "4px",
          8: "8px"
        },
        textIndent: ({ theme }) => ({
          ...theme("spacing")
        }),
        textOpacity: ({ theme }) => theme("opacity"),
        textUnderlineOffset: {
          auto: "auto",
          0: "0px",
          1: "1px",
          2: "2px",
          4: "4px",
          8: "8px"
        },
        transformOrigin: {
          center: "center",
          top: "top",
          "top-right": "top right",
          right: "right",
          "bottom-right": "bottom right",
          bottom: "bottom",
          "bottom-left": "bottom left",
          left: "left",
          "top-left": "top left"
        },
        transitionDelay: {
          0: "0s",
          75: "75ms",
          100: "100ms",
          150: "150ms",
          200: "200ms",
          300: "300ms",
          500: "500ms",
          700: "700ms",
          1e3: "1000ms"
        },
        transitionDuration: {
          DEFAULT: "150ms",
          0: "0s",
          75: "75ms",
          100: "100ms",
          150: "150ms",
          200: "200ms",
          300: "300ms",
          500: "500ms",
          700: "700ms",
          1e3: "1000ms"
        },
        transitionProperty: {
          none: "none",
          all: "all",
          DEFAULT: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
          colors: "color, background-color, border-color, text-decoration-color, fill, stroke",
          opacity: "opacity",
          shadow: "box-shadow",
          transform: "transform"
        },
        transitionTimingFunction: {
          DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
          linear: "linear",
          in: "cubic-bezier(0.4, 0, 1, 1)",
          out: "cubic-bezier(0, 0, 0.2, 1)",
          "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
        },
        translate: ({ theme }) => ({
          ...theme("spacing"),
          "1/2": "50%",
          "1/3": "33.333333%",
          "2/3": "66.666667%",
          "1/4": "25%",
          "2/4": "50%",
          "3/4": "75%",
          full: "100%"
        }),
        width: ({ theme }) => ({
          auto: "auto",
          ...theme("spacing"),
          "1/2": "50%",
          "1/3": "33.333333%",
          "2/3": "66.666667%",
          "1/4": "25%",
          "2/4": "50%",
          "3/4": "75%",
          "1/5": "20%",
          "2/5": "40%",
          "3/5": "60%",
          "4/5": "80%",
          "1/6": "16.666667%",
          "2/6": "33.333333%",
          "3/6": "50%",
          "4/6": "66.666667%",
          "5/6": "83.333333%",
          "1/12": "8.333333%",
          "2/12": "16.666667%",
          "3/12": "25%",
          "4/12": "33.333333%",
          "5/12": "41.666667%",
          "6/12": "50%",
          "7/12": "58.333333%",
          "8/12": "66.666667%",
          "9/12": "75%",
          "10/12": "83.333333%",
          "11/12": "91.666667%",
          full: "100%",
          screen: "100vw",
          min: "min-content",
          max: "max-content",
          fit: "fit-content"
        }),
        willChange: {
          auto: "auto",
          scroll: "scroll-position",
          contents: "contents",
          transform: "transform"
        },
        zIndex: {
          auto: "auto",
          0: "0",
          10: "10",
          20: "20",
          30: "30",
          40: "40",
          50: "50"
        }
      },
      plugins: []
    };
  }
});

// ../../node_modules/tailwindcss/lib/util/getAllConfigs.js
var require_getAllConfigs = __commonJS({
  "../../node_modules/tailwindcss/lib/util/getAllConfigs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return getAllConfigs;
      }
    });
    var _configfull = /* @__PURE__ */ _interop_require_default(require_config_full());
    var _featureFlags = require_featureFlags();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function getAllConfigs(config3) {
      var _config_presets;
      const configs = ((_config_presets = config3 === null || config3 === void 0 ? void 0 : config3.presets) !== null && _config_presets !== void 0 ? _config_presets : [
        _configfull.default
      ]).slice().reverse().flatMap((preset) => getAllConfigs(preset instanceof Function ? preset() : preset));
      const features = {
        respectDefaultRingColorOpacity: {
          theme: {
            ringColor: ({ theme }) => ({
              DEFAULT: "#3b82f67f",
              ...theme("colors")
            })
          }
        },
        disableColorOpacityUtilitiesByDefault: {
          corePlugins: {
            backgroundOpacity: false,
            borderOpacity: false,
            divideOpacity: false,
            placeholderOpacity: false,
            ringOpacity: false,
            textOpacity: false
          }
        }
      };
      const experimentals = Object.keys(features).filter((feature) => (0, _featureFlags.flagEnabled)(config3, feature)).map((feature) => features[feature]);
      return [
        config3,
        ...experimentals,
        ...configs
      ];
    }
  }
});

// ../../node_modules/tailwindcss/lib/public/resolve-config.js
var require_resolve_config = __commonJS({
  "../../node_modules/tailwindcss/lib/public/resolve-config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return resolveConfig2;
      }
    });
    var _resolveConfig = /* @__PURE__ */ _interop_require_default(require_resolveConfig());
    var _getAllConfigs = /* @__PURE__ */ _interop_require_default(require_getAllConfigs());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function resolveConfig2(...configs) {
      let [, ...defaultConfigs] = (0, _getAllConfigs.default)(configs[0]);
      return (0, _resolveConfig.default)([
        ...configs,
        ...defaultConfigs
      ]);
    }
  }
});

// ../../node_modules/tailwindcss/resolveConfig.js
var require_resolveConfig2 = __commonJS({
  "../../node_modules/tailwindcss/resolveConfig.js"(exports, module) {
    var resolveConfig2 = require_resolve_config();
    module.exports = (resolveConfig2.__esModule ? resolveConfig2 : { default: resolveConfig2 }).default;
  }
});

// app/root.tsx
var import_react9 = __toESM(require_react());

// ../../packages/tailwind/src/index.css
var src_default = "/build/_assets/index-NLH3UKGS.css";

// ../../packages/icons/src/css/icons.css
var icons_default = "/build/_assets/icons-EDK6KODN.css";

// app/utils/style.ts
function clsa(...classes) {
  return classes.join(" ");
}

// app/components/organisms/map/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Map(props) {
  const { className } = props;
  const { ref } = useMap();
  const [isLocked] = useMapLock();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      ref,
      className: clsa(className, isLocked ? "pointer-events-none" : void 0),
      ...props
    },
    void 0,
    false,
    {
      fileName: "app/components/organisms/map/index.tsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  );
}

// app/hooks/map/use-map-source.ts
var import_react = __toESM(require_react());
function useMapSource({
  id,
  data,
  ...options
}) {
  const { map } = useMap();
  useMapEvent("styledata", (event) => {
    const source = event.target.getSource(id);
    if (!source)
      event.target.addSource(id, { data, ...options });
  });
  (0, import_react.useEffect)(() => {
    if (!map)
      return () => {
      };
    const source = map.getSource(id);
    if (source)
      source.setData(data);
  }, [data]);
}

// app/utils/colors.client.ts
var import_tailwind_config = __toESM(require_tailwind_config2());
var import_resolveConfig = __toESM(require_resolveConfig2());
var config2 = (0, import_resolveConfig.default)(import_tailwind_config.default);
var _a;
var colors = (_a = config2 == null ? void 0 : config2.theme) == null ? void 0 : _a.colors;
var colors_client_default = colors;

// app/hooks/map/use-map-layer.ts
function useMapLayer(options) {
  useMapEvent("load", (event) => {
    const layer = event.target.getLayer(options.id);
    if (!layer)
      event.target.addLayer(options);
  });
  useMapEvent("sourcedata", (event) => {
    const layer = event.target.getLayer(options.id);
    if (!layer)
      event.target.addLayer(options);
  });
}

// app/hooks/map/use-layer-event.ts
var import_react2 = __toESM(require_react());
function useLayerEvent(name, layer, callback) {
  const { map } = useMap();
  (0, import_react2.useEffect)(() => {
    if (!map)
      return () => {
      };
    map.on(name, layer, callback);
    return () => {
      map.off(name, layer, callback);
    };
  }, [map, callback]);
}

// app/hooks/map/use-map-state.ts
var import_react3 = __toESM(require_react());
function useMapState() {
  const { map } = useMap();
  const [zoom, setZoom] = (0, import_react3.useState)(config.map.zoom.default);
  const [center, setCenter] = (0, import_react3.useState)(config.map.center.default);
  useMapEvent("moveend", (event) => {
    setCenter(event.target.getCenter());
  });
  useMapEvent("zoomend", (event) => {
    setZoom(event.target.getZoom());
  });
  const updateState = (options) => {
    if (!map)
      return;
    map.easeTo(options);
  };
  const updateCenter = (value) => {
    if (!map)
      return;
    map.easeTo({ center: value });
  };
  const updateZoom = (value) => {
    if (!map)
      return;
    map.easeTo({ zoom: value });
  };
  const incrementZoom = (value) => {
    if (!map)
      return;
    const zoom2 = map.getZoom();
    map.easeTo({ zoom: zoom2 + value });
  };
  const state = {
    zoom,
    center
  };
  const actions = {
    setMapState: updateState,
    setCenter: updateCenter,
    setZoom: updateZoom,
    zoomIn: () => incrementZoom(config.map.zoom.increment),
    zoomOut: () => incrementZoom(config.map.zoom.increment * -1)
  };
  return [state, actions];
}

// app/components/molecules/reports/clusters.tsx
function ReportClustersLayer({ source }) {
  var _a2, _b, _c;
  const [, { setMapState }] = useMapState();
  useMapLayer({
    id: "clusters-bg",
    type: "circle",
    source,
    filter: ["has", "point_count"],
    paint: {
      "circle-color": (_b = (_a2 = colors_client_default) == null ? void 0 : _a2.brand) == null ? void 0 : _b["900"],
      "circle-radius": 20
    }
  });
  useMapLayer({
    id: "clusters-icon",
    type: "symbol",
    source,
    filter: ["has", "point_count"],
    layout: {
      "text-field": "{point_count_abbreviated}",
      "text-font": ["Inter Bold", "Arial Unicode MS Bold"],
      "text-size": 12
    },
    paint: {
      "text-color": (_c = colors_client_default) == null ? void 0 : _c.white
    }
  });
  useLayerEvent("click", "clusters-bg", (event) => {
    var _a3;
    const [feature] = event.target.queryRenderedFeatures(event.point, {
      layers: ["clusters-bg"]
    });
    const clusterId = (_a3 = feature == null ? void 0 : feature.properties) == null ? void 0 : _a3.cluster_id;
    const geojsonSource = event.target.getSource(source);
    geojsonSource.getClusterExpansionZoom(clusterId, (error, zoom) => {
      if (error)
        return;
      if (zoom)
        setMapState({ zoom, center: event.lngLat });
    });
  });
  return null;
}

// app/components/molecules/reports/icons.tsx
function ReportIconsLayer() {
  var _a2, _b;
  useMapLayer({
    id: "reports-bg",
    type: "circle",
    source: "reports",
    filter: ["!", ["has", "point_count"]],
    paint: {
      "circle-color": (_b = (_a2 = colors_client_default) == null ? void 0 : _a2.brand) == null ? void 0 : _b[700],
      "circle-radius": 20
    }
  });
  useMapLayer({
    id: "reports-icon",
    type: "symbol",
    source: "reports",
    filter: ["!", ["has", "point_count"]],
    layout: {
      "icon-image": "{type_handle}",
      "icon-allow-overlap": true,
      "icon-size": 0.2
    }
  });
  useMapLayer({
    id: "report-verify",
    type: "symbol",
    source: "reports",
    filter: [
      "all",
      ["!", ["has", "point_count"]],
      ["==", ["get", "is_aging"], true],
      ["==", ["get", "is_unopened"], false]
    ],
    layout: {
      "icon-image": "badge-verify",
      "icon-allow-overlap": true,
      "icon-offset": [-50, -50],
      "icon-size": 0.25
    }
  });
  useMapLayer({
    id: "report-new",
    type: "symbol",
    source: "reports",
    filter: [
      "all",
      ["!", ["has", "point_count"]],
      ["==", ["get", "is_unopened"], true]
    ],
    layout: {
      "icon-image": "badge-new",
      "icon-allow-overlap": true,
      "icon-offset": [-70, -70],
      "icon-size": 0.2
    }
  });
  return null;
}

// app/hooks/map/use-map-images.ts
function useMapImages(images) {
  useMapEvent("styledata", (event) => {
    images.forEach((data) => {
      event.target.loadImage(data.url, (error, image) => {
        if (error)
          throw error;
        if (image && !event.target.hasImage(data.id))
          event.target.addImage(data.id, image);
      });
    });
  });
}

// app/assets/cyclist.png
var cyclist_default = "/build/_assets/cyclist-YGOCEDLA.png";

// app/assets/fire.png
var fire_default = "/build/_assets/fire-BAH3XIQH.png";

// app/assets/flood.png
var flood_default = "/build/_assets/flood-E6M3LJPC.png";

// app/assets/motorist.png
var motorist_default = "/build/_assets/motorist-LJYPD5QN.png";

// app/assets/pedestrian.png
var pedestrian_default = "/build/_assets/pedestrian-CYAB7JDF.png";

// app/assets/wildlife.png
var wildlife_default = "/build/_assets/wildlife-T6HZ4QIW.png";

// app/assets/badge-verify.png
var badge_verify_default = "/build/_assets/badge-verify-YJBY7FKA.png";

// app/assets/badge-new.png
var badge_new_default = "/build/_assets/badge-new-MBMAT6WP.png";

// app/components/molecules/reports/images.tsx
function MapImages() {
  useMapImages([
    {
      id: "cyclist",
      url: cyclist_default
    },
    {
      id: "bushfire",
      url: fire_default
    },
    {
      id: "flood",
      url: flood_default
    },
    {
      id: "motorist",
      url: motorist_default
    },
    {
      id: "pedestrian",
      url: pedestrian_default
    },
    {
      id: "wildlife",
      url: wildlife_default
    },
    {
      id: "badge-new",
      url: badge_new_default
    },
    {
      id: "badge-verify",
      url: badge_verify_default
    }
  ]);
  return null;
}

// app/components/molecules/summary-marker.tsx
var import_react4 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function SummaryContent({ summary, show, onClose }) {
  var _a2;
  if (!summary || !show)
    return null;
  const { isAging } = getMetadataFromContent(summary.content, summary.type);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BaseMarker, { coordinates: summary, anchor: "bottom", offset: [0, -25], children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative shadow-lg before:absolute before:bottom-0 before:left-1/2 before:h-3 before:w-3 before:-translate-x-1/2 before:translate-y-1 before:rotate-45 before:bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex w-48 flex-col overflow-hidden rounded bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "button",
      {
        className: "absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-white hover:bg-gray-900",
        onClick: onClose,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "icon icon-close icon-sm" }, void 0, false, {
          fileName: "app/components/molecules/summary-marker.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/molecules/summary-marker.tsx",
        lineNumber: 30,
        columnNumber: 11
      },
      this
    ),
    ((_a2 = summary == null ? void 0 : summary.content) == null ? void 0 : _a2.image_url) ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-16 w-full overflow-hidden rounded-t bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "img",
      {
        src: parseImageUrl(summary.content.image_url, {
          height: 270,
          width: 480
        }),
        alt: `Report ${summary.id} Thumbnail`,
        className: "h-full w-full object-cover"
      },
      void 0,
      false,
      {
        fileName: "app/components/molecules/summary-marker.tsx",
        lineNumber: 38,
        columnNumber: 15
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/molecules/summary-marker.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col divide-y divide-gray-200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-start p-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-bold", children: summary.type.title }, void 0, false, {
          fileName: "app/components/molecules/summary-marker.tsx",
          lineNumber: 50,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-500", children: summary.content.severity.title }, void 0, false, {
          fileName: "app/components/molecules/summary-marker.tsx",
          lineNumber: 51,
          columnNumber: 15
        }, this),
        isAging ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "my-1 rounded bg-gray-800 px-1 text-sm text-white", children: "Needs Verifying" }, void 0, false, {
          fileName: "app/components/molecules/summary-marker.tsx",
          lineNumber: 53,
          columnNumber: 17
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/components/molecules/summary-marker.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: `/report/${summary.id}`, className: "text-brand-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "btn-text", children: "See details" }, void 0, false, {
        fileName: "app/components/molecules/summary-marker.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/molecules/summary-marker.tsx",
        lineNumber: 59,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/molecules/summary-marker.tsx",
        lineNumber: 58,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/molecules/summary-marker.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/molecules/summary-marker.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/molecules/summary-marker.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/molecules/summary-marker.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
function SummaryMarker() {
  var _a2;
  const fetcher = useFetcher();
  const [show, setShow] = (0, import_react4.useState)(false);
  const location = useLocation();
  const navigation = useNavigation();
  const [, setCenter] = useMapCenter();
  useLayerEvent("click", "reports-bg", (event) => {
    var _a3;
    setCenter(event.lngLat);
    const [feature] = event.target.queryRenderedFeatures(event.point, {
      layers: ["reports-bg"]
    });
    const id = (_a3 = feature == null ? void 0 : feature.properties) == null ? void 0 : _a3.id;
    if (!id)
      return;
    fetcher.load(`/report/${id}/summary`);
  });
  (0, import_react4.useEffect)(() => {
    setShow(
      fetcher.state === "idle" && !!fetcher.data && location.pathname === "/"
    );
  }, [fetcher.state]);
  (0, import_react4.useEffect)(() => {
    if (navigation.state !== "idle") {
      setShow(false);
    }
  }, [navigation.state]);
  const summary = (_a2 = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _a2.summary;
  if (location.pathname !== "/")
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(toast_default, { content: "Fetching summary...", show: fetcher.state === "loading" }, void 0, false, {
      fileName: "app/components/molecules/summary-marker.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      SummaryContent,
      {
        summary,
        show,
        onClose: () => setShow(false)
      },
      void 0,
      false,
      {
        fileName: "app/components/molecules/summary-marker.tsx",
        lineNumber: 110,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/molecules/summary-marker.tsx",
    lineNumber: 108,
    columnNumber: 5
  }, this);
}

// app/components/regions/reports.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Reports() {
  const loader = useLoaderData();
  const reports = loader.reports;
  const [opened] = useReportOpen();
  useMapSource({
    id: "reports",
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: reports == null ? void 0 : reports.map((report) => {
        const { isAging, isHidden } = getMetadataFromContent(
          report.content,
          report.type
        );
        const isUnopened = !(opened == null ? void 0 : opened.has(report.content_id));
        return {
          type: "Feature",
          properties: {
            ...report,
            ...report.content,
            is_hidden: isHidden,
            is_aging: isAging,
            is_unopened: isUnopened
          },
          geometry: {
            type: "Point",
            coordinates: [report.lng, report.lat]
          }
        };
      })
    },
    filter: ["!", ["get", "is_hidden"]],
    cluster: true
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MapImages, {}, void 0, false, {
      fileName: "app/components/regions/reports.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ReportClustersLayer, { source: "reports" }, void 0, false, {
      fileName: "app/components/regions/reports.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ReportIconsLayer, {}, void 0, false, {
      fileName: "app/components/regions/reports.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SummaryMarker, {}, void 0, false, {
      fileName: "app/components/regions/reports.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/regions/reports.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

// app/components/molecules/top-bar.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function TopBar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "pointer-events-auto flex w-full flex-row bg-base-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-grow flex-row space-x-4 py-1 px-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      Link,
      {
        to: "https://saferstreets.info/content/disclaimer",
        className: "text-sm text-base-900",
        children: "Endorsed By Jonathan Sriranganathan"
      },
      void 0,
      false,
      {
        fileName: "app/components/molecules/top-bar.tsx",
        lineNumber: 8,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/molecules/top-bar.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      Link,
      {
        to: "https://saferstreets.info/content/about",
        className: "flex h-full items-center px-2",
        "aria-label": "About Safer Streets",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "icon icon-info icon-sm before:text-brand-700" }, void 0, false, {
          fileName: "app/components/molecules/top-bar.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/molecules/top-bar.tsx",
        lineNumber: 15,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/molecules/top-bar.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/components/molecules/bottom-bar.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function BottomBar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "pointer-events-auto flex w-full bg-base-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "a",
    {
      className: "px-2 py-1 text-sm",
      href: "https://www.openstreetmap.org/copyright",
      target: "_blank",
      rel: "noreferrer",
      children: "\xA9 Attribution"
    },
    void 0,
    false,
    {
      fileName: "app/components/molecules/bottom-bar.tsx",
      lineNumber: 6,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/molecules/bottom-bar.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/hooks/map/use-map-zoom.ts
var import_react8 = __toESM(require_react());
function useMapZoom() {
  const { map } = useMap();
  const [zoom, setZoom] = (0, import_react8.useState)(config.map.zoom.default);
  useMapEvent("zoomend", (event) => {
    setZoom(event.target.getZoom());
  });
  const updateZoom = (value) => {
    if (!map)
      return;
    console.log("updating zoom", value);
    map.easeTo({ zoom: value });
  };
  const incrementZoom = (value) => {
    if (!map)
      return;
    const zoom2 = map.getZoom();
    map.easeTo({ zoom: zoom2 + value });
  };
  const actions = {
    setZoom: updateZoom,
    zoomIn: () => incrementZoom(config.map.zoom.increment),
    zoomOut: () => incrementZoom(config.map.zoom.increment * -1)
  };
  return [zoom, actions];
}

// app/components/molecules/controls.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function Controls() {
  const [, { zoomIn, zoomOut }] = useMapZoom();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "pointer-events-auto inline-flex flex-col space-y-2 self-end", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { className: "btn btn-white", onClick: zoomIn, "aria-label": "Zoom In", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { className: "icon icon-plus btn-icon" }, void 0, false, {
      fileName: "app/components/molecules/controls.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/molecules/controls.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { className: "btn btn-white", onClick: zoomOut, "aria-label": "Zoom Out", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { className: "icon icon-minus btn-icon" }, void 0, false, {
      fileName: "app/components/molecules/controls.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/molecules/controls.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/molecules/controls.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
function meta() {
  return {
    charset: "utf-8",
    title: config.seo.default.title,
    description: config.seo.default.description,
    viewport: "width=device-width,initial-scale=1"
  };
}
function links() {
  return [
    { rel: "stylesheet", href: src_default },
    { rel: "stylesheet", href: icons_default },
    { rel: "stylesheet", href: config.css.maplibre },
    { rel: "stylesheet", href: config.css.fonts }
  ];
}
function App() {
  const { types, severities } = useLoaderData();
  const { setSeverities, setTypes } = useFilterStore();
  (0, import_react9.useEffect)(() => {
    setSeverities(severities);
    setTypes(types);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(MapProvider, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "layer z-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Map, { className: "absolute inset-0 h-screen w-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Reports, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 93,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "layer pointer-events-none z-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "clamp mx-auto flex h-full flex-col drop-shadow-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TopBar, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(header_default.Container, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 99,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-grow justify-between overflow-hidden py-4 transition-all", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(toast_default.Container, {}, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 101,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Controls, {}, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 102,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/root.tsx",
            lineNumber: 100,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(body_default.Container, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 104,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(footer_default.Container, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 105,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BottomBar, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 106,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "script",
        {
          defer: true,
          "data-domain": "app.saferstreets.info",
          src: "https://plausible.io/js/script.js"
        },
        void 0,
        false,
        {
          fileName: "app/root.tsx",
          lineNumber: 111,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-J5ZTFNKX.js.map
