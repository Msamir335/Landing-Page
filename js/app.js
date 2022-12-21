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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

// Adding Globalvariabels 
const sections = Array.from(document.querySelectorAll("section"));
const ul = document.getElementById("navbar__list");
//End Global Variables


// Start Helper Functions

// Get Bounding Client Rect to set active class
const getbounding = (element) => {
    return element.getBoundingClientRect().top;
}

// Add activeclass for sections
const activeclass = (status, section) => {
    if (status) {
        section.classList.add("your-active-class")
    }
}

// Remove activeclass for sections
const removeactiveclass = (section) => {
    section.classList.remove("your-active-class")
}
//End Helper Functions

// Creat list item & link
function creatlistItem(sec) {
    for (sec of sections) {
        const name = sec.dataset.nav
        const create = document.createElement("li");
        let li = create;

        li.innerHTML = `<a class="menu__link" href="#${sec.id}"data-nav=${sec.id}>${name}</a>`;

        // Get list item menu
        ul.appendChild(li);
    }
}

// Build the menu by creat list item 
creatlistItem();

// Scroll to active class using scroll "delay" event
const delay = () => {
    sections.forEach((section) => {
        const onboard = getbounding(section)
        const change = onboard < 150 & onboard >= -150;;
        sectionViwe = () => change

        removeactiveclass(section)
        activeclass(sectionViwe(), section)
    })
}

document.addEventListener("scroll", delay);


// Make scroll to section as smothing move
document.querySelectorAll('a[href^="#"]').forEach(section => {
    section.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

