<script setup>
import EpisodeComponent from "../components/ProjectEpisodeComponent.vue";
</script>

<template>
  <main>
    <EpisodeComponent />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
