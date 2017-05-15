

    // var imgcounter = 0;

    // var myString = "";
    
    //   $(function () {
    //     //This overwrites whatever is in #content, so we should find another container for our second feed..
    //     //going to pull from Craigslist, as an example
    //     var statement = "select * from feed where url='https://www.porndig.com/rss/channel/815/secretary.xml'";
    //     $.queryYQL(statement, "json", undefined, function (data) {
    //       // do something with "data".
    //       //console.log(data);
    //       for (var i = 0; i < data.query.results.item.length; i++) {
    //         console.log("hello");
    //         console.log(data.query.results.item[i].title[0]);
            
    //         $("#porn-titles").append("<p>" + data.query.results.item[i].title[0] + "</p>");
            
            
            

    //         var img;
    //         if (data.query.results.item[i].enclosure) {
    //           console.log(img);
    //           img = data.query.results.item[i].enclosure.resource;
    //         }

    //         console.log (img);
    //         $("#porn-images").append("<img src='" + img + "' id='img-" + imgcounter + "'>");
    //         imgcounter++;
            
    //       }
    
    //     });

    //     });

//https://www.porndig.com/rss/channel/84/uniforms.xml
//https://www.porndig.com/rss/channel/815/secretary.xml
var myString = "";
$(function () {
    var t = $('#content').empty();
    var statement = "select * from feed where url='https://www.porndig.com/rss/channel/815/secretary.xml'";
    $.queryYQL(statement, "json", undefined, function (data) {
      // do something with "data".
      console.log(data);
      console.log(data.query.results.item);

      
      for (var i = 0; i < data.query.results.item.length; i++) {

        var html = data.query.results.item[i].title.link(data.query.results.item[i].link);

         $("#porn-titles").append("<p>" + html + "</p>");

        
      }
      
    });
});

var myStringTwo = "";
$(function () {
    var t = $('#content').empty();
    var statement = "select * from feed where url='https://www.porndig.com/rss/channel/79/student.xml'";
    $.queryYQL(statement, "json", undefined, function (data) {
      // do something with "data".
      console.log(data);
      console.log(data.query.results.item);

      
      for (var i = 0; i < data.query.results.item.length; i++) {

        var html = data.query.results.item[i].title.link(data.query.results.item[i].link);

         $("#student-titles").append("<p>" + html + "</p>");

        
      }
      
    });
});

$(document).ready(function() {
    $("#porn-titles").draggable().resizable();
    $( "#student-titles" ).draggable().resizable();
    $( ".girlthree" ).draggable().resizable();
    $( ".girlfour" ).draggable().resizable();
    $( ".girlfive" ).draggable().resizable();
    $( ".girlsix" ).draggable().resizable();
    $( ".girlseven" ).draggable().resizable();
    $( ".girleight" ).draggable().resizable();
    $( ".girlnine" ).draggable().resizable();
    $( ".girlten" ).draggable().resizable();
    $( ".girleleven" ).draggable().resizable();
  });