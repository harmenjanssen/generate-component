const capitalizeFirstLetter = require("../utils/capitalize-first-letter");
const pascalCaseToDash = require("../utils/pascal-case-to-dash");
const toHumanReadableText = require("../utils/to-human-readable-text");

/**
 * Generator for a cms.
 *
 * @param {string} componentName
 * @returns string
 */
module.exports = (componentName) =>
  `export default {
    label: '${capitalizeFirstLetter(toHumanReadableText(componentName))}',
    name: 'text',
    widget: 'object',
    summary: '${capitalizeFirstLetter(
      toHumanReadableText(componentName)
    )} | {{fields.title}}',
    fields: [
        {
            label: 'Title',
            name: 'title',
            widget: 'string',
            required: false,
        },
        {
            label: 'Component',
            name: 'component',
            widget: 'hidden',
            default: '${pascalCaseToDash(componentName)}',
        },
    ],
};
`;
