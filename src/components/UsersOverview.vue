<template>
    <div>
        <UsersTable class="app__users-table" :users="pagedUsers" />
        <Pagination :page="page" :total="total" :step="step" @go="go($event)" />
    </div>
</template>

<script >
import UsersTable from './UsersTable.vue';
import Pagination from './Pagination.vue';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
    components: {
        UsersTable,
        Pagination,
    },
    setup() {
        const page = ref(1);
        const step = ref(5);
        const store = useStore();
        const users = computed(() => store.getters.users);
        const total = computed(() => users.value.length);
        const pagedUsers = computed(() =>
            users.value.slice(
                (page.value - 1) * step.value,
                page.value * step.value
            )
        );

        function go(n) {
            page.value = n;
        }

        return { pagedUsers, page, step, total, go };
    },
};
</script>

<style lang="scss">
</style>
