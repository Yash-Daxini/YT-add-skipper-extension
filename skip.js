document.getElementById("skip-btn").addEventListener("click", async (e) => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"],
  });
});
