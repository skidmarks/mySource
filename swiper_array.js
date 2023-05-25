var swipers = [];

// .swiper-container Element가 여러 개 존재
var containers = document.querySelectorAll('.swiper-container');

for (var i = 0; i < containers.length; i++) {
    var swiperOpation = {
        // 모든 Swiper에 적용될 옵션
        // ...
    };

    if (i === 0) {
        swiperOpation = {
            // 첫 번째 Swiper에만 적용될 옵션
            // ...
        };
    }

    var swiper = new Swiper(container, swiperOpation);
    swipers.push(swiper);
    
};
