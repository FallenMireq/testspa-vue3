<template>
    <input
        type="date"
        :value="modelValue"
        @input="input($event.target.value)"
    />
</template>

<script>
export default {
    props: ['modelValue'],
    setup(props, { emit }) {
        function input(value) {
            emit('update:modelValue', value);
        }

        return { input };
    },
};
</script>

<style lang="scss" scoped>
</style>
