<template>
    <div class="container-catalog">
        <h2 style="margin-bottom: 15px; color: #fff;">Prüfungsfragen</h2>
        <v-row>
            <v-col cols="12" v-for="(frage, index) in combinedQuestionsText" :key="index">
                <v-card class="mb-3">
                    <v-card-title class=text>
                        {{ index + 1 }}. {{ frage }}
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Fragenkatalog from '../components/fragenkatalog';

const combinedQuestionsText = ref([]);

onMounted(() => {
    // Kombiniere die Fragen aus allen Stufen und extrahiere nur den Fragetext
    combinedQuestionsText.value = [
        ...Fragenkatalog.dataStufe1().fragenText,
        ...Fragenkatalog.dataStufe2().fragenText,
        ...Fragenkatalog.dataStufe3().fragenText
    ].map(fragenText => fragenText.frage); // Extrahiere nur die 'frage' Eigenschaft
});
</script>

<style scoped>
.container-catalog {
    font-family: Arial, sans-serif;
    padding: 40px;
    padding-top: 70px;
    border-radius: 25px;
    background-color: #336f36e0;
}

.mb-3 {
    border-radius: 20px;
    box-shadow: 0 2px 5px rgba(61, 61, 59, 0.6);
    margin-top: 5px;

}

.text {
    white-space: normal;
    word-wrap: break-word;
    flex: auto !important;
}
</style>
