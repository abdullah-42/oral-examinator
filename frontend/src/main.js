import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'vuetify/styles'; // Vuetify CSS
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css'; // Material Design Icons

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                colors: {
                    primary: '#66bb6a', // Frischer Grünton
                    secondary: '#a5d6a7', // Sanfter Grünton
                    background: '#81C784', // Sehr helles, fast weißes Grün
                    cardBackground: '#c8e6c9', // Heller Grünton für Card Hintergrund
                    textPrimary: '#388e3c', // Dunkler Grünton für den Haupttext
                    textSecondary: '#81c784', // Mittelgrüner Text für sekundäre Inhalte
                    actionHover: '#4caf50', // Sanfter Hover-Effekt für Aktionen
                },
            },
        },
    },
});

export default vuetify;

const app = createApp(App);
app.use(store);
app.use(router);
app.use(vuetify);
app.mount('#app');
