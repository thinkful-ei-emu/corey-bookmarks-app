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



  const expandBookmark = function(){
    console.log('test expandBookmark');
  };



  const deleteBookmark = function(){

  };

  return {
    addFormVisible: false,
    bookmarksAry:[],
    addBookmark,
    expandBookmark,
    deleteBookmark
  };

}());