<template>
  <v-footer
    class="main"
    height="auto"
    padless
  >
    <v-container class="main">
      <v-row
        class="mt-3 mb-6"
        justify="center"
      >
        <v-col
          cols="8"
        >
          <v-btn
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            class="secondary--text mr-16 v-btn--tile footer-btn"
            text
          >
            <span v-text="item.text" />
          </v-btn>
          <v-btn
            color="primary"
            class="ml-16 mr-3 v-btn--tile v-size--large right contact-footer"
            to="/projects"
          >
            {{ $t('contact') }}
          </v-btn><br>
        </v-col>
        <v-col cols="8">
          <div class="text-xl-caption text-xl-right">
            <router-link
              to="/about"
              class="pr-8 secondary--text text-decoration-none"
            >
              {{ $t('footer.privacy') }}
            </router-link>
            <router-link
              to="/"
              class="secondary--text text-decoration-none"
            >
              {{ $t('footer.mediapolicy') }}
            </router-link>
            <hr color="grey">
          </div>
        </v-col>
        <v-col cols="5">
          <router-link
            to="/about"
          >
            <v-img
              alt="Pricer.kg"
              class="mt-2"
              max-width="8rem"
              src="@/assets/logo.svg"
            />
          </router-link>
          <p class="secondary--text text-end font-weight-bold mt-3">
            {{ $t('footer.number') }}
          </p>
        </v-col>
        <v-col cols="3">
          <p class="secondary--text mb-0 text-xl-caption ml-lg-n2">
            <span>&#x3010;</span> {{ $t('footer.name') }}<span> &#x3011;</span>
          </p>
          <p class="secondary--text text-xl-caption">
            {{ $t('footer.address') }}
          </p>
        </v-col>
        <v-col cols="8">
          <p class="secondary--text text-center font-weight-thin">
            {{ $t('footer.catchcopy') }}
          </p>
          <p class="secondary--text text-xl-caption text-center font-weight-thin">
            &copy; {{ $t('footer.copyright') }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
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
            to: '/',
            text: this.$t('nav.recruit')
          }
        ]
      }
    }
  }
</script>

<style scoped>
@media screen and (max-width: 860px) {
  .footer-btn {
    visibility: hidden;
  }

  .contact-footer {
    position: absolute;
  }
}

</style>
