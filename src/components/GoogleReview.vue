<script setup>
import { reactive, ref, computed } from 'vue';

const step = ref(1);

const reviewers = reactive([
  {
    id: 1,
    name: "Davide",
    img: "https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/mapsUser%2Fmaps_user0.webp?alt=media&token=bcd7fd9d-12a3-4993-a85e-53247abed9ee",
    link: "https://goo.gl/maps/wBn1juZZXNec75mP9",
    date: "11 luglio 2023",
    text: "Mi hanno fornito un servizio eccellente e di alta qualità. Ho avuto il piacere di usufruire dei loro servizi e sono rimasto estremamente soddisfatto dell'esperienza.",
    stars: 5,
  },
  {
    id: 2,
    name: "Gianluigi",
    img: "https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/mapsUser%2Fmaps_user1.webp?alt=media&token=367e3ffc-b283-4563-a23f-447c98f771d4",
    link: "https://maps.app.goo.gl/Ufv6xzGFMR21Y48G6",
    date: "18 dicembre 2023",
    text: "Personale professionale e un risultato del lavoro sempre eccellente.",
    stars: 5,
  },
  {
    id: 3,
    name: "Salvatore",
    img: "https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/mapsUser%2Fmaps_user2.webp?alt=media&token=efa4b3d5-24f9-49f1-b5dd-8092906d9d29",
    link: "https://maps.app.goo.gl/4MV8DdXxtEZiz77Z9",
    date: "21 dicembre 2023",
    text: "Personale cordiale e servizio eccellente.",
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
              lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/logos%2FGoogleMaps.webp?alt=media&token=baf2bc05-521f-463d-a9e7-caee5462b9bf"
              src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/logos%2FGoogleMaps.webp?alt=media&token=baf2bc05-521f-463d-a9e7-caee5462b9bf"
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
              <a class="link" :href="currentLink" target="_blank">Guarda su Google Maps</a>
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
              <a class="link" :href="currentLink" target="_blank">Guarda su Google Maps</a>
            </v-card-text>
          </v-window-item>
        </v-window>

        <v-card-actions>
          <v-btn v-if="step > 1" color="light-blue" density="compact" size="large" rounded="xl" variant="text" @click="step--"
            icon="mdi-arrow-left-thin" class="icon-color-button">
          </v-btn>

          <v-spacer></v-spacer>
          <v-btn v-if="step < 3" color="light-blue" density="compact" size="large" rounded="xl" variant="text" @click="step++"
            icon="mdi-arrow-right-thin" class="icon-color-button">
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>
