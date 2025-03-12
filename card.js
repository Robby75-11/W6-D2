function rimuoviCard(id) {
  let card = document.getElementById(id);
  card.classList.add("fade-out");
  setTimeout(() => {
    card.remove();
  }, 500);
}
