<script>
export default {
  name: "FacebookReview",
  data() {
    return {
      step: 1,
      reviewers: [
        {
          id: 1,
          name: "Federica",
          img: "https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/fb_user0.jpg?alt=media&token=74e00704-c89d-4ecc-87e4-06683467c9c1",
          link: "https://m.facebook.com/story.php?story_fbid=pfbid0w9hiviPafsagaSx1pgcSXa3d5BMQ3sUubSXbZQCicDW5LPtoTdwdDGahoQBg7Hul&id=100001516460545",
          date: "24 marzo 2020",
          text: "Impresa professionale e competente, altamente consigliata!👆🏼",
          stars: 5,
        },
        {
          id: 2,
          name: "Pasquale",
          img: "https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/fb_user1.jpg?alt=media&token=3300d766-c0f7-49b0-971a-6d084af6848a",
          link: "https://m.facebook.com/story.php?story_fbid=pfbid02wusnYpSZZPogRA6wPCe9m5nVbmScTfNEyYvugCxdVrGqxgasG8kbQRuY3fGmyPffl&id=1634642801",
          date: "4 maggio 2020",
          text: "serietà nel lavoro che svolge",
          stars: 5,
        },
      ],
    };
  },

  computed: {
    currentName() {
      let name = "";
      this.reviewers.forEach((review) => {
        if (this.step === review.id) {
          name = review.name;
        }
      });
      return name;
    },

    currentText() {
      let text = "";
      this.reviewers.forEach((review) => {
        if (this.step === review.id) {
          text = review.text;
        }
      });
      return text;
    },

    currentLink() {
      let link = "";
      this.reviewers.forEach((review) => {
        if (this.step == review.id) {
          link = review.link;
        }
      });
      return link;
    },

    currentImage() {
      let image = "";
      this.reviewers.forEach((review) => {
        if (this.step === review.id) {
          image = review.img;
        }
      });
      return image;
    },

    currentDate() {
      let date = "";
      this.reviewers.forEach((review) => {
        if (this.step === review.id) {
          date = review.date;
        }
      });
      return date;
    },

    currentStars() {
      let stars = 0;
      this.reviewers.forEach((review) => {
        if (this.step === review.id) {
          stars = review.stars;
        }
      });
      return stars;
    },
  },
};
</script>

<template>
  <v-container>
    <div
      class="d-flex flex-row flex-wrap align-center justify-start"
      id="align-card"
    >
      <v-card
        id="icon-color"
        variant="text"
        class="bg-grey-lighten-4"
        rounded="xl"
      >
        <template v-slot:title>
          <div class="text-h6 font-weight-regular justify-space-between">
            <v-img
              lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/fb.png?alt=media&token=ae0e7284-5411-4346-9a82-fb801fabe94b"
              src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/fb.png?alt=media&token=ae0e7284-5411-4346-9a82-fb801fabe94b"
              width="25"
              height="25"
              aspect-ratio="16/9"
            ></v-img>
          </div>
        </template>

        <v-window v-model="step">
          <v-window-item :value="1">
            <v-card-text>
              <div class="d-flex flex-row justify-start align-start">
                <v-avatar class="mr-3">
                  <v-img
                    :lazy-src="currentImage"
                    :src="currentImage"
                    :alt="currentName"
                  ></v-img>
                </v-avatar>

                <div class="d-flex flex-column align-start mb-2">
                  <h6>{{ currentName }}</h6>
                  <caption class="font-weight-thin">
                    {{
                      currentDate
                    }}
                  </caption>
                </div>
              </div>

              <v-rating
                :model-value="currentStars"
                color="amber"
                density="compact"
                half-increments
                readonly
                size="small"
                class="icon-color-stars"
              ></v-rating>

              <p class="mb-2">{{ currentText }}</p>
              <a class="link" :href="currentLink" target="_blank"
                >Guarda su Facebook</a
              >
            </v-card-text>
          </v-window-item>

          <v-window-item :value="2">
            <v-card-text>
              <div class="d-flex flex-row justify-start align-start">
                <v-avatar class="mr-3">
                  <v-img :src="currentImage" :alt="currentName"></v-img>
                </v-avatar>

                <div class="d-flex flex-column align-start mb-2">
                  <h6>{{ currentName }}</h6>
                  <caption class="font-weight-thin">
                    {{
                      currentDate
                    }}
                  </caption>
                </div>
              </div>

              <v-rating
                :model-value="currentStars"
                color="amber"
                density="compact"
                half-increments
                readonly
                size="small"
                class="icon-color-stars"
              ></v-rating>

              <p class="mb-2">{{ currentText }}</p>
              <a class="link" :href="currentLink" target="_blank"
                >Guarda su Facebook</a
              >
            </v-card-text>
          </v-window-item>
        </v-window>

        <v-card-actions>
          <v-btn
            v-if="step > 1"
            color="blue"
            rounded="xl"
            variant="text"
            @click="step--"
            icon="mdi-arrow-left-thin"
            class="icon-color-button"
          >
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            v-if="step < 2"
            color="blue"
            variant="text"
            rounded="xl"
            @click="step++"
            icon="mdi-arrow-right-thin"
            class="icon-color-button"
          >
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>
