// Tabs switching
document.addEventListener("DOMContentLoaded", function() {
  showTab("hero");
});

function showTab(tabId) {
  // Hide all tabs
  var tabs = ["hero", "projects", "about", "contact"];
  tabs.forEach(function(tab) {
      document.getElementById(tab).style.display = "none";
  });

  // Show the selected tab
  document.getElementById(tabId).style.display = "block";
}

// Tab Buttons
document.getElementById("tab1").addEventListener("click", function(event) {
  event.preventDefault();
  showTab("hero");
});

document.getElementById("tab2").addEventListener("click", function(event) {
  event.preventDefault();
  showTab("projects");
});

document.getElementById("tab3").addEventListener("click", function(event) {
  event.preventDefault();
  showTab("about");
});

document.getElementById("tab4").addEventListener("click", function(event) {
  event.preventDefault();
  showTab("contact");
});


document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('#header .hamburger');
  const mobile_menu = document.querySelector('#header .nav-list');
  
  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobile_menu.classList.toggle('active');
  });
});

// Scroll back up button
let mybutton = document.getElementById("upButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
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