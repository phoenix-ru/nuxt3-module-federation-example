<template>
  <div>
    This is host

    <remote-button>
      That is remote button configured on host!
    </remote-button>
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
  components: { RemoteButton }
})
</script>

<style>

</style>
