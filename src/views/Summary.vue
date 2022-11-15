<template>
    <div>
        <Layout>
            <div class="SumBody">
                <div @click="reBack">
                    <Icon name="return" class="icon"></Icon>
                </div>
                <select class="type" :value="value">
                    <option value ="pay">收入</option>
                    <option value="income">支出</option>
                    <option value ="transfer_accounts">转账</option>
                </select>
                <div class="tag">
                    <div class="tagName">标签</div>
                    <div class="tags">
                        <ul class="current">
                            <li>衣</li>
                            <li>食</li>
                            <li>住</li>
                            <li>行</li>
                            <li>行</li>
                            <li>行</li>
                            <li>行</li>
                            <li>行</li>
                            <li>行</li>
                            <li>行</li>
                            <li>行</li>
                            <li>全部</li>
                        </ul>
                    </div>
                    <div class="time">
                        <span class="string">时间 :</span>
                        <span class="date">2002-12-02 11:45:14</span>
                    </div>
                </div>
                <div class="numberPad">
                    {{money}}
                </div>
                <Note :note.sync="record.note" @update:value="onUpdateNote"></Note>
                <div class="account">
                    <span>账户:</span>
                    <div class="account-name">中国银行</div>
                </div>
                <div class="save" @click="save">保存</div>
            </div>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Note from '@/components/Summary/Note.vue';
    import {Prop,Component} from 'vue-property-decorator';
    import Tags from "@/components/Money/Tags.vue";
    // let recordList:any[] = JSON.parse(window.localStorage.getItem('recordList')|| '[]'); 

    @Component({components:{Note,Tags}})
    export default class Summary extends Vue{
        recordList:any[] = JSON.parse(window.localStorage.getItem('recordList')|| '[]'); 
        record:any =this.recordList[this.recordList.length-1];
        value=this.record['type'];
        money:string = this.record['sum'];
        
        save(){
            window.localStorage.setItem('recordList',JSON.stringify(this.recordList));
            setTimeout(()=> {this.$router.push('/Money')},1)
        }
        reBack(){
            this.$router.push({path:'/Money',
            query: {'sum': JSON.stringify(this.money)}
        });
        }
        onUpdateNote(value:string){
            this.record.note = value;
        }
    }
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
    .SumBody{
        position: relative;
        display: flex;
        flex-direction: column;
        .icon{
            position: absolute;
            font-size: 33px;
            top: 23px;
            left: 10px;
        }
        .type{
            width: 70%;
            height: 41px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 20px;
            line-height: 41px;
            text-align: center;
            border-radius: 14px;
            font-size: 18px;
            font-weight: 550;
            background: #88c4ff;
            border: 0;
        }
        .numberPad {
            @extend %clearFix;
            @extend %outerShadow;
            margin-top: 10px;
            height: 55px;
            line-height: 52px;
            font-size: 24px;
            padding: 0px 12px;
            overflow: hidden;
            text-align: center;
        }
        .tag{
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            .tagName{
                font-size: 16px;
                margin-left: 10px;
            }
            .tags{
            > .current{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                overflow: hidden;
                > li{
                    background: #c5e9f8;
                    $h:30px;
                    height: $h;
                    margin-top: 15px;
                    border-radius: $h/2;
                    margin-right: 12px;
                    margin-left: 12px;
                    min-width: 68px;
                    text-align: center;
                    line-height: $h;
                }
            }
            
            }
            .time{
                padding: 14px;
                font-size: 17px;
                .string{
                    margin-right: 10px;
                }
                .date{
                    padding: 2px;
                    border-bottom: 1px solid rgb(212, 192, 247);
                }
            }
        }
        .account{
            margin-top: 10px;
            padding: 2px 10px;
            background: rgb(211, 211, 211);
            height: 50px;
            line-height: 50px;
            > span{
                float: left;
                font-size: 20px;
                margin-right: 14px;
            }
            > .account-name{
                text-align: center;
                float: left;
                height: 38px;
                line-height: 38px;
                margin-top:4px;
                font-size: 19px;
                width: 70%;
                background: #ffffff;
            }
        }
        .save{
            text-align: center;
            font-size: 20px;
            font-weight: 600;
            background: #88c4ff;
            border-radius: 25px;
            width: 70%;
            margin-left: auto;
            margin-right: auto;
            margin-top: 20px;
            padding: 10px;
        }
    }
</style>