import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state: {
        role: null,
        user: null,
        modul: null,
        difficulty: null,
    },
    mutations: {
        setRole(state, role) {
            state.role = role;
        },
        setUser(state, user) {
            state.user = user;
        },
        setModulAndDifficulty(state, payload) {
            state.modul = payload.modul;
            state.difficulty = payload.difficulty;
        },
    },
    getters: {
        getRole: (state) => state.role,
        getUser: (state) => state.user,
        getModul: (state) => state.modul,
        getDifficulty: (state) => state.difficulty,
    },
    plugins: [createPersistedState()],
});
