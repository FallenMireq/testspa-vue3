<template>
    <!-- <input
        type="date"
        :value="modelValue"
        @input="input($event.target.value)"
    /> -->
    <DatePicker
        :modelValue="modelValue"
        @update:modelValue="input($event)"
        :valueType="'format'"
        :format="'DD.MM.YYYY'"
    />
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/locale/ru';

export default {
    components: {
        DatePicker,
    },
    props: ['modelValue'],
    setup(props, { emit }) {
        function input(value) {
            emit('update:modelValue', value);
        }

        return { input };
    },
};
</script>

<style lang="css" src="vue2-datepicker/index.css">
</style>
