import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state: {
        role: null,
        modul: null,
        difficulty: null,
    },
    mutations: {
        setRole(state, role) {
            state.role = role;
        },
        setModulAndDifficulty(state, payload) {
            state.modul = payload.modul;
            state.difficulty = payload.difficulty;
        },
    },
    getters: {
        getRole: (state) => state.role,
        getModul: (state) => state.modul,
        getDifficulty: (state) => state.difficulty,
    },
    plugins: [createPersistedState()],
});
