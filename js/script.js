// Menu Déroulant Barre de Navigation

const menuHover = document.getElementById("menu-scroll-middle");

const hiddenBlock = document.getElementById("menu-scroll-container");

menuHover.addEventListener("mouseenter", function () {
  hiddenBlock.style.display = "flex";
  hiddenBlock.style.transform = "translateY(0px)";
  hiddenBlock.offsetHeight;
  hiddenBlock.style.transform = "translateY(28px)";
  hiddenBlock.style.opacity = "1";
});

menuHover.addEventListener("mouseleave", function () {
  hiddenBlock.style.transform = "translateY(0px)";
  hiddenBlock.style.opacity = "0";
  setTimeout(() => {
    hiddenBlock.style.display = "none";
  }, 150);
});

const menuMobileClick = document.getElementById("nav-mobile-menu");
const hiddenMobileBlock = document.getElementById("mobile-scroll-container");
const navbar = document.getElementById("nav-bar");
let isMenuOpen = false;
let prevScrollPos = window.scrollY;

function toggleMobileMenu() {
  if (isMenuOpen) {
    hideMobileMenu();
  } else {
    showMobileMenu();
  }
}

function showMobileMenu() {
  hiddenMobileBlock.style.display = "flex";
  hiddenMobileBlock.style.transform = "translateY(-24px)";
  hiddenMobileBlock.offsetHeight;
  hiddenMobileBlock.style.transform = "translateY(0px)";
  hiddenMobileBlock.style.opacity = "1";
  isMenuOpen = true;
}

function hideMobileMenu() {
  hiddenMobileBlock.style.transform = "translateY(-24px)";
  hiddenMobileBlock.style.opacity = "0";
  setTimeout(() => {
    hiddenMobileBlock.style.display = "none";
  }, 150);
  isMenuOpen = false;
}

menuMobileClick.addEventListener("click", toggleMobileMenu);

window.addEventListener("resize", function () {
  if (window.innerWidth > 480) {
    hiddenMobileBlock.style.display = "none";
  }
});

hiddenMobileBlock.addEventListener("scroll", function (event) {
  event.stopPropagation();
});

document.addEventListener("click", function (event) {
  if (
    !menuMobileClick.contains(event.target) &&
    !hiddenMobileBlock.contains(event.target) &&
    isMenuOpen
  ) {
    hideMobileMenu();
  }
});

// Dévoiler les Projets Cachés Page Réalisations

const showButton = document.getElementById("show-more-projects");
const hiddenProjects = document.querySelectorAll(".hidden-project");

const maxProjectsToShow = 3;
let projectsShownCount = 0;

showButton.addEventListener("click", function () {
  let projectsToShow = 0;

  hiddenProjects.forEach(function (project) {
    if (
      projectsToShow < maxProjectsToShow &&
      project.classList.contains("hidden-project")
    ) {
      project.classList.remove("hidden-project");
      projectsToShow++;
      projectsShownCount++;
    }
  });

  const remainingHiddenProjects = document.querySelectorAll(".hidden-project");

  if (remainingHiddenProjects.length === 0) {
    showButton.style.display = "none";
  }
});

// Trier les Projets en Fonction de leur type
