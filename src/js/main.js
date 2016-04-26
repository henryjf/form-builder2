import $ from 'jquery';

var url = 'http://json-data.herokuapp.com/forms';

//text input
var form = $('.form');
var dataReq = $.getJSON(url);

var textTemplate = function(obj) {
   return `
     <div class="formText" id="${obj.id}">
       <input type="${obj.type}" placeholder="${obj.label}">
       <i class="fa ${obj.icon}"></i>
     </div>

     `;
     console.log(obj);
   }

    //  <div class="formText">
    //    <input type="text" placeholder="Last Name">
    //    <i class="fa fa-user" area-hidden="true"></i>
    //  </div>
     //
    //  <div class="formText">
    //    <input type="text" placeholder="Email Address">
    //    <i class="fa fa-envelope" area-hidden="true"></i>
    //  </div>
     //
    //  <div class="formText">
    //    <input type="text" placeholder="Website">
    //    <i class="fa fa-envelope" area-hidden="true"></i>
    //  </div>



  //  <div class="formText">
  //    <input type="text" placeholder="First Name">
  //    <i class="fa fa-user" area-hidden="true"></i>
  //  </div>
  // `
  // // <div class="formText" id="${obj.id}">
  // // <input type="${obj.type}" placeholder="${obj.label}">
  // // <i class ="fa ${obj.icon}"></i>
  // // </div>
  // `;


// dataReq.then(function(response){
//   response.forEach(function(data){
//     var datum = input(data.label);
//     form.append(data.label);
//     // console.log(data.label);
//   });
// });


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
