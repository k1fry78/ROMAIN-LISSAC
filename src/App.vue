<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import navBar from "@/components/navBar.vue";
import footer_sen from "./components/footer.vue";

const isMalvoyant = ref(false);

function toggleTheme() {
  isMalvoyant.value = !isMalvoyant.value;
}
</script>


<template>
  <header>
<div class="navbar-container">
  <navBar />
</div> 
</header>
<main>
<router-view/>
<footer_sen />
</main>
</template>
<style>
main { font-family: poppins, sans-serif; }
</style>
