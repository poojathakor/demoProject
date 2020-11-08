document.addEventListener('DOMContentLoaded', function() {
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
    document.addEventListener('click', function(event) {
        if (!event.target.matches('[data-collection-switch]')) return;
        event.preventDefault();
        let collectionLoopId = (event.target).getAttribute('data-collection-loop-id');
        var productSlides = document.querySelectorAll('[data-products-slider]');
        productSlides.forEach(function(productSlide, index) {
            console.log(productSlides);
        });
    }, false);
});