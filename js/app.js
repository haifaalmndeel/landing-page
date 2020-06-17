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

// build the nav
/**
 * a function that have a for-of loop that create a list item and
 * get the section names from the data-nav attribute .
 */
function buildNav() {
  for (let section of sections) {
    const createList = document.createElement("li");
    const navList = section.getAttribute("data-nav");
    
    createList.innerHTML = '<a class="menu__link" >' + navList + '</a>';

    fragment.appendChild(createList);
  }
  navbar__list.appendChild(fragment);
}

buildNav();


// Intersection Observer API to add class 'active-class' to section when near top of viewport

observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("active-class");
    } else {
      entry.target.classList.remove("active-class");
    }
  });
});

sections.forEach((sections) => {
  observer.observe(sections);
});

// Scroll to anchor ID using scrollTO event


/**
*a for loop that go through the sections and navigation list items
* then create a click event on the navigation list to scroll smoothly to the sections
*/ 
const navLinks = document.querySelectorAll(".menu__link");

for (let i = 0; i < sections.length; i++) {
    navLinks[i].addEventListener("click", function () {
    sections[i].scrollIntoView({ behavior: "smooth" });
  });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Set sections as active

// Scroll to section on link click

