(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71d6d175"],{"152c":function(t,e,i){"use strict";i("ba85")},"6ff1":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-card",{attrs:{title:"状态"}},[null!=t.cid?i("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.getSubmissionForContest(t.cid,t.index,t.pageSize)}}},[t._v("刷新")]):t._e(),i("el-table",{attrs:{data:t.submission}},[i("el-table-column",{attrs:{label:"SID"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.uid===e.row.user.uid?i("el-link",{attrs:{type:"primary"},on:{click:function(i){return t.toDetail(e.row)}}},[t._v(t._s(e.row.sid))]):i("span",[t._v(t._s(e.row.sid))])]}}])}),i("el-table-column",{attrs:{label:"结果",filters:t.result_text_filter,"filter-method":t.filterHandler},scopedSlots:t._u([{key:"default",fn:function(e){return[i("a-tag",{attrs:{color:t.answer_status[e.row.result]}},[t._v(" "+t._s(t.result_text[e.row.result])+" ")])]}}])}),i("el-table-column",{attrs:{label:"题目"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-link",{attrs:{type:"primary",href:"/problems/"+e.row.pid}},[t._v(t._s(e.row.pid))])]}}])}),i("el-table-column",{attrs:{label:"语言"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.language2Str[e.row.language])+" ")]}}])}),i("el-table-column",{attrs:{label:"耗时(ms)",prop:"timeCost"}}),i("el-table-column",{attrs:{label:"内存"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(Math.ceil(e.row.memoryCost/8/1024))+" MB ")]}}])}),i("el-table-column",{attrs:{label:"作者"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tag",{attrs:{size:"medium"}},[i("el-link",{attrs:{type:"primary"}},[t._v(t._s(e.row.user.username))])],1)]}}])}),i("el-table-column",{attrs:{label:"提交时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("i",{staticClass:"el-icon-time"}),t._v(" "+t._s(t._f("formatDate")(e.row.createTime))+" ")]}}])})],1),i("el-pagination",{staticStyle:{float:"right",padding:"10px"},attrs:{background:"","current-page":t.page,"page-size":t.pageSize,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.handlePageChange}})],1)},n=[],s={"-1":"blue",1:"#87d068",2:"#ff0000",3:"#f50",4:"pink",5:"#ff0000",6:"#ff0000",7:"#f50",8:"#f50",9:"#f50"},r={"-1":"Pending",1:"Accepted",2:"Wrong Answer",3:"Runtime Error",4:"Output Limit Exceeded",5:"Memory Limit Exceeded",6:"Time Limit Exceeded",7:"Presentation Error",8:"System Error",9:"Compile Error"},o=[{text:"Pending",value:-1},{text:"Accepted",value:1},{text:"Wrong Answer",value:2},{text:"Runtime Error",value:3},{text:"Output Limit Exceeded",value:4},{text:"Memory Limit Exceeded",value:5},{text:"Time Limit Exceeded",value:6},{text:"Presentation Error",value:7},{text:"System Error",value:8},{text:"Compile Error",value:9}],l={0:"C",1:"C++",2:"Java"},u={name:"StatusList",inject:["reload"],props:["cid"],components:{},data:function(){return{submission:{},answer_status:s,language2Str:l,result_text:r,result_text_filter:o,total:0,page:1,pageSize:10,uid:""}},methods:{getSubmissions:function(t,e){var i=this;this.$api.submission.findAllPagination(t,e).then((function(t){0===t.code?(i.total=t.data.total,i.submission=t.data.records):console.log(t)}))},handleTableChange:function(t){this.pagination.current=t.current,this.pagination.pageSize=t.pageSize,this.getSubmissions(t.current,t.pageSize)},getSubmissionForContest:function(t,e,i){var a=this;this.$api.contest.findSubmission(t,e,i).then((function(t){0===t.code?(a.total=t.data.total,a.submission=t.data.records):console.log(t)}))},handlePageChange:function(t){this.page=t,null!=this.cid?this.getSubmissionForContest(this.cid,this.page,this.pageSize):this.getSubmissions(this.page,this.pageSize)},toDetail:function(t){this.$router.push({path:"detail",name:"detail",params:{status:t}})},filterHandler:function(t,e){return e["result"]===t}},created:function(){this.$store.state.user&&(this.uid=this.$store.state.user.uid),null!=this.cid?this.getSubmissionForContest(this.cid,1,10):this.getSubmissions(1,10)}},c=u,d=(i("152c"),i("2877")),p=Object(d["a"])(c,a,n,!1,null,null,null);e["default"]=p.exports},ba85:function(t,e,i){}}]);
//# sourceMappingURL=chunk-71d6d175.74fb82f6.js.map