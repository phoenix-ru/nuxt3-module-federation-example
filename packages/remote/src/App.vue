<template>
  <div class="app">
    <h1>remoteWithButton is currently running as Host</h1>

    <app-button class="host-button">
      Hello, host!
    </app-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppButton from './components/Button.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppButton
  }
})
</script>

<style scoped>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.host-button {
  --app-button-bg: hsl(145, 82%, 35%);
  --app-button-bg-hover: hsl(145, 82%, 30%);
}
</style>
