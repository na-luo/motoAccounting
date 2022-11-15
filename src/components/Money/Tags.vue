<template>
    <div>
        <div class="tags">
                <ul class="current">
                    <li v-for="tag in dataSource" :key="tag"
                    :class="{selected: selectedTags.indexOf(tag)>=0}"
                    @click="toggle(tag)"
                    >{{tag}}</li>
                </ul>
                <div class="new">
                    <button @click="createTag">新增标签</button>
                </div>
            </div>
</div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Prop,Component} from 'vue-property-decorator';
    @Component
    export default class Tags extends Vue{
    @Prop() readonly dataSource:string[] | undefined;
    selectedTags: string[] = [];

    toggle(tag:string){
        const index = this.selectedTags.indexOf(tag);
        if (index>=0) {
            this.selectedTags.splice(index,1);
        }else{
            this.selectedTags.push(tag);
        }
        this.$emit('update:value',this.selectedTags)
    }
    createTag(){
        const name = window.prompt('请输入标签名');
        if (name === '') {
            window.alert('标签不能为空')
        }else{
            if (this.dataSource) {
                this.$emit('update:dataSource',[...this.dataSource,name?.trim()])
            }
        }

    }
}
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
                background: #b8e7fa;
                $h:24px;
                height: $h;
                margin-top: 15px;
                border-radius: $h/2;
                margin-right: 12px;
                margin-left: 12px;
                padding: 0 16px;
                line-height: $h;
                &.selected{
                    background: rgb(114, 196, 243);
                    color: rgb(255, 255, 255);
                }
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