document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
    const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
    const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
    const header = document.querySelector('.header.container');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });

    document.addEventListener('scroll', () => {
        var scroll_position = window.scrollY;
        if (scroll_position > 250) {
            header.style.backgroundColor = '#29323c';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });

    menu_item.forEach((item) => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobile_menu.classList.remove('active');
        });
    });
});


let mybutton = document.getElementById("upButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document with easing
function topFunction() {
  scrollToTop(document.documentElement, 0, 800); // 800 milliseconds for the easing effect
}

// Smooth scroll function with easing
function scrollToTop(element, to, duration) {
  const start = element.scrollTop;
  const change = to - start;
  let currentTime = 0;
  const increment = 20;

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  function animateScroll() {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  animateScroll();
}

// JavaScript to dynamically set the current year
document.addEventListener("DOMContentLoaded", function() {
  var currentYear = new Date().getFullYear();
  document.getElementById("copyright").innerHTML = "Copyright &copy; " + currentYear + " Julia Bays. All rights reserved.";
});