document.addEventListener('DOMContentLoaded', () => {
    const draggableElements = document.querySelectorAll('.small-image1, .small-image2, .small-image3, .small-image4');
    
    draggableElements.forEach(element => {
        let isDragging = false;
        let startX, startLeft;

        element.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startLeft = parseInt(window.getComputedStyle(element).left, 10);
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });

        function onMouseMove(e) {
            if (!isDragging) return;
            const dx = e.clientX - startX;
            element.style.left = `${Math.min(Math.max(startLeft + dx, 0), element.parentElement.offsetWidth - element.offsetWidth)}px`;
        }

        function onMouseUp() {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    });
});
