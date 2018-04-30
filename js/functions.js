$(document).ready(function() {

    var divider = $('#mission-container').offset().top + 90;
    var contactDivider = $('#contact-container').offset().top;
    
    window.onscroll = function() {
		if (window.pageYOffset > 0) {
			var movement = (window.pageYOffset / divider);
			$('#mission-background-image').css({left: movement * -25});
		}
        if (window.pageYOffset > 0) {
            var opac = (window.pageYOffset / divider);
            $('#mission-statement').css({opacity: 1 - (opac * 1) / 5});
        }
        if (window.pageYOffset > 0) {
            var moveIn = ((window.pageYOffset - contactDivider) / divider);
            $('#contact-info').css({opacity: moveIn * 1});
            $('#contact-info').css({left: moveIn * 25});
            $('#contact-background-image').css({left: moveIn * -15 - 150});
        }
    }

    $('.video').click(function(){this.paused?this.play():this.pause();});

    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top - 39
            }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            };
            });
        }
        }
    });

    // $(window).scroll(function(){
    //     if ($(this).scrollTop() > 100) {
    //         $('#scrollToTop').fadeIn();
    //     } else {
    //         $('#scrollToTop').fadeOut();
    //     }
    // });

    // //Click event to scroll to top
    // $('#scrollToTop').click(function() {
    //     $('html, body').animate({scrollTop : 0}, 1000);
    //     return false;
    // });

    // $('#button-about-me').click(function(e) {
    //     e.preventDefault();
    //     var aid = $(this).attr('href');
    //     $('html,body').animate({scrollTop: $(aid).offset().top}, 1000);
    // });
});


// $(window).on('load', function() {
//     window.dispatchEvent(new Event('resize'));
// });

$(window).on('load resize', function () {
    $('.content .right').width( $(this).width() - 480 );
    $('.content .right').width( $(this).width() + 480 );
});