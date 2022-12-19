<template>
    <div>
        <button class="add" 
        @click="$emit('click',$event)"><slot/></button>
    </div>
</template>

<script  lang="ts">
    import Vue from "vue";
    import { Component } from 'vue-property-decorator';
    @Component
    export default class Button extends Vue {
       
    }
</script>

<style scoped lang="scss">
            .add{
            display: block;
            margin-left: auto;
            margin-right: auto;
            background: rgb(138, 138, 137);
            height: 60px;
            line-height: 60px;
            width: 100px;
            color: #000;
            border-radius: 10px;
            text-align: center;
            border: none;
        }
        
</style>