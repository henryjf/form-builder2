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
     obj.languages.forEach(function(language){
     });
     console.log(language.options.label);
 };

   var selectTemplate = function(obj){
     return `
     <select class="language" name="Language"
     placeholder="${obj.label}">
     <option value="${obj.options.value}">${obj.options.label}</option>
     </select>
     `
    };

    var textareaTemplate = function(obj){
      return `
      <div class="formComment" id="${obj.id}">
        <textarea name="name" placeholder= "${obj.label}"></textarea>
        <i class="fa ${obj.icon}"></i>
      </div>
      `
    }
  //
   $.getJSON(url).then (function (response){
     response.forEach(function(input){
//need to write an if else statement to select different templates
      if(input.type === "select") {
        var html = selectTemplate(input);
      } else if (input.type === "textarea") {
        var html = textareaTemplate(input);
      } else  {
        var html = textTemplate(input);
      }
       form.append(html);

     });
    //  console.log(response);
  });
