document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("search");
  
    if (button) {
      button.addEventListener("click", function () {
        window.location.href = "results_page.html";
      });
    }
  });