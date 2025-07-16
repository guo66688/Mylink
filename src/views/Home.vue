<template>
    <div class="content-H">
    <headLine ></headLine>
    <classify ></classify>
    <Top_F v-if="choice == 'Top'"></Top_F>
    <Classify_F v-if="choice == 'Classify'"></Classify_F>
    </div>
    
</template>
<script setup>
    import {ref,reactive,computed, onMounted} from 'vue'    
    import headLine from '../components/headLine.vue'
    import classify from '@/components/classifyNav.vue';
    import Top_F from '@/components/Top_F.vue'
    import Classify_F from '@/components/Classify_F.vue'
    import { useStateStore } from '@/stores/stateStore';
    const stateStore = useStateStore();
    const choice = computed(() => stateStore.getActiveTab());

    onMounted(() => {
        stateStore.setActiveTab('Top')
    })
</script>
<style scoped>
.content-H{
  width:100%;          /* 宽度改成自适应 */
  max-width:600px;     /* 适配大屏 */
  height:100%;
  padding:12px 16px;
  display:flex;
  flex-direction:column;
  gap:8px;             /* 元素间距 */
  background:#f3f4f6;  /* 更浅的灰 */
  border-radius:var(--radius-lg);
}
.headLine{
  width:100%;
  height:50px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:20px;
  font-weight:600;
  color:#111827; /* 更深的灰 */
}
.classify{
  width:100%;
  height:50px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:20px;
  font-weight:600;
  color:#111827; /* 更深的灰 */
}

</style>