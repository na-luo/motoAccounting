<template>
  <div>
    <Layout class-prefix="layout">
      {{record}}
      <Tags :data-source.sync="tags" @update:value="onUpdateTags"></Tags>
      <Types :value.sync="record.type"></Types>
      <NumberPad :value.sync="record.amount" @submit="saveRecord"></NumberPad>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Tags from "@/components/Money/Tags.vue";
import Types from "@/components/Money/Types.vue";
import { Prop, Component, Watch } from "vue-property-decorator";

  type Record = {
    tags:string[] 
    type:string
    amount:string
    sum:number
  }

@Component({
  components: { NumberPad, Tags, Types },
})
export default class Money extends Vue {
  name = "Money";
  tags = ["衣", "食", "住", "行"];
  recordList: Record[] = [];
  record: Record = {
    tags:[],type:'pay',amount:'0',sum:0
  };
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateAmount(value: string) {
    this.record.amount = value;
  }
  saveRecord(value:number){
    this.record.sum = value;
    const record2 = JSON.parse(JSON.stringify(this.record))
    this.recordList.push(record2)
  }
  
  @Watch('recordList')
  onRecordLIstChanged(){
    window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
    console.log(this.recordList);
    
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
.layout-content {
  border: 10px solid blue;
}
</style>