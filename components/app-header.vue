<script setup lang="ts">
const searchQuery = ref('')
</script>

<template>
  <header class="header">
    <ui-search
      v-model="searchQuery"
      placeholder="Search or type"
      class="header__search"
    />
  </header>
</template>

<style scoped>
.header {
  min-height: 80px;
  display: flex;
  align-items: center;
  padding: 16px 32px;
  background-color: var(--c-white);
}

.header__search {
  width: 360px;
}
</style>
