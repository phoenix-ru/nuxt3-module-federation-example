<template>
  <button class="app-button">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
  background: var(--app-button-bg, hsl(200, 75%, 42%));
  padding: .5rem 1rem;
  border: none;
  color: white;
  border-radius: .25rem;
  cursor: pointer;

  transition-property: background;
  transition-duration: .2s;
  transition-timing-function: ease;
}

.app-button:hover {
  background: var(--app-button-bg-hover, hsl(200, 75%, 38%));
}
</style>
