$(document).ready(function() {
    window.onscroll = function() {
        var divider = $('#mission-container').offset().top + 90;
        var contactDivider = $('#contact-container').offset().top;
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
            $('#contact-info').css({left: moveIn * 25 });
            $('#contact-background-image').css({left: moveIn * -15 - 150 });
        }
    }

    // Play/pause video when a video is clicked
    $('.video').click(function(){
        this.paused?this.play():this.pause();
    });

    $('.video').hover(
        function() {
            $(this).next().next().animate({opacity: 1}, 1000);
        }, function() {
            $(this).next().next().animate({opacity: 0}, 1000);
        }
    )

    $('#skill-container-grid .grid-item').eq(0).hover(
        function() {
            $(this).stop().animate({backgroundColor: "red"}, 1000);
            // $('#skill-container-grid .grid-item').eq(1).css("background-color", "#FEE");
            // $('#skill-container-grid .grid-item').eq(2).css("background-color", "#FED");
            // $('#skill-container-grid .grid-item').eq(3).css("background-color", "#FED");
            // $('#skill-container-grid .grid-item').eq(4).css("background-color", "#FFE");
            // $('#skill-container-grid .grid-item').eq(5).css("background-color", "#FFE");
            // $('#skill-container-grid .grid-item').eq(6).css("background-color", "#EFE");
            // $('#skill-container-grid .grid-item').eq(7).css("background-color", "#EFE");
            // $('#skill-container-grid .grid-item').eq(8).css("background-color", "#EFF");
            // $('#skill-container-grid .grid-item').eq(9).css("background-color", "#EFF");
            // $('#skill-container-grid .grid-item').eq(10).css("background-color", "#EEF");
            // $('#skill-container-grid .grid-item').eq(11).css("background-color", "#EEF");
            // $('#skill-container-grid .grid-item').eq(12).css("background-color", "#FEF");
            // $('#skill-container-grid .grid-item').eq(13).css("background-color", "#FEF");       
        }, function() {
        }
    )
 
    $('#show-more').click(function() {
        $('.grid-hidden-group').removeClass('grid-hidden');
        $.fn.myfunction();
    })

    $('#show-less').click(function() {
        $('.grid-hidden-group').addClass('grid-hidden');
        $.fn.myfunction();
    })

    $.fn.myfunction = function() {
        var $grid = $('.grid').masonry({
            itemSelector: '.grid-item',
            percentPosition: true,
            columnWidth: '.grid-sizer'
        });
        $grid.masonry();
    }; 

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
});