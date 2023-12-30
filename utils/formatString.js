export default function formatFilename(inputString) {
  // Remove special characters except for dot
  const withoutSpecialChars = inputString.replace(/[^\w\s.]/gi, "");

  // Replace spaces with underscores
  const withUnderscores = withoutSpecialChars.replace(/\s+/g, "_");

  // Convert the string to lowercase
  const lowercaseString = withUnderscores.toLowerCase();

  return lowercaseString;
}
