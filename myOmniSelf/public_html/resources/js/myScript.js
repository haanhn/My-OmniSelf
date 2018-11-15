//$(document).ready(function() {
//    
//    /* For the sticky navigation */
//    $('.js--section-features').waypoint(function(direction) {
//        if (direction == "down") {
//            $('nav').addClass('my-header-menu-sticky ');
//        } else {
//            $('nav').removeClass('my-header-menu-sticky ');
//        }
//    }, {
//      offset: '60px;'
//    });
//});

$(document).ready(function () {
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('my-header-menu-sticky');
        } else {
            $('nav').removeClass('my-header-menu-sticky');
        }
    }, {
        offset: '70px;'
    }    
    );
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-features').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    $('.js--scroll-to-offers').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-offers').offset().top}, 1000); 
    });
});

