<script setup lang="ts">
import {graphic} from 'echarts';
import {LineChart} from 'echarts/charts';
import {GridComponent} from 'echarts/components';
import {use} from 'echarts/core';
import {UniversalTransition} from 'echarts/features';
import {CanvasRenderer} from 'echarts/renderers';
import VueECharts from 'vue-echarts';

const {data, xAxisData} = defineProps<{
  data: number[];
  xAxisData: string[];
}>();

use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

const option = ref({
  grid: {
    x: 0,
    x2: 0,
    y2: 0,
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: xAxisData,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#F4F5F9',
      },
    },
    nameTextStyle: {
      color: 'red',
    },
  },
  yAxis: {
    type: 'value',
    show: false,
  },
  series: [
    {
      data: data,
      type: 'line',
      smooth: true,
      itemStyle: {
        color: '#FF764C',
      },
      areaStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(255, 118, 76, 0.24)',
          },
          {
            offset: 1,
            color: 'rgba(255, 118, 76, 0)',
          },
        ]),
      },
    },
  ],
});
</script>

<template>
  <ClientOnly>
    <VueECharts class='chart' :option='option' />
  </ClientOnly>
</template>

<style scoped>
.chart {
  width: 100%;
  min-height: 200px;
}
</style>
