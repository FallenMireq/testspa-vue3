<template>
    <input
        type="email"
        :value="modelValue"
        @input="input($event.target.value)"
    />
</template>

<script>
export default {
    props: ['modelValue'],
    setup(props, { emit }) {
        function input(e) {
            emit('update:modelValue', e);
        }

        return { input };
    },
};
</script>

<style lang="scss" scoped>
</style>
