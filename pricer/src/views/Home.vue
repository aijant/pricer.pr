<template>
  <div id="home">
    <v-container
      class="py-5"
      tag="section"
    >
      <h1 class="text-left mb-6">
        {{ $t('home.title') }}
      </h1>

      <v-row>
        <v-col
          v-for="item in info"
          :key="item.id"
          class="d-inline list-img"
          cols="9"
          sm="6"
          md="4"
          @click="getDetailNews(item.id)"
        >
          <v-img
            :src="item.thumbnailUrl"
            style="max-height: 100%; max-width: 80%"
          />
          <p
            class="align-start mt-6 font-weight-medium"
            style="color: #009933"
            v-text="item.albumId"
          />
          <p
            class="font-weight-medium"
            v-text="item.title"
          />
        </v-col>
      </v-row>

      <div class="text-center">
        <v-btn
          class="ma-2 v-btn--tile"
          color="primary"
          @click="loadList"
        >
          {{ $t('home.btn') }}
        </v-btn>
      </div>
    </v-container>

    <v-container
      class="py-5"
      tag="section"
    >
      <hr>
      <h2 class="mt-12 mb-4">
        {{ $t('home.about') }}
      </h2>
      <p class="about-us">
        {{ $t('home.info') }}
      </p>
    </v-container>

    <v-container
      class="py-5"
    >
      <h1 class="text-center">
        {{ $t('service.title') }}
      </h1>
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
      <div class="text-center">
        <v-btn
          class="ma-2 v-btn--tile"
          color="primary"
          @click="openService"
        >
          {{ $t('service.btn') }}
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>

  export default {
    data: () => ({
      info: []
    }),
    computed: {
      news () {
        return this.$store.state.news.news
      },
      items () {
        return this.$t('service.data')
      }
    },
    mounted () {
      // console.log(this.$i18n.locale, this.locale)
      this.$store.dispatch('fetchNews', this.$i18n.locale)
      this.info = this.news && this.news.length > 6 ? this.news.slice(0, 6) : this.news
    },
    updated () {
      console.log(this.$i18n.locale)
      this.$store.dispatch('fetchNews', this.$i18n.locale)
    },
    methods: {
      loadList () {
        this.info = this.news
      },
      getDetailNews (id) {
        this.$router.push({ name: 'NewsDetail', params: { id: id } })
      },
      openService () {
        this.$router.push('/services')
      }
    }
  }
</script>

<style lang="scss" scoped>
 .list-img:hover {
    opacity: 0.3;
    cursor: pointer;

    p {
        color: green;
        font-weight: 900;
    }
}

.about-us {
    max-width: 427px;
}

.service {
  display: flex;
  flex-wrap: wrap;
}
</style>
