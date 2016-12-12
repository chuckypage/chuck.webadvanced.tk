$(function () {
    var urls = ['https://newyork.craigslist.org/search/mis?format=rss', 'http://www.tributes.com/location/rss/Brooklyn,%20NY'];
    for (var i = 0; i < urls.length; i++) {
        $.ajax({
            type: "GET",
            url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(urls[i]),
            dataType: 'json',
            error: function () {
                alert('Unable to load feed, Incorrect path or invalid feed');
            },
            success: function (xml) {
                values = xml.responseData.feed.entries;
                console.log(values);
                
                
            }
            
            
        });
    }
});