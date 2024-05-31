<script setup lang="ts">
import {LegendComponent, TooltipComponent} from 'echarts/components';
import {use} from 'echarts/core';
import {CanvasRenderer} from 'echarts/renderers';
import {GaugeChart} from 'echarts/charts';
import VueECharts from 'vue-echarts';

const {size, value, accentColor} = defineProps<{
  size: string;
  value: number;
  accentColor: string;
}>();

use([
  CanvasRenderer,
  TooltipComponent,
  LegendComponent,
  GaugeChart,
]);

const option = ref({
  series: [{
    grid: {
      x: 0,
      y: 0,
      x2: 0,
      y2: 0,
    },
    type: 'gauge',
    radius: '100%',
    pointer: {
      show: false,
    },
    progress: {
      show: true,
      overlap: false,
      roundCap: true,
      clip: false,
    },
    axisLine: {
      lineStyle: {
        width: 16,
      },
      roundCap: true,
    },
    splitLine: {
      show: false,
      distance: 0,
      length: 10,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: false,
      distance: 50,
    },
    itemStyle: {
      color: accentColor,
    },
    data: [{
      value: value,
      detail: {
        fontSize: 24,
        fontWeight: 700,
        color: '#242731',
        offsetCenter: ['0', '10%'],
        formatter: (value: number) => `${value}%`,
      },
    },
    ],
  }],
});
</script>

<template>
  <ClientOnly>
    <VueECharts class='chart' :option='option' />
  </ClientOnly>
</template>

<style scoped>
.chart {
  width: v-bind(size);
  height: v-bind(size);
}
</style>
