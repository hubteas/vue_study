import { createApp } from 'vue'
import App from './App.vue'
import AppHeader from './components/AppHeader.vue';
import AppNav from './components/AppNav.vue';
import AppView from './components/AppView.vue';
import BoxComponent from './components/BoxComponent.vue';

const app = createApp(App);
app.component("AppHeader", AppHeader);
app.component("AppNav", AppNav);
app.component("AppView", AppView);
app.component("BoxComponent", BoxComponent);
app.mount("#app");

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
//별상관은없음