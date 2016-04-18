import $ from 'jquery';

var url = 'http://json-data.herokuapp.com/forms';

//text input
function inputText (obj) {
  return `
  <div class="formElement" id="${obj.id}">
  <input type="${obj.type}" placeholder="${obj.label}">
  <i class ="fa ${obj.icon}"></i>
  </div>
  `;
//   <div class="formElement">
//   <input type="text" placeholder="First Name">
//   <i class="fa fa-user" aria-hidden="true"></i>
// </div>
// console.log(inputText);

}

function buildForm (dataArr) {
dataArr.forEach(function (field){
  var html = input(field);
  formArea.append(html);
});
// console.log(dataArr);
}
var dataReq = $.getJSON(url);
dataReq.then( function (response) {
buildForm(response);
});
// console.log(dataReq);
