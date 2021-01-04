$(window).on("load", function() {
    //home section slideshow
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;


    function slideShow() {
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        if (slideIndex == slideLen - 1) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        setTimeout(slideShow, 5000);
    }
    slideShow();
})

$(document).ready(function() {

    // nav toggle
    $(".hamburger-btn").click(function() {
        $(".header .nav").slideToggle();
    })

    $(".header .nav a").click(function() {
        if ($(window).width() < 768) {
            $(".header .nav").slideToggle();
        }
    })

    // Fix header

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".header").addClass("fixed");
        } else {
            $(".header").removeClass("fixed");
        }
    })

    // ScrollIt
    $.scrollIt({
        topOffset: -50
    });
    // people filter
    peopleFilter($(".filter-btn.active").attr("data-target"))
    $(".filter-btn").click(function() {
        if (!$(this).hasClass("active")) {
            peopleFilter($(this).attr("data-target"))
        }
    })

    function peopleFilter(target) {
        $(".filter-btn").removeClass("active");
        $(".filter-btn[data-target='" + target + "']").addClass("active");
        $(".people-item").hide();
        $(".people-item[data-category='" + target + "']").fadeIn();

    }

    // Gallery Slide

    const wHeight = $(window).height();
    $(".gallery-slide .gs-img").css("max-height", wHeight + "px");

    let itemIndex = 0;
    const totalGalleryItems = $(".gallery-item").length;
    console.log(totalGalleryItems);

    $(".gallery-item").click(function() {
        itemIndex = $(this).index();
        $(".gallery-slide").addClass("open");
        $(".gallery-slide .gp-img").hide();
        gsSlideShow();
    })

    $(".gs-controls .next").click(function() {
        if (itemIndex == totalGalleryItems - 1) {
            itemIndex = 0;
        } else {
            itemIndex++;
        }

        $(".gallery-slide .gs-img").fadeOut(function() {
            gsSlideShow();
        })
    })
    $(".gs-controls .prev").click(function() {
        if (itemIndex === 0) {
            itemIndex = totalGalleryItems - 1;
        } else {
            itemIndex--;
        }

        $(".gallery-slide .gs-img").fadeOut(function() {
            gsSlideShow();
        })
    })

    function gsSlideShow() {
        const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
        // console.log(imgSrc);
        $(".gallery-slide .gs-img").fadeIn().attr("src", imgSrc);
        $(".gs-counter").text((itemIndex + 1) + "/" + totalGalleryItems);
    }

    // close gallery slide

    $(".gs-close").click(function() {
        $(".gallery-slide").removeClass("open");
    })

    // hide gallery slide when click out side

    $(".gallery-slide").click(function(event) {
        if ($(event.target).hasClass("open")) {
            $(".gallery-slide").removeClass("open");
        }
    })

})