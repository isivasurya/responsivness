$(document).ready(function() {
    var currentImage = 1;
    var totalImages = 6; // Replace with the actual number of images

    function changeImage(direction) {
        currentImage = (currentImage + direction - 1 + totalImages) % totalImages + 1;
        $("#ad img").attr("src", "./adrotator/" + currentImage + ".jpg");
    }

    $(".btn1").on("click", function() {
        changeImage(-1); // Move to the previous image
    });

    $(".btn2").on("click", function() {
        changeImage(1); // Move to the next image
    });
});