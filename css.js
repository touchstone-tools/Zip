(function () {
  const style = document.createElement("style");

  style.innerHTML = `
  body {
    transition: background 0.3s ease;
  }

  /* Optional enhancement effects */
  .result-card:hover {
    transform: translateY(-3px) scale(1.01);
  }

  button:active {
    transform: scale(0.96);
  }
  `;

  document.head.appendChild(style);
})();
