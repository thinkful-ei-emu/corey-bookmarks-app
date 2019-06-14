'use strict';

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/corey/items';

  let error;
  
  const bookmarkApi = function(method, body, id=null){
  
    let options = {
      headers: new Headers({'content-type':'application/json'}),
      method: method,
      body: body
    };
    console.log(body);
    let destinationURL = BASE_URL;

    if(id) {
      destinationURL += '/'+id;
    }
  };



}());