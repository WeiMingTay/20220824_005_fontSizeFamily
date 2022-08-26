// font-size
let fontSize = document.getElementById("fontSize");
function changeFontSize() {
  console.log(fontSize.value + "px");
  document.getElementById("ausgabeFeld").style.fontSize = fontSize.value + "px";
}
// font-family

function selectFontFamily() {
    let fontFamily = document.getElementById("fontFamily");
  console.log(fontFamily.value);
  document.getElementById("ausgabeFeld").style.fontFamily = fontFamily.value;
}
// text value
let text = document.getElementById("textValue");
function typeText() {
  console.log(text.value);
  document.getElementById("ausgabeFeld").innerHTML = text.value;
}
