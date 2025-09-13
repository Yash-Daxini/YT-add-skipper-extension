(() => {
  const simulateClick = (el) => {
    if (!el) return;

    ["pointerdown", "mousedown", "mouseup", "click"].forEach((type) => {
      el.dispatchEvent(
        new MouseEvent(type, {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      );
    });
  };

  const skipBtn = document.getElementsByClassName("ytp-skip-ad-button")[0];

  if (skipBtn) {
    skipBtn.style = "display: flex";

    simulateClick(skipBtn);
  }
})();
