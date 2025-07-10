<template>
<h2>统计报表</h2>
<div ref="panel" class="chart"></div>
</template>
<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
import axios from 'axios'
const panel = ref(null)

onMounted(async()=>{
    let d= await axios.get("http://127.0.0.1:4523/m1/6731413-6442637-default/report")
    let xx =[]
    let yy=[]
    let ary =d.data.data
    for(let i=0;i<d.data.data.length;i++){
        xx.push(ary[i].type)
        yy.push(ary[i].value)
    }
    var myChart = echarts.init(panel.value)

    myChart.setOption({
            title: {
                text: '入门示例'
            },
            tooltip: {},
            xAxis: {
                data: xx
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: yy
            }]
        }
    )
})
</script>
<style scoped>
.chart{
    height: 500px;
    width: 1000px;
    margin: 0 auto;
    border: 1px solid #7e7878;
    /* border-radius: 10px;
    box-shadow: 0 0 10px #ccc; */
}
</style>