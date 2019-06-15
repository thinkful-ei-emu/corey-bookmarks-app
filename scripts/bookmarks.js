/* eslint-disable no-undef */
'use strict';

// view layer
// update store, call render
const bookmarkApp = (function(){
  const bookmarksContainer = $('.js-bookmarks-list');
  const formContainer = $('.form-container');
  
  function newBookmarkButtonHandler() {
    formContainer.on('click','#js-add-bookmark', function(event) {
      event.preventDefault();
      STORE.addFormVisible = true;
      render();
    });
  }

  const render = function(){
    // Filter item list if store prop is true by item.checked === false
    //let items = [ ...store.items ];
    if(STORE.addFormVisible === true){
      formContainer.html(generateFormHtml());
    } else {
      formContainer.html('<button name="show-new-form-container" id="js-add-bookmark" type="button">New Bookmark</button>');
    }
    const bookmarksHtml = generateBookmarkItemsString(STORE.bookmarksAry);
    bookmarksContainer.html(bookmarksHtml);

    // error check
    if(STORE.error){
      $('#error').text(STORE.error);
    }
  };

  //.html .hide .show outside of render BAD
  //no button.click things .html

  function generateFormHtml(){
    return `
    <form id="js-addForm" class="newBookmarkForm">
    <div>
      <label for="new-title-bookmark">Title</label>
      <input name="title" id="new-title-bookmark" type="text" class="js-new-bookmark" placeholder="Bookmark title" required>
    </div>
    <div>
      <label for="new-url-bookmark">URL</label>
      <input name="url" id="new-url-bookmark" type="link" class="js-new-bookmark" placeholder="URL here" required>
    </div>
    <div>
      <label for="new-dscrp-bookmark">Description</label>
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
    formContainer.on('submit', '#js-addForm', function (event) {
      event.preventDefault();

      let bookmarkName = $('#new-title-bookmark').val();
      let bookmarkURL = $('#new-url-bookmark').val();
      let bookmarkDescription = $('#new-dscrp-bookmark').val();
      let bookmarkRating = $('input[name=\'rating\']:checked').val();

      const newBookmark = {
        title: bookmarkName,
        url: bookmarkURL,
        description: bookmarkDescription,
        rating: bookmarkRating
      };

      STORE.addBookmark(newBookmark);
    });
  }

  //display bookmarks on page, collapsed with title, url, description, rating

  function generateBookmarkItemsString(bookmarksAry) {
    const items = bookmarksAry.map(generateItemElement);
    return items.join('');
  }

  function generateItemElement(item){
    const expandedClass = !item.expanded ? 'hidden': '';
    const showMoreBtnText = item.expanded ? 'Show Less' : 'Show more';

    return (
      `<li data-id="${item.id}">
        <div class="bookmarks-onPage">
          <div id="box">
            <p>Title: ${item.title}</p>
            <a class="${expandedClass}" href="${item.url}">Visit Site</a>
            <p class="${expandedClass}">Description: ${item.desc}</p>
            <p>Rating: ${item.rating}</p>
            <button class="expand-details" onclick="STORE.toggleExpandBookmark('${item.id}')">
              ${showMoreBtnText}
            </button>
            <button class="delete-bookmark" onclick="STORE.deleteBookmark('${item.id}')">
              Delete
            </button>
          </div>
        </div>
      </li>`
    );
  }

  
  function handleFilter(){
    $('#rate-drop-down').on('change', function(){
      const rating = $(this).val();
      STORE.filterBookmarks(rating);
    });
  }


  function registerEventListeners() {
    newBookmarkButtonHandler();
    generateNewBookmarkSubmit();
    handleFilter();
  }

  return {
    render,
    registerEventListeners,
  };
})();