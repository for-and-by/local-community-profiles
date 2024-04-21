import {
  config
} from "/build/_shared/chunk-GT3SSOVI.js";

// app/utils/seo.ts
function formatSeoTitle(title) {
  if (!title)
    return config.seo.default.title;
  return `${title} | ${config.seo.default.title}`;
}
function formatMetadata(metadata) {
  var _a;
  const formattedMetdata = {
    title: formatSeoTitle(metadata.title),
    description: (_a = metadata == null ? void 0 : metadata.description) != null ? _a : config.seo.default.description
  };
  if (metadata.image)
    formattedMetdata["og-image"] = metadata.image;
  return formattedMetdata;
}

export {
  formatMetadata
};
//# sourceMappingURL=/build/_shared/chunk-SYL3D5JD.js.map
