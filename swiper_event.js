$(() => {
    const mainBanner = new Swiper('.main_banner', {
        loop: true,

        autoplay: {
            delay: 4000,
        },

        effect: "fade",
        // effect: "fade",

        // speed: 2000,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        on: {
            init: function() {
                var descFirst = document.querySelector('.base_01'); 
                descFirst.classList.add('animated');
            },
            slideChangeTransitionStart: function() {
                document.querySelectorAll('.ani_base').forEach(function(eachDesc) {
                    eachDesc.classList.remove('animated');
                });
            },
            slideChangeTransitionEnd: function() {
                document.querySelectorAll('.ani_base').forEach(function(eachDesc) {
                    eachDesc.classList.add('animated');
                });
            },
        }
    });                    
});