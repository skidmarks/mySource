var swipers = [];

// .swiper-container Element가 여러 개 존재
var containers = document.querySelectorAll('.swiper-container');

containers.forEach(function(container, index) {
    var swiperOpation = {
        // 모든 Swiper에 적용될 옵션
        // ...
    };

    if (index === 0) {
        swiperOpation = {
            // 첫 번째 Swiper에만 적용될 옵션
            // ...
        };
    }

    var swiper = new Swiper(container, swiperOpation);
    swipers.push(swiper);
    
});
