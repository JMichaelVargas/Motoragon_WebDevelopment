document.addEventListener("DOMContentLoaded", function () {
    var slideImg = document.getElementById("slideImg");
    var images = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg"]; 
    var currentImageIndex = 0;

    function changeBackground() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        slideImg.src = images[currentImageIndex];
    }

    setInterval(changeBackground, 5000);
});

// This is script file

$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        },
    }
})

