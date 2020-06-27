/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const sections = document.querySelectorAll("section");
const fragment = document.createDocumentFragment(); // ← uses a DocumentFragment instead of a <div>

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the navigation bar
/**
 * A function that have a for-of loop that create a list item and
 * get the sections names from the data-nav attribute.
 */
(function () {
  for (let section of sections) {
    const createList = document.createElement("li");
    const navList = section.getAttribute("data-nav");
    const sectionId = section.id;

    createList.innerHTML =
      '<a class="menu__link" href="#' + sectionId + '" >' + navList + "</a>";

    fragment.appendChild(createList);
  }
  navbar__list.appendChild(fragment);
})();

// Intersection Observer API to add class 'active-class' to section when near top of viewport
const config = { rootMargin: "-19% 0px -80% 0px" };

// IntersectionObserver function detecting the section in a viewport and add a "active-class" class to that section
observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("active-class");
    } else {
      entry.target.classList.remove("active-class");
    }
  });
}, config);

sections.forEach((section) => {
  observer.observe(section);
});

/**
 * Add scroll event lisListener then create a for-each loop for the mainNavLinks to create sections
 * "If-else" statement with measurement to add "active-nav" class to the link or remove it
 */

let mainNavLinks = document.querySelectorAll(".menu__link");

window.addEventListener("scroll", (event) => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop < fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active-nav");
    } else {
      link.classList.remove("active-nav");
    }
  });
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Set sections as active

// Scroll to section on link click
