import fast from "fast.js";

export const rgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const generateConfig = (rules) => {
  let rulesAsString = "";

  const filteredRules = fast.filter(rules, (rule) => rule.isTurnedOn);

  fast.forEach(filteredRules, (rule, i, rules) => {
    let optionsAsObject = "";
    let optionsAsArray = "";

    if (rule.options) {
      rule.options.forEach((option) => {
        if (option.name) {
          if (optionsAsObject.length > 0) {
            optionsAsObject += ", ";
          }

          optionsAsObject += `"${option.name}": ${
            option.type === "string" || option.type === "select"
              ? `"${option.value}"`
              : option.value
          }`;
        } else {
          if (optionsAsArray.length > 0) {
            optionsAsArray += ", ";
          }

          optionsAsArray += `"${option.value}"`;
        }
      });
    }

    if (optionsAsObject.length > 0 && optionsAsArray.length > 0) {
      rulesAsString += `    "${rule.name}": ["${rule.value}", ${optionsAsArray}, { ${optionsAsObject} }]`;
    } else if (optionsAsObject.length > 0) {
      rulesAsString += `    "${rule.name}": ["${rule.value}", { ${optionsAsObject} }]`;
    } else if (optionsAsArray.length > 0) {
      rulesAsString += `    "${rule.name}": ["${rule.value}", ${optionsAsArray}]`;
    } else {
      rulesAsString += `    "${rule.name}": "${rule.value}"`;
    }

    if (i !== rules.length - 1) {
      rulesAsString += ",\n";
    }
  });

  return `{
  "rules": {
${rulesAsString}
  }
}`;
};
