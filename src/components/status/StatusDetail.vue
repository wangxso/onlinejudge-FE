<template>
    <div>
        <a-row style="padding-top: 2%">
            <a-col :span="20">
                <a-alert
                        :message="result_text[status.result]"
                        :type="answer_status[status.result]"
                        show-icon
                >
                    <p slot="description" style="padding-top: 10px">
                        <span class="detail-info">Time: {{status.timeCost}} ms</span>
                        <span class="detail-info">Memory: {{status.timeCost}} ms</span>
                        <span class="detail-info">Lang: {{language2Str[status.language]}}</span>
                        <span class="detail-info">Author: {{status.user.username}}</span>
                        <br>
                    </p>
                </a-alert>
            </a-col>

            <a-col style="padding-top: 10px" :span="20" v-if="status.error">
                <a-alert :type="answer_status[status.result]"
                         >
                    <p slot="message">
                        Error Info: {{status.error}}
                    </p>
                </a-alert>
            </a-col>

            <a-col style="padding-top: 10px" :span="20">
                <Highlight :code="status.code" :language="language2Str[status.language]" :border-color="colors[status.result]"></Highlight>
            </a-col>

        </a-row>

    </div>
</template>

<script>
    import Highlight from "../common/HighLight";
    const answer_status = {
        "-1": "info",
        '1': 'success',
        '2': 'error',
        '3': 'warning',
        '4': 'error',
        '5': 'error',
        '6': 'error',
        '7': "warning",
        "8": "warning",
        "9": "warning"
    };
    const colors = {
        "-1": "blue",
        '1': '#87d068',
        '2': '#ff0000',
        '3': '#f50',
        '4': 'pink',
        '5': '#ff0000',
        '6': '#ff0000',
        '7': "#f50",
        "8": "#f50",
        "9": "#f50"
    };
    const result_text = {
        "-1": "Pending",
        "1": "Accepted",
        "2": "Wrong Answer",
        "3": "Runtime Error",
        "4": "Output Limit Exceeded",
        "5": "Memory Limit Exceeded",
        "6": "Time Limit Exceeded",
        "7": "Presentation Error",
        "8": "System Error",
        "9": "Compile Error",
    };

    const highlight = {
        "0": "text/x-c++src",
        "1": "text/x-c++src",
        "2": "text/x-java",
    }
    const language2Str = {
        "0": "C",
        "1": "C++",
        "2": "Java"
    }
    export default {
        name: "StatusDetail",
        props: ['status'],
        data() {
            return {
                answer_status,
                result_text,
                highlight,
                language2Str,
                colors,
            }
        },
        components: {
            Highlight
        },
    }
</script>

<style scoped>
    .detail-info{
        padding-right: 10px;
    }
</style>
