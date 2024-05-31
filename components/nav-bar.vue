<script setup lang="ts">
import IconDashboard from '~/assets/icons/icon-dashboard.svg';
import IconServices from '~/assets/icons/icon-services.svg';
</script>

<template>
  <div class='nav-bar'>
    <nav>
      <ul class='nav-bar__ul'>
        <li>
          <NuxtLink to='/dashboard' class='nav-bar__link' active-class='nav-bar__link--active'>
            <icon-dashboard class='nav-bar__icon' />
            Dashboard
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to='/services' class='nav-bar__link' active-class='nav-bar__link--active'>
            <icon-services class='nav-bar__icon'/>
            Services
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.nav-bar {
  min-width: 248px;
  padding: 30px 24px;
  background-color: var(--c-white);
}

.nav-bar__ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-bar__link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: var(--c-primary-dark-2);
  border-radius: 6px;
}

.nav-bar__link--active {
  background-color: #F3F5F8;
}
</style>
