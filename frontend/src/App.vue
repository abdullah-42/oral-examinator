<template>
  <div id="app">
    <!-- App-Wrapper mit Flexbox -->
    <v-app>
      <!-- Navbar -->
      <v-app-bar app dense height="55">
        <img to="/" src="./assets/logo-oral-exam1.svg" alt="Logo"
          style="height: 55px; width: auto; border-radius: 20px; cursor: pointer;" />
        <v-toolbar-title class="text-h6">Oral-Examinator</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="ma-2 nav-btn" color="orange darken-2" dark @click="goBack"><v-icon dark left>
            mdi-arrow-left
          </v-icon>Back</v-btn>
      </v-app-bar>

      <!-- Hauptinhalt -->
      <v-main class="content-wrapper">
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack() {
      const currentPath = this.$route.path;

      // Pfad in Segmente aufteilen
      const pathSegments = currentPath.split('/').filter(segment => segment);

      // Einen Abschnitt entfernen
      pathSegments.pop();

      // Zurück zum neuen Pfad navigieren
      const newPath = '/' + pathSegments.join('/');
      this.$router.push(newPath || '/'); // Fallback zur Startseite
    },
  }
};
</script>

<style>
/* App-Wrapper als Flexbox-Container */
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/* Navbar Design */
.v-app-bar {
  display: flex !important;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1) !important;
  backdrop-filter: blur(100px) !important;
  opacity: 0.96 !important;
  padding: 10px;
}

/* Flexibles Layout für den Hauptinhalt */
.content-wrapper {
  flex: 1;
  background-image: url('@/assets/logo-oral-exam2.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: auto;
  /* Scrollen nur, wenn nötig */
}


/* Button-Styling */
.nav-btn {
  text-transform: none;
  font-weight: bold;
}

.v-main {
  padding-top: 50px !important;
}
</style>
