<template>
  <div :id="chartId" :style="{ width: chartWidth, height: chartHeight }"></div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";
@Component
export default class EchartsView extends Vue {
  @Prop() chartId!: string;
  @Prop() chartWidth!: number;
  @Prop() chartHeight!: number;
  @Prop() yAxisName!: string;
  mounted(): void {
    this.initEcharts();
  }
  initEcharts(): void {
    // 初始化echarts实例
    const chart = echarts.init(document.querySelector(`#${this.chartId}`));
    chart.setOption({
      tooltip: {
        show: true,
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        }
      },
      xAxis: {
        boundaryGap: false,
        data: ["衬衫", "羊毛衫", "裤子"]
      },
      grid: {
        y: 30,
        y2: 25
      },
      yAxis: {
        type: "value",
        name: this.yAxisName
      },
      series: [
        {
          name: "衬衫",
          type: "line",
          smooth: true,
          areaStyle: {},
          data: [5, 20, 36]
        }
      ]
    });
  }
}
</script>
<style lang="less" scoped></style>
