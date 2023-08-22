<script>
export default {
  data() {
    return {
      step: 1,
      reviewers: [
        { id: 1, name: 'Davide', img: "src/assets/review/maps/maps_user0.png", link: 'https://goo.gl/maps/wBn1juZZXNec75mP9', date: '11 luglio 2023', text: "Mi hanno fornito un servizio eccellente e di alta qualità. Ho avuto il piacere di usufruire dei loro servizi e sono rimasto estremamente soddisfatto dell'esperienza. Consiglio vivamente Puliservice SRLS a chiunque abbia bisogno di servizi di pulizia affidabili e di qualità.", stars: 5 },
      ],
    }
  },
  computed: {
    currentName() {
      let name = '';
      this.reviewers.forEach(review => {
        if (this.step === review.id) {
          name = review.name;
        }
      });
      return name;
    },

    currentText() {
      let text = '';
      this.reviewers.forEach(review => {
        if (this.step === review.id) {
          text = review.text;
        }
      });
      return text;
    },

    currentImage() {
      let image = '';
      this.reviewers.forEach(review => {
        if (this.step === review.id) {
          image = review.img;
        }
      });
      return image;
    },

    currentLink() {
      let link = '';
      this.reviewers.forEach(review => {
        if (this.step === review.id) {
          link = review.link;
        }
      });
      return link;
    },

    currentDate() {
      let date = '';
      this.reviewers.forEach(review => {
        if (this.step === review.id) {
          date = review.date;
        }
      });
      return date;
    },

    currentStars() {
      let stars = 0;
      this.reviewers.forEach(review => {
        if (this.step === review.id) {
          stars = review.stars;
        }
      });
      return stars;
    }

  },
}
</script>

<template>
  <v-container>
    <div class="d-flex flex-row flex-wrap align-center justify-start" id="align-card">
      <v-card id="icon-color" variant="text" class="bg-grey-lighten-4" rounded="xl">

        <template v-slot:title>
          <div class="text-h6 font-weight-regular justify-space-between">
            <v-img src="../assets/maps.png" width="25" height="25" aspect-ratio="16/9"></v-img>
          </div>
        </template>

        <v-window v-model="step">
          <v-window-item :value="1">
            <v-card-text>
              <div class="d-flex flex-row justify-start align-start">
                <v-avatar class="mr-3">
                  <v-img :src="currentImage" :alt="currentName"></v-img>
                </v-avatar>

                <div class="d-flex flex-column align-start mb-2">

                  <h6>{{ currentName }}</h6>
                  <caption class="font-weight-thin">{{ currentDate }}</caption>
                </div>
              </div>

              <v-rating :model-value="currentStars" color="amber" density="compact" half-increments readonly size="small"
                class="icon-color-stars"></v-rating>

              <p class="mb-2">{{ currentText }}</p>
              <a class="link" :href="currentLink" target="_blank">Guarda su Google Maps</a>

            </v-card-text>
          </v-window-item>

        </v-window>

        <v-card-actions>
          <v-btn v-if="step > 1" color="blue" rounded="xl" variant="text" @click="step--" icon="mdi-arrow-left-thin"
            class=icon-color-button>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn v-if="step < 1" color="blue" variant="text" rounded="xl" @click="step++" icon="mdi-arrow-right-thin"
            class="icon-color-button">
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>
