<script setup>
import { reactive, ref, computed } from 'vue';
const step = ref(1);
const reviewers = reactive([
  {
    id: 1,
    name: "Federica",
    img: "https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/facebookUser%2Ffb_user0.webp?alt=media&token=5a53e3ef-00ca-4a55-8cfc-23b2505771c8",
    link: "https://m.facebook.com/story.php?story_fbid=pfbid0w9hiviPafsagaSx1pgcSXa3d5BMQ3sUubSXbZQCicDW5LPtoTdwdDGahoQBg7Hul&id=100001516460545",
    date: "24 marzo 2020",
    text: "Impresa professionale e competente, altamente consigliata!👆🏼",
    stars: 5,
  },
  {
    id: 2,
    name: "Pasquale",
    img: "https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/facebookUser%2Ffb_user1.webp?alt=media&token=3685fe59-52a3-4ff0-a9d2-866d1896639b",
    link: "https://m.facebook.com/story.php?story_fbid=pfbid02wusnYpSZZPogRA6wPCe9m5nVbmScTfNEyYvugCxdVrGqxgasG8kbQRuY3fGmyPffl&id=1634642801",
    date: "4 maggio 2020",
    text: "serietà nel lavoro che svolge",
    stars: 5,
  },
]);

const currentName = computed(() => {
  let name = "";
  reviewers.forEach((review) => {
    if (step.value === review.id) {
      name = review.name;
    }
  });
  return name;
});

const currentText = computed(() => {
  let text = "";
  reviewers.forEach((review) => {
    if (step.value === review.id) {
      text = review.text;
    }
  });
  return text;
});

const currentLink = computed(() => {
  let link = "";
  reviewers.forEach((review) => {
    if (step.value == review.id) {
      link = review.link;
    }
  });
  return link;
});

const currentImage = computed(() => {
  let image = "";
  reviewers.forEach((review) => {
    if (step.value === review.id) {
      image = review.img;
    }
  });
  return image;
});

const currentDate = computed(() => {
  let date = "";
  reviewers.forEach((review) => {
    if (step.value === review.id) {
      date = review.date;
    }
  });
  return date;
});

const currentStars = computed(() => {
  let stars = 0;
  reviewers.forEach((review) => {
    if (step.value === review.id) {
      stars = review.stars;
    }
  });
  return stars;
});
</script>

<template>
  <v-container>
    <div class="d-flex flex-row flex-wrap align-center justify-start">
      <v-card id="icon-color" variant="text" class="bg-grey-lighten-4" rounded="xl">
        <template v-slot:title>
          <div class="text-h6 font-weight-regular justify-space-between">
            <v-img
              lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/logos%2FFacebook.webp?alt=media&token=c15d1839-62db-4b33-8bcf-db738ec76119"
              src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/logos%2FFacebook.webp?alt=media&token=c15d1839-62db-4b33-8bcf-db738ec76119"
              width="25" height="25" aspect-ratio="16/9"></v-img>
          </div>
        </template>

        <v-window v-model="step">
          <v-window-item :value="step">
            <v-card-text>
              <div class="d-flex flex-row justify-start align-start">
                <v-avatar class="mr-3">
                  <v-img :lazy-src="currentImage" :src="currentImage" :alt="currentName"></v-img>
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

              <v-rating :model-value="currentStars" color="amber" density="compact" half-increments readonly size="small"
                class="icon-color-stars"></v-rating>

              <p class="mb-2">{{ currentText }}</p>
              <a class="link" :href="currentLink" target="_blank">Guarda su Facebook</a>
            </v-card-text>
          </v-window-item>

          <v-window-item v-model="step">
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

              <v-rating :model-value="currentStars" color="amber" density="compact" half-increments readonly size="small"
                class="icon-color-stars"></v-rating>

              <p class="mb-2">{{ currentText }}</p>
              <a class="link" :href="currentLink" target="_blank">Guarda su Facebook</a>
            </v-card-text>
          </v-window-item>
        </v-window>

        <v-card-actions>
          <v-btn v-if="step > 1" color="light-blue" density="compact" size="large" variant="text" rounded="xl" @click="step--"
            icon="mdi-arrow-left-thin" class="icon-color-button">
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn v-if="step < 2" color="light-blue" density="compact" size="large" variant="text" rounded="xl" @click="step++"
            icon="mdi-arrow-right-thin" class="icon-color-button">
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>
