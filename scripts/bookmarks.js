/* eslint-disable no-undef */
'use strict';


//const bookmarkApp = (function(){

function handleNewBookmarkClicked() {
  $('#js-add-bookmark').click(function() {$('.form-container').html(
    `
            <form id="js-addForm" class="formDisplay">
            <div>
                <label for="bookmarks-entry">Title</label>
                <input name="title" id="new-title-bookmark" type="text" class="js-new-bookmark" placeholder="Bookmark title" required>
            </div>
            <div>
                <label for="bookmarks-entry">URL</label>
                <input name="url" id="new-url-bookmark" type="link" class="js-new-bookmark" placeholder="Your link to site here" required>
            </div>
            <div>
                <label for="new-bookmark">Description</label>
                <input name="description" id="new-dscrp-bookmark" type="text" class="js-new-bookmark" placeholder="What is at your bookmark" required>
            </div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
            
            <button id="submitForm" type="submit">Submit</button>
      
        </form>
            `
  );
  });
}
  
function handleNewBookmarkSubmit(){}

  
  
function handleFilter(){}



function handleDeleteBookmark(){}



function handleClicks() {
  handleNewBookmarkClicked();
  handleNewBookmarkSubmit();
  handleFilter();
  handleDeleteBookmark();
}

handleClicks();

//return {
//     render: render,
//handleClicks: handleClicks,
//};

//})();