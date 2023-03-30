<template>
    <Layout class-prefix="Edit">
        <div>git 
            <div class="return">
                        <div @click="reBack" class="leftIcon">
                            <Icon  name="return" class="icon"></Icon>
                        </div>
                        <span class="title">编辑标签</span>
            </div>
            <FromItem fieldName="标签名:" placeholder="请输入标签名" color="white"></FromItem>
            <Button class="button" @click="btn_del">删除标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
import tagListModel from '@/model/tagListModel';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import FromItem from '@/components/Summary/FromItem.vue';
import Button from '../components/Button.vue';
@Component({components:{FromItem,Button}})
    export default class EditLable extends Vue {
        

        created () {
            const id = this.$route.params.id;
            tagListModel.fetch();
            const tags = tagListModel.data;
            const tag = tags.filter(t=>t.id ===id)[0];
            if(tag){
                console.log(tag);
                
            }else{
                this.$router.push('/404')
            }
        }
        reBack(){
            this.$router.push('/labels');
        }
        btn_del(){
            const id = this.$route.params.id;
            tagListModel.fetch();
            const tag = tagListModel.data;
            console.log(tag);
            let tags = JSON.parse(window.localStorage.getItem('tagList') ||'[]');
            // tags.pop(tags[id]);
            console.log(id);
            
        }
    }
</script>
<style lang="scss">
    .Edit-content{
        background: #f5f5f5;
        
    }
</style>
<style scoped lang="scss">
    .return{
        margin-top: 10px;
        margin-bottom: 15px;
        position: relative;
        
        .leftIcon{
            position: absolute;
            left: 10px;
            top: 3px;
            .icon{
                font-size: 34px;
                top: 23px;
                left: 10px;
            }
        }
        .title{
            display: block;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            font-size: 25px;
        }
    }
    
</style>