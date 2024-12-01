<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12">
                <v-card class="results-container">
                    <v-card-title class="headline">Prüfungsergebnisse</v-card-title>

                    <!-- Ergebnisse Tabelle -->
                    <v-data-table v-if="results.length" :headers="tableHeaders" :items="results" class="elevation-1"
                        dense :items-per-page="results.length" item-value="datum" hide-default-footer>
                        <!-- Status-Spalte -->
                        <template v-slot:item-status="{ item }">
                            <v-chip :color="item.status === 'bestanden' ? 'green' : 'red'" class="text-uppercase"
                                size="small" label>
                                {{ item.status }}
                            </v-chip>
                        </template>
                        <!-- Datum-Spalte -->
                        <template v-slot:item-datum="{ item }">
                            <span>{{ item.datum }}</span>
                        </template>
                    </v-data-table>

                    <!-- Wenn keine Ergebnisse -->
                    <v-alert v-if="results.length === 0" type="info" class="mt-4" :value="true">
                        No results available.
                    </v-alert>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            results: [], // Hier speichern wir die abgerufenen Ergebnisse
            tableHeaders: [
                { title: 'User', align: 'center', value: 'user', },
                { title: 'Punkte', align: 'center', value: 'punkte' },
                { title: 'Status', align: 'center', value: 'status' },
                { title: 'Datum', align: 'center', value: 'datum' },
                { title: 'Level', align: 'center', value: 'stufe' },
            ],
        };
    },
    created() {
        this.fetchResults();  // Ergebnisse beim Erstellen der Komponente abrufen
    },
    methods: {
        async fetchResults() {
            try {
                const response = await axios.get('http://localhost:5000/api/oral-exam/results');
                this.results = response.data; // Setze die erhaltenen Ergebnisse
            } catch (error) {
                console.error('Error fetching results:', error.response?.data || error.message);
            }
        },
    },
};
</script>

<style scoped>
.results-container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #fff;
}

/* Optional: Custom styles for the page */
.v-data-table {
    background-color: #fafafa;
}

.v-card-title {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 10px;
}

/* Style für v-chip - Bestanden und nicht Bestanden */
.v-chip {
    text-transform: uppercase;
}

.v-alert {
    margin-top: 20px;
    font-size: 16px;
}
</style>
