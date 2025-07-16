<template>
    <div class="content">
        <text id="Top" class="T" :class="{ active: activeTab === 'Top' }" @click="setActive('Top')">头条新闻</text>
        <text id="Classtfy" class="T" :class="{ active: activeTab === 'Classify' }" @click="setActive('Classify')">分类新闻</text>
    </div>
</template>
<script setup>
import { ref,computed } from 'vue';
import { useStateStore } from '@/stores/stateStore';


const stateStore = useStateStore();
const activeTab = computed(() => stateStore.getActiveTab());

const setActive = (tab) => {
  stateStore.setActiveTab(tab);
};
</script>
<style scoped>
    .content{
    width: 400px;
    height: 50px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
.T{
    font-size: 15px;
    font-weight: 500;
}

/* 头条新闻——蓝色 */
#Top:hover,
#Top.active {
  color: #4285f4;            /* Google Blue */
  border-bottom: 2px solid #4285f4;
  cursor: pointer;
}

/* 分类新闻——紫色 */
#Classtfy:hover,
#Classtfy.active {
  color: #8a2be2;            /* BlueViolet */
  border-bottom: 2px solid #8a2be2;
  cursor: pointer;
}
</style>