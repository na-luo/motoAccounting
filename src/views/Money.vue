<template>
    <div>
        <Layout class-prefix="xxx">
            <Tags></Tags>
            <Type></Type>
            <NumberPad></NumberPad>
        </Layout>
    </div>
</template>

<script lang="ts">

    export default {
        name:'Money',
        
    };
</script>

<style lang="scss" scoped>
      @import "@/assets/style/helper.scss";
      .xxx-content{
        border: 10px solid blue;
      }


</style>