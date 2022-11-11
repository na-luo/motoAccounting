<template>
    <div>
        <ul class="type">
            <li class="selected">支出</li>
            <li>收入</li>
            <li>转账</li>
        </ul>
    </div>
</template>

<script lang="ts">


export default ({
    name:'Type'
})
</script>

<style lang="scss" scoped>
          .type{
        height: 45px;
        display: flex;
        justify-content: space-between;
        line-height: 45px;
        background: rgb(166, 166, 255);
        > li{
            text-align: center;
            width: 33.3%;
            font-size: 19px;
        }
        .selected {
            color: #fff;
            background: #7878f3;
        }
      }
</style>