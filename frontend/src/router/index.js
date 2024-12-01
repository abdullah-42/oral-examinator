import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '../components/StartPage.vue';
import TeacherDashboard from '../views/TeacherDashboard.vue';
import StudentDashboard from '../views/StudentDashboard.vue';
import ExamList from '../views/ExamList.vue';
import StartExam from '../views/StartExam.vue';
import OralExam from '../views/OralExam.vue';
import ExamCatalog from '@/views/ExamCatalog.vue';
import ExamResults from '@/views/ExamResults.vue';

const routes = [
    { path: '/', component: StartPage },
    { path: '/teacher', component: TeacherDashboard },
    { path: '/student', component: StudentDashboard },
    { path: '/student/examCatalog', component: ExamCatalog },
    { path: '/student/examResults', component: ExamResults },
    { path: '/student/examList', component: ExamList },
    { path: '/student/examList/startExam', component: StartExam },
    { path: '/student/examList/startExam/oralExam', component: OralExam },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
