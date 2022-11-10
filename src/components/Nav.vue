<template>
    <div class="nav">
        <router-link to="/money" class="item" active-class="selected">
            <Icon name="money" class="icon"></Icon>
            记账
        </router-link>
        <router-link to="/labels" class="item" active-class="selected">
            <Icon name="labels" class="icon"></Icon>
            标签
        </router-link>
        <router-link to="/statistics" class="item" active-class="selected">
            <Icon name="chart" class="icon"/>
            统计
        </router-link>
    </div>

</template>

<script lang="ts">
    // import labels from '@/assets/icons/labels.svg';
    // import money from '@/assets/icons/money.svg';
    // import chart from '@/assets/icons/chart.svg';
    // console.log(labels,money,chart);

    
export default ({
    name:'Nav'
})
</script>

<style lang="scss" scoped>
    @import "@/assets/style/helper.scss";
    .nav{
        display: flex;
        box-shadow: 0 0 3px rgba(0,0,0,0.9);
        
        .item{
            padding: 2px 0;
            width: 33.333%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction:  column;
            .icon{
                width: 32px;
                height: 32px;
            }
        }
         .item.selected{
            color: #fa9c01;
        }

    }
</style>