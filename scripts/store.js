'use strict';
// example STORE array
// [
//     {
//         "id": "cjwv2yq8c000z0kygjcsjv4ut",
//         "title": "bookmark2",
//         "url": "https://www.catmania.com/cats",
//         "desc": "this is a place for cats",
//         "rating": 4
//     }
// ]

const STORE = (function() {

  const addBookmark = function(bookmark){
    //bookmark.expanded = false;
    STORE.bookmarksAry.push(bookmark);
  };

  const toggleExpandBookmark = function(id){
    console.log('test expandBookmark');
    const bookmarkToExpand = STORE.bookmarksAry.find((bookmark) => {
      return bookmark.id === id;
    });

    bookmarkToExpand.expanded = !bookmarkToExpand.expanded;
    bookmarkApp.render();
  };

  const deleteBookmark = function(id){
    STORE.bookmarksAry = STORE.bookmarksAry.filter((bookmark) => {
      return bookmark.id !== id;
    });

    // API call to delete here
    api.deleteBookmarkApi(id)
      .catch((error) => {
        // error handling
      })
    bookmarkApp.render();
  };

  return {
    addFormVisible: false,
    bookmarksAry:[],
    addBookmark,
    toggleExpandBookmark,
    deleteBookmark
  };

}());