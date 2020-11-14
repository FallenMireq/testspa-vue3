<template>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>ФИО</th>
                <th>Дата рождения</th>
                <th>Email</th>
                <th>Телефон</th>
                <th>Дистанция</th>
                <th>Сумма взноса</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.date }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.phone }}</td>
                <td>{{ user.distance }}</td>
                <td>{{ user.payment }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { computed } from 'vue';

export default {
    props: ['users'],
};
</script>

<style lang="scss" scoped>
table {
    width: 100%;
    border-collapse: collapse;

    th {
        border: 1px solid #000;
    }

    td {
        border: 1px dotted #eee;
    }

    td:first-child {
        border-left: 1px solid #000;
    }

    td:last-child {
        border-right: 1px solid #000;
    }

    tr:first-child td {
        border-top: 1px solid #000;
    }

    tr:last-child td {
        border-bottom: 1px solid #000;
    }
}
</style>
