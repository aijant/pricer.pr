<template>
  <section
    id="contact"
    class="py-5"
  >
    <heading>Contact Us</heading>

    <v-container>
      <v-row>
        <v-col
          xs12
          md6
        >
          <v-form>
            <v-container pa-0>
              <v-row>
                <v-col
                  cols="12"
                  class="mb-4 grey--text"
                >
                  <h1>Please don't hesitate to get in touch.</h1>
                  If you have any questions or concerns, or if you would like to
                  request a consultation, please feel free to contact us. If
                  your request is urgent, please call us or make a note about it
                  in the "Content of inquiry" line.
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    outlined
                    label="First Name*"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    outlined
                    label="Last Name*"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    outlined
                    label="Your Email*"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Your Phone Number*"
                    outlined
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Subject"
                    outlined
                  />
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    label="Message"
                    outlined
                  />
                </v-col>

                <v-col cols="12">
                  <v-btn
                    :block="$vuetify.breakpoint.xsOnly"
                    color="primary"
                    depressed
                    x-large
                  >
                    Send Message
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-container
            fluid
            pa-0
          >
            <v-row>
              <v-col
                cols="12"
                md="6"
                class="pa-0"
              >
                <v-card-title>Mailing Address</v-card-title>
                <v-card-text>
                  <div>109/3, Turusbekova street, 106</div>
                  <div>Bishkek</div>
                  <div>Kyrgyzstan</div>
                </v-card-text>
              </v-col>

              <v-col
                cols="12"
                md="6"
                class="pa-0"
              >
                <v-card-title>Contact Info</v-card-title>
                <v-card-text>
                  <div>+996 (312) 988999</div>
                  <div>
                    <a href="#">contact@gmail.com</a>
                  </div>
                  <div>
                    <a href="#">@pricer.kg</a>
                  </div>
                </v-card-text>
              </v-col>

              <v-col cols="12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6996653.320726327!2d-104.56654057311077!3d31.100430144601546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas!5e0!3m2!1sen!2sus!4v1563207206020!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  frameborder="0"
                  style="border:0"
                  allowfullscreen
                />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Contact',
      meta: [
        {
          name: 'description',
          content: 'Customized vue-cli templates for Vue and Vuetify'
        }
      ]
    },

    components: {
      Heading: () => import('@/components/Heading')
    }
  }
</script>
