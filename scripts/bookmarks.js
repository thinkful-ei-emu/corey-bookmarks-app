/* eslint-disable no-undef */
'use strict';


const bookmarkApp = (function(){

  function generateNewBookmarkHtml() {
    $('#js-add-bookmark').click(function() {$('.form-container').html(
      `
    <form id="js-addForm" class="formDisplay">
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
      <input type="radio" name="rating" value="5" class="radio-button">
    </div>
            
    <button id="submitForm" type="submit">Submit</button>
      
    </form>
   `
    );
    });
  }

  const render = function(){
    // Filter item list if store prop is true by item.checked === false
    // let items = [ ...store.items ];
    

  };


  function generateNewBookmarkSubmit(){
    $('js-addForm.formDisplay').on('submit', '.formContainer', function (event) {
      event.preventDefault();
      let bookmarkName = $('new-title-bookmark').val();
      let bookmarkURL = $('new-url-bookmark').val();
      let bookmarkDescription = $('new-dscrp-bookmark').val();
      //let bookmarkRating = $(' ').val();
      //console.log(bookmarkName);
      
      let newObj = {
        title: bookmarkName,
        url: bookmarkURL,
        desc: bookmarkDescription,
        rating: bookmarkRatingNumber
      };
      console.log(newObj);
    });
  }

  function generateBookmarks(){
    //display bookmarks on page, collapsed with title, url, description, rating
  }

  
  function handleFilter(){
  }


  function handleDeleteBookmark(){}



  function bindEventListeners() {
    generateNewBookmarkHtml();
    generateNewBookmarkSubmit();
    handleFilter();
    handleDeleteBookmark();
  }

  return {
    render: render,
    bindEventListeners: bindEventListeners,
  };

})();