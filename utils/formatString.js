export default function formatFilename(inputString) {
  // Remove special characters except for dot
  const withoutSpecialChars = inputString.replace(/[^\w\s.]/gi, "");

  // Replace spaces with underscores
  const withUnderscores = withoutSpecialChars.replace(/\s+/g, "_");

  // Remove ".pdf" if present at the end of the string
  const withoutPdfExtension = withUnderscores.replace(/\.pdf$/i, "");

  // Convert the string to lowercase
  const lowercaseString = withoutPdfExtension.toLowerCase();

  return lowercaseString;
}
