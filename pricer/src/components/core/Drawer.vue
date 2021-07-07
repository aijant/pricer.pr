<template>
  <v-navigation-drawer
    v-model="inputValue"
    fixed
    right
    temporary
    class="burger-nav"
  >
    <v-row
      align="center"
      class="ma-0 pa-3 flex-no-wrap"
    >
      <v-btn
        aria-label="Close"
        class="ml-4"
        icon
        @click="toggleDrawer"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-row>
    <v-divider />
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        class="mb-5"
      >
        <v-icon color="#b7d302">
          mdi-chevron-right
        </v-icon><v-list-item-title v-text="item.text.toUpperCase()" />
      </v-list-item>
      <v-btn
        color="primary"
        class="contact-btn v-btn--tile"
        to="/projects"
      >
        {{ $t('contact') }}
      </v-btn>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
  import { mapState, mapMutations } from 'vuex'

  export default {
    data: () => ({
    }),
    computed: {
      ...mapState(['drawer']),
      inputValue: {
        get () {
          return this.drawer.drawer
        },
        set (val) {
          this.setDrawer(val)
        }
      },
      items () {
        return [
          {
            to: '/',
            text: this.$t('nav.home')
          },
          {
            to: '/projects',
            text: this.$t('nav.news')
          },
          {
            to: '/services',
            text: this.$t('nav.service')
          },
          {
            to: '/contact',
            text: this.$t('nav.companyInfo')
          },
          {
            to: '/recruit',
            text: this.$t('nav.recruit')
          }
        ]
      }
    },

    methods: {
      ...mapMutations(['setDrawer', 'toggleDrawer'])
    }
  }
</script>
<style scoped>
.burger-nav {
  width: 90vw !important;
}

.contact-btn {
  margin: 1rem 0 0 12rem;
  width: 13rem;
}

</style>
