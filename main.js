$(document).ready(function () {




  //adding the x button
  jQuery("ui-msg").append('<span class="close">X</span>');
   //Handling the click event
  jQuery(".close").click(function() {
    jQuery(this).parents(".ui-msg").fadeOut(500);
  });
   //Initially hide the answers
  $(".answers").hide();
  //handling faq questions
  $(".faq h3").click(function(){
    $(this).next(".answers").slideToggle();
  });
  $(".faq h3").addClass(".faq");

  //dinamically load about page
  $("#about").click(function(){
    $(".more").load("about.html .about");
    return false;

  });


  

});
