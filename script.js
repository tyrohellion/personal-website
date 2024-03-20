
document.body.classList.toggle('dark-theme');

document.getElementById('dark-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

function scrollToPortfolio() {
    var element = document.getElementById('portfolio');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToArt() {
    var element = document.getElementById('art');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToHobbies() {
    var element = document.getElementById('hobbies');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}