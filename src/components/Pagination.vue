<template>
    <div>
        <a v-if="page > 1" @click="go(page - 1)">prev</a>
        <a
            v-for="x in Math.ceil(total / step)"
            :key="x"
            @click="go(x)"
            :class="{ active: x == page }"
            >{{ x }}</a
        >
        <a v-if="total > page * step" @click="go(page + 1)">next</a>
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

a {
    flex: 0 0 auto;
    padding: 5px 10px;
    border-radius: 5px;
    background: #eee;

    &.active {
        background: #ccc;
    }
}

a:not(:first-child) {
    margin-left: 15px;
}
</style>
