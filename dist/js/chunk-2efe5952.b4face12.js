(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2efe5952"],{affb:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("a-row",[s("a-col",{attrs:{span:19}},[s("a-card",{staticClass:"desc-box",attrs:{bordered:!1}},[s("a-descriptions",{attrs:{title:e.problem.title,layout:"vertical",bordered:""}},[s("a-descriptions-item",{attrs:{label:"Description",span:3}},[s("div",{domProps:{innerHTML:e._s(e.problem.descriptionHtml)}})]),s("a-descriptions-item",{attrs:{label:"Input",span:3}},[s("div",{domProps:{innerHTML:e._s(e.problem.inputDescriptionHtml)}})]),s("a-descriptions-item",{attrs:{label:"Output",span:3}},[s("div",{domProps:{innerHTML:e._s(e.problem.outputDescriptionHtml)}})]),s("a-descriptions-item",{attrs:{label:"Samples input1"}},[e._v(" "+e._s(e.problem.samples.input)+" ")]),s("a-descriptions-item",{attrs:{label:"Samples output1"}},[e._v(" "+e._s(e.problem.samples.output)+" ")]),s("br"),s("a-descriptions-item",{attrs:{label:"提示",span:3}},[s("div",{domProps:{innerHTML:e._s(e.problem.hintHtml)}})]),s("a-descriptions-item",{attrs:{label:"题目来源",span:3}},[e._v(" "+e._s(e.problem.source)+" ")])],1)],1),s("a-card",{staticClass:"input-box",attrs:{bordered:"false"}},[s("div",{staticClass:"select-lang"},[s("span",[e._v("语言:")]),s("a-select",{staticStyle:{width:"120px"},attrs:{"default-value":"0"},on:{change:e.handleChange},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[s("a-select-option",{attrs:{value:0}},[e._v(" C ")]),s("a-select-option",{attrs:{value:1}},[e._v(" C++ ")]),s("a-select-option",{attrs:{value:2}},[e._v(" Java ")])],1)],1),s("codemirror",{attrs:{options:e.options},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),s("a-button",{staticStyle:{float:"right","margin-top":"20px"},attrs:{type:"primary",loading:e.loading},on:{click:e.enterLoading}},[e._v(" 提交 ")])],1)],1),s("a-col",{attrs:{span:1}}),s("a-col",{attrs:{span:4}},[s("a-card",{attrs:{bordered:!1}},[s("template",{slot:"title"},[e._v(" 数据 ")]),s("span",[e._v(" ID: "+e._s(e.problem.pid)+" "),s("br"),e._v(" Time Limit: "+e._s(e.problem.timeLimit)+" ms "),s("br"),e._v(" Memory Limit: "+e._s(Math.ceil(e.problem.memoryLimit/8/1024/1024))+" M "),s("br"),e._v(" Created By: "+e._s(e.problem.user.username)+" "),s("br"),e._v(" Level: "+e._s(e._f("levelFilter")(e.problem.level))+" ")])],2)],1)],1)],1)},a=[],o=s("8f94");s("a7be"),s("acdf");s("4ba6"),s("f9d4"),s("d5e0"),s("693d8"),s("db91"),s("7b00"),s("ffda"),s("02f0");var r={name:"ContestProblemDetail",props:["pid","cid"],components:{codemirror:o["codemirror"]},data:function(){return{type:0,problem:{},code:"",options:{tabSize:2,theme:"rubyblue",lineNumbers:!0,line:!0,mode:"text/x-c++src",styleActiveLine:!0,hintOptions:{completeSingle:!0}},loading:!1}},methods:{getProblem:function(){var e=this;this.$api.problem.findProblemByPid(this.pid).then((function(t){if(0===t.code){e.problem=t.data.problem,e.problem.user=t.data.user;var s=e.problem.samples;e.problem.samples=JSON.parse(s)}else e.$message.error(t.msg)}))},handleChange:function(e){0===e||1===e?this.options.mode="text/x-c++src":2===e&&(this.options.mode="text/x-java")},enterLoading:function(){var e=this;if(""===this.code)return this.$message.error("代码不能为空"),void(this.loading=!1);if(null!==this.$store.state.user){this.loading=!0;var t={code:this.code,type:this.type,uid:this.$store.state.user.uid,pid:this.problem.pid,language:this.type};this.openNotification("rightBottom"),this.$api.contest.submitAnswer(t,this.cid).then((function(t){0===t.code?(e.$message.success("提交成功"),e.loading=!1):(e.$message.error(t.msg),e.loading=!1)}))}else this.$message.error("用户未登录")},openNotification:function(e){var t=this.$createElement,s="已提交，等待判题";this.$notification.open({key:"updatable",message:s,description:s,placement:e,icon:t("a-icon",{attrs:{type:"sync",spin:!0}})})}},mounted:function(){this.getProblem()},filters:{levelFilter:function(e){return 0===e?"Easy":1===e?"Mid":2===e?"Hard":""}}},n=r,l=(s("bfe5"),s("2877")),p=Object(l["a"])(n,i,a,!1,null,"64a2251f",null);t["default"]=p.exports},bfe5:function(e,t,s){"use strict";s("f5c2")},f5c2:function(e,t,s){}}]);
//# sourceMappingURL=chunk-2efe5952.b4face12.js.map