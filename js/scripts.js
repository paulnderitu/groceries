$(document).ready(function() {
  $("#blanks form").submit(function(event){
    var collins = $("input#first").val();
    $("input#first").val("");
    var arrayContent = [];
    var fruits = arrayContent.unshift(collins);
    arrayContent.forEach(function(fruit){
      $("#ice").append("<li>" + fruit + "</li>");
          event.preventDefault();
      });
  });
});
console.log();
$(document).ready(function() {
  $("#blank form").submit(function(event){
    var collo = $("input#second").val();
    $("input#second").val("");
    var arrayContent = [];
    var vegetables = arrayContent.unshift(collo);
    arrayContent.forEach(function(vegetable){
      $("#rice").append("<li>" + vegetable + "</li>");
          event.preventDefault();
      });
  });
});
console.log();
