document.addEventListener('DOMContentLoaded', () => {
    const popupBottom = document.getElementById('popupBottom');
    const overlay = document.getElementById('overlay');
    const shareBtn = document.getElementById('shareButton');
    const closeBtn = document.querySelector('.close-btn');
    let startY;

    shareBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default action
        popupBottom.classList.add('show');
        popupBottom.style.display = 'block'; // Ensure the modal is displayed
        overlay.classList.add('show-overlay');
        overlay.style.display = 'block'; // Ensure the overlay is displayed
    });

    closeBtn.addEventListener('click', () => {
        closeModal();
    });

    overlay.addEventListener('click', () => {
        closeModal();
    });

    overlay.addEventListener('touchstart', (event) => {
        startY = event.touches[0].clientY;
    });

    overlay.addEventListener('touchmove', (event) => {
        const moveY = event.touches[0].clientY;
        const diffY = moveY - startY;
        
        if (diffY > 50) { // Adjust the threshold as needed
            closeModal();
        }
    });

    popupBottom.addEventListener('touchstart', (event) => {
        startY = event.touches[0].clientY;
    });

    popupBottom.addEventListener('touchmove', (event) => {
        const moveY = event.touches[0].clientY;
        const diffY = moveY - startY;
        
        if (diffY > 50) { // Adjust the threshold as needed
            closeModal();
        }
    });

    function closeModal() {
        popupBottom.classList.remove('show');
        overlay.classList.remove('show-overlay');
        setTimeout(() => {
            popupBottom.style.display = 'none'; // Hide the modal after animation
            overlay.style.display = 'none'; // Hide the overlay after animation
        }, 300);
    }
});
