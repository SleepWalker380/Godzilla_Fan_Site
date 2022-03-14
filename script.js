$(document).ready(function(){
	$("p").fadeTo(5000, 0.4);
	$("p").fadeTo(5000, 1.0);
	$("img").click(function(){
		alert("Why would you do that?");
	});
	$("li").click(function(){
		$("li").animate({fontSize: "1em"});
	});
	$("li").dblclick(function(){
		$("li").animate({fontSize: "2em"});
	});
});