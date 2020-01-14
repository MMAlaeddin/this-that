$(document).ready(function() {
  $("button#dis").first().click(function() {
    $("ul#dis").prepend("<li>Look at this!</li>");
    $("ul#dat").prepend("<li>How do I do that, This??</li>");
  }); 

  $("button#dat").first().click(function() {
    $("ul#dat").prepend("<li>Did you try this?</li>");
    $("ul#dis").prepend("<li>Did you mean that?</li>");
  });

  $("button#fedup").first().click(function(){
    alert("Sorry about DAT! ;p");
  });
});