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
    navButton.addEventListener('click', showNavbar);
    
    function hideNavigation() {
        navbar.style.display = 'none'; 
        navButton.textContent = 'Menu';
        main_doc.style.filter = 'blur(0)';
    }
    
    function showNavbar() {
        if (navbar.style.display !== 'none') {
            navbar.style.display = 'none';
            navButton.textContent = 'Menu';
            main_doc.style.filter = 'blur(0)';
        } else {
            navbar.style.display = 'flex';
            navbar.style.width = '50vw';
            navbar.style.transition = 'all 3s';
            navbar.style.zIndex = '1';
            navButton.textContent = 'Close';
            navButton.style.zIndex = '2';
            main_doc.style.filter = 'blur(2px)';
            
            main_doc.addEventListener('click', hideNavigation);
        }  
    }
} 


