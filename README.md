 # Landing Page Project

#### Table of Contents
* index.html
* css file
  * styles.css    
* js file
  * app.js
* README.md

### The Project Idea 
##### Builds navigation, scrolls to anchors from navigation, and highlights section in viewport upon scrolling.

### First function
First function will build the navigation bar by creating a for-of loop that create a list item and
get the sections names from the data-nav attribute.
### Second function
The second function named Intersection Observer to add `active-class` class to section when near top of viewport.
- Fist I set the root margin to select the exact viewport 
- Second set the `IntersectionObserver` function then check the ration of the entry's if it larger than zero. will add `active-class`.
- Third set the observer to observe the sections.
- Code [resource here !](https://alligator.io/js/intersection-observer/).
 
### Third function
- last function highlight the nav items if the section itself is in the viewport.
- First add scroll `event Listener` to the whole page.
- Second create a for-each loop for the `mainNavLinks` to create sections.
- Third if the measurement right will add `active-nav` class to the link else, remove the `active-nav` class.
- Code [resource here !](https://css-tricks.com/sticky-smooth-active-nav/).