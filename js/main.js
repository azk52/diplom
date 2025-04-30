document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const name = button.getAttribute('data-name');
            const description = button.getAttribute('data-desc');
            const image = button.getAttribute('data-image');

            const modalTitle = modal.querySelector('.modal-title');
            const modalImage = modal.querySelector('#modalImage');
            const modalDescription = modal.querySelector('#modalDescription');

            modalTitle.textContent = name;
            modalImage.src = image;
            modalDescription.textContent = description;
        });
    }
});
