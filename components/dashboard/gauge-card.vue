<script setup lang="ts">
const { title, value, accentColor, icon } = defineProps<{
  title: string;
  value: number;
  accentColor: string;
  iconBackgroundColor: string;
  icon: any;
}>();
</script>

<template>
  <card class='dashboard-card'>
    <component :is='icon' class='dashboard-card__icon' />
    <h4 class='dashboard-card__title'>{{ title }}</h4>
    <charts-gauge size='112px' :value='value' :accent-color='accentColor' />
  </card>
</template>

<style scoped>
.dashboard-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dashboard-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block-end: 10px;
  padding: 8px;
  border-radius: 50%;
  background-color: v-bind(iconBackgroundColor);
  color: v-bind(accentColor);
}

.dashboard-card__title {
  margin-block-end: 30px;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: var(--c-primary-dark-1);
}
</style>
