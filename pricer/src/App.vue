<template>
  <v-app>
    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
    >
      <i class="mdi mdi-chevron-up" />
    </v-btn>
    <core-app-bar />

    <core-drawer />

    <core-jumbotron />

    <core-view />

    <core-footer />
  </v-app>
</template>

<script>
  export default {
    metaInfo: {
      titleTemplate: '%s — Pricer.kg'
    },
    components: {
      CoreDrawer: () => import('@/components/core/Drawer'),
      CoreFooter: () => import('@/components/core/Footer'),
      CoreJumbotron: () => import('@/components/core/Jumbotron'),
      CoreAppBar: () => import('@/components/core/AppBar'),
      CoreView: () => import('@/components/core/View')
    },
    data: () => ({
      fab: false
    }),
    methods: {
      onScroll (e) {
        if (typeof window === 'undefined') return
        const top = window.pageYOffset || e.target.scrollTop || 0
        this.fab = top > 20
      },
      toTop () {
        this.$vuetify.goTo(0)
      }
    }
  }
</script>
