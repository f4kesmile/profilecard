document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("showPortfolio");
  const portfolioSection = document.getElementById("portfolioList");

  toggleButton.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah reload halaman
    portfolioSection.classList.toggle("active");
  });
});
