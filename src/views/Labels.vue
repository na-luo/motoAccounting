<template>
    <div>
        <Layout class-prefix="Labels">
            <div class="body-L">
                    <div class="Labels">
                        <router-link v-for="tag in tags" :key="tag.id"
                        :to="`/labels/edit/${tag.id}`" class="edit"
                        ><span>{{tag.name}}</span> <Icon name="big" class="icon"/></router-link>
                        
                    </div>
                    <div class="createTag">
                        <Button @click="createTag">
                            新增标签
                        </Button>
                        
                    </div>
            </div>
        </Layout>
    </div>
</template>
<script lang="ts">
    import Vue from "vue";
    import tagListModel from "@/model/tagListModel";
    import { Component } from 'vue-property-decorator';
    import Button from '@/components/Button.vue';
    tagListModel.fetch();

    @Component({components:{Button}})
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
        }
    }
    .Labels{
        display: flex;
        flex-direction: column;
        overflow: auto;
        .edit{
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