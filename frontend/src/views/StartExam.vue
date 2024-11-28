<template>
    <div class="container">
        <v-card class="card">
            <!-- Titel -->
            <v-card-title class="card-title">
                <h2 class="display-1">Oral Examinator starten</h2>
            </v-card-title>

            <!-- Textinhalt -->
            <v-card-text class="card-text">
                <h3 class="headline">{{ modul }}</h3>
                <p class="difficulty-text">{{ difficulty }}</p>
            </v-card-text>

            <!-- Start-Button -->
            <v-card-actions class="card-action">
                <v-btn class="start-btn" large rounded @click="startOralExaminator">
                    Starten
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Fragenkatalog from '../store/fragenkatalog'; // Fragenkatalog importieren

// Vuex Store und Router einrichten
const store = useStore();

const modul = computed(() => store.getters.getModul);
const difficulty = computed(() => store.getters.getDifficulty);

// Fragen aus dem Fragenkatalog laden
// const fragen = ref([]);

const loadQuestions = () => {
    // if (difficulty.value === "Leicht") {
    //     fragen.value = Fragenkatalog.dataStufe1();
    // } else if (difficulty.value === "Mittel") {
    //     fragen.value = Fragenkatalog.dataStufe2();
    // } else if (difficulty.value === "Schwer") {
    //     fragen.value = Fragenkatalog.dataStufe3();
    // } else {
    //     console.warn("Unbekannter Schwierigkeitsgrad. Verwende Standard.");
    //     fragen.value = Fragenkatalog.dataStufe2();
    // }
    const stufe1Data = Fragenkatalog;
    console.log(stufe1Data); // Gibt das gesamte Datenobjekt für Stufe 1 aus

};

// Initiale Fragen laden
loadQuestions();

// Klick-Handler
// const startOralExaminator = () => {
//     router.push('/student/examList'); // Navigiert zur ExamList
// };
</script>


<style>
/* Zentriertes Layout */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Karte-Design */
.card {
    width: 100%;
    max-width: 600px;
    padding: 2rem;
    background: #fff;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.15);
}

/* Titelstil */
.card-title {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
}

/* Textstil */
.card-text {
    color: #555;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
}

.headline {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.difficulty-text {
    font-size: 1rem;
    color: #777;
}

/* Button-Design */
.start-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #444;
    width: 100%;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 12px;
    text-transform: none;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.start-btn:hover {
    background-color: #45a049;
    color: #fff;
    box-shadow: 0 6px 16px rgba(0, 128, 0, 0.2);
}
</style>
