<template>
  <v-container class="ma-16">
    <v-row
      class="mb-6"
      justify="center"
      no-gutters
    >
      <v-col
        v-for="item in currentNew"
        :key="item.id"
        cols="8"
        sm="12"
        class="col-md-5"
      >
        <div class="list-banner">
          <v-banner
            outlined
          >
            <p class="text--disabled mt-5">
              {{ item.id + '1.01.2020' }}
            </p>
            <h2 class="mb-8">
              {{ item.title }}
            </h2>
          </v-banner>
          <p class="mt-16">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto voluptatibus facere commodi non dolorum, cumque unde accusamus recusandae nostrum. Nemo perspiciatis exercitationem illum debitis iusto aut quae nulla consequuntur esse!
          </p>
          <v-img
            :src="item.thumbnailUrl"
            style="max-height: 100%; max-width: 80%"
          />
        </div>
      </v-col>
      <v-col
        cols="4"
        md="4"
        class="ml-16"
      >
        <h4 class="text-body-1 pb-3">
          {{ $t('news.subTitle') }}
        </h4>
        <v-card
          v-for="item in info"
          :key="item.id"
          class="mb-10 pa-2"
          max-width="50%"
          outlined
          tile
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-img
                :src="item.thumbnailUrl"
              />
              <div class="text-overline primary--text">
                {{ item.id + '1.01.2020' }}
              </div>
              <p>
                {{ item.title }}
              </p>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <div>
          <v-btn
            class="v-btn--tile v-size--large"
            max-width="292px"
            color="primary"
            @click="loadList"
          >
            {{ $t('news.btn') }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      currentNew: [],
      info: []
    }),
    computed: {
      news () {
        return this.$store.state.news.news
      }
    },
    mounted () {
      this.$store.dispatch('fetchNews')
      this.currentNew = this.news.filter(item => item.id === +this.$route.params.id)
      this.info = this.news && this.news.length > 3 ? this.news.slice(0, 3) : this.news
    },
    methods: {
      loadList () {
        this.info = this.news
      }
    }
  }
</script>
<style lang="scss" scoped>
.list-banner {
    border-top: solid 4px #009933;
}
</style>
