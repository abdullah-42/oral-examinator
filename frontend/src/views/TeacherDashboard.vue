<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" fixed temporary>
            <!-- Drawer Inhalt -->
        </v-navigation-drawer>

        <v-main class="grey lighten-2">
            <v-container>
                <v-row>
                    <!-- Nur 2 Kategorien -->
                    <template v-for="n in 2" :key="n">
                        <!-- Kategorie Überschrift -->
                        <v-col class="mt-2" cols="12">
                            <strong>Category {{ n }}</strong>
                        </v-col>
                        <!-- 3 Spalten: Schwierigkeitsgrade -->
                        <v-col v-for="(difficulty, index) in difficulties" :key="`${n}-${index}`" cols="12" md="4">
                            <!-- Box mit Schwierigkeitsgrad -->
                            <v-sheet height="150" class="d-flex align-center justify-center" elevation="2"
                                @click="onDifficultyClick(difficulty)"
                                style="cursor: pointer; background-color: #f5f5f5; transition: transform 0.2s;"
                                :style="{ backgroundColor: getColorByDifficulty(difficulty) }"
                                @mouseover="hover = difficulty" @mouseleave="hover = ''"
                                :class="{ 'hover-effect': hover === difficulty }">
                                <span>{{ difficulty }}</span>
                            </v-sheet>
                        </v-col>
                    </template>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        drawer: null,
        hover: '', // Für Hover-Effekt
        difficulties: ["Leicht", "Mittel", "Schwer"], // Schwierigkeitsgrade
    }),
    methods: {
        // Klick-Handler
        onDifficultyClick(difficulty) {
            alert(`Du hast '${difficulty}' ausgewählt.`);
            // Füge hier weitere Aktionen hinzu, wie Navigation oder API-Aufruf
        },
        // Funktion zur Auswahl der Hintergrundfarbe basierend auf der Schwierigkeit
        getColorByDifficulty(difficulty) {
            switch (difficulty) {
                case "Leicht":
                    return "#81c784"; // Grün für "Leicht"
                case "Mittel":
                    return "#ffb74d"; // Orange für "Mittel"
                case "Schwer":
                    return "#e57373"; // Rot für "Schwer"
                default:
                    return "#f5f5f5"; // Standardfarbe
            }
        },
    },
};
</script>

<style>
.v-application {
    background: none !important;


}

.v-main {
    display: flex;
    justify-content: center;
    align-items: center;
}

.v-container {
    background-color: white;
    border-radius: 5px;
}

/* Hover-Effekt */
.hover-effect {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.2s, box-shadow 0.2s;
}
</style>
