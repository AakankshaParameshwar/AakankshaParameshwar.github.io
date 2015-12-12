(function($) {
$('.artwork-desc').hide("fast");
$('#project-grid').masonry({
  // options
  itemSelector: '.project',
  columnWidth: 50,
  isFitWidth: true,
  gutter:15
});

$('#artwork-grid').masonry({
  // options
  itemSelector: '.artwork',
  columnWidth: 70,
  isFitWidth: true,
  gutter: 5
});

$(".grid-item").hover(function() {
            $(this).find('.artwork-desc').fadeToggle("fast");
        });
		
$(".project").hover(function() {
            $(this).find('.artwork-desc').fadeToggle("fast");
        });
})(jQuery);