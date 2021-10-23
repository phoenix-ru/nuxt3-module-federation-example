<template>
  <button class="app-button">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'AppButtonFromRemote',

  props: {
    variant: {
      type: String,
      required: false,
      default: 'default'
    }
  }
})
</script>

<style>
.app-button {
  background-color: var(--app-button-color, hsl(200, 75%, 42%));
  padding: .5rem 1rem;
  border-color: transparent;
  color: white;
  border-radius: .25rem;
  cursor: pointer;

  transition-property: background-color;
  transition-duration: .2s;
  transition-timing-function: ease;
}

.app-button:hover {
  background-color: var(--app-button-color-hover, hsl(200, 75%, 38%));
}
</style>
