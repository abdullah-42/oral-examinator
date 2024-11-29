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

export default {
    props: {
        punkteAnzahl: Number,
        gesamtFragen: Number,
        schwierigkeit: String,
        message: String,
    },
    data() {
        return {
            showResult: true,
            date: new Date(),
            feedback: '', // Feedback-Datenfeld hinzufügen
            ergebnisse: [], // hilfe : dass selbe mit dem export soll auch mit diesem array geschehen 
        }
    },
    computed: {
        formattedDate() {
            return this.date.toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        },
        correctAnswers() {
            return `${this.punkteAnzahl} / ${this.gesamtFragen}`;
        },
        passed() {
            return this.punkteAnzahl >= this.gesamtFragen / 2;
        },
        giveStufe() {
            return this.schwierigkeit;
        }
    },
    methods: {

        addResult() {
            // Erstellen des neuen Ergebnisses
            const newResult = {
                punkte: this.correctAnswers,
                status: this.passed ? 'bestanden' : 'nicht bestanden',
                datum: this.formattedDate,
                stufe: this.giveStufe,
                feedback: this.feedback,
            };

            // Hinzufügen des neuen Ergebnisses zum `ergebnisse`-Array
            this.ergebnisse.push(newResult);

            console.log(this.ergebnisse); // Zum Testen, ob das Array aktualisiert wird
        },


        goBack() {
            // Hier kannst du das Feedback speichern oder andere Aktionen ausführen, bevor du zur vorherigen Seite zurückgehst
            console.log('Feedback:', this.feedback);
            this.addResult();
            this.$router.push('/student');
        },
        retry() {
            // Hier kannst du das Feedback speichern oder andere Aktionen ausführen, bevor du die Seite neu lädst
            this.addResult();
            console.log('Feedback:', this.feedback);
            location.reload()
        },
    }
}
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
</style>
