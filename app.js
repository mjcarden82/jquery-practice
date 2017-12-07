$(".button1").click(function(){
  $(".circle1").fadeOut(3000);
});

$(".reset1").click(function(){
  $(".circle1").fadeIn(3000);
});


$(".button2").click(function() {
  $(".circle2").css("border-radius", "10%");
});

$(".reset2").click(function() {
  $(".circle2").css("border-radius", "50%");
});



$(".button3").click(function() {
  $(".circle3").css("background", "#460d4f");
});

$(".reset3").click(function() {
  $(".circle3").css("background", "#555");
});


$(".button4").click(function(){
  $(".circle4").animate({width: "+=20px", height: "+=20px"});
});


$(".reset4").click(function(){
  $(".circle4").animate({width: "-=20px", height: "-=20px"});
});

//kyle's stuff
