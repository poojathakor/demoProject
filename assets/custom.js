// vanilla JS
document.addEventListener('DOMContentLoaded', function() {

    // Product switcher in Collection switcher section
    var carousels = document.querySelectorAll('[data-products-slider]');
    carousels.forEach(function(carousel, index) {
        var flkty = new Flickity(carousel, {
            cellAlign: 'left',
            contain: true,
            groupCells: 1,
            pageDots: false,
            wrapAround: false
        });
    });
    // Collection switcher
    document.addEventListener('click', function(event) {
        if (!event.target.matches('[data-collection-switch]')) return;
        event.preventDefault();
        let collectionLoopId = parseInt((event.target).getAttribute('data-collection-loop-id'));
        let selectedCollections = document.querySelectorAll('[data-collection-switch]');
        selectedCollections.forEach(function(selectedCollection, index) {
            if (index + 1 === collectionLoopId) {
                selectedCollection.classList.add("active");
            } else {
                selectedCollection.classList.remove("active");
            };
        });

        let productSlides = document.querySelectorAll('[data-products-slider]');
        productSlides.forEach(function(productSlide, index) {
            if (index + 1 == collectionLoopId) {
                productSlide.classList.add("active");
            } else {
                productSlide.classList.remove("active");
            }
        });
    }, false);
});