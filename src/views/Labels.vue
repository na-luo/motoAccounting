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
</style>