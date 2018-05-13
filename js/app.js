$(document).ready(function(){

	$('.share .text').click(function(event) {
		event.preventDefault();
		$(this).next('.hover').css('display', 'block');
	});

	$('.close').click(function(event) {
		event.preventDefault();
		$(this).parent('.hover').css('display', 'none');
	});

	$('.stars li').on('mouseover', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
    
    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function(e){
    	if (e < onStar) {
    		$(this).addClass('hover');
    	}
    	else {
    		$(this).removeClass('hover');
    	}
    });
    
	 }).on('mouseout', function(){
	 	$(this).parent().children('li.star').each(function(e){
	 		$(this).removeClass('hover');
	 	});
	 });
	 
	 
	 /* 2. Action to perform on click */
	 $('.stars li').on('click', function(){
	    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
	    var stars = $(this).parent().children('li.star');
	    
	    for (i = 0; i < stars.length; i++) {
	    	$(stars[i]).removeClass('selected');
	    }
	    
	    for (i = 0; i < onStar; i++) {
	    	$(stars[i]).addClass('selected');
	    }

	 });

	$('#also ul li').each(function(event) {
		var new_p = $(this).find('.new').text();
		var curent = $(this).find('.curent').text();
		if ( curent == 0, new_p > 0){
			$(this).find('.curent').css('display', 'none');
			$(this).find('.new').css('display', 'inline');
			$(this).find('.old').css('display', 'inline');
		}
		else{
			$(this).find('.curent').css('display', 'inline');
			$(this).find('.new').css('display', 'none');
			$(this).find('.old').css('display', 'none');
		}
	});

	var slideNow = 1;
	var slideCount = $('#also .center ul').children().length;
	var navBtnId = 0;
	var translateWidth = 0;

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#also .center').width() * (navBtnId);
            $('#also .center ul').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
    
    function nextSlide() {
    	if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
    		$('#also .center ul').css('transform', 'translate(0, 0)');
    		slideNow = 1;
    	} else {
    		translateWidth = -$('#also .center').width() * (slideNow);
    		$('#also .center ul').css({
    			'transform': 'translate(' + translateWidth + 'px, 0)',
    			'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
    			'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    		});
    		slideNow++;
    	}
    }

    function prevSlide() {
    	if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
    		translateWidth = -$('#also .center').width() * (slideCount - 1);
    		$('#also .center ul').css({
    			'transform': 'translate(' + translateWidth + 'px, 0)',
    			'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
    			'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    		});
    		slideNow = slideCount;
    	} else {
    		translateWidth = -$('#also .center').width() * (slideNow - 2);
    		$('#also .center ul').css({
    			'transform': 'translate(' + translateWidth + 'px, 0)',
    			'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
    			'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    		});
    		slideNow--;
    	}
    }

});


$(document).ready(function(){
  
  /* 1. Visualizing things on Hover - See next part for action on click */
  
});