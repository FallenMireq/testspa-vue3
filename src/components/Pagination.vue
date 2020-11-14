<template>
    <div>
        <span v-if="page > 1" @click="go(page - 1)">prev</span>
        <span
            v-for="x in Math.ceil(total / step)"
            :key="x"
            @click="go(x)"
            :class="{ active: x == page }"
            >{{ x }}</span>
        <span v-if="total > page * step" @click="go(page + 1)">next</span>
    </div>
</template>

<script>
export default {
    props: ['total', 'page', 'step'],
    setup(props, { emit }) {
        function go(n) {
            emit('go', n);
        }

        return { go };
    },
};
</script>

<style lang="scss" scoped>
div {
    margin-top: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    user-select: none;
}

span {
    flex: 0 0 auto;
    padding: 5px 10px;
    border-radius: 5px;
    background: #eee;
    cursor: pointer;

    &.active {
        background: #ccc;
    }
}

span:not(:first-child) {
    margin-left: 15px;
}
</style>
