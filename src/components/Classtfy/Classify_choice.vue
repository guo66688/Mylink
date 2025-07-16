<template>
<div class="content">
    <div class = "choice">
        <text :class="{active:type == 'guonei'}" @click="setType('guonei')">国内</text>
        <text :class="{active:type == 'guoji'}" @click="setType('guoji')">国际</text>
        <text :class="{active:type == 'yule'}" @click="setType('yule')">娱乐</text>
        <text :class="{active:type == 'tiyu'}" @click="setType('tiyu')">体育</text>
        <text :class="{active:type == 'junshi'}" @click="setType('junshi')">军事</text>
    </div>
    <div class = "choice">
        <text :class="{active:type == 'keji'}" @click="setType('keji')">科技</text>
        <text :class="{active:type == 'caijing'}" @click="setType('caijing')">财经</text>
        <text :class="{active:type == 'youxi'}" @click="setType('youxi')">游戏</text>
        <text :class="{active:type == 'qiche'}" @click="setType('qiche')">汽车</text>
        <text :class="{active:type == 'jiankang'}" @click="setType('jiankang')">健康</text>
    </div>
</div>
</template>
<script setup>
    import { useStateStore } from '@/stores/stateStore'
    import { computed } from 'vue';

    const stateStore = useStateStore()
    const type = computed(() => {
        return stateStore.getType()
    })

    const setType = (type)=>{
        stateStore.setType(type)
    }
</script>
<style scoped>
    .content{
        width: 400px;
        height: 55px;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        gap: 5px;
        padding-top: 5px;
        background-color: #fff;
    }
    .choice{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
    text{
        line-height: 15px;
        width: 35px;
        font-size: 10px;
        text-align: center;
        color: #fa0000;
        border: 2px solid #fa0000;
        background-color: #ffffff;
        border-radius: 15px;
    }
    text:hover,text.active{
        color: #ffffff;
        background-color: #fa0000;
        cursor: pointer;
    }


</style>