let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });


  console.log('Default background color set to %cgreen', `color: ${color}`);

});

// // This will run when a bookmark is created.
// chrome.bookmarks.onCreated.addListener(() => {
//   // do something
// });
chrome.action.onClicked.addListener((tab) => {
  alert('sds')
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['layui/layui.js','js/util.js']
  });
});