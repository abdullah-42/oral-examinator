<template>
    <div class="container">
        <v-card class="card flex-column">
            <!-- Titel -->
            <v-card-title class="card-title">
                <h2 class="display-1">Oral Examinator starten</h2>
            </v-card-title>

            <!-- Textinhalt -->
            <v-card-text class="card-text">
                <h3 class="headline">{{ modul }}</h3>
                <p class="difficulty-text">Stufe: {{ difficulty }}</p>
                <p class="difficulty-text">Dauer: {{ timer }}min</p>
            </v-card-text>

            <div class="input-user">
                <input type="text" v-model="user" placeholder="Benutzename" />
            </div>

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
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Fragenkatalog from '../components/fragenkatalog';

const store = useStore();
const router = useRouter();

const modul = computed(() => store.getters.getModul);
const difficulty = computed(() => store.getters.getDifficulty);
const timer = ref(0);
const user = ref('');

onMounted(() => {
    loadQuestions();
});

const loadQuestions = () => {
    if (difficulty.value === "Leicht") {
        timer.value = Fragenkatalog.dataStufe1().duration / 60;
    } else if (difficulty.value === "Mittel") {
        timer.value = Fragenkatalog.dataStufe2().duration / 60;
    } else if (difficulty.value === "Schwer") {
        timer.value = Fragenkatalog.dataStufe3().duration / 60;
    }
};

const startOralExaminator = () => {
    if (user.value == '') {
        user.value = 'Anonym';
    }
    store.commit('setUser', user.value);
    router.push('/student/examList/startExam/oralExam');
};

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
    padding: 2rem !important;
    background: #fff;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
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
