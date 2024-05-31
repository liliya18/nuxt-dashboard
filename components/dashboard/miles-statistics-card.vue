<script setup lang="ts">
</script>

<template>
  <ui-card class="statistics-card">
    <h4 class="statistics-card__title">
      Miles <span>Statistics</span>
    </h4>
    <charts-bar
      :data="[10, 52, 200, 334, 390, 330, 220]"
      :x-axis-data="['1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM']"
    />
  </ui-card>
</template>

<style scoped>
.statistics-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.statistics-card__title {
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: var(--c-primary-dark-1);
}

.statistics-card__title span {
  font-weight: 400;
}
</style>
