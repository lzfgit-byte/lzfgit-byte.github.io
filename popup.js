// "chrome_url_overrides": {
//   "newtab": "index.html"
// },
let changeColor = document.getElementById("changeColor");
let form = layui.form;

chrome.storage.sync.get("color", ({ color }) => {

  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    // document.body.style.backgroundColor = color;

    localStorage.setItem("6666",color);


  });
}
