import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBXouNvzV-wdWNvmKCxiWlKyL1fWDPMoao",
    authDomain: "vland-2e34e.firebaseapp.com",
    projectId: "vland-2e34e",
    storageBucket: "vland-2e34e.appspot.com",
    messagingSenderId: "747369448398",
    appId: "1:747369448398:web:6134e7d48551d43d8b619f",
    measurementId: "G-X50H1C16DG"
};

const appFirebase = initializeApp(firebaseConfig);
getAnalytics(appFirebase);

const app = createApp(App)
app.mount('#app')
