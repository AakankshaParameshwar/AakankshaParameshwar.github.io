(function($) {
$('.artwork-desc').hide("fast");
$('.project-desc').hide("fast");
$('#project-grid').masonry({
  // options
  itemSelector: '.project',
  columnWidth: 60,
  isFitWidth: true,
  gutter:15
});

$('#artwork-grid').masonry({
  // options
  itemSelector: '.artwork',
  columnWidth: 50,
  isFitWidth: true,
  gutter: 5
});

$(".grid-item").hover(function() {
            $(this).find('.artwork-desc').fadeToggle("fast");
        });
		
$(".project").hover(function() {
            $(this).find('.project-desc').fadeToggle("fast");
        });
	
$(".icon a").hover(function() {
            $(this).css('opacity',1);
        });
		
})(jQuery);