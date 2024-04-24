"use strict"
// modal
const modal = document.querySelector("#modal");
const modalBtn = document.querySelectorAll(".modal-btn-js");
const closeBtn = document.getElementsByClassName("close")[0];
const overlay = document.querySelector(".overlay");

modalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        overlay.classList.add("open");
        modal.classList.add("open");
        modal.classList.add("modal-an");
        document.querySelector('body').style.overflow = 'hidden';
    })
})

closeBtn.onclick = function() {
    overlay.classList.remove("open");
    modal.classList.remove("open");
    document.querySelector('body').removeAttribute('style');
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.classList.remove("open");
        overlay.classList.remove("open");
        document.querySelector('body').removeAttribute('style');

    }
}

//swiper
const swiperProjectMain = new Swiper(".swiper-project-main", {
    lazy: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 60,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        0:{
            slidesPerView: 1,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 60,
        },
        950: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
    },
});
const swiperStoreMain = new Swiper(".swiper--main-store", {
    lazy: true,
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {

        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        520: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        720: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        950: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

//fixed button
const btnFixed = document.querySelector('.wrapper-contact-fixed');
const btnFixedList = document.querySelector('.contact-fixed');

btnFixed.addEventListener('click', () => {
    btnFixedList.classList.toggle('active');
})
btnFixed.addEventListener('click', () => {
    btnFixedList.classList.toggle('pulse');
})
