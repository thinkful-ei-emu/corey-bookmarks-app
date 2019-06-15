/* eslint-disable no-undef */
'use strict';

// update store, call render

const bookmarkApp = (function(){

  function newBookmarkButtonHandler() {
    $('.form-container').on('click','#js-add-bookmark', function(event) {
      event.preventDefault();
      STORE.addFormVisible = true;
      render();
    });
  }

  const render = function(){
    // Filter item list if store prop is true by item.checked === false
    // let items = [ ...store.items ];
    if(STORE.addFormVisible === true){
      $('.form-container').html(generateFormHtml());
    } else {
      $('.form-container').html('<button name="show-new-form-container" id="js-add-bookmark" type="button">New Bookmark</button>');
    }
  };

  //.html .hide .show outside of render BAD
  //no button.click thing .html

  function generateFormHtml(){
    return `
    <form id="js-addForm" class="newBookmarkForm">
    <div>
      <label for="bookmarks-entry">Title</label>
      <input name="title" id="new-title-bookmark" type="text" class="js-new-bookmark" placeholder="Bookmark title" required>
    </div>
    <div>
      <label for="bookmarks-entry">URL</label>
      <input name="url" id="new-url-bookmark" type="link" class="js-new-bookmark" placeholder="URL here" required>
    </div>
    <div>
      <label for="new-bookmark">Description</label>
      <input name="description" id="new-dscrp-bookmark" type="text" class="js-new-bookmark" placeholder="Describe your bookmark">
    </div>
    <div class="radio-buttons" >
    <label for="title" class="radio-title">Give it a rating!</label>
      
    <label for="one" class="label">1</label>
      <input type="radio" name="rating" value="1" class="radio-button">
      
    <label for="two" class="label">2</label>
      <input type="radio" name="rating" value="2" class="radio-button">
      
    <label for="three" class="label">3</label>
      <input type="radio" name="rating" value="3" class="radio-button">
      
    <label for="four" class="label">4</label>
      <input type="radio" name="rating" value="4" class="radio-button">
      
    <label for="five" class="label">5</label>
      <input type="radio" name="rating" value="5" class="radio-button" checked>
    </div>
            
    <button id="submitForm" type="submit">Submit</button>
      
    </form>
   `;
  }

  function generateNewBookmarkSubmit(){
    $('.form-container').on('submit', '#js-addForm', function (event) {
      event.preventDefault();

      let bookmarkName = $('#new-title-bookmark').val();
      let bookmarkURL = $('#new-url-bookmark').val();
      let bookmarkDescription = $('#new-dscrp-bookmark').val();
      let bookmarkRating = $('input[name=\'rating\']:checked').val();
      
      let newBookmark = {
        title: bookmarkName,
        url: bookmarkURL,
        description: bookmarkDescription,
        rating: bookmarkRating
      };
      //console.log('newbookMark = ', newBookmark);

      STORE.addFormVisible = false;
      api.createBookmarkApi(newBookmark)
        .then(function (newItem) {
          console.log('item from fetch ', newItem);
          STORE.addBookmark(newItem);
        });
    });
  }
  //display bookmarks on page, collapsed with title, url, description, rating

  function generateBookmarks(bookmarkName){
    // return `
    // <div class="bookmarks-onPage">
    //   <p>${bookmarkName}</p>
    //   <a href ="${bookmarkURL}">Visit Site</a>
    //   <p>${bookmarkDescription}</p>
    //   <button calss="expand-details">Show more</button>
    //   <button class="delete-bookmark">Delete</button>
    // </div>
    // `;
  }


  
  function handleFilter(){}


  function handleDeleteBookmark(){}



  function bindEventListeners() {
    //generateBookmarks();
    newBookmarkButtonHandler();
    generateNewBookmarkSubmit();
    handleFilter();
    handleDeleteBookmark();
  }

  return {
    render: render,
    bindEventListeners: bindEventListeners,
  };

})();