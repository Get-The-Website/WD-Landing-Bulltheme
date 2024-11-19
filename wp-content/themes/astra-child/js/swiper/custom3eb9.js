var textSwiper = new Swiper('.featured-project', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
});
var textSwiper = new Swiper('.related-product-slider', {
    slidesPerView: 3,
    spaceBetween: 40,
    centeredSlides: true,
    loop: true,
    breakpoints: {
        767: {
            slidesPerView: 'auto',
            spaceBetween: 10,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: true,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
            centeredSlides: true,
        },
    }
});
var probtn = new Swiper('.pro-btn', {
    spaceBetween: 0,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var swiperH = new Swiper('.process-slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    autoHeight: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-nx',
        prevEl: '.swiper-pr',
    },
    thumbs: {
        swiper: probtn
    }
});
var swiperV = new Swiper('.process-img', {
    loop: true,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button2',
        prevEl: '.swiper-button1',
    },
});
jQuery(document).ready(function() {
    jQuery(window).scroll(function() {
        if (jQuery(document).scrollTop() > 100) {
            jQuery("header").addClass("scrolled");
        } else {
            jQuery("header").removeClass("scrolled");
        }
    });	
    var e = jQuery("[data-isotope]");
    jQuery("[data-filter]").on("click", function() {
        var e = jQuery(this),
            t = e.data("filter"),
            o = e.data("target");
        jQuery(o).isotope({
            filter: t
        })
    }), e.imagesLoaded().progress(function() {
        e.isotope("layout")
    })
    wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        callback: function(box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    });
    wow.init();
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
jQuery('section img, .work-list, h1, h2, h3, h4, h5, h6, p, .tect-icon').addClass('wow fadeInUp');
jQuery(document).ready(function() {
    let SwiperTop = new Swiper('.marquee-wrapper', {
        spaceBetween: 30,
        centeredSlides: true,
        speed: 15000,
        autoplay: {
            delay: 1,
        },
        loop: true,
        slidesPerView: 'auto',
        allowTouchMove: false,
        disableOnInteraction: true
    });
});