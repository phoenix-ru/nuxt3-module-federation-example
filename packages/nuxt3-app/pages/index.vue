<template>
  <div>
    <h1>This is Nuxt host</h1>

    <remote-button class="nuxt-button">
      That is a remote button used in Nuxt!
    </remote-button>

    <!-- This p should be filled on the client, meaning that ticket is solved -->
    <p v-text="hydratedString" />

    <!-- This p should not be visible, but the class from <style> is not applied -->
    <p class="no-display" style="color: red; font-weight: 600">
      This text should be hidden
    </p>
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

// eslint-disable-next-line vue/one-component-per-file
const Error = defineComponent({
  name: 'Error',
  template: '<div>ERROR</div>'
})

// eslint-disable-next-line vue/one-component-per-file
const RemoteButton = defineAsyncComponent({
  // eslint-disable-next-line
  // @ts-ignore
  loader: () => import('remoteWithButton/button'),
  errorComponent: Error
})

export default defineComponent({
  components: { RemoteButton },

  data: () => ({
    hydratedString: ''
  }),

  mounted() {
    this.hydratedString = 'Client hydration successful (that means the Module Federation ticket has been solved 🎉)'
  }
})
</script>

<style>
.nuxt-button {
  --app-button-bg: linear-gradient(135deg, rgb(26, 120, 176) , rgb(151, 18, 145));
  --app-button-bg-hover: linear-gradient(135deg, rgb(26, 120, 176) , rgb(26, 120, 176));
}

.no-display {
  display: none;
}
</style>
