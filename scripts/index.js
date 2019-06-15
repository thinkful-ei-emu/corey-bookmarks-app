'use strict';

//when page is loaded, used to place event listeners on page

$(document).ready(function() {
  bookmarkApp.render();  //renders new bookmark form
  bookmarkApp.bindEventListeners();  //bind listeners in bookmarks app

  //api.getBookmarkApi(newBookmark)
    // .then((bookmarksAry) => {
    //  bookmarksAry.forEach((newBookmark) => STORE.addBookmark(newBookmark)); //add this to STORE then call render
    //  bookmarkApp.render();
    // });
});
