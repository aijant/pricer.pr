<template>
  <section
    id="services"
    class="py-5"
  >
    <v-container>
      <div class="service-title">
        <heading class="font-weight-bold text-lg-h5">
          {{ $t('service.title') }}
          <hr class="primary mt-11">
        </heading>
        <div>
          <router-link
            to="/"
            exact
            class="text-decoration-none"
          >
            Home
          </router-link>
          <span class="primary--text ml-2 mr-2">&#10095;</span>
          <router-link
            to="/service"
            class="text-decoration-none"
          >
            Service
          </router-link>
          <router-view />
        </div>
      </div>
    </v-container>
    <v-container>
      <v-img
        alt="lead"
        class="mt-2"
        src="@/assets/img-lead.png"
      />
      <h1 class="text-center">
        {{ $t('service.subTitle') }}
      </h1>
      <p class="text-center">
        {{ $t('service.content') }}
      </p>
    </v-container>

    <v-container>
      <div class="service">
        <v-card
          v-for="(item, i) in items"
          :key="i"
          class="mx-auto v-card--flat"
          max-width="344"
        >
          <v-img
            :src="item.src"
            height="150px"
            max-width="150px"
            class="v-avatar ml-16"
          />

          <v-card-title>
            {{ item.title }}
          </v-card-title>

          <v-card-subtitle>
            {{ item.subTitle.join('/') }}
          </v-card-subtitle>
        </v-card>
      </div>
    </v-container>

    <v-container
      v-for="(item, i) in services"
      :key="i"
    >
      <v-row
        align="center"
        class="mb-5"
      >
        <v-col
          cols="12"
          md="4"
          :class="i % 2 === 0 ? 'flex-lg-row-reverse' : '' "
        >
          <v-card outlined>
            <v-img
              :src="item.url"
              height="250"
            />
          </v-card>
        </v-col>

        <v-col
          class="px-0"
          cols="12"
          md="8"
        >
          <v-card
            flat
            color="transparent"
          >
            <p class="primary--text">
              REASON / {{ i + 1 }}
            </p>
            <v-card-title>{{ item.title }}</v-card-title>

            <v-card-text>
              Te dolor consul mei, etiam molestie indoctum usu ad, qui inermis
              eleifend an. Pro iriure alienum incorrupte ex, cu diceret
              moderatius mei. Te corrumpit posidonium sit, in cum nonumy utamur.
              Usu impedit patrioque vituperatoribus ei, cu voluptua nominati
              philosophia mel. Sea at legendos percipitur, nulla dicant
              convenire ne duo. Veniam epicuri vis cu, ea pri alii ceteros
              fierent.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    components: {
      Heading: () => import('@/components/Heading')
    },
    computed: {
      ...mapState({
        services: state => state.services.services
      }),
      items () {
        return this.$t('service.data')
      }
    },
    mounted () {
      this.$store.dispatch('fetchServices')
    }
  }
</script>

<style scoped>
.service-title {
  display: flex;
  justify-content: space-between;
}
.service {
  display: flex;
  flex-wrap: wrap;
}
</style>
