<template>
  <v-app-bar
    class="main"
    :hide-on-scroll="$vuetify.breakpoint.smAndDown"
    app
    dark
    elevate-on-scroll
  >
    <router-link
      to="/"
    >
      <v-img
        alt="Pricer.kg"
        class="mt-2"
        max-width="10rem"
        src="@/assets/logo.svg"
      />
    </router-link>
    <v-spacer />
    <v-toolbar
      v-if="$vuetify.breakpoint.mdAndUp"
      color="main"
    >
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :active-class="!isScrolling ? 'primary--text' : undefined"
        :to="item.to"
        class="mr-4 v-btn--tile"
        text
      >
        <span v-text="item.text" />
      </v-btn>
      <v-btn
        color="primary"
        class="ml-12 mr-3 v-btn--tile"
        to="/contactUs"
      >
        {{ $t('contact') }}
      </v-btn>
      <v-btn-toggle
        color="primary"
        class="mt-1 v-btn--tile"
        group
      >
        <v-btn
          class="mr-sm-n4"
          @click="changeLanguage('kg')"
        >
          <v-img
            max-width="2rem"
            src="@/assets/lang/ico-kg.svg"
          />
        </v-btn>

        <v-btn
          class="mr-sm-n4"
          @click="changeLanguage('ru')"
        >
          <v-img
            max-width="2rem"
            src="@/assets/lang/ico-ru.svg"
          />
        </v-btn>

        <v-btn
          class="mr-sm-n4"
          @click="changeLanguage('en')"
        >
          <v-img
            max-width="2rem"
            src="@/assets/lang/ico-en.svg"
          />
        </v-btn>

        <v-btn
          class="mr-sm-n4"
          @click="changeLanguage('ja')"
        >
          <v-img
            max-width="2rem"
            src="@/assets/lang/ico-ja.svg"
          />
        </v-btn>
      </v-btn-toggle>
    </v-toolbar>
    <v-app-bar-nav-icon
      v-else
      aria-label="Open Navigation Drawer"
      @click="toggleDrawer"
    >
      <v-btn-toggle
        color="primary"
        class="burger-btn"
        group
      >
        <v-btn
          class="mr-sm-n4"
          @click="changeLanguage('kg')"
        >
          <v-img
            max-width="2rem"
            src="@/assets/lang/ico-kg.svg"
          />
        </v-btn>
        <v-btn
          class="mr-sm-n4"
          @click="changeLanguage('ru')"
        >
          <v-img
            max-width="2rem"
            src="@/assets/lang/ico-ru.svg"
          />
        </v-btn>

        <v-btn
          class="mr-sm-n4"
          @click="changeLanguage('en')"
        >
          <v-img
            max-width="2rem"
            src="@/assets/lang/ico-en.svg"
          />
        </v-btn>

        <v-btn
          class="mr-sm-n4"
          @click="changeLanguage('ja')"
        >
          <v-img
            max-width="2rem"
            src="@/assets/lang/ico-ja.svg"
          />
        </v-btn>
      </v-btn-toggle>
      <v-icon class="burger-mdi">
        mdi-menu
      </v-icon>
    </v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
// Utilities
  import { mapMutations } from 'vuex'

  export default {
    data: () => ({
      isScrolling: false
    }),

    computed: {
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
      ...mapMutations(['toggleDrawer']),
      onScroll () {
        this.isScrolling =
          (window.pageYOffset || document.documentElement.scrollTop || 0) > 35
      },
      changeLanguage (payload) {
        this.$i18n.locale = payload
      }
    }
  }
</script>
<style scoped>
.burger-btn {
  margin-right: 16rem;
}
.burger-mdi {
  position: absolute;
  font-size: 46px !important;
  }
</style>
