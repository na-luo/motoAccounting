<template>
    <div>
        <Layout class-prefix="Statistics">
            <div>
                <div class="form"></div>
                <ul class="table">
                    <li class="table_item">
                       <div class="time"><span>今天</span><div>￥104</div></div> 
                       <div class="event"><span>吃饭</span><div>￥104</div></div> 
                       <div class="event"><span>吃饭</span><div>￥104</div></div> 
                       <div class="event"><span>吃饭</span><div>￥104</div></div> 
                    </li>
                    <li class="table_item">
                       <div class="time"><span>今天</span><div>￥104</div></div> 
                       <div class="event"><span>吃饭</span><div>￥104</div></div> 
                       <div class="event"><span>吃饭</span><div>￥104</div></div> 
                       <div class="event"><span>吃饭</span><div>￥104</div></div> 
                    </li>
                </ul>
            </div>
        </Layout>
    </div>
</template>

<script lang="ts">
    export default {
        name:'Statistics'
    };
</script>
<style lang="scss">
    .Statistics-content{
        background: #f5f5f5;
        
    }
</style>

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
        justify-content: first baseline;
        .table_item{
            div{
                height: 40px;
                line-height: 40px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 0px 14px;
            }
            .time{

            }
            .event{
                border-bottom: 1px solid #ccc;
                background: rgb(255, 254, 254);
            }
        }
    }
</style>