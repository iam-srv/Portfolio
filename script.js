// toggle icon navbar//

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
// Scroll section active link //

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  //    sticky navbar  //
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*==================== scroll reveal ====================*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content , .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img , .services-container , .portfolio-box ,.contact form ', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1 , .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p , .about-content', { origin: 'right' });


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Backend Developer', 'Full Stack Java Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});


// ==================== scroll animate project ======================= 


let items = document.querySelectorAll('.slider .slider-item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');


let active = 3;

function loadShow() {

  let stt = 0;
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = 'none';
  items[active].style.opacity = 1;
  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = 'blur(5px)';
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
  stt = 0;
  for (var i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = 'blur(5px)';
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}
loadShow();

next.onclick = function () {
  active = active + 1 < items.length ? active + 1 : active;
  loadShow();
}

prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : active;
  loadShow();

}

const slider = document.querySelector('.slider')
let isDown = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('slider-active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;


})
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('slider-active');
})
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('slider-active');
})
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) / 1000;
  if (walk < 0) {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
  }
  if (walk > 0) {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
  }

  slider.scrollLeft = scrollLeft - walk;
})