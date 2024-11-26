<template>
  <div id="app">
    <!-- App-Wrapper mit Flexbox -->
    <v-app>
      <!-- Navbar -->
      <v-app-bar app dense height="75">
        <img src="./assets/logo-oral-exam1.svg" alt="Logo"
          style="height: 70px; width: auto; padding-left: 10px; border-radius: 20px;" />
        <v-toolbar-title class="text-h6">Oral-Examinator</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to="/" class="nav-btn">Startseite</v-btn>
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
