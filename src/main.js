// Components
import App from "./App.vue";
import firebase from "./plugins/firebase";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);
const firebaseAnalytics = createApp(firebase.analytics);
const firebaseApp = createApp(firebase.app);

registerPlugins(app);
registerPlugins(firebaseAnalytics);
registerPlugins(firebaseApp);

app.mount("#app");
