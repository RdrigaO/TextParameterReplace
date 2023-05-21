// function searchAndReplace() {
//   let originalText = document.getElementById("originalText").value;
//   let specificChar = document.getElementById("specificChar").value;
//   let parameters = document.getElementById("replaceText").value;
//   let charArray = [];

//   let elementsArray = parameters.split(",").map(function (element) {
//     return element.trim();
//   });

//   // Iterate through each character in the original text
//   for (let i = 0; i < originalText.length; i++) {
//     let char = originalText.charAt(i);

//     // Check if the character matches the specificChar
//     if (char === specificChar) {
//       charArray.push(char);
//     }
//   }
//   for (var a = 0; a < charArray.length; a++) {
//     for (var j = 0; j < elementsArray.length; j++) {
//       if (a == j) {
//         // var modifiedText = originalText
//         //   .split(charArray[a])
//         //   .join(elementsArray[j]);
//         // console.log(modifiedText);
//         // document.getElementById("modifiedText").value = modifiedText;
//         console.log(charArray[a], elementsArray[j]);
//       }
//     }
//   }

//   // console.log(elementsArray);
//   // console.log(charArray); // Output the charArray to the console
//   let replaceText = document.getElementById("replaceText").value;

//   // let modifiedText = originalText.split(searchText).join(replaceText);

//   document.getElementById("modifiedText").value = modifiedText;
// }

function searchAndReplace() {
  let originalText = document.getElementById("originalText").value;
  let specificChar = document.getElementById("specificChar").value;
  let parameters = document.getElementById("replaceText").value;
  let charArray = [];

  let elementsArray = parameters.split(",").map(function (element) {
    return element.trim();
  });

  // Iterate through each character in the original text
  for (let i = 0; i < originalText.length; i++) {
    let char = originalText.charAt(i);

    // Check if the character matches the specificChar
    if (char === specificChar) {
      charArray.push(char);
    }
  }

  var replacedText = originalText.replace(/\{\d\}/g, function (match) {
    var index = parseInt(match.match(/\d/), elementsArray[0]);
    return replacements[index];
  });

  console.log(replacedText);

  console.log(elementsArray);
  console.log(charArray); // Output the charArray to the console
  let replaceText = document.getElementById("replaceText").value;

  // let modifiedText = originalText.split(searchText).join(replaceText);

  document.getElementById("modifiedText").value = modifiedText;
}
