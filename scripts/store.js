'use strict';
// example STORE array
// [
//     {
//         "id": "cjwv2x3h8000y0kygwo1avwrj",
//         "title": "bookmark",
//         "url": "https://www.fdsf.com/cats",
//         "desc": null,
//         "rating": null
//     },
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
    this.bookmarks.forEach(bookmark => (bookmark.expand = false));
    this.bookmarks.push(bookmark);
  };



  const expandBookmark = function(){

  };



  const deleteBookmark = function(){

  };

  return {
    addBookmark,
    expandBookmark,
    deleteBookmark
  };

}());