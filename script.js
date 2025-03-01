var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1, // Ensures only one image is visible at a time
    spaceBetween: 30, // Adds spacing between slides
    centeredSlides: true, // Centers the active slide
    loop: false, // Prevents infinite scrolling
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 1, // Keeps single image for tablets
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 1, // Ensures single image for larger screens
            spaceBetween: 30,
        }
    }
});

