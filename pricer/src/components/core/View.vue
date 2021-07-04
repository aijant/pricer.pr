<template>
  <v-content class="py-5">
    <router-view />
  </v-content>
</template>

<script>
  export default {
    metaInfo () {
      return {
        titleTemplate: '%s — Pricer.kg'
      }
    },

    watch: {
      $route: function () {
        this.$nextTick(() => this.$vuetify.goTo(0))
      }
    }
  }
</script>
