$(document).ready(function() {
    var isMobile = false;
    $.fn.portraitmode = function() {
        $('#a-mission').text('M');
        $('#a-project').text('P');
        $('#a-skill').text('S');
        $('#a-interest').text('I');
        $('#a-contact').text('C');
        $('#project-container .grid-sizer').css("width", "98%");
        $('#project-container .grid-item').css("width", "98%");
        $('.grid-item-text').css("font-size", "3vw");
        $.fn.reorder();
        $.fn.myfunction();
        currentState = 1;
    };
    $.fn.landscapemode = function() {
        $('#a-mission').text('mission');
        $('#a-project').text('project');
        $('#a-skill').text('skill');
        $('#a-interest').text('interest');
        $('#a-contact').text('contact');
        $('#project-container .grid-sizer').css("width", "48.5%");
        $('#project-container .grid-item').css("width", "48.5%");
        $('.grid-item-text').css("font-size", "1.5vw");
        $.fn.restoreOrder();
        $.fn.myfunction();
        currentState = 0;
    };
    $.fn.reorder = function() {
        for (var i = 1; i < $('.grid-description').length; i+=2) {
            $('.grid-description').eq(i).insertAfter($('.grid-video').eq(i - 1));
        }
    };
    $.fn.restoreOrder = function() {
        for (var i = 1; i < $('.grid-description').length; i+=2) {
            $('.grid-description').eq(i).insertAfter($('.grid-video').eq(i));
        }
    }
    $.fn.myfunction = function() {
        if ($('.grid').masonry()) {
            $('.grid').masonry('destroy');
        }
        var $grid = $('.grid').masonry({
            itemSelector: '.grid-item',
            percentPosition: true,
            columnWidth: '.grid-sizer',
            horizontalOrder: true
        });
        $grid.masonry();
    }; 

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        // Take the user to a different screen here.
        $.fn.portraitmode();
        isMobile = true;          
    }
    var currentState;
    if (window.innerWidth < 900) {
        $.fn.portraitmode();
    } else {
        currentState = 0;
    }
    if (!isMobile) {
    $(window).resize(function() {
        if (window.innerWidth < 900 && currentState == 0) {
            $.fn.portraitmode();
        } else if (window.innerWidth >= 900 && currentState == 1) {
            $.fn.landscapemode();
        }
        });        
    }

    var percentHeight;
    $(window).on('load', (function() {
        if (window.innerHeight > $('#contact-background-image').height()) {
            percentHeight = (window.innerHeight - $('#contact-background-image').height()) / window.innerHeight * 100 + 10;            
        } else {
            percentHeight = 10;
        }
        $('#interest-container-grid .grid-item').eq(1).children().eq(0).attr('src','./img/cat-training.gif');
        $('#interest-container-grid .grid-item').eq(3).children().eq(0).attr('src','./img/cat-programming.gif');
        $('#interest-container-grid .grid-item').eq(5).children().eq(0).attr('src','./img/cat-movie.gif');
    }));

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
        // Different handling for when height > width
        if(window.innerHeight > window.innerWidth){
            $('#contact-info').css("top", "" + percentHeight + "%");
            var maxScrollable = $(window).height() - window.innerHeight;
            var divHeight = $('#contact-background-image').height();
            var visibleScrollSpot = maxScrollable - divHeight;
            if ((window.pageYOffset - visibleScrollSpot) / divHeight > 0.8) {
                var fractionalLocation = (window.pageYOffset - divHeight) / visibleScrollSpot;
                var f = (fractionalLocation - 0.8) / 0.2
                $('#contact-info').css({opacity: f});
                $('#contact-info').css({left: f * 25});
                $('#contact-background-image').css({left: f * -150 - 150 });
            } else {
                $('#contact-info').css({opacity: 0});                
                $('#contact-background-image').css({left: -250 });
            }
        }
        else {
            if (window.pageYOffset > 0) {
                var moveIn = ((window.pageYOffset - contactDivider) / divider);
                $('#contact-info').css("top", "10%");
                $('#contact-info').css({opacity: moveIn * 1});
                $('#contact-info').css({left: moveIn * 25 });
                $('#contact-background-image').css({left: moveIn * -15 - 150 });
            }
        }
    };


    if (!isMobile) {
        // Play/pause video when a video is clicked
        $('.video').on('click', function(e){
            e.preventDefault();
            this.paused?this.play():this.pause();
        });
        $('.video').hover(
            function() {
                $(this).next().next().animate({opacity: 1}, 1000);
            }, function() {
                $(this).next().next().animate({opacity: 0}, 1000);
            }
        )        
    } else {
        // Play/pause video when a video is clicked
        $('.video').on('touchstart', function(e){
            e.preventDefault();
            this.paused?this.play():this.pause();
        });
    }
 
    $('#show-more').click(function() {
        $('.grid-hidden-group').removeClass('grid-hidden');
        $.fn.myfunction();
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('#grid-hidden-first').offset().top - 39
        }, 1000, function() {
            var $target = $('#grid-hidden-first');
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            };
        });
    });

    $('#show-less').click(function() {
        $('.grid-hidden-group').addClass('grid-hidden');
        $.fn.myfunction();
        $('html, body').animate({
            scrollTop: $('#grid-visible-last').offset().top - 39
        }, 1000, function() {
            var $target = $('#grid-visible-last');
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            };
        });
    });

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