const navLinks = document.querySelectorAll('a[href^="#"]');

// Loop through each navigation link
navLinks.forEach(navLink => {
  // Add a click event listener to each navigation link
  navLink.addEventListener('click', function(e) {
    e.preventDefault();

    // Get the target id by removing the '#' from the href
    const targetId = this.getAttribute('href').substring( 1);
    
    // Find the target section element using the target id
    const targetElement = document.getElementById(targetId);

    // Scroll to the target section with smooth scrolling behavior
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
    
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Simulate a delay (you can replace this with actual loading logic)
  setTimeout(function () {
      // Hide the loading overlay
      document.getElementById("loading-overlay").style.display = "none";
      
      // Show the main content with fade-in transition
      var mainContent = document.getElementById("main-content");
      mainContent.style.opacity = "0";

      // Use a timeout to allow the display property to take effect before adding the 'show' class
      setTimeout(function () {
          mainContent.classList.add("show");
          mainContent.style.opacity = "1";
      }, 10); // Adjust the timeout delay if needed
  }, 1600); // Change 2000 to the desired delay in milliseconds
});

let menuList = document.querySelector("#menuList");
menuList.style.maxHeight = "0px";

let burgerMenu = document.querySelector("#burgerMenu");


function toggleMenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "390px";

    }
    else{
        menuList.style.maxHeight = "0px";
    }
}

burgerMenu.addEventListener("click", toggleMenu);
