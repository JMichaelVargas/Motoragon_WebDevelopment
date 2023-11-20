document.addEventListener("DOMContentLoaded", function () {
    var slideImg = document.getElementById("slideImg");
    var images = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg"]; // Add more image URLs as needed
    var currentImageIndex = 0;

    function changeBackground() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        slideImg.src = images[currentImageIndex];
    }

    setInterval(changeBackground, 5000); // Change the background every 5 seconds (adjust as needed)
});
