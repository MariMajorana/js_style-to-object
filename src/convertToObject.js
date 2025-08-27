'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  // divide por ; e remove espaços extras e linhas vazias
  const rules = sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter(Boolean);

  for (const rule of rules) {
    const [property, value] = rule.split(':');

    if (property && value) {
      obj[property.trim()] = value.trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
