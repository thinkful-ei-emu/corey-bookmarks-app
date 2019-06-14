'use strict';

//when page is loaded, used to place event listeners on page

$(document).ready(function() {  
  bookmarkApp.bindEventListeners();
  api.getBookmarkApi()
    .then((bookmarksAry) => {
      bookmarksAry.forEach((newBookmark) => STORE.addBookmark(newBookmark)); //add this to STORE then call render
      bookmarkApp.render();

    });
});
