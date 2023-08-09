const bgColor = document.getElementById("bgColor");
const colorButton = document.getElementById("colorButton");
const colorText = document.getElementById("colorText");
// const colors = ["white", "blue", "green", "yellow", "pink"];

colorButton.addEventListener("click", () => {
  // bgColor.style.backgroundColor = colors[Math.floor(Math.random() * 5)];
  const r = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);

  bgColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  colorText.innerHTML = `Current Color - RGB(${r}, ${g}, ${b})`;
  if (r === 0 && g === 0 && b === 0) {
    colorText.style.color = `rgb(255, 255, 255)`;
  }

  // bgColor.style.backgroundColor = `linear-gradient( ${(r, g, b)}, ${(r, g, b)})`;
});
