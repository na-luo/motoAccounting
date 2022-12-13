<template>
    <div>
        编辑标签
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
    @Component
    export default class EditLable extends Vue {
        created () {
            console.log(this.$route.params);
            
        }
    }
</script>

<style scoped>

</style>