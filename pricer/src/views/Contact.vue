<template>
  <section
    id="contact"
    class="py-5"
  >
    <v-container>
      <div class="service-title">
        <heading class="font-weight-bold text-lg-h5">
          {{ $t("about.title") }}
          <hr class="primary mt-11">
        </heading>
        <div>
          <router-link
            to="/"
            exact
            class="text-decoration-none"
          >
            {{ $t("about.link.home") }}
          </router-link>
          <span class="primary--text ml-2 mr-2">&#10095;</span>
          <router-link
            to="/contact"
            class="text-decoration-none"
          >
            {{ $t("about.link.contact") }}
          </router-link>
          <router-view />
        </div>
      </div>
    </v-container>

    <v-container>
      <v-list flat>
        <v-list-item-group color="indigo">
          <v-list-item>
            <v-list-item-content style="display: contents;">
              <v-list-item-title>
                {{ $t("about.info.companyName.key") }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t("about.info.companyName.value") }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <hr class="dark mt-1">
          <v-list-item>
            <v-list-item-content style="display: contents;">
              <v-list-item-title>
                {{ $t("about.info.establishmentDate.key") }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t("about.info.establishmentDate.value") }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <hr class="dark mt-1">
          <v-list-item>
            <v-list-item-content style="display: contents;">
              <v-list-item-title>
                {{ $t("about.info.CEO.key") }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t("about.info.CEO.value") }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <hr class="dark mt-1">
          <v-list-item>
            <v-list-item-content style="display: contents;">
              <v-list-item-title>
                {{ $t("about.info.numberofStaff.key") }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t("about.info.numberofStaff.value") }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <hr class="dark mt-1">
          <v-list-item>
            <v-list-item-content style="display: contents;">
              <v-list-item-title>
                {{ $t("about.info.businessDescription.key") }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t("about.info.businessDescription.value") }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <hr class="dark mt-1">
          <v-list-item>
            <v-list-item-content style="display: contents;">
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                  class="pa-0"
                >
                  {{ $t("about.info.location.key") }}
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                  class="pa-0"
                >
                  {{ $t("about.info.location.value") }}
                </v-col>

                <v-col
                  cols="12"
                  class="v-calendar-daily__interval"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6996653.320726327!2d-104.56654057311077!3d31.100430144601546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas!5e0!3m2!1sen!2sus!4v1563207206020!5m2!1sen!2sus"
                    width="80%"
                    height="400"
                    frameborder="0"
                    style="border:0"
                  />
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
          <hr class="dark mt-1">
          <v-list-item>
            <v-list-item-content style="display: contents;">
              <v-list-item-title>
                {{ $t("about.info.phoneNumber.key") }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t("about.info.phoneNumber.value") }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <hr class="dark mt-1">
          <v-list-item>
            <v-list-item-content style="display: contents;">
              <v-list-item-title>
                {{ $t("about.info.socialNetworks.key") }}
              </v-list-item-title>
              <v-list-item-subtitle>
                <a
                  href="https://www.instagram.com/pricer_bishkek"
                  target="_blank"
                >
                  <v-icon class="pink--text">mdi-instagram</v-icon></a>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <hr class="dark mt-1">
          <v-list-item>
            <v-list-item-content style="display: contents;">
              <v-list-item-title>
                {{ $t("about.info.participatingOrganizations.key") }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t("about.info.participatingOrganizations.value") }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <hr class="dark mt-1">
          <v-list-item>
            <v-list-item-content style="display: contents;">
              <v-list-item-title>
                {{ $t("about.info.history.key") }}
              </v-list-item-title>
              <v-list-item-subtitle>
                - {{ $t("about.info.history.value") }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <hr class="dark mt-1">
        </v-list-item-group>
      </v-list>
    </v-container>
  </section>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Contact'
    },

    components: {
      Heading: () => import('@/components/Heading')
    }
  }
</script>

<style lang="scss" scoped>
.service-title {
  display: flex;
  justify-content: space-between;
}
.service {
  display: flex;
  flex-wrap: wrap;
}
</style>
