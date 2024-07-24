import { createApp } from 'vue';
import App from './App.vue';

// import LoginComponent from './components/LoginComponent.vue';


const app = createApp(App);

// melakukan register component secara global
// app.component("LoginComponent", LoginComponent);

createApp(App).mount('#app')

