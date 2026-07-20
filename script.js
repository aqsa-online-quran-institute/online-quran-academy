// Aqsa International Quran Academy - Custom JavaScript

document.addEventListener("DOMContentLoaded", function() {
  
  // Smooth Scrolling for links
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Console confirmation
  console.log("Aqsa International Quran Academy Website Scripts Loaded Successfully!");
});