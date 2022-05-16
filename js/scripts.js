datePick.min = new Date().toISOString().split("T")[0];

$(function () {
    $('[data-toggle="tooltip"]').tooltip()

// Carousel control
	$(".carousel").carousel( { interval: 4000 } );
	$("#carouselButton").click(function(){
	   	if ($("#carouselButton").children("span").hasClass("fa-pause"))
	   	{
	   		$(".carousel").carousel("pause");
	   		$("#carouselButton").children("span").removeClass("fa-pause");
	   		$("#carouselButton").removeClass("btn-secondary");
	   		$("#carouselButton").children("span").addClass("fa-play");
	   		$("#carouselButton").addClass("btn-info");
	   	} else {
	   		$(".carousel").carousel("cycle");
	   		$("#carouselButton").children("span").removeClass("fa-play");
	   		$("#carouselButton").removeClass("btn-info");
	   		$("#carouselButton").children("span").addClass("fa-pause");
	   		$("#carouselButton").addClass("btn-secondary");
	   	}
	});
});
