<template>
    <form @submit="submit($event)">
        <div :class="{ field: true, 'field_invalid': !validation.name }">
            <label>ФИО</label>
            <input type="text" v-model="user.name" />
        </div>
        <div :class="{ field: true, 'field_invalid': !validation.date }">
            <label>Дата рождения</label>
            <DatePicker v-model="user.date" />
        </div>
        <div :class="{ field: true, 'field_invalid': !validation.email }">
            <label>Email</label>
            <EmailInput v-model="user.email" />
        </div>
        <div :class="{ field: true, 'field_invalid': !validation.phone }">
            <label>Телефон</label>
            <PhoneInput v-model="user.phone" />
        </div>
        <div :class="{ field: true, 'field_invalid': !validation.distance }">
            <label>Дистанция</label>
            <select v-model="user.distance">
                <option>3</option>
                <option>5</option>
                <option>10</option>
            </select>
        </div>
        <div :class="{ field: true, 'field_invalid': !validation.payment }">
            <label>Сумма взноса</label>
            <input type="number" v-model="user.payment" />
        </div>
        <div class="buttons">
            <button type="submit" :disabled="!formValid">OK</button>
            <button type="button" @click="clear()">Reset</button>
        </div>
    </form>
</template>

<script>
import { computed, reactive, watchEffect } from 'vue';
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
            if (!formValid.value) {
                return;
            }
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

        const validation = reactive({
            name: computed(() => !!user.name),
            date: computed(() => !!user.date),
            email: computed(() => !!user.email && /^.+@.+\..+$/.test(user.email)),
            phone: computed(() => !!user.phone && user.phone.length === 12),
            distance: computed(() => !!user.distance),
            payment: computed(() => !!user.payment && /^\d+$/.test(user.payment)),
        });

        const formValid = computed(() => [
            validation.name,
            validation.date,
            validation.email,
            validation.phone,
            validation.distance,
            validation.payment,
        ].every(x => x));

        return { user, validation, formValid, submit, clear, json };
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

        label::after {
            content: ' \1f5f8';
            color: #0a0;
        }

        &_invalid label::after {
            content: ' \2717';
            color: #a00;
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
