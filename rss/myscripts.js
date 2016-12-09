   
   
   
    var myString = "";
    
      $(function () {
        var t = $('#content').empty();
        var statement = "select * from feed where url='http://www.tributes.com/location/rss/Brooklyn,%20NY'";
        $.queryYQL(statement, "json", undefined, function (data) {
          // do something with "data".
          console.log(data.query.results.item);
          // console.log(data)
          for (var i = 0; i < data.query.results.item.length; i++) {
            console.log(data.query.results.item[i].title[0]);
            $("body").append("<p>" + data.query.results.item[i].title + "</p>");
            var toRead = data.query.results.item[i].title;
            myString = myString + data.query.results.item[i].title + ".   ";
              

            
          }
          
          setTimeout(function(){ 
            console.log(myString);
                responsiveVoice.speak(myString,"US English Male", {pitch: 0}, {rate: 0});
              }, 500);
              
              
          
        });

 
      });
       console.log("clicked");

      
console.log(myString);

