
<template>
    <div>
        <ul class="type">
            <li :class="type === 'pay' && 'selected'"
            @click="selectType('pay')">支出</li>
            <li :class="type === 'income' && 'selected'"
            @click="selectType('income')">收入</li>
            <li :class="type === 'transfer_accounts' && 'selected'"
            @click="selectType('transfer_accounts')">转账</li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Prop,Component} from 'vue-property-decorator';

    @Component
    export default class Types extends Vue {
        type = 'pay';
        @Prop(Number) xxx: number | undefined
        selectType(type: string){
            if (type !== 'pay'&& type !== 'income'&& type !== 'transfer_accounts') {
                throw new Error('type is unknown');
            }
            this.type = type;
        }
        mounted () {
            if(this.xxx === undefined){
                console.log('没有xxx');
                
            }else{
                console.log(this.xxx.toString());
                
            }
        }

}
</script>

<style lang="scss" scoped>
          .type{
        height: 45px;
        display: flex;
        justify-content: space-between;
        line-height: 45px;
        background: rgb(166, 166, 255);
        > li{
            text-align: center;
            width: 33.3%;
            font-size: 19px;
        }
        .selected {
            color: #fff;
            background: #7878f3;
        }
      }
</style>