(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213ce4"],{adf1:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("a-card",{attrs:{title:"Contest"}},[e("a-table",{attrs:{"data-source":t.data,customRow:t.rowClick,rowKey:"cid",loading:t.loading}},[e("a-table-column",{key:"cid",attrs:{title:"Cid","data-index":"cid"}}),e("a-table-column",{key:"title",attrs:{title:"Title","data-index":"title"}}),e("a-table-column",{key:"startDate",attrs:{title:"Start","data-index":"startDate"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(t._f("formatDate")(a))+" ")]}}])}),e("a-table-column",{key:"endDate",attrs:{title:"End","data-index":"endDate"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(t._f("formatDate")(a))+" ")]}}])}),e("a-table-column",{key:"tags",attrs:{title:"Tags","data-index":"tags"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",t._l(JSON.parse(a),(function(a){return e("a-tag",{key:a,attrs:{color:"blue"}},[t._v(t._s(a))])})),1)]}}])}),e("a-table-column",{attrs:{title:"status"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("a-tag",{attrs:{color:t.date_status[t.getDate(a.startDate,a.endDate)].color}},[t._v(t._s(t.date_status[t.getDate(a.startDate,a.endDate)].desc))])]}}])})],1)],1)],1)},o=[],s=(e("ac1f"),e("5319"),{"-1":{desc:"已结束",color:"#FF4949"},1:{desc:"进行中",color:"#13CE66"},2:{desc:"未开始",color:"#20A0FF"}}),r={data:function(){var t=this;return{date_status:s,data:[],loading:!0,rowClick:function(a){return{on:{click:function(){t.$router.push({path:"/contest/",name:"contestDetail",params:{contest:a}})}}}}}},methods:{findByPagination:function(t,a){var e=this;this.$api.contest.findContestPagination(t,a).then((function(t){0===t.code?(e.data=t.data.records,e.loading=!1):e.$message.error(t.msg)}))},getDate:function(t,a){var e=this.$moment(a).format("YYYY-MM-DD HH:mm:ss"),n=this.$moment(t).format("YYYY-MM-DD HH:mm:ss");e=e.replace(/-/g,"/"),n=n.replace(/-/g,"/");var o=new Date(e),s=new Date(n),r=o,i=s,c=new Date;return c>=r?-1:c<i?2:1}},mounted:function(){this.findByPagination(1,10)}},i=r,c=e("2877"),d=Object(c["a"])(i,n,o,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d213ce4.5eb27582.js.map