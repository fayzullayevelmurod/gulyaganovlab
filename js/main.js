let swiper = new Swiper(".resultSwiper", {
    spaceBetween: 10,
    // centeredSlides: true,

    navigation: {
        nextEl: ".result-button-next",
        prevEl: ".result-button-prev",
    },
    breakpoints: {
        576: {
          slidesPerView: 1.15,
          spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.10,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3.10,
            spaceBetween: 24,
        },
    }
});

let swiper2 = new Swiper(".teacherSwiper", {
    spaceBetween: 15,
    // centeredSlides: true,
    navigation: {
        nextEl: ".teacher-button-next",
        prevEl: ".teacher-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 4,
        },
    }
});