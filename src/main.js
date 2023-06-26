// Components
import App from './App.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from  "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7sOv5hN1bj2B25lkoEowRMfZREVMTNwQ",
  authDomain: "impresa-di-pulizie.firebaseapp.com",
  projectId: "impresa-di-pulizie",
  storageBucket: "impresa-di-pulizie.appspot.com",
  messagingSenderId: "487930114231",
  appId: "1:487930114231:web:84dc5f47db77fb5e835d32"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.use(firebase).mount('#app')