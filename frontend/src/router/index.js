import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '../components/StartPage.vue';
import TeacherDashboard from '../views/TeacherDashboard.vue';
import StudentDashboard from '../views/StudentDashboard.vue';

const routes = [
    { path: '/', component: StartPage },
    { path: '/teacher', component: TeacherDashboard },
    { path: '/student', component: StudentDashboard },
    { path: '/examlist', component: ExamList },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
