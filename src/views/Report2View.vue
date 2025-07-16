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
  let d = await axios.get('http://127.0.0.1:4523/m1/6751473-6462932-default/report')
  let ary = d.data.data

  var myChart = echarts.init(panel.value)
  myChart.setOption({
    backgroundColor: '#fff',
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
    },
    legend: {
      top: '5%',
      left: 'center',
      textStyle: {
        fontSize: 14
      }
    },
    series: [
      {
        name: '来源占比',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '60%'],
        startAngle: 180,
        endAngle: 360,
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: true,
          position: 'outside',
          formatter: '{b}: {c} ({d}%)'
        },
        labelLine: {
          show: true,
          length: 20,
          length2: 30
        },
        data: ary.map(x => ({
          value: x.value,
          name: x.type
        }))
      }
    ]
  })
})
</script>

<style scoped>
.chart {
  height: 500px;
  width: 800px;
  margin: 40px auto;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  background: #fdfdfd;
  padding: 20px;
}
h2 {
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-top: 20px;
}
</style>
