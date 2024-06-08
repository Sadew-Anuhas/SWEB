let endDate = new Date("06/30/2024 00:00:00").getTime();
let check = setInterval(function(){
    let now = new Date().getTime();
    let distance = endDate - now;
    let day = Math.floor(distance / (24*60*60*1000));
    let hour = Math.floor((distance % (24*60*60*1000)) / (60* 60*1000));
    let minute = Math.floor((distance % (60* 60*1000)) / (60*1000));
    let seconds = Math.floor((distance % (60*1000)) / 1000);
    document.getElementById('day').innerText = day;
    document.getElementById('hour').innerText = hour;
    document.getElementById('minute').innerText = minute;
    document.getElementById('seconds').innerText = seconds;
    if(distance <= 0){
        clearInterval(check);
    }
}, 1000);


// Disable right-click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert("ආයුබෝවන් මල්ලි ! මොකෝ සීන් එක| ඉවසන් ඉමු නේද, වැඩේ ආරම්භ කරනකන්වත්.. Sadew Dev </>");
}, false);

// Disable Ctrl+U
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        alert("වැඩි වැඩ හොඳ නෑ නේද,");
    }
}, false);

// Disable Ctrl+Shift+I (Inspect Element)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        alert("හි හී.. වැඩි වැඩ ආයෙත් ඕනිනම් ආයෙ try කරන්න බලන්න,,,");
    }
}, false);

// Disable F12 (Dev Tools)
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12') {
        e.preventDefault();
        alert("හ්ම්ම්.. 404 not found ඕනී..?");
    }
}, false);


document.getElementById('previewButton').addEventListener('click', function() {
    const userConfirmed = confirm("ආයුබෝවන්! 'මොහොතක් ගානේ සුභ කරගන්න, නමුත් ඒ ඔයා විසින්ම...' Sa Dev </>");
    if (userConfirmed) {
        window.location.href = "https://sadew.link";
    }
});



document.addEventListener('DOMContentLoaded', (event) => {
    const body = document.body;
    const toggleButton = document.getElementById('mode-toggle');

    // Check for saved user preference, if any, on load of the website
    if (localStorage.getItem('theme') === 'dark-mode') {
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
    }

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
});
