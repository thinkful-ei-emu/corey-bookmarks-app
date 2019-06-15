'use strict';

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/corey';

  const listApiFetch = function(...args) {
    
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
        
          error = { code: res.status };

          if (!res.headers.get('content-type').includes('json')) {
            error.message = res.statusText;
            return Promise.reject(error);
          }
        }

        return res.json();
      })
      .then(data => {
      
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }

        return data;
      });
  };
  


  const getBookmarkApi = function(){
    console.log('testing getBookmarkApi');
    return listApiFetch(`${BASE_URL}/bookmarks`);
  };


  const createBookmarkApi = function(newBookmark){
    let newBookmarkJson = JSON.stringify({
      title: newBookmark.title,
      url: newBookmark.url,
      desc: newBookmark.description,
      rating: newBookmark.rating
    });
    //console.log('test for createBookmarkApi ', newBookmarkJson);
    let error;
    return listApiFetch(`${BASE_URL}/bookmarks`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),     
      body: newBookmarkJson
    });
  };


  const deleteBookmarkApi = function(id){
    console.log('testing deleteBookmarkApi');
    return listApiFetch(`${BASE_URL}/bookmarks/${id}`, {
      method: 'DELETE'
    });
  };
   
  return {
    getBookmarkApi,
    createBookmarkApi,
    deleteBookmarkApi
    
  };

})();
