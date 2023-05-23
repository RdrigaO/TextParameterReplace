function searchAndReplace() {
  let originalText = document.getElementById("floatingTextarea").value;
  let parameters = document.getElementById("floatingTextarea3").value;

  let elementsArray = parameters.split(",").map(function (element) {
    return element.trim();
  });
  let modifiedText = sqlFormatter.format(originalText, {
    params: elementsArray,
    keywordCase: "upper",
    logicalOperatorNewline: "before",
  });

  document.getElementById("floatingTextarea2").value = modifiedText;
}
