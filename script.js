let w = window.outerWidth;
let navbar = document.querySelector('#navbar');
let main_doc = document.querySelector('#main-doc');

if (w < 650) {
    let navButton = document.createElement('div');
    let menu = document.createTextNode('Menu');
    navButton.appendChild(menu);
    navButton.classList.add('menuButton');

    document.body.appendChild(navButton);
    navButton.style.cursor = 'pointer';
    
    navbar.addEventListener('click', hideNavigation);
    
    function hideNavigation() {
        navbar.style.display = 'none'; 
        navButton.textContent = 'Menu';
    }
    
    navButton.addEventListener('click', showNavbar);
    
    
    function showNavbar() {
        
        if (navbar.style.display !== 'none') {
            navbar.style.display = 'none';
            navButton.textContent = 'Menu';
            main_doc.style.filter = 'blur(0)';
        } else {
            navbar.style.display = 'flex';
            navbar.style.width = '50vw';
            navbar.style.transition = '3s';
            navButton.textContent = 'Close';
            main_doc.style.filter = 'blur(2px)';
            main_doc.style.zIndex = '-5';
        }  
    }
} 


