$(document).ready(function() {

	$(document).on('mousemove', function(e){
	$('.cursor').css({
		left:  e.pageX,
		top:   e.pageY,
        pointerEvents: 'none'
		});
	function popup(mylink, windowname, windowTop, windowLeft)
{
if (! window.focus)return true;
var href;
if (typeof(mylink) == 'string')
   href=mylink;
else
   href=mylink.href;
window.open(href, windowname, 'width=400,height=400,top=' + windowTop + ',left=' + windowLeft + ',scrollbars=yes');
return false;
}

	$('.statementtwo').click(function(e) {
		var x = e.pageX + 'px';
		var y = e.pageY + 'px';

		popup('index-popone.html', 'ad', 100, 100);
		popup('index-poptwo.html', 'ad2', 500, 500);
		popup('index-popthree.html', 'ad3', 50, 200);
		popup('index-popfour.html', 'ad4', 400, 400);
		popup('index-popfive.html', 'ad5', 600, 600);
		popup('index-popsix.html', 'ad6', 800, 800);
		popup('index-popseven.html', 'ad7', 30, 300);
		popup('index-popeight.html', 'ad8', 10, 300);
		popup('index-popnine.html', 'ad9', 200, 80);
		popup('index-popten.html', 'ad10', 30, 300);
		
	
	});
			
});	
});