<template>
    <div :id="pid"></div>
</template>

<script>
    import { Liquid, measureTextWidth } from '@antv/g2plot';
    export default {
        name: "WaveChart",
        props: ['rate', 'pid'],
        methods:{
            drawWave(){
                if (!this.rate) this.rate = 0;
                const liquidPlot = new Liquid(document.getElementById(this.pid), {
                    percent: this.rate,
                    width: 60,
                    height: 60,
                    statistic: {
                        title: {
                            formatter: () => 'AC率',
                        },
                        content: {
                            customHtml: (container, view, { percent }) => {
                                const { width, height } = container.getBoundingClientRect();
                                const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
                                const text = `占比 ${(percent * 100).toFixed(0)}%`;
                                const textWidth = measureTextWidth(text, { fontSize: 60 });
                                const scale = Math.min(d / textWidth, 1);
                                return `<div style="width:${d}px;display:flex;align-items:center;justify-content:center;font-size:${scale}em;line-height:${
                                    scale <= 1 ? 1 : 'inherit'
                                }">${text}</div>`;
                            },
                        },
                    },
                    liquidStyle: ({ percent }) => {
                        return {
                            fill: percent > 0.45 ? '#5B8FF9' : '#FAAD14',
                            stroke: percent > 0.45 ? '#5B8FF9' : '#FAAD14',
                        };
                    },
                    color: () => '#5B8FF9',
                });
                liquidPlot.render();


            },
        },
        mounted() {
            this.drawWave()
        }
    }
</script>

<style>

</style>