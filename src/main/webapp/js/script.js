(function($){
  $(document).ready(function(){
    /*var notice = ""
	  $("#lift__noticesContainer___notice ul li").each(function(){
	      notice = $(this).text();
			  $("#notificationArea").jGrowl("test", {
		      closer: false,
		      sticky: true, 
		      glue: 'before',
		      speed: 2000,
		      easing: 'easeInOutElastic',
		      animateOpen: { 
			      height: "show",
			      width: "show"
		      },
		      animateClose: { 
			      height: "hide",
			      width: "show"
		      }});
    });*/
    $.jGrowl("test");
  });
})(jQuery);
