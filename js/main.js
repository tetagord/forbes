$('.carousel').slick({
    centerMode: true,
    slidesToShow: 4,
    centerPadding: '0px',
    prevArrow: '<i class="fas fa-chevron-left slick-custom-arrow prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right slick-custom-arrow next"></i>',
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                arrows: false,
                centerMode: false
            }
        }
    ]
});

var $grid = $('.grid').packery({
    itemSelector: '.grid-item',
    stagger: 30,
});

$grid.on('click', '.grid-item.scale', function(event) {
    // change size of item by toggling large class 
    $(this).toggleClass('grid-item--large');
    $(this).siblings('.grid-item').removeClass('grid-item--large');
    // trigger layout after item size changes
    $grid.packery('layout');
});


$('.header').css('height', $(window).height() + 'px')