let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });


  console.log('Default background color set to %cgreen', `color: ${color}`);

});

// // This will run when a bookmark is created.
// chrome.bookmarks.onCreated.addListener(() => {
//   // do something
// });
function getUrl() {

}