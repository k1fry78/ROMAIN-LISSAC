<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <footer :class="['footer', { 'footer-centered': route.path !== '/' }]">
    <div class="footer-content">
      <p>&copy; 2025 Romain Lissac, développeur web à Toulouse</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  padding: 20px;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto; /* Pousse le footer en bas */
}

.footer-centered {
  width: 100%;
  height: 5vh;
  background-color: #333;
  justify-content: center;
  left: 0;
  right: 0;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
  margin-top: 5px;
}

.footer-content p {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
}

.footer-content a:hover {
  text-decoration: underline;
}

</style>