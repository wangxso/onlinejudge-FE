(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bdb9196"],{"2bc9":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("a-row",{staticStyle:{"padding-top":"2%"}},[s("a-col",{attrs:{span:20}},[s("a-alert",{attrs:{message:t.result_text[t.status.result],type:t.answer_status[t.status.result],"show-icon":""}},[s("p",{staticStyle:{"padding-top":"10px"},attrs:{slot:"description"},slot:"description"},[s("span",{staticClass:"detail-info"},[t._v("Time: "+t._s(t.status.timeCost)+" ms")]),s("span",{staticClass:"detail-info"},[t._v("Memory: "+t._s(t.status.timeCost)+" ms")]),s("span",{staticClass:"detail-info"},[t._v("Lang: "+t._s(t.language2Str[t.status.language]))]),s("span",{staticClass:"detail-info"},[t._v("Author: "+t._s(t.status.user.username))]),s("br")])])],1),t.status.error?s("a-col",{staticStyle:{"padding-top":"10px"},attrs:{span:20}},[s("a-alert",{attrs:{type:t.answer_status[t.status.result]}},[s("p",{attrs:{slot:"message"},slot:"message"},[t._v(" Error Info: "+t._s(t.status.error)+" ")])])],1):t._e(),s("a-col",{staticStyle:{"padding-top":"10px"},attrs:{span:20}},[s("Highlight",{attrs:{code:t.status.code,language:t.language2Str[t.status.language],"border-color":t.colors[t.status.result]}})],1)],1)],1)},a=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{directives:[{name:"highlight",rawName:"v-highlight",value:t.code,expression:"code"}]},[s("code",{class:t.language,style:t.styleObject})])},o=[],i={name:"highlight",data:function(){return{styleObject:{"border-left":"2px solid green"}}},props:{language:{type:String},code:{required:!0,type:String},borderColor:{type:String,default:"green"}},watch:{borderColor:function(t){this.styleObject["border-left"]="2.5px solid "+t}},mounted:function(){this.styleObject["border-left"]="2.5px solid "+this.borderColor}},l=i,c=(s("c688"),s("2877")),u=Object(c["a"])(l,n,o,!1,null,"27b14011",null),d=u.exports,p={"-1":"info",1:"success",2:"error",3:"warning",4:"error",5:"error",6:"error",7:"warning",8:"warning",9:"warning"},g={"-1":"blue",1:"#87d068",2:"#ff0000",3:"#f50",4:"pink",5:"#ff0000",6:"#ff0000",7:"#f50",8:"#f50",9:"#f50"},f={"-1":"Pending",1:"Accepted",2:"Wrong Answer",3:"Runtime Error",4:"Output Limit Exceeded",5:"Memory Limit Exceeded",6:"Time Limit Exceeded",7:"Presentation Error",8:"System Error",9:"Compile Error"},h={0:"text/x-c++src",1:"text/x-c++src",2:"text/x-java"},m={0:"C",1:"C++",2:"Java"},b={name:"StatusDetail",props:["status"],data:function(){return{answer_status:p,result_text:f,highlight:h,language2Str:m,colors:g}},components:{Highlight:d}},x=b,_=(s("e655"),Object(c["a"])(x,r,a,!1,null,"4e8c9987",null));e["default"]=_.exports},"2d92":function(t,e,s){},ba9a:function(t,e,s){},c688:function(t,e,s){"use strict";s("2d92")},e655:function(t,e,s){"use strict";s("ba9a")}}]);
//# sourceMappingURL=chunk-5bdb9196.530ae917.js.map