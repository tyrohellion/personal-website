
document.addEventListener('DOMContentLoaded', function() {
    // This code will execute once the DOM content is fully loaded
    document.body.classList.toggle('dark-theme');
});

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to toggle dark theme on button click
    document.getElementById('dark-theme').addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Function to scroll to portfolio section
    function scrollToPortfolio() {
        var element = document.getElementById('portfolio');
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Function to scroll to art section
    function scrollToArt() {
        var element = document.getElementById('About');
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Function to scroll to hobbies section
    function scrollToHobbies() {
        var element = document.getElementById('footer');
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to toggle dark theme on hamburger click
    document.getElementById('hamburger').addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });
});