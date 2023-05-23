function searchAndReplace() {
  let originalText = document.getElementById("originalText").value;
  let parameters = document.getElementById("replaceText").value;

  let elementsArray = parameters.split(",").map(function (element) {
    return element.trim();
  });
  let modifiedText = sqlFormatter.format(originalText, {
    dialect: "plsql",
    params: elementsArray,
    keywordCase: "upper",
    logicalOperatorNewline: "before",
    identStyle: "tabularRight",
  });

  document.getElementById("modifiedText").value = modifiedText;
}
