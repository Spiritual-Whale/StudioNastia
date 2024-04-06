
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


// Sélection des éléments DOM
const menuMobileClick = document.getElementById('nav-mobile-menu');
const hiddenMobileBlock = document.getElementById('mobile-scroll-container');

// Fonction pour basculer l'affichage du menu mobile
function toggleMobileMenu() {
    // Obtenir le style d'affichage actuel du menu mobile
    const displayStyle = window.getComputedStyle(hiddenMobileBlock).display;
    // Si le menu est déjà ouvert ou si le défilement vertical dépasse 200 pixels, le fermer
    if (displayStyle === 'flex' || window.scrollY > 200) {
        hideMobileMenu(); // Appeler la fonction pour cacher le menu
    } else {
        showMobileMenu(); // Sinon, appeler la fonction pour afficher le menu
    }
}

// Fonction pour afficher le menu mobile
function showMobileMenu() {
    // Définir les styles pour afficher le menu
    hiddenMobileBlock.style.display = 'flex';
    hiddenMobileBlock.style.transform = 'translateY(-24px)';
    hiddenMobileBlock.offsetHeight; // Forcer un reflow pour activer l'animation
    hiddenMobileBlock.style.transform = 'translateY(0px)';
    hiddenMobileBlock.style.opacity = '1';
}

// Fonction pour cacher le menu mobile
function hideMobileMenu() {
    // Définir les styles pour cacher le menu avec une transition de sortie
    hiddenMobileBlock.style.transform = "translateY(-24px)";
    hiddenMobileBlock.style.opacity = "0";
    // Utiliser setTimeout pour définir un délai avant de masquer définitivement le menu
    setTimeout(() => {
        hiddenMobileBlock.style.display = 'none';
    }, 150);
}

// Écouter les clics sur le bouton du menu mobile et appeler la fonction de basculement du menu
menuMobileClick.addEventListener('click', toggleMobileMenu);

// Écouter les événements de défilement de la fenêtre
window.addEventListener('scroll', function () {
    // Si le menu mobile est ouvert et que le défilement vertical dépasse 600 pixels, le fermer
    if (window.getComputedStyle(hiddenMobileBlock).display === 'flex' && window.scrollY > 600) {
        hideMobileMenu();
    }
});

// Écouter les événements de redimensionnement de la fenêtre
window.addEventListener('resize', function() {
    // Si la largeur de la fenêtre dépasse 480 pixels, cacher le menu mobile
    if (window.innerWidth > 480) {
        hiddenMobileBlock.style.display = "none";
    }
});

// Écouter les clics sur tout le document
document.addEventListener('click', function(event) {
    // Vérifier si le clic n'est pas sur le bouton du menu mobile ou sur le menu lui-même
    if (!menuMobileClick.contains(event.target) && !hiddenMobileBlock.contains(event.target)) {
        // Si le menu mobile est ouvert, le fermer
        if (window.getComputedStyle(hiddenMobileBlock).display === 'flex') {
            hideMobileMenu();
        }
    }
});

window.addEventListener("resize", function() {
    var headerImage = document.getElementById("headerImage");
    if (window.innerWidth > window.innerHeight) {
        headerImage.style.height = "120vh"; // Mode paysage
    } else {
        headerImage.style.height = "70vh"; // Mode portrait
    }
});