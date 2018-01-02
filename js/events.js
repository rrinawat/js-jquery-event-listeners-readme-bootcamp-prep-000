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
$(document).ready(function(){
// call functions here
getIt()
frameIt()

});
