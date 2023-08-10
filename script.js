const mainPage = document.getElementById("container1");
const simpleBackground = document.getElementById("simpleBg");
const gradientBackground = document.getElementById("gradientBg");
const Btn1 = document.getElementById("btn1");
const Btn2 = document.getElementById("btn2");
const bgColor = document.getElementById("bgColor");
const simpleColorText = document.getElementById("simpleText");
const simpleColorBtn = document.getElementById("simpleButton");
const gradientColorText = document.getElementById("gradientText");
const gradientColorBtn = document.getElementById("gradientButton");

Btn1.addEventListener("click", () => {
  mainPage.style.display = "none";
  simpleBackground.style.display = "block";
});

Btn2.addEventListener("click", () => {
  mainPage.style.display = "none";
  gradientBackground.style.display = "block";
});

simpleColorBtn.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);

  if (r < 100 && g < 100 && b < 100) {
    simpleColorText.style.color = "#D8D9DA";
    simpleColorBtn.style.backgroundColor = "#272829";
    simpleColorBtn.style.color = "#D8D9DA";
  } else {
    simpleColorText.style.color = "#272829";
    simpleColorBtn.style.backgroundColor = "#D8D9DA";
    simpleColorBtn.style.color = "#272829";
  }

  bgColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  simpleColorText.innerHTML = `Current Color - RGB(${r}, ${g}, ${b})`;
});

gradientColorBtn.addEventListener("click", () => {
  const r1 = Math.floor(Math.random() * 256);
  const b1 = Math.floor(Math.random() * 256);
  const g1 = Math.floor(Math.random() * 256);
  const r2 = Math.floor(Math.random() * 256);
  const b2 = Math.floor(Math.random() * 256);
  const g2 = Math.floor(Math.random() * 256);
  // const direction = Math.floor(Math.random() * 361);
  // colorText.innerHTML = `Current Gradient Color - linear-gradient(${direction}deg, rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}))`;
  // bgColor.style.background = `linear-gradient(${direction}deg, rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}))`;
  bgColor.style.background = `linear-gradient(40deg, rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}))`;
  gradientColorText.innerHTML = `Current Color -
  linear-gradient(rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}))`;
});
