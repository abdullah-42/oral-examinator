<template>
    <v-dialog v-if="showResult" v-model="showResult" persistent max-width="700" scroll-strategy="none">
        <v-card class="result-card">
            <v-card-title v-if="message != null" class="result-subtitle">{{ message }}</v-card-title>
            <v-card-title class="result-title">Ergebnis</v-card-title>
            <v-card-text>
                <div>
                    <p>Ergebnis: <span :class="{ 'result-status': true, 'passed': passed, 'not-passed': !passed }">{{
                            passed ? 'Bestanden' : 'Nicht Bestanden' }}</span></p>
                    <p>Richtig beantwortete Fragen: {{ correctAnswers }}</p>
                    <p>Schwierigkeit: {{ giveStufe }}</p>
                    <p>Datum: {{ formattedDate }}</p>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" @click="goBack">Zurück</v-btn>
                <v-btn color="success" @click="retry">Erneut Versuchen</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';

export default {
    props: {
        punkteAnzahl: Number,
        gesamtFragen: Number,
        schwierigkeit: String,
        message: String,
    },
    setup() {
        const store = useStore(); // Zugriff auf den Store
        const user = computed(() => store.getters.getUser);
        return {
            user
        };
    },
    data() {
        return {
            showResult: true,
            date: new Date(),
        };
    },
    computed: {
        formattedDate() {
            return this.date.toLocaleDateString('de-DE', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });
        },
        correctAnswers() {
            return `${this.punkteAnzahl} / ${this.gesamtFragen}`;
        },
        passed() {
            return this.punkteAnzahl >= this.gesamtFragen / 2;
        },
        giveStufe() {
            return this.schwierigkeit;
        },
    },
    methods: {
        async addResult() {
            const newResult = {
                user: this.user,
                punkte: this.correctAnswers,
                status: this.passed ? 'bestanden' : 'nicht bestanden',
                datum: this.formattedDate,
                stufe: this.giveStufe,
            };

            try {
                const response = await axios.post('http://localhost:5000/api/oral-exam/results', newResult);
                console.log(response.data);
            } catch (error) {
                console.error('Error saving result:', error.response?.data || error.message);
            }
        },
        goBack() {
            this.addResult();
            this.$router.push('/student');
        },
        retry() {
            this.addResult();
            location.reload();
        },
    },
};
</script>


<style scoped>
.result-card {
    background-color: #f5f5f5;
    border: 2px solid #4caf50;
    border-radius: 10px;
}

.result-title {
    color: #4caf50;
}

.result-status {
    font-weight: bold;
}

.passed {
    color: #4caf50;
}

.not-passed {
    color: red;
}

.result-subtitle {
    color: red;
}

.v-dialog {
    z-index: 2000 !important;
}

.v-overlay-container {
    z-index: 1999 !important;
}

.v-text-field {
    pointer-events: auto !important;
    z-index: 2001 !important;
    /* Sicherstellen, dass es interaktiv ist */
}

.v-dialog__content {
    overflow: auto !important;
    max-height: 90vh;
    /* Dialog-Inhalt bleibt innerhalb des Viewports */
}
</style>
