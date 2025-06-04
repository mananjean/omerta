document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  // Toggle du menu au clic sur le bouton
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // empêche de fermer directement
    menu.classList.toggle("open");
  });

  // Empêche la fermeture si on clique dans le menu
  menu.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Ferme le menu si on clique ailleurs
  document.addEventListener("click", () => {
    menu.classList.remove("open");
  });
});
