<script setup>
import { reactive } from "vue";
import CallToAction from "@/components/CallToAction.vue";
import TopNav from "@/components/TopNav.vue";
import Bottom from "@/components/BottomFooter.vue";

const services = reactive([
  {
    id: 0,
    title: "Carico e scarico",
    text: "Ci assumiamo la responsabilità di caricare e scaricare merci e oggetti da veicoli, magazzini o aree di stoccaggio.",
    icon: "mdi-numeric-1",
  },
  {
    id: 1,
    title: "Movimentazione di merci",
    text: "Ci occupiamo della movimentazione interna di merci o materiali all'interno di un edificio o di una struttura. Questo può includere la distribuzione delle merci da un'area di stoccaggio a scaffali.",
    icon: "mdi-numeric-2",
  },
  {
    id: 2,
    title: "Trasporto di oggetti",
    text: "Ci occupiamo del trasporto di oggetti o merci tra diverse destinazioni. Utilizziamo veicoli appositi, come furgoni o camion, per spostare attrezzature da un luogo all'altro.",
    icon: "mdi-numeric-3",
  },
  {
    id: 3,
    title: "Imballaggio",
    text: "Siamo responsabili dell'imballaggio e del confezionamento degli oggetti.",
    icon: "mdi-numeric-4",
  },
  {
    id: 4,
    title: "Assemblaggio e smontaggio",
    text: "Ci occupiamo di assemblare e smontare mobili o attrezzature.",
    icon: "mdi-numeric-5",
  },
  {
    id: 5,
    title: "Gestione del carico",
    text: "Siamo in grado di organizzare il carico all'interno del veicolo o dell'area di stoccaggio in modo efficiente ed equilibrato per garantire un trasporto sicuro e una distribuzione omogenea del peso.",
    icon: "mdi-numeric-6",
  },
  {
    id: 6,
    title: "Igiene e sicurezza",
    text: "Durante tutte queste attività, prestiamo attenzione alla sicurezza sul lavoro, utilizzando tecniche di sollevamento corrette per evitare infortuni e mantenendo l'area di lavoro pulita e sicura.",
    icon: "mdi-numeric-7",
  },
]);
</script>

<template>
  <TopNav />

  <v-container fluid class="d-flex justify-center header-align-center-reverse">
    <v-sheet>
      <v-img max-width="800" max-height="500"
        src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Fdelivery_illustration.svg?alt=media&token=075f4dbd-d168-4766-84fe-f931858ae44b"
        lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Fdelivery_illustration.svg?alt=media&token=075f4dbd-d168-4766-84fe-f931858ae44b"></v-img>
    </v-sheet>
    <v-sheet>
      <div class="d-flex flex-column fill-height justify-center text-white">
        <div class="text-start text-light-blue mt-5 mb-3 mr-5 ml-5">
          <h1 class="title-responsive">Facchinaggio</h1>
        </div>
        <div class="ma-5 text-start">
          <p class="subtitle-responsive text-light-blue-darken-4 font-weight-bold">
            Il nostro servizio di facchinaggio è un servizio di supporto
            logistico e di trasporto
          </p>
        </div>
      </div>
    </v-sheet>
  </v-container>

  <v-spacer />

  <v-container>
    <h6 class="text-light-blue-darken-4">
      Coinvolge attività di movimentazione, carico, scarico e trasporto di
      oggetti, merci o attrezzature. Di seguito elenchiamo gli interventi che
      eseguiamo in dettaglio:
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
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>

  <v-spacer />

  <v-container>
    <v-alert variant="tonal" density="compact" type="warning" title="Nota bene"
      text="La procedura fornita è descritta in termini generali, possiamo personalizzarla e apportare variazioni in base alle specifiche esigenze e budget del cliente.">
    </v-alert>
  </v-container>

  <CallToAction />

  <Bottom />
</template>
