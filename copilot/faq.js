document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const isActive = body.style.display === 'block';
        document.querySelectorAll('.accordion-body').forEach(b => b.style.display = 'none');
        if (!isActive) {
            body.style.display = 'block';
        }
    });
});
