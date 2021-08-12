$(function(){

    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');

    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
    });

    
    var config = {
        controls: {
            scope: 'local'
        }
    };


    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);



});