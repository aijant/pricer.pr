<template>
  <v-sheet
    :height="$vuetify.breakpoint.smAndUp ? '70vh' : '100vh'"
    color="primary"
    tile
  >
    <v-img
      src="@/assets/img-visual.jpg"
      height="100%"
    >
      <!-- gradient="to top, rgba(150, 90, 50, .85), rgba(10, 90, 30, .100)" -->
      <v-container
        fill-height
        white--text
      >
        <v-slide-x-transition appear>
          <v-col
            justify="center"
          >
            <h1
              :class="$vuetify.breakpoint.smAndUp ? 'display-3' : 'display-2'"
              class="mb-2 main-title"
            >
              {{ $t('mainTitle') }}
            </h1>
            <div class="title">
              {{ $t('subTitle') }}
            </div>
          </v-col>
        </v-slide-x-transition>
      </v-container>
    </v-img>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
    })
  }
</script>

<style lang="scss" scoped>
.main-title {
  font-weight: 600;
  text-shadow: 1px 2px 10px #64966f;
    div {
      font-weight: 700;
    }
}
.chevron-down {
  font-size: 36px !important;
  }
</style>
