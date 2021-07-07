<template>
  <section
    id="contactUs"
    class="py-5"
  >
    <v-container>
      <div class="service-title">
        <heading class="font-weight-bold text-lg-h5">
          {{ $t('contactUs.title') }}
          <hr class="primary mt-11">
        </heading>
        <div>
          <router-link
            to="/"
            exact
            class="text-decoration-none"
          >
            {{ $t('contactUs.link.home') }}
          </router-link>
          <span class="primary--text ml-2 mr-2">&#10095;</span>
          <router-link
            to="/contactUs"
            class="text-decoration-none"
          >
            {{ $t('contactUs.link.contactUs') }}
          </router-link>
          <router-view />
        </div>
      </div>
    </v-container>

    <v-container>
      <h1 class="text-center primary--text">
        {{ $t('contactUs.info') }}
      </h1>
      <p class="text-center">
        {{ $t('contactUs.content') }}
      </p>
      <p class="text-center">
        <strong>{{ $t('contactUs.tel') }}</strong>
      </p>
      <p class="text-center">
        {{ $t('contactUs.time') }}
      </p>
      <hr class="dark mt-10">
    </v-container>

    <v-container>
      <v-row>
        <v-col cols="4">
          <v-subheader> {{ $t('contactUs.fullName') }}</v-subheader>
        </v-col>
        <v-col cols="8">
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            placeholder="Jonh Smith"
            required
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-subheader> {{ $t('contactUs.companyName') }}</v-subheader>
        </v-col>
        <v-col cols="8">
          <v-text-field
            ref="companyName"
            v-model="companyName"
            :rules="[() => !!companyName || 'This field is required']"
            placeholder="Sample Company Co., Ltd."
            required
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-subheader> {{ $t('contactUs.email') }}</v-subheader>
        </v-col>
        <v-col cols="8">
          <v-text-field
            ref="email"
            v-model="email"
            :rules="[() => !!email || 'This field is required']"
            placeholder="sample@pricer.co.jp"
            required
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-subheader> {{ $t('contactUs.phone') }}</v-subheader>
        </v-col>
        <v-col cols="8">
          <v-text-field
            ref="phone"
            v-model="phone"
            :rules="[() => !!phone || 'This field is required']"
            placeholder="999000888"
            required
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-subheader> {{ $t('contactUs.contentOfInquiry') }}</v-subheader>
        </v-col>
        <v-col cols="8">
          <v-textarea
            ref="contentOfInquiry"
            v-model="contentOfInquiry"
            :rules="[() => !!contentOfInquiry || 'This field is required']"
            placeholder="Your message. . ."
            required
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-subheader> {{ $t('contactUs.confirmation.title') }}</v-subheader>
        </v-col>
        <v-col cols="8">
          <v-textarea
            background-color="grey lighten-2"
            color="cyan"
            :value="`${$t('contactUs.confirmation.content')}`"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4" />
        <v-col cols="8">
          <v-checkbox
            v-model="isAgree"
            :label="`${$t('contactUs.isAgree')}`"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4" />
        <v-col cols="8">
          <v-btn
            color="primary"
            class="v-btn--tile"
            to="/contactUs"
          >
            {{ $t('contactUs.submit') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>

  export default {
    components: {
      Heading: () => import('@/components/Heading')
    },
    data: () => ({
      name: null,
      companyName: null,
      email: null,
      phone: null,
      contentOfInquiry: null,
      isAgree: false
    })

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
