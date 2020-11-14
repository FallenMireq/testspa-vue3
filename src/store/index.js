import { createStore } from 'vuex';

export default createStore({
    state: {
        users: [],
        nextUserId: 0
    },
    getters: {
        users: state => state.users
    },
    mutations: {
        addUser(state, user) {
            const id = state.nextUserId++;
            state.users = state.users.concat({
                ...user,
                id
            });
        },
        setUsers(state, users) {
            state.users = [...users];
            state.nextUserId =
                users.reduce((acc, x) => Math.max(acc, x.id), 0) + 1;
        }
    },
    actions: {
        addUser({ commit }, user) {
            commit('addUser', user);
        },
        async loadUsers({ commit }, url) {
            let data = await (await fetch(url)).json();
            commit('setUsers', data.users);
        }
    },
    modules: {}
});
