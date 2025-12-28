/**
 * Returns the file name without the extension.
 *
 * Assumes there are no file paths in the argument.
 */
const extractFileNameWithoutExtension = (fileName) => {
  const lastPeriodIndex = fileName.lastIndexOf(".");

  // If the file name doesn't contain a period then assume
  // it is an extensionless file and return the entire name.
  if (lastPeriodIndex === -1) {
    return fileName;
  }
  return fileName.substr(0, lastPeriodIndex);
};

module.exports = {
  extractFileNameWithoutExtension,
};
