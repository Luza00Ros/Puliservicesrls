// Components
import App from "./App.vue";
import firebase from "./plugins/firebase";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

registerPlugins(app);

app.use(firebase.app).use(firebase.analytics).mount("#app");
