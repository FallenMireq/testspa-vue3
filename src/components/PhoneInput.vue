<template>
    <!-- <input
        type="text"
        :value="modelValue"
        @input="input($event.target.value)"
    /> -->
    <input type="text" ref="inputElement" />
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import IMask from 'imask';

export default {
    props: ['modelValue'],
    setup(props, { emit }) {
        const inputElement = ref(null);

        let maskRef = null;
        const maskOptions = {
            mask: '+{7}(000)000-00-00',
        };

        onMounted(() => {
            maskRef = IMask(inputElement.value, maskOptions)
                .on('accept', () => emit('update:modelValue', '+' + maskRef.unmaskedValue));
            maskRef.unmaskedValue = props.modelValue;
        });

        onUnmounted(() => {
            maskRef.destroy();
            maskRef = null;
        });

        return { inputElement };
    },
};
</script>

<style lang="scss" scoped>
</style>
