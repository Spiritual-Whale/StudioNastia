
// Menu Déroulant Barre de Navigation


const menuHover = document.getElementById('menu-scroll-middle');

const hiddenBlock = document.getElementById('menu-scroll-container');

menuHover.addEventListener('mouseenter', function() {
    hiddenBlock.style.display = "flex";
    hiddenBlock.style.transform = "translateY(0px)";
    hiddenBlock.offsetHeight;
    hiddenBlock.style.transform = "translateY(28px)";
    hiddenBlock.style.opacity = "1";
} ) ;

menuHover.addEventListener('mouseleave', function() {
    hiddenBlock.style.transform = "translateY(0px)";
    hiddenBlock.style.opacity = "0";
    setTimeout(() => {
        hiddenBlock.style.display = "none";
    }, 150);
} )

// Menu Déroulant Version Mobile

const menuMobileClick = document.getElementById('nav-mobile-menu');
const hiddenMobileBlock = document.getElementById('mobile-scroll-container');

menuMobileClick.addEventListener('click', function () {
    
    if (window.getComputedStyle(hiddenMobileBlock).display === 'flex' || window.scrollY > 200) {
        
        hiddenMobileBlock.style.transform = "translateY(0px)";
        hiddenMobileBlock.style.opacity = "0";
        setTimeout(() => {
            
        
        hiddenMobileBlock.style.display = 'none';
    }, 150);
    } else {
        
        hiddenMobileBlock.style.display = 'flex';
        hiddenMobileBlock.style.transform = 'translateY(0px)';
        hiddenMobileBlock.offsetHeight;
        hiddenMobileBlock.style.transform = 'translateY(24px)';
        hiddenMobileBlock.style.opacity = '1';
    }
});

window.addEventListener('scroll', function () {
    
    if (window.getComputedStyle(hiddenMobileBlock).display === 'flex' && window.scrollY > 600) {
        hiddenMobileBlock.style.display = 'none';
    }
});