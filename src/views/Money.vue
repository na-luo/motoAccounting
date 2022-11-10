<template>
    <div>
        <Layout>
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
            <div >
                <ul class="type">
                    <li class="selected">支出</li>
                    <li>收入</li>
                    <li>转账</li>
                </ul>
            </div>
            <div class="numberPad">
                <div class="output">100</div>
                <div class="button">
                    <button class="button-left">1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>+</button>
                    <button>删除</button>
                    <button class="button-left">4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>-</button>
                    <button>C</button>
                    <div class="button-bottom">
                        <button class="button-left">7</button>
                        <button>8</button>
                        <button>9</button>
                        <button>×</button>
                        <button class="button-left">0</button>
                        <button>()</button>
                        <button>.</button>
                        <button>÷</button>
                    </div>
                    <button class="enter">OK</button>
                </div>
            </div>
        </Layout>
    </div>
</template>

<script lang="ts">

    export default {
        name:'Money',
        
    };
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
      .type{
        height: 45px;
        display: flex;
        justify-content: space-between;
        line-height: 45px;
        background: rgb(166, 166, 255);
        > li{
            text-align: center;
            width: 125px;
            font-size: 19px;
        }
        .selected {
            color: #fff;
            background: #7878f3;
        }
      }
      .numberPad{
        .output{
            height: 55px;
            line-height: 52px;
            font-size: 24px;
            padding-left: 12px;
        }
        .button{
            height: 284px;
            display: flex;
            flex-direction:row;
            flex-wrap: wrap;

            button{
                background: transparent;
                border: none;
                width: 75px;
                height: 71px;
                font-size: 20px;
                font-weight: 500;
                border-top: 1px solid #ccc;
                border-left: 1px solid #ccc;
                // margin:0 -1px -1px 0;
                background: #ffffff;
            }

            .button-bottom{
                height: 142px;
                width: 300px;
            }
            .enter{
                height: 142px;
            }
            // button:hover{
            //     background: #999;
            // }
            .button-left{
                border-left: 0px;
            }
        }
      }

</style>