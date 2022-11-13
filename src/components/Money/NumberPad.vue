<template>
  <div>
    <div class="numberPad">
      <div class="output">{{ output }}</div>
      <div class="button">
        <button class="button-left" @click="inputContent">1</button>
        <button @click="inputContent">2</button>
        <button @click="inputContent">3</button>
        <button @click="inputContent">+</button>
        <button @click="remove">删除</button>
        <button class="button-left" @click="inputContent">4</button>
        <button @click="inputContent">5</button>
        <button @click="inputContent">6</button>
        <button @click="inputContent">-</button>
        <button @click="clear">C</button>
        <button class="button-left" @click="inputContent">7</button>
        <button @click="inputContent">8</button>
        <button @click="inputContent">9</button>
        <button @click="inputContent">×</button>
        <button class="enter">OK</button>
        <button class="button-left" @click="inputContent">0</button>
        <button @click="brackets">()</button>
        <button @click="inputContent">.</button>
        <button @click="inputContent">÷</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop, Component } from "vue-property-decorator";


@Component
export default class NumberPad extends Vue {
  output = "0";
  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement; //强制执行
    let input = button.textContent!; //!是说明button.textContent不会为空的
    let length = this.output.length;
    if (this.output === '0') {
        if (input === '0') {
            return;
        }else if('123456789'.indexOf(input) >=0){
            this.output = input;
            return;
        }
    }else if(this.output[length-1].match(/[./-/×/+/÷/]/)){
        console.log(1);
        if (input.match(/[./×/+/-/÷/]/)) {
          return;
        }else{
          this.output += input;  
        }
    }else{
        this.output += input;
    }
  }

  remove(){
    if (this.output.length === 1) {
        this.output = '0';
    }else{
        this.output = this.output.slice(0,-1);
    }
  }
  clear(){
    this.output = '0';
  }
  brackets(event: MouseEvent){
    let output = this.output;
    const button = event.target as HTMLButtonElement; //强制执行
    let input = button.textContent!; //!是说明button.textContent不会为空的
    let num1 = output.length - output.replaceAll('(','').length;
    let num2 = output.length - output.replaceAll(')','').length;
    if (this.output=== '0') {
        this.output = '('
    }else if(num1-num2===0){
      if('123456789'.indexOf(output[output.length-1]) >= 0){
        input = '*('
        this.output += input;
    }
    }else if(num1-num2===1){
      input = ')'
      this.output += input;
    }
    if (this.output.indexOf('(')=== this.output.length -1) {
    return;
    }
    //     in put = ')';
    // }
    // this.output += input;
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
.numberPad {
  .output {
    @extend %clearFix;
    height: 55px;
    line-height: 52px;
    font-size: 24px;
    padding: 0px 12px;
    overflow: hidden;
    @extend %outerShadow;
  }
  .button {
    @extend %clearFix;
    button {
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
    $bg: #f2f2f2;
    .enter {
      height: 142px;
      float: right;
    }
    button:hover {
      background: darken($bg, 4 * 3%);
    }
    .button-left {
      border-left: 0px;
    }
  }
}
</style>