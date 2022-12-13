<template>
    <div>
        <Layout class-prefix="Labels">
            <div class="body-L">
                    <ol class="Labels">
                        <li v-for="tag in tags" :key="tag.id"><span>{{tag.name}}</span> <Icon name="big" class="icon"/></li>
                        
                    </ol>
                    <div class="createTag">
                        <button class="add" @click="createTag">
                            新增标签
                        </button>
                    </div>
            </div>
        </Layout>
    </div>
</template>
<script lang="ts">
    import Vue from "vue";
    import tagListModel from "@/model/tagListModel";
    import { Component } from 'vue-property-decorator';
    tagListModel.fetch();

    @Component
    export default class Labels extends Vue {
        tags = tagListModel.data;
        
        createTag () {
            console.log(this.tags);
            const name = window.prompt('请输入标签名');
            if (name) {
                const message = tagListModel.create(name);
                if (message === 'duplicated') {
                    window.alert('重复');
                    
                }
            }
        }
    }
</script>
<style lang="scss">
    .Labels-content{
        background: #f5f5f5;
    }
</style>

<style scoped lang="scss">
    .body-L{
        position: relative; 
        .createTag{
            margin-top: 20px;
            margin-bottom: 20px;
            margin-left: auto;
            margin-right: auto;
            width: 100px;
            .add{
            background: rgb(138, 138, 137);
            height: 60px;
            line-height: 60px;
            width: 100px;
            color: #000;
            border-radius: 20px;
            text-align: center;
            border: none;
        }
        }
    }
    .Labels{
        display: flex;
        flex-direction: column;
        overflow: auto;
        li{
            height: 44px;
            border-bottom: 1px solid #ccc;
            line-height: 44px;
            padding-left: 15px;
            padding-right: 15px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            background: #fff;
            .icon{
               margin-top: 13px;
                
            }
        }
    }


</style>