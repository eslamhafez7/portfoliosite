const navMenu = document.getElementById('nav_menu'),
navToggle = document.getElementById('nav_toggle'),
navClose = document.getElementById('nav_close')

// Show Menu 
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Hide Menu 
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav-link')
const linkAction = () => {
    const navMenu = document.getElementById('nav_menu')
    // When we click on each nav-link we remove the show menu 
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Swiper Projects
let swiperProjects = new Swiper(".projects-container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
breakpoints: {
    1200: {
        slidesPerView: 2,
        spaceBetween: -56,
        },
    },
});
// Swiper Testimonials
let swiperTestimonials = new Swiper(".testimonials-container", {
    grapCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Email JS 
    const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactProject = document.getElementById('contact-project'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    // Chex if the field has a value 
    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        // Add and remove color 
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        // Show Message 
        contactMessage.textContent = 'make sure to write all the input fields ⚠️'
    }else {
        //services ID - Temolate ID - #Form - Puplickey
        emailjs.sendForm('service_xegcpnw','template_93ckf3l','#contact-form','iQpO8hRWlhDkajeif')
        .then(() => {
            // Show message and add color 
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = 'Message sent ✅'

            // Remove message after five seconds 
            setTimeout (() => {
                contactMessage.textContent = ''
            }, 5000)
        }, (error) => {
            alert('OOPS! SOMETHING HAS FAILED...', error)
        })

        // To clear the input field 
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }
}   
contactForm.addEventListener('submit', sendEmail)   

// Scroll Sections Active Link 
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        }else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Show Scroll UP 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show scroll 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);



// Change Theme 
const themeButton = document.getElementById("moon_icon");
const sunIcon = document.getElementById("sun_icon");
const body = document.querySelector("body");

// Function to set the user's theme preference
function setThemePreference(theme) {
if (theme === "dark") {
    body.classList.add("dark-theme");
    sunIcon.style.display = "none";
    themeButton.style.display = "block";
} else {
    body.classList.add("light-theme");
    sunIcon.style.display = "block";
    themeButton.style.display = "none";
}
}

// Function to handle the theme switch
function switchTheme() {
if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    sunIcon.style.display = "block";
    themeButton.style.display = "none";
    localStorage.setItem("theme", "light");
} else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    sunIcon.style.display = "none";
    themeButton.style.display = "block";
    localStorage.setItem("theme", "dark");
    }
}

// Add event listener to the theme button
themeButton.addEventListener("click", switchTheme);
sunIcon.addEventListener("click", switchTheme);

// Check if user's theme preference is stored and apply the theme
const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
setThemePreference(storedTheme);
} else {
  // If no theme preference is stored, set default theme
setThemePreference("light");
}


// Change background header 
const scrollHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class 
    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

// scroll Reavel Animation 
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true //Animations Reeat
})
sr.reveal('.home-data, .projects-container, .testimonials-container, .footer-container')
sr.reveal('.home-info div', {delay: 600, origin: 'bottom', interval: 100})
sr.reveal('.skills-content:nth-child(1), .contact-content:nth-child(1)', {origin: 'left'})
sr.reveal('.skills-content:nth-child(2), .contact-form:nth-child(2), .contact-title:nth-child(1)', {origin: 'right'})
sr.reveal('.qualification-content, .services-card', {interval: 100})



