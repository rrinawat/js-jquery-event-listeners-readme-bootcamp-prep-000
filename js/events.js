//define functions here
//getIt, clicks within paragraph generates alert ("Hey!")
function getIt(){
  $('p').on("click", function(){
    alert("Hey!")
  })
}
$(document).ready(function(){

// call functions here
getIt()

});
