   
   
// First RSS feed

    var myString = "";
    
      $(function () {
        var statement = "select * from feed where url='http://www.tributes.com/location/rss/Brooklyn,%20NY'";
        $.queryYQL(statement, "json", undefined, function (data) {
          // do something with "data".
          console.log(data.query.results.item);
          // console.log(data)
          for (var i = 0; i < data.query.results.item.length; i++) {
            console.log(data.query.results.item[i].title[0]);
            //$("#tributes").append("<p>" + data.query.results.item[i].title + "</p>");
            // var toRead = data.query.results.item[i].title;
          var  myString = new SpeechSynthesisUtterance (data.query.results.item[i].title + ".   ");
              window.speechSynthesis.speak(myString);
           
           

            
          }
      // setTimeout(function(){ 
      //       console.log(myString);
      //           responsiveVoice.speak(myString,"US English Male", {pitch: 0}, {rate: 0});
      //         }, 500);
              
          
        });
        
// var msg = new SpeechSynthesisUtterance('fuck this');
//     	window.speechSynthesis.speak(msg);
        
        

 
      });
     


      

//Second RSS feed

var imgcounter = 0;

    var myStringTwo = "";
    
      $(function () {
        //This overwrites whatever is in #content, so we should find another container for our second feed..
        //going to pull from Craigslist, as an example
        var statement = "select * from feed where url='https://newyork.craigslist.org/search/gra?format=rss'";
        $.queryYQL(statement, "json", undefined, function (data) {
          // do something with "data".
          console.log(data);
          for (var i = 0; i < data.query.results.item.length; i++) {
            console.log(data.query.results.item[i].title[0]);
            
            $("#craigslist-titles").append("<p>" + data.query.results.item[i].title[0] + "</p>");
            
            
            

            var img;
            if (data.query.results.item[i].enclosure) {
              console.log(img);
              img = data.query.results.item[i].enclosure.resource;
            }

            // console.log (img);
            $("#craigslist-images").append("<img src='" + img + "' id='img-" + imgcounter + "'>");
            imgcounter++;
            
          }
    
        });
        
      });

