   
   
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
            var toRead = data.query.results.item[i].title;
            myString = myString + data.query.results.item[i].title + ".  " + data.query.results.item[i].description + ".   ";
            //$("#tributes").append("<p>" + data.query.results.item[i].title + "</p>");
            // var toRead = data.query.results.item[i].title;
          // var  myString = new SpeechSynthesisUtterance (myString + data.query.results.item[i].title + ".   ");
          //     window.speechSynthesis.speak(myString);
          
           
         $("#tributes").append("<p>" + data.query.results.item[i].title + "</p>");  


            
          }
      setTimeout(function(){ 
            console.log(myString);
                responsiveVoice.speak(myString,"US English Female", {pitch: 0}, {rate: 0});
              }, 500);
              
          
        });
        
// var msg = new SpeechSynthesisUtterance('fuck this');
//     	window.speechSynthesis.speak(msg);
        
        

 
      });
     


      

//Second RSS feed
// var myStringTwo = "";
    
//       $(function () {
//         var statement = "select * from feed where url='http://www.tributes.com/location/rss/New%20York,%20NY'";
//         $.queryYQL(statement, "json", undefined, function (data) {
//           // do something with "data".
//           console.log(data.query.results.item);
//           // console.log(data)
//           for (var i = 0; i < data.query.results.item.length; i++) {
//             console.log(data.query.results.item[i].title[0]);
//             var toRead = data.query.results.item[i].title;
//             myString = myString + data.query.results.item[i].title + ".  " + data.query.results.item[i].description + ".   ";
//             //$("#tributes").append("<p>" + data.query.results.item[i].title + "</p>");
//             // var toRead = data.query.results.item[i].title;
//           // var  myString = new SpeechSynthesisUtterance (myString + data.query.results.item[i].title + ".   ");
//           //     window.speechSynthesis.speak(myString);
          
           
//         $("#tributes").append("<p>" + data.query.results.item[i].title + "</p>");  


            
//           }
//       setTimeout(function(){ 
//             console.log(myString);
//                 responsiveVoice.speak(myString,"US English Male", {pitch: 0}, {rate: 0});
//               }, 500);
              
          
//         });
        
// // var msg = new SpeechSynthesisUtterance('fuck this');
// //     	window.speechSynthesis.speak(msg);
        
        

 
//       });



