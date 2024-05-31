<script setup lang="ts">
</script>

<template>
  <div class="container">
    <app-navbar />
    <div class="container__main">
      <app-header />
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  display: flex;
  background-color: #F5F5F5;
}

.container__main {
  flex-grow: 1;
}
</style>
