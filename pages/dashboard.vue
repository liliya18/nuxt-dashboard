<script setup lang="ts">
import IconEnergy from '~/assets/icons/icon-energy.svg'
import IconRange from '~/assets/icons/icon-range.svg'
import IconBlood from '~/assets/icons/icon-blood.svg'
import IconTire from '~/assets/icons/icon-tire.svg'
</script>

<template>
  <section class="dashboard">
    <dashboard-gauge-card
      class="dashboard__gauge"
      title="Energy"
      accent-color="#A162F7"
      :value="45"
      :icon="IconEnergy"
      icon-background-color="var(--c-primary-purple-10)"
    />
    <dashboard-gauge-card
      class="dashboard__gauge"
      title="Range"
      accent-color="#FF6370"
      :value="55"
      :icon="IconRange"
      icon-background-color="rgba(255, 126, 134, 0.1)"
    />
    <dashboard-gauge-card
      class="dashboard__gauge"
      title="Break fluid"
      accent-color="#A162F7"
      :value="9"
      :icon="IconBlood"
      icon-background-color="var(--c-primary-purple-10)"
    />
    <dashboard-gauge-card
      class="dashboard__gauge"
      title="Tire Wear"
      accent-color="#F6CC0D"
      :value="25"
      :icon="IconTire"
      icon-background-color="var(--c-secondary-yellow-10)"
    />

    <dashboard-miles-statistics-card class="dashboard__statistics" />
    <dashboard-car-statistics-card class="dashboard__statistics" />
  </section>
</template>

<style scoped>
.dashboard {
  width: 100%;
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 24px;
}

.dashboard__gauge {
  grid-column-start: span 3;
}

.dashboard__statistics {
  grid-column-start: span 6;
}
</style>
