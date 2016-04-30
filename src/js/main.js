import $ from 'jquery';

var url = 'http://json-data.herokuapp.com/forms';

var form = $('.form');

var textTemplate = function(obj) {
   return `
     <div class="formText" id="${obj.id}">
       <textarea name="name" placeholder= "${obj.label}"></textarea>
       <i class="fa ${obj.icon}"></i>
     </div>
     `
   };

   var selectTemplate = function(lang){
     return`
     <select class="language" name="Language">
     <option value="EN">${lang.options.label}</option>
     </select>
     `
    };
  //
   $.getJSON(url).then (function (response){
     response.forEach(function(input){
//need to write an if else statement to select different templates

       var html = textTemplate(input);
       form.append(html);

     });
    //  console.log(response);
  });





   //  <textarea name="name" placeholder= "First Name"></textarea>

   //  var inputTemplate = function(obj){
   //    return `
   //    <div class="formInput" id="${obj.id}">
   //      <input type="${obj.type}" placeholder="${obj.label}">
   //      <i class="fa ${obj.icon}"></i>
   //    </div>
   //    `
   //  };
