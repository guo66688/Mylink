<template>
<div class="content">
    <div class="content-list" v-for="item in NewList" :key="item.uniqiekey">
        <img :src="item.thumbnail_pic_s" alt="#" class="content-list-img">
        <div class="content-list-text">
            <text id="title">{{ item.title }}</text>
            <text id="author">{{ item.author_name }} {{ item.date }}</text>
        </div>
    </div>
</div>
</template>
<script setup>
    import {useNewStore} from '@/stores/NewStore'
    import { ref,computed } from 'vue'
    const NewStore = useNewStore()

    const NewList = computed(()=>{
        return NewStore.NewListGet()
    })
    console.log(NewList.value);
    

    
</script>
<style scoped>
.content{
    width: 400px;
}
.content-list{
    width: 400px;
    height: 100px;
    background-color: #ffffff;
    border-bottom: 1px dashed #000000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    object-fit:fill;

}
.content-list-img{

    width: 130px;
    height: 90%;
    margin: 5px;
    object-fit:fill;

}
.content-list-text{
    flex:2;
    height: 90%;
    margin: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; */
}
#title{
    font-size: 16px;
    flex:2;
    overflow: hidden;
    /* text-overflow: ellipsis; */
    /* white-space: nowrap; */
}
#author{
    font-size: 14px;
    flex:1;
    overflow: hidden;
    /* text-overflow: ellipsis; */
    /* white-space: nowrap; */
}
</style>