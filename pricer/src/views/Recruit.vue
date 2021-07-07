<template>
  <section
    id="recruit"
    class="py-5"
  >
    <v-container>
      <div class="service-title">
        <heading class="font-weight-bold text-lg-h5">
          {{ $t('recruit.title') }}
          <hr class="primary mt-11">
        </heading>
        <div>
          <router-link
            to="/"
            exact
            class="text-decoration-none"
          >
            {{ $t('recruit.link.home') }}
          </router-link>
          <span class="primary--text ml-2 mr-2">&#10095;</span>
          <router-link
            to="/recruit"
            class="text-decoration-none"
          >
            {{ $t('recruit.link.recruit') }}
          </router-link>
          <router-view />
        </div>
      </div>
    </v-container>

    <v-container>
      <h1 class="text-center primary--text">
        {{ $t('recruit.info') }}
      </h1>
      <p class="text-center">
        {{ $t('recruit.content') }}
      </p>
      <v-card
        elevation="1"
        class="text-center"
      >
        {{ $t('recruit.message') }}
      </v-card>
    </v-container>
  </section>
</template>

<script>

  export default {
    components: {
      Heading: () => import('@/components/Heading')
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
