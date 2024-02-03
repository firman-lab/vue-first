import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';

// const globalOptions = {
//     mode: 'international',
// };

const app = createApp(App);
app.use(VueTelInput); // Define default global options here (optional)
app.mount('#app');