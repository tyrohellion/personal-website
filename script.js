
document.getElementById('dark-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});


function scrollToElement() {
    var element = document.getElementById('portfolio');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }