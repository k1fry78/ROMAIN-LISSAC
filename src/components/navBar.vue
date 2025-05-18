<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";


const isMenuOpen = ref(false);
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

function handleKeydown(event) {
  if (event.key === "Escape") {
    closeMenu();
    showLoginPopup.value = false; // Ferme le popup de connexion
    showSuccessPopup.value = false; // Ferme le popup de confirmation
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <nav class="navbar" role="navigation" aria-label="Menu principal">
    <div class="navbar-brand">
      <h1>Développeur Web</h1>
    </div>
    <div
      class="navbar-menu"
      :class="{ active: isMenuOpen }"
      id="navbarMenu"
      role="menu"
      aria-expanded="isMenuOpen"
    >
      <ul>
        <li role="menuitem">
          <RouterLink class="navbar-item" to="/" @click="closeMenu">Accueil</RouterLink>
        </li>
        <li role="menuitem">
          <RouterLink class="navbar-item" to="/contact" @click="closeMenu">Contact</RouterLink>
        </li>
      </ul>
    </div>
    <div
      class="navbar-hamburger"
      id="hamburgerIcon"
      @click="toggleMenu"
      tabindex="0"
      role="button"
      aria-label="Ouvrir le menu"
      @keydown.enter="toggleMenu"
      @keydown.space.prevent="toggleMenu"
    >
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  </nav>
</template>

<style>
.navbar {
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: rgba(51, 51, 51, 0.9); /* Couleur noire avec 90% d'opacité */
  color: white;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar h1 {
  font-size: 2rem;
  color: white;
}

.navbar-menu ul {
  list-style: none;
  display: flex;
  margin-top: 10px;
}

.navbar-menu ul li {
  margin: 0 15px;
}

.navbar-menu ul li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease, background-color 0.3s ease; 
}

.navbar-menu ul li a:hover {
  color: #333; 
  background-color: #fff; 
  padding: 5px 10px; 
  border-radius: 4px; 
}

.navbar-hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.navbar-hamburger .bar {
  width: 25px;
  height: 3px;
  margin: 4px 0;
  background-color: white;
}

.navbar-item {
  cursor: pointer;
  font-size: 1.2rem;
}

@media screen and (max-width: 1024px) {
  .navbar-menu {
    display: none;
    width: 100%;
    position: relative;
    top: 50px;
    left: 0;
    text-align: center;
    z-index: 1000;
  }

  .navbar-menu ul {
    flex-direction: column;
    width: 100%;
  }

  .navbar-menu ul li {
    margin: 10px 0;
  }

  .navbar-hamburger {
    display: flex;
  }

  .navbar-menu.active {
    display: block;
  }
}

</style>
