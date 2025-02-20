// some js
$( document ).ready(function() {
  console.log( "hey cumbie, don't click on the seal" );

  $('#secretSeal').hover(

      function(){
          $(this).css("background-color", "yellow");
          alert('never use alert');
          }
  ); 
  
});