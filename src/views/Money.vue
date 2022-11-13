<template>
  <div>
    <Layout class-prefix="layout">
      <Tags :data-source.sync="tags"></Tags>
      <Types></Types>
      <NumberPad></NumberPad>
    </Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "Money",
  data () {
    return {
      tags:['衣','食','住','行']
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
.layout-content {
  border: 10px solid blue;
}
</style>