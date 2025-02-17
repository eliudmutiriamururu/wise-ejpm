// Password visibility toggle
const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.addEventListener('click', function() {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    
    // Toggle eye icon
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
});

// Form submission handler
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Here you would typically handle the login logic
    console.log('Login attempt:', { email, password });
});

// Close button handler
const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', function() {
    // Here you would typically close the modal or redirect
    console.log('Close button clicked');
});

// Social login handlers
document.querySelector('.google-btn').addEventListener('click', function() {
    console.log('Google login clicked');
});

document.querySelector('.facebook-btn').addEventListener('click', function() {
    console.log('Facebook login clicked');
});