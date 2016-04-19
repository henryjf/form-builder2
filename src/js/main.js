import $ from 'jquery';

var url = 'http://json-data.herokuapp.com/forms';

//text input
var info = $('.info');
function inputText (obj) {
  return `
  <div class="formDatum" id="${obj.id}">
  <input type="${obj.type}" placeholder="${obj.label}">
  <i class ="fa ${obj.icon}"></i>
  </div>
  `;
}

var dataReq = $.getJSON(url);

dataReq.then(function(response){
  response.forEach(function(data){
    var datum=inputText(data.label);
    info.append(data.label);
    console.log(data.label);
  });
});

// function buildForm (dataArr) {
// dataArr.forEach(function (field){
//   var html = input(field);
//   formArea.append(html);
// });
// // console.log(dataArr);
// }
// dataReq.then( function (response) {
// buildForm(response);
// });
// console.log(dataReq);
