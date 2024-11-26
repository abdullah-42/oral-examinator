<template>
  <div class="flex-column">
    <!-- Willkommen -->
    <header class="hero-section">
      <v-card class="welcome-card">
        <h1>Willkommen bei Oral Examinator</h1>
        <p>
          Bereite dich effektiv auf deine mündlichen Prüfungen im Fach Datenmanagement vor – mit Simulationen, die auf
          die Lehrpläne der THM abgestimmt sind.
        </p>
      </v-card>
    </header>

    <!-- Combined Bereich -->
    <div class="combined">
      <!-- Linke Seite: Features -->
      <section class="features-section">
        <v-card class="features-card">
          <h2>Was bietet der Oral Examinator?</h2>
          <div class="features">
            <v-card class="feature">
              <h3>Realitätsnahe Simulationen</h3>
              <p>Trainiere unter Bedingungen, die echten Prüfungssituationen nachempfunden sind.</p>
            </v-card>
            <v-card class="feature">
              <h3>Interaktive Lernkontrollen</h3>
              <p>
                Überprüfe dein Verständnis mit interaktiven Aufgaben und erhalte sofortiges Feedback zu deinen Lösungen.
              </p>
            </v-card>
            <v-card class="feature">
              <h3>Flexible Zeitgestaltung</h3>
              <p>Übe wann immer es in deinen Zeitplan passt – 24/7, ganz nach deinem eigenen Rhythmus.</p>
            </v-card>
          </div>
        </v-card>
      </section>

      <!-- Rechte Seite: Rollenwahl und CTA -->
      <div class="right">
        <div class="login-container">
          <div class="login-title">
            <h2>Bitte wähle deine Rolle</h2>
          </div>
          <div class="form-container">
            <button class="green-button" @click="selectRole('teacher')">Lehrer</button>
            <button class="green-button" @click="selectRole('student')">Schüler</button>
          </div>
        </div>
        <section class="cta-section">
          <v-card class="cta-card">
            <h2>Bist du bereit, deine Prüfungsvorbereitung auf das nächste Level zu bringen?</h2>
            <button class="green-button" @click="redirectToViewDashStudent">Jetzt loslegen</button>
          </v-card>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartPage',
  methods: {
    selectRole(role) {
      this.$store.commit('setRole', role);
      this.$router.push(`/${role}`);
    },
    redirectToViewDashStudent() {
      this.$router.push('/examlist');
    },
  },
};
</script>

<style scoped>
/* Flexibles Layout */
.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
}

/* Combined Bereich */
.combined {
  display: flex;
  gap: 2rem;
  width: 100%;
}

/* Linke Seite passt sich flexibel an */
.features-section {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Rechte Seite mit fixer Breite */
.right {
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1.5rem;
  padding: 0rem;
}

/* Allgemeine Kartenstile */
.welcome-card,
.features-card,
.cta-card {
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: rgb(var(--v-theme-cardBackground));
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: auto;
  border-radius: 35px;
}

/* Feature Karten */
.feature {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  text-align: center;
  background-color: #f8f8f8;
  transition: background-color 0.3s ease;
  border-radius: 10px;
}

.feature:hover {
  background-color: #dfede0;
}

/* Login-Container */
.login-container {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 2rem;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  background-color: rgb(var(--v-theme-cardBackground));
}

.form-container {
  display: flex;
  justify-content: center;
  gap: 40px
}

/* Buttons */
.green-button {
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 0.5rem 0;
}

.green-button:hover {
  background-color: #45a049;
}
</style>
