// ../../packages/utils/dist/index.js
function parseDateAsString(date) {
  return date ? new Date(date).toLocaleDateString() : void 0;
}
function calculateDateFromBy(date, by) {
  return new Date(date + by * 36e5);
}
function getMetadataFromContent(content, type) {
  if (!content || !content.verified_at)
    return {};
  const { verify_by, expire_by } = type;
  const lastVerified = Date.parse(content.verified_at);
  let verifyDate, expiryDate;
  if (verify_by)
    verifyDate = calculateDateFromBy(lastVerified, verify_by);
  if (expire_by)
    expiryDate = calculateDateFromBy(lastVerified, expire_by);
  const isAging = verifyDate && verifyDate.valueOf() < Date.now();
  const isExpired = expiryDate && expiryDate.valueOf() < Date.now();
  const isHidden = (content == null ? void 0 : content.is_deleted) || isExpired;
  return { isAging, isExpired, isHidden, verifyDate, expiryDate };
}

export {
  parseDateAsString,
  getMetadataFromContent
};
//# sourceMappingURL=/build/_shared/chunk-YDUTGTTK.js.map
