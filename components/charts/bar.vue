<script setup lang="ts">
import {BarChart} from 'echarts/charts';
import {GridComponent, TooltipComponent} from 'echarts/components';
import {use} from 'echarts/core';
import {CanvasRenderer} from 'echarts/renderers';
import VueECharts from 'vue-echarts';

const {data, xAxisData} = defineProps<{ data: number[]; xAxisData: string[]; }>();

use([TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

const option = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none',
    },
    backgroundColor: '#282B32',
    borderColor: '#282B32',
    textStyle: {
      color: '#FFFFFF',
      fontWeight: 700,
    },
    padding: [4, 8],
  },
  grid: {
    x: 0,
    x2: 0,
    y2: 0,
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: xAxisData,
      nameTextStyle: {
        color: '#808191',
        fontSize: 14,
      },
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
    },
  ],
  yAxis: [
    {
      type: 'value',
      show: false,
    },
  ],
  series: [
    {
      type: 'bar',
      data: data,
      itemStyle: {
        color: '#2884FF',
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
