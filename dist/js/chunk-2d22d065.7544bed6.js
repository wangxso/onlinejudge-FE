(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d065"],{f676:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-card",{attrs:{title:"编辑公告"}},[n("a-form-model",{attrs:{model:e.record}},[n("a-form-item",{attrs:{label:"标题"}},[n("a-input",{model:{value:e.record.title,callback:function(t){e.$set(e.record,"title",t)},expression:"record.title"}})],1),n("a-form-item",{attrs:{label:"内容"}},[n("mavon-editor",{on:{change:e.changeContent},model:{value:e.record.contentMd,callback:function(t){e.$set(e.record,"contentMd",t)},expression:"record.contentMd"}})],1),n("a-form-model-item",{staticStyle:{float:"right"}},[1==e.newCode?n("a-button",{attrs:{type:"primary"},on:{click:e.addNew}},[e._v(" 提交 ")]):n("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(" 提交 ")])],1)],1)],1)},r=[],a={name:"AnnounceEdit",props:["record"],data:function(){return{newCode:0}},methods:{changeContent:function(e,t){this.record.contentHtml=t},onSubmit:function(){var e=this;this.$api.announce.update(this.record).then((function(t){0===t.code?(e.$message.success(t.data),e.$router.push("/admin/announce")):e.$message.error(t.msg)}))},addNew:function(){var e=this,t=this.$store.state.user.uid;this.record.uid=t,this.$api.announce.add(this.record).then((function(t){0===t.code?(e.$message.success(t.data),e.$router.push("/admin/announce")):e.$message.error(t.msg)}))}},mounted:function(){this.newCode=this.$route.query.new}},c=a,s=n("2877"),i=Object(s["a"])(c,o,r,!1,null,"37360072",null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d22d065.7544bed6.js.map