<template>
  <h2 class="title">统计报表</h2>
  <div ref="panel" class="chart"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const panel = ref(null)

onMounted(async () => {
  let d = await axios.get('http://127.0.0.1:4523/m1/6751473-6462932-default/report')
  let xx = []
  let yy = []
  let ary = d.data.data

  for (let i = 0; i < ary.length; i++) {
    xx.push(ary[i].type)
    yy.push(ary[i].value)
  }

  var myChart = echarts.init(panel.value)

  myChart.setOption({
    backgroundColor: '#fff',
    title: {
      text: '示例柱状图',
      left: 'center',
      top: 20,
      textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    grid: {
      left: '8%',
      right: '8%',
      bottom: '8%',
      top: '20%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: xx,
      axisTick: { alignWithLabel: true },
      axisLine: {
        lineStyle: { color: '#999' }
      },
      axisLabel: {
        fontSize: 14
      }
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#ddd'
        }
      }
    },
    series: [
      {
        name: '数量',
        type: 'bar',
        barWidth: '50%',
        data: yy,
        itemStyle: {
          borderRadius: [8, 8, 0, 0],
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: '#5b8ff9' },
              { offset: 1, color: '#61ddaa' }
            ]
          },
          shadowColor: 'rgba(0,0,0,0.1)',
          shadowBlur: 10
        },
        label: {
          show: true,
          position: 'top',
          color: '#333',
          fontSize: 12
        }
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
  background: #fdfdfd;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.title {
  text-align: center;
  font-size: 24px;
  margin: 20px 0;
  color: #333;
}
</style>
