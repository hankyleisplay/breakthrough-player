const barsContainer = document.getElementById("bars");

if (barsContainer) {
  const barCount = 48;
  for (let i = 0; i < barCount; i += 1) {
    const bar = document.createElement("i");
    bar.style.animationDelay = `${(i % 12) * 0.07}s`;
    bar.style.height = `${20 + (i % 9) * 7}%`;
    barsContainer.appendChild(bar);
  }
}
