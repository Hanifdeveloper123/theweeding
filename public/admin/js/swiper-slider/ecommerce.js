var swiper = new Swiper(".product-slides", {
    slidesPerView: 3,
    spaceBetween: 20,
    freeMode: true,
    loop: true,
    infinite: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 15,
        },
        451: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1499: {
            slidesPerView: 3,
            spaceBetween: 27,
        },
    },
});
