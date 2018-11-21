let w = window.innerWidth;

if (w < 650) {
    let navButton = document.createElement('div');
    let menu = document.createTextNode('Menu');
    navButton.appendChild(menu);
    navButton.classList.add('menuButton');
    document.body.appendChild(navButton);
    navButton.style.cursor = 'pointer';
    
    let navbar = document.querySelector('#navbar');

    navButton.addEventListener('click', showNavbar);

    function showNavbar() {
        if (navbar.style.display !== 'none') {
            navbar.style.display = 'none';
            navButton.textContent = 'Menu';
        } else {
            navbar.style.display = 'flex';
            navbar.style.width = '50vw';
            navbar.style.alignItems = 'center';
            navbar.style.transition = '3s';
            navButton.textContent = 'Close';
            
        }     
    }
} 


