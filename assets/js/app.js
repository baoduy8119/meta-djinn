$(document).ready(function () {
    $(".toggle-menu").on("click", function (e) {
        e.preventDefault()
        $(".nav-bar").toggleClass("show")
    })
    $(document).on('click', function closeMenu(e) {
        e.preventDefault();
        if ($('header').has(e.target).length === 0 || $('.btn-close').has(e.target).length === 1) {
            $('.nav-bar').removeClass('show');
        }
    })
    $(".team-list").slick({
        lazyLoad: 'ondemand',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<a class="slide-arrow prev-arrow"><i class="fas fa-chevron-circle-left"></i></a>',
        nextArrow: '<a class="slide-arrow next-arrow"><i class="fas fa-chevron-circle-right"></i></a>',
        responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })
    AOS.init({
        duration: 1000,
    });
    $("header a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
})