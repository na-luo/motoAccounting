import { register } from 'register-service-worker';
<template>
    <div>
        <Layout>
            <div class="body-L">
                <div>
                    <ul class="Labels">
                        <li><span>衣</span> <Icon name="big" class="icon"/></li>
                        <li><span>食</span> <Icon name="big" class="icon"/></li>
                        <li><span>住</span> <Icon name="big" class="icon"/></li>
                        <li><span>行</span> <Icon name="big" class="icon"/></li>
                        <li><span>衣</span> <Icon name="big" class="icon"/></li>
                        <li><span>食</span> <Icon name="big" class="icon"/></li>
                        <li><span>住</span> <Icon name="big" class="icon"/></li>
                        <li><span>行</span> <Icon name="big" class="icon"/></li>
                        <li><span>衣</span> <Icon name="big" class="icon"/></li>
                        <li><span>食</span> <Icon name="big" class="icon"/></li>
                        <li><span>住</span> <Icon name="big" class="icon"/></li>
                        <li><span>行</span> <Icon name="big" class="icon"/></li>
                        <li><span>衣</span> <Icon name="big" class="icon"/></li>
                        <li><span>食</span> <Icon name="big" class="icon"/></li>
                        <li><span>住</span> <Icon name="big" class="icon"/></li>
                        <li><span>行</span> <Icon name="big" class="icon"/></li>
                        <li><span>衣</span> <Icon name="big" class="icon"/></li>
                        <li><span>食</span> <Icon name="big" class="icon"/></li>
                        <li><span>住</span> <Icon name="big" class="icon"/></li>
                        <li><span>行</span> <Icon name="big" class="icon"/></li>
                    </ul>
                </div>
                <div class="add">
                    <Icon name="add" class="icon"/>
                </div>
            </div>
        </Layout>
    </div>
</template>
<script lang="ts">
    export default ({
        name:'Labels'
    })
</script>

<style scoped lang="scss">
    .body-L{
        background: rgb(241, 241, 241);
        position: relative;
    }
    .Labels{
        display: flex;
        flex-direction: column;
        height: 607px;
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
    .add{
        position: absolute;
        bottom: 20px;
        right: 20px;
        background: rgb(233, 248, 177);
        opacity: 0.74;
        height: 60px;
        width: 60px;
        border-radius: 60px;
        text-align: center;
        line-height: 60px;
        > .icon{
            margin-top: 16px;
            font-size: 26px;
        }
    }
</style>