
<template>
  <Layout>
        <div class="fFiv">字体</div>
        <select class="font" v-model="font">
            <option v-for="font in fontArr" :key="font.id" :value="font.name">{{font.name}}</option>
        </select>
  </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component,Watch } from 'vue-property-decorator';
    
    @Component
    export default class Mine extends Vue {
        font=window.localStorage.getItem('font');
        fontArr = [{
        'id':1,
        'name':'黑体',
        "value":'-apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif'},
    {
        'id':2,
        'name':'楷体',
        "value":'Baskerville, Georgia, "Liberation Serif", "Kaiti SC", STKaiti, "AR PL UKai CN", "AR PL UKai HK", "AR PL UKai TW", "AR PL UKai TW MBE", "AR PL KaitiM GB", KaiTi, KaiTi_GB2312, DFKai-SB, "TW\-Kai", serif'
    },{
        'id':3,
        'name':'宋体',
        'value':'Georgia, "Nimbus Roman No9 L", "Songti SC", "Noto Serif CJK SC", "Source Han Serif SC", "Source Han Serif CN", STSong, "AR PL New Sung", "AR PL SungtiL GB", NSimSun, SimSun, "TW\-Sung", "WenQuanYi Bitmap Song", "AR PL UMing CN", "AR PL UMing HK", "AR PL UMing TW", "AR PL UMing TW MBE", PMingLiU, MingLiU, serif'},
    {
        'id':4,
        'name':'仿宋',
        'value':'Baskerville, "Times New Roman", "Liberation Serif", STFangsong, FangSong, FangSong_GB2312, "CWTEX\-F", serif'
    }];
        created () {
            let body:any = document.querySelector('body');
            let font = window.localStorage.getItem('font');
            if(font === null){
                window.localStorage.setItem('font','黑体');
            }else{
                for (let i = 0; i < this.fontArr.length; i++) { 
                if (this.fontArr[i].name===font) { //检查改变，如果改变了就改变字体
                    body.setAttribute('style',`font-family:${this.fontArr[i].value}`);
                }
            }
            }
        }
        @Watch('font')
        changeFont(font:any){
            let body:any = document.querySelector('body');
            for (let i = 0; i < this.fontArr.length; i++) { 
                if (this.fontArr[i].name===font) { //检查改变，如果改变了就改变字体
                    body.setAttribute('style',`font-family:${this.fontArr[i].value}`);
                    window.localStorage.setItem('font',`${font}`);
                }
            }
        }
}
</script>

<style lang="scss">
    // body{
    //     font-family: inherit;
    // }
    .fFiv{
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        font-size: 29px;
        text-align: center;
    }
    .font{  
            margin-top: 20px;
            margin-left: auto;
            margin-right: auto;
            display: block;
            background: rgb(226, 226, 225);
            height: 60px;
            line-height: 60px;
            width: 200px;
            font-weight: 700;
            font-size: 23px;
            font-family: inherit;
            color: #000;
            border-radius: 20px;
            text-align: center;
            border: none;
    }
</style>