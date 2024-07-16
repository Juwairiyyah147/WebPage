document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const feedback = document.getElementById('formFeedback');
    
    if (name && email && message) {
        feedback.textContent = 'Form submitted';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Error: All fields are required';
        feedback.style.color = 'red';
    }
});