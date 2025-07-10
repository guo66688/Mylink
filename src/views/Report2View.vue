<template>
    <div>
        <h2>统计报表</h2>
        <div ref="panel" class="chart"></div>
    </div>
</template>
<script setup>

import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
import axios from 'axios'
const panel = ref(null)
onMounted(async () => {
    let d = await axios.get("http://127.0.0.1:4523/m1/6731413-6442637-default/report")
    let xx = []
    let yy = []
    let ary = d.data.data

    var myChart = echarts.init(panel.value)
    myChart.setOption(
        {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['50%', '70%'],
                    // adjust the start and end angle
                    startAngle: 180,
                    endAngle: 360,
                    data: ary.map((x) => {
                        return {
                            value: x.value,
                            name: x.type
                        }
                    })
                }
            ]
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
}
</style>