
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
const menuMobileClick = document.getElementById('nav-mobile-menu'); // Bouton du menu mobile
const hiddenMobileBlock = document.getElementById('mobile-scroll-container'); // Conteneur du menu déroulant
const navbar = document.getElementById("nav-bar"); // Barre de navigation
let isMenuOpen = false; // Indicateur pour suivre l'état du menu mobile (ouvert ou fermé)
let prevScrollPos = window.scrollY; // Stocke la position de défilement précédente
// const triggerPosition = 0. * window.innerHeight; // Position de défilement à 70vh

// Fonction pour basculer l'affichage du menu mobile
function toggleMobileMenu() {
    if (isMenuOpen) { // Si le menu est ouvert
        hideMobileMenu(); // Cacher le menu
    } else { // Sinon
        showMobileMenu(); // Afficher le menu
    }
}

// Fonction pour afficher le menu mobile
function showMobileMenu() {
    hiddenMobileBlock.style.display = 'flex'; // Afficher le conteneur du menu
    hiddenMobileBlock.style.transform = 'translateY(-24px)'; // Animation d'apparition du menu
    hiddenMobileBlock.offsetHeight; // Forcer un reflow pour activer l'animation
    hiddenMobileBlock.style.transform = 'translateY(0px)'; // Réinitialiser la transformation
    hiddenMobileBlock.style.opacity = '1'; // Rendre le menu visible
    isMenuOpen = true; // Mettre à jour l'état du menu (ouvert)
}

// Fonction pour cacher le menu mobile
function hideMobileMenu() {
    hiddenMobileBlock.style.transform = "translateY(-24px)"; // Animation de disparition du menu
    hiddenMobileBlock.style.opacity = "0"; // Rendre le menu transparent
    setTimeout(() => {
        hiddenMobileBlock.style.display = 'none'; // Masquer le menu après l'animation
    }, 150);
    isMenuOpen = false; // Mettre à jour l'état du menu (fermé)
}

// // Fonction pour gérer le comportement du menu en fonction du défilement
// function handleScroll() {
//    let currentScrollPos = window.scrollY; // Obtenir la position de défilement actuelle
//    let triggerPosition

//     if (currentScrollPos > triggerPosition) { // Si la position de défilement dépasse 70vh
//        // Afficher ou masquer la barre de navigation en fonction de la direction du défilement
//        navbar.style.top = prevScrollPos > currentScrollPos ? "0" : `-${navbar.offsetHeight}px`;
//     }

//     prevScrollPos = currentScrollPos; // Mettre à jour la position de défilement précédente
//  }

// Écouter les clics sur le bouton du menu mobile et appeler la fonction de basculement du menu
menuMobileClick.addEventListener('click', toggleMobileMenu);

// Écouter les événements de défilement de la fenêtre
// window.addEventListener('scroll', function() {
//     if (isMenuOpen && window.scrollY > 600) { // Si le menu est ouvert et que le défilement dépasse 800 pixels
//         hideMobileMenu(); // Cacher le menu
//     }

//     handleScroll(); // Gérer le comportement du menu en fonction du défilement
// });

// Écouter les événements de redimensionnement de la fenêtre
window.addEventListener('resize', function() {
    if (window.innerWidth > 480) { // Si la largeur de la fenêtre dépasse 480 pixels
        hiddenMobileBlock.style.display = "none"; // Masquer le menu
    }
});

// Écouter les événements de défilement sur le menu mobile
hiddenMobileBlock.addEventListener('scroll', function(event) {
    // Empêcher la propagation des événements de défilement vers le document
    event.stopPropagation();
});

// Écouter les événements de clic sur tout le document
document.addEventListener('click', function(event) {
    // Si le clic n'est pas sur le bouton du menu mobile ou sur le menu lui-même et que le menu est ouvert
    if (!menuMobileClick.contains(event.target) && !hiddenMobileBlock.contains(event.target) && isMenuOpen) {
        hideMobileMenu(); // Cacher le menu
    }
});

