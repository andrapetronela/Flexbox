function toggleNav() {
    
let w = window.innerWidth;

let navbar = document.querySelector('#navbar');
let main_doc = document.querySelector('#main-doc');
navbar.style.display = 'none';    
    
if (w < 650) {
    // create page title for mobile
    let title = document.createElement('h1');
    let text = document.createTextNode('CSS Flexbox');
    title.appendChild(text);
    document.body.appendChild(title);
    title.style.position = 'absolute';
    title.style.position = 'fixed';
    title.style.left = '1rem';
    title.style.top = '5rem';
    title.style.color = 'var(--pink)';
    title.style.fontWeight = '400';
    title.style.fontSize = '2rem';
    title.style.writingMode = 'vertical-lr';
    title.style.textOrientation = 'upright';
    title.style.letterSpacing = '-5px';
    
    
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
            navbar.style.width = '70vw';
            navbar.style.transition = 'all 3s';
            navbar.style.zIndex = '1';
            navButton.textContent = 'Close';
            navButton.style.zIndex = '2';
            main_doc.style.filter = 'blur(2px)';
            
            main_doc.addEventListener('click', hideNavigation);
        }  
    }
} 
    else {
        navbar.style.display = 'flex';
        
    }
}
toggleNav();
window.addEventListener('resize', toggleNav);
