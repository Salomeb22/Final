//
let btn = document.getElementById ('send1');
btn.addEventListener ('click', function () {
    alert('Thanks')
})

//
let navigaation = document.getElementById ('navBar');
let burger = document.getElementById ('burgerBar');

burger.addEventListener ('click', function () {
    navigaation.classList.toggle('newNavigation')
})

//
const header = document.querySelector('header');
const section1 = document.getElementById('sec-one');
    
window.addEventListener('scroll', () => {
    const section1Bottom = section1.getBoundingClientRect().bottom-200;
        
    if (section1Bottom < 0) {
        header.style.background = '#191A19';
    } else {
        header.style.background = 'linear-gradient(to bottom, black, transparent)';
    }
});
function scrollToSection(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    const offset = -180;
    const bodyRect = document.body.getBoundingClientRect().top;
    const sectionRect = section.getBoundingClientRect().top;
    const sectionPosition = sectionRect - bodyRect;
    const offsetPosition = sectionPosition + offset;
     window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
         });
}