<template>
    <div>
        <div class="tags">
                <ul class="current">
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                    <li>行</li>
                    <li>行</li>
                    <li>行</li>
                    <li>行</li>
                    <li>行</li>
                    <li>行</li>
                    <li>行</li>
                    <li>行</li>
                </ul>
                <div class="new">
                    <button>新增标签</button>
                </div>
            </div>
</div>
</template>

<script lang="ts">


export default ({
    name:'Tags'
})
</script>

<style lang="scss" scoped>
      @import "@/assets/style/helper.scss";
          .tags{
        display: flex;
        height: 221px;
        flex-direction: column;
        justify-content: space-between;
        > .current{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            overflow: hidden;
            > li{
                background: #d9d9d9;
                $h:24px;
                height: $h;
                margin-top: 15px;
                border-radius: $h/2;
                margin-right: 12px;
                margin-left: 12px;
                padding: 0 16px;
                line-height: $h;
            }
        }
        > .new{
            padding:16px 10px;
            button{
                background: transparent;
                border: none;
                color: #999;
                border-bottom: 1px solid;
            }
        }
      }
</style>