document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slides");
    let currentSlideIndex = 0;
    
    function showSlide(index)
    {
        slides[currentSlideIndex].style.display = "none"
        currentSlideIndex = (index + slides.length) % slides.length;
        slides[currentSlideIndex].style.display = "block";
    }
    function nextSlide()
    {
        showSlide(currentSlideIndex + 1);
    }
    showSlide(currentSlideIndex);
    setInterval(nextSlide, 2000);
})
