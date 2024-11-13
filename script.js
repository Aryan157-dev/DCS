// Basic script for now, can be expanded later
console.log("Medical equipment page loaded");

document.querySelector('.explore-more-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#products').scrollIntoView({
        behavior: 'smooth'
    });
});
