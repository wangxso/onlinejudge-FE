<template>
  <div>
    <a-card title="用户信息">
      <a-row>
        <a-col :span="3">
          <a-avatar :size="128" icon="user" />
        </a-col>
        <a-col :span="16">
          <a-descriptions>>
            <a-descriptions-item label="UserName">
              {{ user.username }}
            </a-descriptions-item>
            <a-descriptions-item label="Telephone">
              {{user.tel}}
            </a-descriptions-item>
            <a-descriptions-item label="Level">
              {{user.level}}
            </a-descriptions-item>
            <a-descriptions-item label="email">
              {{user.email}}
            </a-descriptions-item>
          </a-descriptions>
        </a-col>
      </a-row>
      <div id="container"></div>

    </a-card>
  </div>
</template>

<script>
import { Line } from '@antv/g2plot';
const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
];

export default {
name: "PersonalInfo",
  data() {
  return{
    user: this.$store.state.user
  }
  },
  mounted() {
    const line = new Line('container', {
      data,
      xField: 'year',
      yField: 'value',
      label: {},
      point: {
        size: 5,
        shape: 'diamond',
        style: {
          fill: 'white',
          stroke: '#5B8FF9',
          lineWidth: 2,
        },
      },
      tooltip: { showMarkers: false },
      state: {
        active: {
          style: {
            shadowBlur: 4,
            stroke: '#000',
            fill: 'red',
          },
        },
      },
      interactions: [{ type: 'marker-active' }],
    });

    line.render();

  }
}
</script>

<style scoped>

</style>