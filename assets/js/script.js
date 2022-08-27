// font-size
let fontSize = document.getElementById("fontSize");
function changeFontSize() {
    document.getElementById("ausgabeFeld").style.fontSize = fontSize.value + "px";
}
// font-family

/* function selectFontFamily() {
    let fontFamily = document.getElementById("fontFamily");
    console.log(fontFamily.value);
    document.getElementById("ausgabeFeld").style.fontFamily = fontFamily.value;
} */

// Kevin:
function selectFontFamily() {
	fontFamily = document.getElementById('fontFamily').value;
	ausgabeFeld.style.fontFamily = fontFamily;
}

// Color
function changeColour() {
  color = document.getElementById("colour");
  console.log(color.value);
  document.getElementById("ausgabeFeld").style.color=color.value
}

// text value
let text = document.getElementById("textValue");
function typeText() {
  console.log(text.value);
  document.getElementById("ausgabeFeld").innerHTML = text.value;
}
