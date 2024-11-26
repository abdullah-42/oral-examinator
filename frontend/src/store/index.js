import { createStore } from 'vuex';

export default createStore({
    state: {
        role: null,
    },
    mutations: {
        setRole(state, role) {
            state.role = role;
        },
    },
    getters: {
        getRole: (state) => state.role,
    },
});
