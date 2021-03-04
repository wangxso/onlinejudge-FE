<template>
    <pre v-highlight="code"><code :class="language" :style="styleObject"></code></pre>
</template>

<script>
    export default {
        name: 'highlight',
        data () {
            return {
                styleObject: {
                    'border-left': '2px solid green'
                }
            }
        },
        props: {
            language: {
                type: String
            },
            code: {
                required: true,
                type: String
            },
            borderColor: {
                type: String,
                default: 'green'
            }
        },
        watch: {
            'borderColor' (newVal) {
                this.styleObject['border-left'] = '2.5px solid ' + newVal
            }
        },
        mounted() {
            this.styleObject['border-left'] = '2.5px solid ' + this.borderColor
        }
    }
</script>

<style scoped lang="less">
    pre {
        padding: 0;
        display: block;
        code {
            padding: 20px;
            font-size: 1.1em;
        }
    }
</style>
