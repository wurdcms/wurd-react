export const replaceVars = function(text, vars) {
  Object.keys(vars).forEach(key => {
    let val = vars[key];

    text = text.replace(`{{${key}}}`, val);
  });

  return text;
};
