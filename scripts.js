function soon() {
    alert("Coming soon!");
}

document.addEventListener("DOMContentLoaded", function() {
    // Fade in the header with a delay
    var header = document.querySelector('.header');
    var sectionTitle = document.querySelector('.section-title');
    setTimeout(function() {
        header.style.opacity = 1;
        sectionTitle.style.opacity = 1;
    }, 100); 

    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card, index) {
        setTimeout(function() {
            card.style.opacity = 1;
        }, 150 * index);
    });
});