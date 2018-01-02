//define functions here
//getIt, clicks within paragraph generates alert ("Hey!")
function getIt(){
  $('p').on("click", function(){
    alert("Hey!")
  })
}
//frameIt, adds red frame to image
function frameIt(){
  $('img').on("load", function(){
    $('img').addClass('tasty')
    })
}
//pressIt,alerts when g is typed into the input field
function pressIt(){
  $('document').on('keydown', function(key){
    if(key.which == 71){
       alert('G was pressed')
     }
  })


$(document).ready(function(){
// call functions here
getIt()
frameIt()


});
