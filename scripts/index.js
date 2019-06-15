'use strict';

//when page is loaded, used to place event listeners on page

$(document).ready(function() {
  bookmarkApp.registerEventListeners();  //bind listeners in bookmarks app
  STORE.loadExistingBookmarks(); // get existing bookmarks from API and show them
});
