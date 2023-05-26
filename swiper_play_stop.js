// 멤버쉽 스와이프
$(() => {
    const mshipSwiper = new Swiper('.mship_swiper', {
        // Optional parameters
        autoplay: {
            delay:4000,
        },

        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.btn_next_slide',
            prevEl: '.btn_prev_slide',
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type:"progressbar",
        },


        breakpoints: {
            769: {
                slidesPerView: 3,
                spaceBetween: 20,  
            }
        }                               
    });             
    
    // swiper-button for puase or play
    function btnSwiperPlayPause(ctx, targetSwiper) {
        
        if(!document.querySelector) return false;
        if(!document.querySelector(ctx +' .swiper-button-pause')) return false;
        if(!document.querySelector(ctx +' .swiper-button-play')) return false;

        var btnSwiperPause = document.querySelector(ctx +' .swiper-button-pause');
        var btnSwiperPlay = document.querySelector(ctx + ' .swiper-button-play');

        btnSwiperPause.addEventListener('click', function(e) {
            e.preventDefault();
            targetSwiper.autoplay.stop();
            this.style.display = "none";
            btnSwiperPlay.style.display = "inline-block";
        });
        btnSwiperPlay.addEventListener('click', function(e) {
            e.preventDefault();
            targetSwiper.autoplay.start();
            this.style.display = "none";
            btnSwiperPause.style.display = "inline-block";
        });
    }

    btnSwiperPlayPause(".mship_swiper", mshipSwiper);                            
});