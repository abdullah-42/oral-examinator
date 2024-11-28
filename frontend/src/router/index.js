import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '../components/StartPage.vue';
import TeacherDashboard from '../views/TeacherDashboard.vue';
import StudentDashboard from '../views/StudentDashboard.vue';
import ExamList from '../views/ExamList.vue';
import StartExam from '../views/StartExam.vue';

const routes = [
    { path: '/', component: StartPage },
    { path: '/teacher', component: TeacherDashboard },
    { path: '/student', component: StudentDashboard },
    { path: '/student/examList', component: ExamList },
    { path: '/student/examList/startExam', component: StartExam },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
