import $ from 'jquery';

var url = 'http://json-data.herokuapp.com/forms';

//text input
var form = $('.form');
function input (obj) {
  return `
  <div class="formText" id="${obj.id}">
  <input type="${obj.type}" placeholder="${obj.label}">
  <i class ="fa ${obj.icon}"></i>
  </div>
  `;
}

var dataReq = $.getJSON(url);

dataReq.then(function(response){
  response.forEach(function(data){
    var datum = input(data.label);
    form.append(data.label);
    console.log(data.label);
  });
});


// function buildForm (dataArr) {
// dataArr.forEach(function (field){
//   var html = input(field);
//   formArea.append(html);
// });
// dataReq.then( function (response) {
// buildForm(response);
// });
// }
// console.log(dataReq);
