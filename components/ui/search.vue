<script setup lang="ts">
import IconSearch from '~/assets/icons/icon-search.svg'

const { modelValue, placeholder } = defineProps<{ modelValue: string, placeholder?: string }>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <label class="ui-search">
    <icon-search class="ui-search__icon" />
    <input
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      class="ui-search__input"
      @input="emit('update:modelValue', $event.target.value)"
    >
  </label>
</template>

<style scoped>
.ui-search {
  display: flex;
  gap: 16px;
  padding: 12px 14px;
  background-color: #F5F4F6;
  border-radius: 8px;
}

.ui-search__icon {
  color: var(--c-primary-dark-4);
}

.ui-search__input {
  background-color: transparent;
  border: none;
  width: 100%;
  caret-color: var(--c-secondary-orange);
  font-weight: 500;
  font-size: 16px;
}

.ui-search__input::placeholder {
  color: var(--c-primary-dark-4);
}
</style>
