let heading = document.getElementById("mainHeading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userInput");
let fontSize = 16;
// Change Heading Text
document.getElementById("changeTextBtn")
.addEventListener("click", function () {
if (input.value !== "") {
heading.innerHTML = input.value;
}
});
// Change Background Color
document.getElementById("bgColorBtn").onclick = function () {
document.body.style.backgroundColor =
"#" + Math.floor(Math.random() * 16777215).toString(16);
};
// Increase Font Size
document.getElementById("fontSizeBtn")
.addEventListener("click", function () {
fontSize += 2;
paragraph.style.fontSize = fontSize + "px";
});
// Show / Hide Paragraph
document.getElementById("toggleBtn")
.addEventListener("click", function () {
if (paragraph.style.display === "none") {
paragraph.style.display = "block";
}
else {
paragraph.style.display = "none";
}
});
// Reset Page
document.getElementById("resetBtn")
.addEventListener("click", function () {
heading.innerHTML = "Welcome to JavaScript Lab";
paragraph.style.display = "block";
paragraph.style.fontSize = "16px";
document.body.style.backgroundColor = "#f4f4f4";
input.value = "";
fontSize = 16;
});