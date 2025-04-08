
//on click event listeners for the buttons
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("search");
  
    if (button) {
      button.addEventListener("click", function () {
        window.location.href = "results_page.html";
      });
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("lucky");
  
    if (button) {
      button.addEventListener("click", function () {
        window.location.href = "my_profile.html";
      });
    }
  });