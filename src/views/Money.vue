<template>
    <div>
        <Layout>
            <p>Money.vue</p>
        </Layout>
    </div>
</template>

<script lang="ts">

    export default {
        name:'Money',
        
    };
</script>

<style lang="scss" scoped>
    .nav-wrapper{
        border:1px solid green;
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .content{
        flex-grow: 1;
        overflow: auto;
    }
</style>