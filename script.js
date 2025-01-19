 const loginForm = document.getElementById('login-form');
const loginContainer = document.querySelector('.login-container');
const dashboard = document.querySelector('.dashboard');
const logoutButton = document.querySelector('.logout');

 loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    toggleDisplay(loginContainer, dashboard);  
});

 logoutButton.addEventListener('click', () => {
    toggleDisplay(dashboard, loginContainer); });

 function toggleDisplay(elementToHide, elementToShow) {
    elementToHide.style.display = 'none';  
    elementToShow.style.display = 'flex';  
}
