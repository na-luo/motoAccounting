<template>
  <div>
    <Layout class-prefix="layout">
      {{recordList}}
      <Tags :data-source.sync="tags" @update:value="onUpdateTags"></Tags>
      <Types :value.sync="record.type"></Types>
      <NumberPad :initialValue.sync="initialValue" @submit="saveRecord"></NumberPad>
    </Layout>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Tags from "@/components/Money/Tags.vue";
import Types from "@/components/Money/Types.vue";
import { Prop, Component, Watch } from "vue-property-decorator";
import model from "@/model/recordListModel";
import tagListModel from "@/model/tagListModel";

const version =  window.localStorage.getItem('version')|| '0';
const recordList: RecordItem[] = model.fetch();
const tagList = tagListModel.fetch();

// window.localStorage.setItem('version','0.0.1');
  // if (version === '0.0.1') {
    //   recordList.forEach(
    //     record=>{
    //       record.createdAt = new Date(2020,0,1);
    //     }
    //   );
    //   window.localStorage.setItem('recordList',JSON.stringify(recordList));
    // }
  window.localStorage.setItem('version','0.0.2');
  

  
@Component({
  components: { NumberPad, Tags, Types },
})
export default class Money extends Vue {
  name = "Money";
  tags = tagList;
  initialValue= '0';
  recordList: RecordItem[] = JSON.parse(window.localStorage.getItem('recordList') ||'[]');
  record: RecordItem = {
    tags:[],type:'pay',initialValue:'0',sum:0,note:''

  }
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateAmount(value: string) {
    this.record.initialValue = value;
  }
  saveRecord(value:number){
    this.record.sum = value;
    const record2 = model.clone(this.record);
    if (this.recordList.length===0) {
      record2.createdAt = new Date();
      this.recordList.push(record2);
    }
    console.log(this.recordContrast(this.record));
    if (this.recordContrast(this.record)) { //检测是否上次输入与下次输入一样，一样则不用push
      record2.createdAt = new Date();
      this.recordList.push(record2);
    }
  }
  recordContrast(other:any){
    let record:RecordItem;
    record = recordList[recordList.length-1];
    record = JSON.parse(JSON.stringify(record));
    delete record.createdAt;
    if (JSON.stringify(other) != JSON.stringify(record)) {
      return true
    }else{
      return false
    }

    
  }
  created () {
    console.log('created');
    let sum =  JSON.parse((this.$route.query.sum||'0') as string) // 取
    if (sum) {
      this.initialValue = JSON.stringify(sum);
    }
    //即时更新tags标签
    this.tags = tagListModel.fetch();
    
  
  }
  @Watch('recordList')
  onRecordLIstChanged(){
    model.save(this.recordList);
  }
}
</script>   

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
.layout-content { 
  border: 10px solid blue;
}
</style>