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

// data layer
const STORE = (function() {
  const loadExistingBookmarks = function() {
    api.getBookmarkApi()
      .then((bookmarks) => {
        STORE.allBookmarks = [].concat(bookmarks);
        // create new array using bookmark elements
        STORE.bookmarksAry = [].concat(bookmarks);
        bookmarkApp.render();
      });
  };

  const addBookmark = function(bookmark){
    STORE.bookmarksAry.push(bookmark);
    STORE.addFormVisible = false;
    bookmarkApp.render();

    api.createBookmarkApi(bookmark)
      .then(function (newItem) {
        console.log('item from fetch ', newItem);
        STORE.allBookmarks.push(bookmark);
      })
      .catch((error) => {
        STORE.error = error.message;
        STORE.bookmarksAry = [].concat(STORE.allBookmarks);
        bookmarkApp.render();
      });
  };

  const toggleExpandBookmark = function(id){
    console.log('test expandBookmark');
    const bookmarkToExpand = STORE.allBookmarks.find((bookmark) => {
      return bookmark.id === id;
    });

    bookmarkToExpand.expanded = !bookmarkToExpand.expanded;
    
    bookmarkApp.render();
  };

  const deleteBookmark = function(id){
    STORE.bookmarksAry = STORE.allBookmarks.filter((bookmark) => {
      return bookmark.id !== id;
    });
    bookmarkApp.render();

    api.deleteBookmarkApi(id)
      .then(() => {
        STORE.allBookmarks = STORE.allBookmarks.filter((bookmark) => {
          return bookmark.id !== id;
        });
      })
      .catch((error) => {
        STORE.error = error.message;
        STORE.bookmarksAry = [].concat(STORE.allBookmarks);
        bookmarkApp.render();
      });
  };

  const filterBookmarks = function(rating){
    STORE.bookmarksAry = STORE.allBookmarks.filter((bookmark) => {
      return bookmark.rating >= rating;
    });
    bookmarkApp.render();
  };

  return {
    // state
    addFormVisible: false,
    error: '',
    bookmarksAry:[],// non-destructive array for filtering
    allBookmarks: [],// api bookmark array
    // manage a single bookmark
    addBookmark,
    toggleExpandBookmark,
    deleteBookmark,
    // manage all bookmarks
    loadExistingBookmarks,
    filterBookmarks,
  };

}());