$("body").css("background-color","blue");


for (var i = 0; i < 1000; i++) {
    $("body").append("<div class = 'box'></div");
}

var rotation = 0;

for (var i = 0; i < 1000; i++) {
    $("body").append("<div class = 'snowflake'></div");
}

$(".snowflake").each(function(){
    var crystalcount = Math.floor(Math.random()*14) + 6;
    for(var c = 0; c < crystalcount; c++) {
        $(this).append("<div class ='crystal'></div>");
    }
    
})

var opacity = 0;

$(".box").each(function(){
    opacity += .001;
    $(this).css("opacity" ,opacity);
    console.log("found a box..."); 
});



$(".snowflake").each(function() {
    var  rotation = 0;
    var crystallength = $(this).find(".crystal").length;
    $(this).find(".crystal").each(function() {
        
  
    var newrotation = "rotate(" + rotation + "deg)";
   $(this).css("transform", newrotation); 
   rotation += 180/$(".crystal").length;
    })
})
