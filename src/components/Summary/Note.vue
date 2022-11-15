<template>
    <div>
        <div class="note">
                    <span>备注:</span>
                    <input type="text" 
                    v-model="value"
                    placeholder="在这里输入备注">
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch,Prop } from 'vue-property-decorator';
    @Component
    export default class Note extends Vue {
        value='';
        onInput(event:KeyboardEvent){
            const input = event.target as HTMLInputElement;
            this.value = input.value
        }
        @Watch('value')
        onValueChanged(value:string){
            this.$emit('updateInput',value)
        }
    }
</script>

<style scoped lang="scss">
            .note{
            padding: 2px 10px;
            background: rgb(211, 211, 211);
            height: 50px;
            line-height: 50px;
            margin-top: 10px;
            > span{
                float: left;
                font-size: 20px;
                margin-right: 14px;
            }
            > input{
                float: left;
                border: 0;
                height: 38px;
                margin-top:4px;
                padding: 6px;
                width: 70%;
                text-align: center;
            }
        }

</style>