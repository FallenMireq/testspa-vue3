<template>
    <form @submit="submit($event)">
        <div class="field">
            <label>ФИО</label>
            <input type="text" v-model="user.name" />
        </div>
        <div class="field">
            <label>Дата рождения</label>
            <DatePicker v-model="user.date" />
        </div>
        <div class="field">
            <label>Email</label>
            <EmailInput v-model="user.email" />
        </div>
        <div class="field">
            <label>Телефон</label>
            <PhoneInput v-model="user.phone" />
        </div>
        <div class="field">
            <label>Дистанция</label>
            <select v-model="user.distance">
                <option>3</option>
                <option>5</option>
                <option>10</option>
            </select>
        </div>
        <div class="field">
            <label>Сумма взноса</label>
            <input type="number" v-model="user.payment" />
        </div>
        <div class="buttons">
            <button type="submit">OK</button>
            <button type="button" @click="clear()">Reset</button>
        </div>
    </form>
</template>

<script>
import { computed, reactive } from 'vue';
import DatePicker from './DatePicker.vue';
import EmailInput from './EmailInput.vue';
import PhoneInput from './PhoneInput.vue';

export default {
    components: {
        DatePicker,
        EmailInput,
        PhoneInput,
    },
    setup(props, { emit }) {
        const user = reactive({
            name: '',
            date: '',
            email: '',
            phone: '',
            distance: '',
            payment: '',
        });

        function submit(e) {
            e.preventDefault();
            emit('done', { ...user });
        }

        function clear() {
            user.name = '';
            user.date = '';
            user.email = '';
            user.phone = '';
            user.distance = '';
            user.payment = '';
        }

        const json = computed(() => JSON.stringify(user, null, 4));

        return { user, submit, clear, json };
    },
};
</script>

<style lang="scss" scoped>
form {
    display: flex;
    flex-flow: row wrap;

    .field {
        flex: 1 1 200px;
        margin: 5px 10px;
        padding: 5px 10px;
        text-align: left;

        label {
            display: block;
            margin: 0 0 4px;
        }
    }

    .buttons {
        flex: 1 1 100%;

        button {
            margin: 0 0 0 10px;
            &:first-child {
                margin-left: 0;
            }
        }
    }
}
</style>
