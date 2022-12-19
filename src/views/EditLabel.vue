<template>
    <Layout>
        <div>
            <div @click="reBack" class="return">
                        <Icon name="return" class="icon"></Icon>
            </div>
            <span>编辑标签</span>
            <FromItem fieldName="标签名" placeholder="请输入标签名" color="white"></FromItem>
            <Button>删除标签</Button>
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
    }
</script>

<style scoped lang="scss">
    body{
        background-color: rgb(192, 187, 187);
    }
    .return{
        margin-top: 10px;
        margin-bottom: 10px;
        background-color: rgb(255, 255, 255);
        .icon{
            font-size: 34px;
            top: 23px;
            left: 10px;
        }
    }
    span{
        display: block;
    }
    .FromItem{
        background-color: red;
    }
</style>