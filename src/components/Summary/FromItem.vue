<template>
    <div>
        <div class="FromItem">
                    <span>{{fieldName}}</span>
                    <input type="text" 
                    v-model="value"
                    :placeholder="placeholder"
                    >
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch,Prop } from 'vue-property-decorator';
    @Component
    export default class FromItem extends Vue {
        value='';
        @Prop({required:true})fieldName!:string;
        @Prop({required:true})placeholder?:string;
        @Prop()color?:string;
        onInput(event:KeyboardEvent){
            const input = event.target as HTMLInputElement;
            this.value = input.value
        }
        @Watch('value')
        onValueChanged(value:string){
            this.$emit('updateInput',value)
        }
        mounted () {
            let color = this.color || 'rgb(211, 211, 211)';
            let FromItem:any = document.querySelector('.FromItem');
            console.log(FromItem);
            FromItem.setAttribute('style',`background:${color}`);
        }
    }
</script>

<style scoped lang="scss">
            .FromItem{
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