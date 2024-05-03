let swiper = new Swiper(".resultSwiper", {
    slidesPerView: 3.10,
    // centeredSlides: true,
    spaceBetween: 24,

    navigation: {
        nextEl: ".result-button-next",
        prevEl: ".result-button-prev",
    },
    // breakpoints: {
    //     320: {
    //       slidesPerView: 1,
    //       spaceBetween: 20,
    //     },
    // }
});

let swiper2 = new Swiper(".teacherSwiper", {
    slidesPerView: 4,
    // centeredSlides: true,
    spaceBetween: 15,

    navigation: {
        nextEl: ".teacher-button-next",
        prevEl: ".teacher-button-prev",
    },
    // breakpoints: {
    //     320: {
    //       slidesPerView: 1,
    //       spaceBetween: 20,
    //     },
    // }
});