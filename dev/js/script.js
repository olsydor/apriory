$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom; 
};
$(window).scroll(function(){ 
  $('.feature').each(function(){
    console.log(this)
     if ($(this).isInViewport()) {
    $(this).addClass('animate');
    } 
  })
})

$("window").load(function() {
  $("body").removeAttr("id");
});
