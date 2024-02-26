<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import CallToAction from "@/components/CallToAction.vue";
import TopNav from "@/components/TopNav.vue";
import Bottom from "@/components/BottomFooter.vue";

const router = useRouter();

const services = reactive([
  {
    id: 0,
    title: "Pulizia delle aree comuni interne",
    text: "Il personale effettua le pulizie delle aree comuni interne, come i corridoi e le scale. Questo può includere la rimozione della polvere e dei detriti, la pulizia dei pavimenti, la lucidatura delle ringhiere, la pulizia dei corrimano e la pulizia dei tappeti o delle moquette se presenti.",
    icon: "mdi-numeric-1",
  },
  {
    id: 1,
    title: "Pulizia degli ingressi e delle hall",
    text: "Queste aree vengono pulite e igienizzate accuratamente, compresa la pulizia dei pavimenti, la rimozione delle impronte digitali dalle superfici, la pulizia dei vetri delle porte e delle finestre.",
    icon: "mdi-numeric-2",
  },
  {
    id: 2,
    title: "Pulizia degli ascensori",
    text: "Le pareti, il pavimento e gli interni dell'ascensore sono puliti e igienizzati regolarmente. Inoltre, gli specchi all'interno dell'ascensore vengono puliti per mantenerli lucidi e senza macchie.",
    icon: "mdi-numeric-3",
  },
  {
    id: 3,
    title: "Pulizia dei garage",
    text: "La pulizia del garage può includere la rimozione dei rifiuti, la pulizia dei pavimenti, la pulizia delle pareti e la gestione della polvere e dei detriti accumulati.",
    icon: "mdi-numeric-4",
  },
  {
    id: 4,
    title: "Pulizia delle aree esterne",
    text: "Le aree esterne come cortili, giardini o spazi verdi circostanti l'edificio vengono anch'esse pulite e mantenute. Questo può includere la pulizia delle aree pavimentate, la rimozione delle foglie, la pulizia dei bidoni della spazzatura esterni e la manutenzione delle aree verdi.",
    redirect: "Scopri di più",
    icon: "mdi-numeric-5",
  },
  {
    id: 5,
    title: "Manutenzione generale",
    text: "Oltre alla pulizia, il personale addetto alle pulizie svolge anche compiti di manutenzione generale, come la segnalazione di guasti o danni alle strutture, la sostituzione delle lampadine o l'assistenza nel mantenimento dell'ordine e dell'aspetto generale dell'edificio.",
    redirect: "Scopri di più",
    icon: "mdi-numeric-6",
  },
  {
    id: 6,
    title: "Pulizia dei bidoni dell’immondizia",
    text: "Il personale può programmare una pulizia periodica dei bidoni dell'immondizia in base alle esigenze del cliente. Può essere stabilita una pianificazione settimanale, quindicinale o mensile, a seconda delle necessità. E’ possibile anche occuparsi solo della gestione dei bidoni dell’immondizia.",
    icon: "mdi-numeric-7",
  },
]);

const routerPush = (link) => {
  return router.push(link);
}
</script>

<template>
  <TopNav />

  <v-container fluid class="d-flex justify-center header-align-center-reverse">
    <v-sheet>
      <v-img max-width="800" max-height="500"
        src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2FbestPlace_illustration.svg?alt=media&token=ba9e4b23-483c-4eec-8681-87e0bb9214f1"
        lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2FbestPlace_illustration.svg?alt=media&token=ba9e4b23-483c-4eec-8681-87e0bb9214f1"></v-img>
    </v-sheet>
    <v-sheet>
      <div class="d-flex flex-column fill-height justify-center text-white">
        <div class="text-start text-light-blue mt-5 mb-3 mr-5 ml-5">
          <h1 class="title-responsive">Pulizia Condomini</h1>
        </div>
        <div class="ma-5 text-start">
          <p class="subtitle-responsive text-light-blue-darken-4 font-weight-bold">
            La pulizia dei condomini è un processo importante per mantenere
            pulite, igienizzate e ordinate le aree comuni di un edificio
            condominiale
          </p>
        </div>
      </div>
    </v-sheet>
  </v-container>

  <v-spacer />

  <v-container>
    <h6 class="text-light-blue-darken-4">
      Queste aree includono corridoi, scale, ingressi, ascensori, garage, e
      altre aree comuni accessibili a tutti i residenti. Di seguito elenchiamo
      gli interventi di pulizia che effettuiamo nei condomini:
    </h6>
    <v-timeline side="end" align="start">
      <v-timeline-item dot-color="light-blue-darken-4" v-for="service in services" :key="service.id" :icon="service.icon">
        <div>
          <div class="text-h6 font-weight-bold text-light-blue">
            {{ service.title }}
          </div>
          <p>
            {{ service.text }}
          </p>
          <span v-if="service.id === 4">
            <div class="button-right">
              <v-btn density="compact" size="large" rounded="xl" color="light-blue" append-icon="mdi-arrow-right-thin"
                variant="outlined" class="text-subtitle-1 font-weight-bold mt-2 mb-3" @click="routerPush('giardinaggio')">
                {{ service.redirect }}
              </v-btn>
            </div>
          </span>
          <span v-if="service.id === 5">
            <div class="button-right">
              <v-btn density="compact" size="large" rounded="xl" color="light-blue" append-icon="mdi-arrow-right-thin"
                variant="outlined" class="text-subtitle-1 font-weight-bold mt-2 mb-3" @click="routerPush('manutenzioni')">
                {{ service.redirect }}
              </v-btn>
            </div>
          </span>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>

  <v-container>
    <v-alert variant="tonal" density="compact" type="warning" title="Nota bene" text="La frequenza delle pulizie e delle mansioni saranno prese di comune
    accordo con i clienti, rispettandone le necessità e il budget. In genere,
    queste pulizie vengono eseguite regolarmente, ad esempio settimanalmente o
    mensilmente, per garantire che gli spazi comuni rimangano puliti e invitanti
    per tutti i residenti.">
    </v-alert>
  </v-container>

  <CallToAction />

  <Bottom />
</template>
