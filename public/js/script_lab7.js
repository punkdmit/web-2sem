// import Swiper, { Navigation, Pagination, Parallax } from 'swiper/bundle';// // import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/parallax'; //конфигурируем
//  Swiper.use([Navigation, Pagination, Parallax]);

document.addEventListener('DOMContentLoaded', () => {
    const swiperIMG = new Swiper('.slider-img', { //создаем новый слайдер с параметрами
        loop: false,
        speed: 2400,

        //Отключаю функционал если слайдов нехватает
        watchOverflow:true,

        //Кол-во перелистываемых слайдов
        slidesPerGroup: 1,

        //Начальный слайд
        initialSlide: 0,

        // parallax: true,
        mousewheel: {
            invert: false,
        },
        effect: 'flip', //эффект переворот
        flipEffect: {
            slideShadows: true, //тень

            limitRotation: true //показ только активного слайда
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: false
        }
    })
})

