<script setup lang="ts">
</script>

<template>
  <ui-card class="statistics-card">
    <h4 class="statistics-card__title">
      Car <span>Statistics</span>
    </h4>
    <charts-line
      :data="[101, 820, 932, 500, 934, 1290, 1330, 1320, 921]"
      :x-axis-data="['7 am', '9 am', '11 am', '1 pm', '3 pm', '5 pm', '7 pm', '9 pm']"
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
