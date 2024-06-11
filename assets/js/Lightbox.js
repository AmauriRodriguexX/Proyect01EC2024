document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close');
    const slides = document.querySelectorAll('.mySlides');
    const numberText = document.querySelector('.numbertext');
    let currentIndex = 0;
    let scrollPosition = 0;

    let startX = 0;
    let endX = 0;

    function showSlides(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }

        slides.forEach((slide, i) => {
            slide.style.display = (i === currentIndex) ? 'block' : 'none';
        });

        updateCounter();
    }

    function updateCounter() {
        numberText.textContent = `${currentIndex + 1} / ${slides.length}`;
    }

    window.plusSlides = function (n) {
        showSlides(currentIndex + n);
    };

    window.currentSlide = function (n) {
        showSlides(n - 1);
    };

    window.openModal = function () {
        scrollPosition = window.pageYOffset;
        modal.style.display = 'flex';
        document.body.classList.add('modal-open');
        document.body.style.top = `-${scrollPosition}px`;
        showSlides(currentIndex);
    };

    window.closeModal = function () {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        document.body.style.top = '';
        window.scrollTo(0, scrollPosition);
    };

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    modal.addEventListener('touchstart', function (event) {
        startX = event.touches[0].clientX;
    });

    modal.addEventListener('touchmove', function (event) {
        endX = event.touches[0].clientX;
    });

    modal.addEventListener('touchend', function () {
        if (startX - endX > 50) {
            plusSlides(1); // Swipe left
        } else if (endX - startX > 50) {
            plusSlides(-1); // Swipe right
        }
    });

    modal.style.display = 'none';
});
