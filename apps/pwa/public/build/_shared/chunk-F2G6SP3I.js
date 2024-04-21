// ../../node_modules/base64-arraybuffer/dist/base64-arraybuffer.es5.js
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}
var i;

// app/lib/image.ts
function resizeImage(image) {
  const canvas = document.createElement("canvas");
  const maxWidth = 720;
  let { height, width } = image;
  if (image.width > maxWidth) {
    height = Math.round(height * maxWidth / width);
    width = maxWidth;
  }
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (!context)
    return;
  context.drawImage(image, 0, 0, width, height);
  return canvas.toDataURL("image/jpeg", 0.7);
}
function parseFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = (event) => {
      var _a;
      if (!((_a = event == null ? void 0 : event.target) == null ? void 0 : _a.result)) {
        reject("Target couldn't be processed");
        return;
      }
      const blob = new Blob([event.target.result]);
      const url = URL.createObjectURL(blob);
      const image = new Image();
      image.src = url;
      image.onload = () => {
        const resized = resizeImage(image);
        if (!resized)
          reject("Image could not be resized");
        else
          resolve(resized);
      };
    };
    reader.onerror = (error) => reject(error);
  });
}
function parseImageUrl(url, options) {
  if (!url)
    return void 0;
  const image = new URL(url == null ? void 0 : url.replace("/users/users", "/users"));
  if (options == null ? void 0 : options.width) {
    image.searchParams.set("width", options.width.toString());
  }
  if (options == null ? void 0 : options.height) {
    image.searchParams.set("height", options.height.toString());
  }
  if (options == null ? void 0 : options.quality) {
    image.searchParams.set("quality", options.quality.toString());
  }
  return image.toString();
}

export {
  parseFileAsBase64,
  parseImageUrl
};
//# sourceMappingURL=/build/_shared/chunk-F2G6SP3I.js.map
