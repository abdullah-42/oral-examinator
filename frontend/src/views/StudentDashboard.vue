<template>
    <!-- Responsiver Inhalt als Gitter im 2x2-Layout -->
    <div class="container">
        <!-- Obere V-Karten -->
        <v-card class="card">
            <v-card-title class="card-title">
                <span>Prüfungen</span>
            </v-card-title>
            <v-card-subtitle class="card-subtitle">
                <span>Übersicht aller verfügbaren Prüfungen</span>
            </v-card-subtitle>
            <v-card-text class="card-text">
                <p>Hier findest du eine Auflistung aller verfügbaren Prüfungen, in denen du eingetragen bist.</p>
            </v-card-text>
            <v-card-actions class="card-action">
                <v-btn @click="redirectToExamList">PRÜFUNGEN</v-btn>
            </v-card-actions>
        </v-card>

        <v-card class=" card">
            <v-card-title class="card-title">
                <span>Fragen einsehen</span>
            </v-card-title>
            <v-card-subtitle class="card-subtitle">
                <span>Übersicht aller vorhandenen Fragen</span>
            </v-card-subtitle>
            <v-card-text class="card-text">
                <p>Hier findest du einen Überblick aller verfügbaren Fragen des aktuellen Semesters, um dich so
                    besser
                    auf die
                    mündlichen Prüfungen vorbereiten zu können.</p>
            </v-card-text>

            <v-card-actions class="card-action">
                <v-btn>FRAGENKATALOG</v-btn>
                <!-- <v-btn @click="redirectToViewFragenEinsehen">ZU DEM FRAGENKATALOG</v-btn> -->
            </v-card-actions>
        </v-card>

        <v-card class="card">
            <v-card-title class="card-title">
                <span>Meine Prüfungsergebnisse</span>
            </v-card-title>
            <v-card-subtitle class="card-subtitle">
                <span>Übersicht deiner abgeschlossenen Prüfungen</span>
            </v-card-subtitle>
            <v-card-text class="card-text">
                <p>Hier findest du einen Überblick über alle deine Prüfungsergebnisse des aktuellen Semesters.</p>
            </v-card-text>

            <v-card-actions class="card-action">
                <v-btn to="/">ERGEBNISSE</v-btn>
            </v-card-actions>
        </v-card>

        <v-card class="card">
            <v-card-title class="card-title">Feedback hinterlassen</v-card-title>
            <v-card-subtitle class="card-subtitle"></v-card-subtitle>
            <v-card-text class="card-text">Hier hast du die Möglichkeit, Feedback zu geben, falls du auf Probleme stößt
                oder
                Unterstützung benötigst.</v-card-text>
            <v-card-text class="text">
                <!-- <v-text-field class="custom-textarea" v-model="feedback.text"></v-text-field> -->
            </v-card-text>
            <v-card-actions class="card-action">

                <v-btn>Absenden</v-btn>

            </v-card-actions>
        </v-card>
        <!-- <v-snackbar v-model="snackbarSuccess" :timeout="2500"> Vielen Dank für dein Feedback!</v-snackbar> -->
    </div>
</template>

<script>
// import { ref } from 'vue';
// import Feedback from "@/model/Feedback";
// import User from "../../model/User";
// import feedbackService from "../../services/feedback.service";
// import { useAuthUserStore } from "@/stores/authUserStore";
// import {useRouter} from 'vue-router';
// import {useRoute} from 'vue-router';


// const router = useRouter();
// const route = useRoute();

// const authUserStore = useAuthUserStore();

// const feedback = ref<Feedback>({} as Feedback);
// const snackbarSuccess = ref(false);


// const sendFeedback = () => {
//   const user: User = authUserStore.user as User;
//   feedback.value.firstName = user.username;
//   feedback.value.lastName = user.email;

//   feedbackService.createFeedback(feedback.value).then(() => {
//     snackbarSuccess.value = true;
//     feedback.value = {} as Feedback;
//   });

// };

// const redirectToViewFragenEinsehen = () => {
// router.push( route.path + '/fragenEinsehen');

// }
// const redirectToDozentCourses = () => {
// router.push( route.path + '/examListStudent');
// };

export default {
    name: 'StudentDashboard',
    methods: {
        redirectToExamList() {
            this.$router.push(`/student/examList`);
        },
    },
};

</script>

<style>
.v-card {
    display: flex !important;
}

.container {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    padding: 4rem;
    height: 100vh;
}

.card {
    background: linear-gradient(145deg, rgb(var(--v-theme-cardBackground)), rgb(var(--v-theme-background)));
    border-radius: 16px;
    padding: 2.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: auto;
}

.card:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.card-title {
    color: rgb(var(--v-theme-textPrimary));
    font-weight: bold;
    font-size: 1.8rem !important;
    margin-bottom: 0.5rem;
}

.card-subtitle {
    color: rgb(var(--v-theme-textPrimary));
    font-weight: bold;
    font-size: 1.4rem !important;
    margin-bottom: 1rem;
}

.card-text {
    font-size: 1.1rem !important;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.card-action {
    display: flex;
    justify-content: end;
}

.v-btn {
    background-color: rgb(var(--v-theme-primary));
    color: white;
    padding: 1.75rem 2.5rem;
    font-weight: 600;
    border-radius: 8px;
    transition: background-color 0.3s ease, box-shadow 0.2s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.v-btn:hover {
    background-color: rgb(var(--v-theme-actionHover));
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.v-btn:active {
    background-color: rgb(var(--v-theme-textPrimary));
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    transform: scale(0.98);
}
</style>