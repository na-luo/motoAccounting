<template>
    <div>
        <Layout>
            <div>
                <div class="form"></div>
            </div>
            <ul class="table">
                <li class="table_">
                   <div>今天</div> 
                   <div><span>吃饭</span><div>￥104</div></div> 
                   <div><span>吃饭</span><div>￥104</div></div> 
                   <div><span>吃饭</span><div>￥104</div></div> 
                </li>
            </ul>
        </Layout>
    </div>
</template>

<script lang="ts">
    export default {
        name:'Statistics'
    };
</script>

<style lang="scss" scoped>
    .form{
        height: 134px;
        width: 350px;
        border: 1px solid red;
        border-radius: 18px;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
    }
    .table{
        display: flex;
        flex-direction: column;

    }
</style>