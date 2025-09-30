document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('subscribe-form');


    if (form) {

        form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email');
        const msg = document.getElementById('msg');

        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(!pattern.test(email.value)) {
                msg.textContent = "Valid email required";
                email.classList.add('error');
            } else {
                email.classList.remove('error');
                window.location.href = "thank-you.html?email=" + encodeURIComponent(email.value);
            }
        });
    }
    


    // Thank You Page

    const link = document.getElementById('user-email');

    if (link) {
        const param = new URLSearchParams(window.location.search);
        const userEmail = param.get('email');

        if(userEmail) {
            link.textContent = userEmail;
            link.href = "mailto:" + userEmail;
        }
    }
})