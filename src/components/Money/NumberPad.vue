<template>
    <div>
        <div class="numberPad">
                <div class="output">100000000</div>
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
                    <button class="button-left">7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>×</button>
                    <button class="enter">OK</button>
                    <button class="button-left">0</button>
                    <button>()</button>
                    <button>.</button>
                    <button>÷</button>

                </div>
            </div>
    </div>
</template>

<script lang="ts">


export default ({
    name:'NumberPad'
})
</script>

<style lang="scss" scoped>
      @import "@/assets/style/helper.scss";
          .numberPad{
        .output{
            @extend %clearFix;
            height: 55px;
            line-height: 52px;
            font-size: 24px;
            padding: 0px 12px;
            overflow: hidden;
            @extend %outerShadow;
        }
        .button{
            @extend %clearFix;
            button{
                float: left;
                background: transparent;
                border: none;
                width: 20%;
                height: 71px;
                font-size: 20px;
                font-weight: 500;
                border-top: 1px solid #ccc;
                border-left: 1px solid #ccc;
                // margin:0 -1px -1px 0;
                background: #ffffff;
            }
            $bg:#f2f2f2;
            .enter{
                height: 142px;
                float: right;
            }
            button:hover{
                background: darken($bg,4*3%);
            }
            .button-left{
                border-left: 0px;
            }
        }
      }
</style>