<template>
    <div class="container-catalog">
        <h2 style="margin-bottom: 15px; color: #fff;">Prüfungsfragen</h2>
        <v-row>
            <v-col cols="12" v-for="(item, index) in combinedQuestions" :key="index">
                <v-card class="mb-3">
                    <v-card-title class="text">
                        {{ index + 1 }}. {{ item.frage }}
                    </v-card-title>
                    <v-card-subtitle style="white-space: wrap;">
                        Schlüsselkeys: <strong>{{ item.loesungen }}</strong>
                    </v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import Fragenkatalog from '../components/fragenkatalog';

const combinedQuestions = ref([]);

onMounted(() => {
    // Kombiniere die Fragen und Lösungen aus allen Stufen
    const fragenDataStufe1 = Fragenkatalog.dataStufe1();
    const fragenDataStufe2 = Fragenkatalog.dataStufe2();
    const fragenDataStufe3 = Fragenkatalog.dataStufe3();

    combinedQuestions.value = [
        ...fragenDataStufe1.fragenText.map((item, index) => ({
            frage: item.frage,
            loesungen: fragenDataStufe1.stichpunkte[index]?.loesungen
        })),
        ...fragenDataStufe2.fragenText.map((item, index) => ({
            frage: item.frage,
            loesungen: fragenDataStufe2.stichpunkte[index]?.loesungen
        })),
        ...fragenDataStufe3.fragenText.map((item, index) => ({
            frage: item.frage,
            loesungen: fragenDataStufe3.stichpunkte[index]?.loesungen
        }))
    ];
});
</script>


<style>
.container-catalog {
    font-family: Arial, sans-serif;
    padding: 40px;
    padding-top: 70px;
    border-radius: 25px;
    background-color: #336f36e0;
    width: 90%;
}

.mb-3 {
    display: flex;
    flex-direction: column;
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
