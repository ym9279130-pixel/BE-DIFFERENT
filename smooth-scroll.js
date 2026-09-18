/* =====================================================
   BE DIFFERENT — SCROLL REVEAL SYSTEM
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const revealElements = document.querySelectorAll(`
        .shop-product,
        .about-section,
        .about-title,
        .about-text,
        .hero-button,
        .category-button,
        .new-arrival,
        .scroll-icon
    `);

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }

    );


    revealElements.forEach(function (element) {

        element.classList.add("scroll-reveal");

        observer.observe(element);

    });

});