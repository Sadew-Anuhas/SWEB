let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // EmailJS parameters
    const params = {
        full_name: fullName,
        user_email: email,
        phone_number: phone,
        subject: subject,
        message: message
    };

    // Send the email using EmailJS
    emailjs.send('service_s01m4lw', 'template_geakscu', params)
    .then(function(response) {
        showPopup('Message sent successfully!'); // Show success popup
        document.getElementById('contact-form').reset(); // Clear form inputs
    }, function(error) {
        showPopup('Failed to send message. Please try again later.'); // Show error popup
    });
});

// Function to show the popup message
function showPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = message;
    popup.classList.add('show'); // Show popup

    // Hide the popup after 3 seconds
    setTimeout(function() {
        popup.classList.remove('show');
    }, 3000);
}


// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Disable Ctrl+U
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        showPopup();
    }
    // Show popup on F12 key press
    if (e.key === 'F12') {
        e.preventDefault();
        showPopup();
    }
});




document.addEventListener('keydown', function(event) {
    // Check if Ctrl + Shift + I is pressed
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault(); // Disable the default action
        console.log('Ctrl+Shift+I is disabled.');
    }
});
