const canvas = document.getElementById("dnaCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", () => {
  resizeCanvas();
  setupButtons();
});

const dots = [];
const total = 50;
let amplitude = 100;
let centerX = canvas.width / 2;

for (let i = 0; i < total; i++) {
  dots.push({
    y: i * 20,
    phase: i * 0.2
  });
}

const buttonContainer = document.getElementById("buttons-container");
const buttonLabels = [
  "Partner with technology transfer", "Partner with CROs & CDMOs", "Business development strategy", "Digital marketing strategy", "In & Out licenses",
  "Financial Strategy", "Advise to Investment banks and start ups", "Technical Due Diligence", "Establish partnerships with Philanthropy Non -Profit Organizations", "M&A"
];

const buttonElements = [];

function setupButtons() {
  // Remove old buttons
  buttonContainer.innerHTML = "";
  buttonElements.length = 0;

  const centerX = window.innerWidth / 2;
  const baseSpacing = window.innerHeight / (buttonLabels.length + 1);
  const offsetX = Math.min(window.innerWidth * 0.25, 250); // max 250px offset

  buttonLabels.forEach((label, i) => {
    const button = document.createElement("button");
    button.type = "button";
    button.innerText = label;

    const leftPos = i % 2 === 0
      ? centerX - offsetX
      : centerX + offsetX - Math.min(window.innerWidth * 0.4, 250); // button width match

    button.style.left = `${leftPos}px`;

    buttonContainer.appendChild(button);
    buttonElements.push({
      element: button,
      baseY: baseSpacing * (i + 1),
      phase: i * 0.5
    });
  });
}

setupButtons();

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const time = Date.now() / 1000;
  centerX = canvas.width / 2;
  amplitude = Math.min(canvas.width * 0.15, 120); // scale amplitude with screen size

  dots.forEach((dot) => {
    const offset = Math.sin(time + dot.phase) * amplitude;
    const x1 = centerX + offset;
    const x2 = centerX - offset;
    const y = dot.y;

    ctx.beginPath();
    ctx.arc(x1, y, 5, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x2, y, 5, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x1, y);
    ctx.lineTo(x2, y);
    // ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
    ctx.strokeStyle = "black";
    ctx.stroke();
  });

  buttonElements.forEach((btn) => {
    const float = Math.sin(time + btn.phase) * 10;
    btn.element.style.top = `${btn.baseY + float}px`;
  });

  requestAnimationFrame(draw);
}

draw();

// Dummy popup texts corresponding to each button
const popupContents = [
  "Details about partnering with technology transfer.",
  "Details about partnering with CROs & CDMOs.",
  "Business development strategy insights.",
  "Digital marketing strategy details.",
  "Info about in & out licenses.",
  "Financial strategy explanation.",
  "Advisory support for investment banks and startups.",
  "Technical Due Diligence description.",
  "Collaborations with non-profit organizations.",
  "Mergers and Acquisitions (M&A) information."
];

const popupBox = document.getElementById("popup-box");
const popupText = document.getElementById("popup-text");
const popupContent = document.querySelector(".popup-content");
const closeBtn = document.querySelector(".close-btn");

buttonElements.forEach((btnObj, i) => {
  btnObj.element.addEventListener("click", (e) => {
    e.preventDefault();
    popupText.textContent = popupContents[i];

    // Remove any existing position classes
    popupContent.classList.remove("popup-left", "popup-right");

    // Check screen size
    if (window.innerWidth > 768) {
      const isLeft = i % 2 === 0;
      popupContent.classList.add(isLeft ? "popup-left" : "popup-right");
    }

    popupBox.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  popupBox.style.display = "none";
});
