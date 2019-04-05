<template>
  <v-app>
    <h2 class="headline font-weight-bold mb-3">Buttons</h2>

    <div>
      <v-btn color="success">Success</v-btn>
      <v-btn color="error">Error</v-btn>
      <v-btn color="warning">Warning</v-btn>
      <v-btn color="info">Info</v-btn>
    </div>
  </v-app>
</template>

<script>
  // Method 4: import in .vue file (does not work)
  import {
      VApp,
      VBtn
  } from 'vuetify/lib'

  export default {
    components: {
        VApp,
        VBtn
    }
  }
</script>

<style>

</style>
