<template>
  <div id="carouselFrontEnd" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/Front-End-1.png" class="d-block w-100" alt="Place de l'indépendance de Dakar">
      </div>
      <div class="carousel-item">
        <img src="../assets/Front-End-2.png" class="d-block w-100" alt="Île de Gorée proche de Dakar">
      </div>
      <div class="carousel-item">
        <img src="../assets/Front-End-3.png" class="d-block w-100" alt="Marché artisanal de Dakar">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselFrontEnd" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselFrontEnd" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>

img {
  height: 400px;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 50px; /* Augmente la taille des icônes */
  height: 50px; /* Augmente la taille des icônes */
  background-color: rgba(0, 0, 0, 0.7); /* Ajoute un fond sombre */
  border-radius: 50%; /* Rend le fond circulaire */
  background-size: 50%; /* Ajuste la taille de l'icône à l'intérieur */
}

.carousel-control-prev-icon:hover,
.carousel-control-next-icon:hover {
  background-color: rgba(0, 0, 0, 1); /* Rend le fond complètement opaque au survol */
}

.carousel-control-prev,
.carousel-control-next {
  width: 60px; /* Augmente la zone cliquable */
}
.carousel-caption {
  background: rgba(0, 0, 0, 0.5); /* Fond semi-transparent */
  padding: 0.5rem; /* Réduit le padding */
  border-radius: 0.5rem; /* Coins arrondis */
  font-size: 0.9rem; /* Réduit la taille du texte */
  max-width: 70%; /* Limite la largeur de la légende */;
}
</style>