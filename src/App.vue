<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import navBar from "@/components/navBar.vue";
import footerRomain from "./components/footer.vue";

</script>

<template>
  <div id="app">
    <header>
      <div class="navbar-container">
        <navBar />
      </div>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <footerRomain />
    </footer>
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
}
</style>