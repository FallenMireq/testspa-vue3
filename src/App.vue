<template>
    <UserForm @done="formCompleted($event)" ref="form" />
    <UsersOverview class="app__users-overview" />
</template>

<script>
import UserForm from './components/UserForm.vue';
import UsersOverview from './components/UsersOverview.vue';
import { computed, method, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'App',
    components: {
        UserForm,
        UsersOverview,
    },
    setup(props, q) {
        const store = useStore();
        store.dispatch('loadUsers', '/users.json');

        const form = ref(null);
        function formCompleted(user) {
            store.dispatch('addUser', user);
            form.value.clear();
        }

        return { form, formCompleted };
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.app__users-overview {
    margin-top: 10px;
}
</style>
