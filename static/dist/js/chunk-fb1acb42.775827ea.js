(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb1acb42"],{"08a7":function(e,t,o){},3355:function(e,t,o){"use strict";function a(e){return null===e}t["a"]=a},a9e7:function(e,t,o){"use strict";var a=o("08a7"),r=o.n(a);r.a},b986:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",{staticClass:"settings"},[o("breadcrumb",{attrs:{data:["Clusters",e.$route.params.id,"settings"]}}),o("el-form",{ref:"Form",attrs:{model:e.formModel,"label-width":"150px"}},[o("el-form-item",{attrs:{label:"Replica"}},[o("el-switch",{model:{value:e.formModel.isReplica,callback:function(t){e.$set(e.formModel,"isReplica",t)},expression:"formModel.isReplica"}})],1),o("el-form-item",{attrs:{label:"Zookeeper Node List:",prop:"zkNodes"}},[o("el-input",{staticClass:"width-350",attrs:{type:"textarea",autosize:{minRows:2},placeholder:"多个ip,请以逗号,分隔填写"},model:{value:e.formModel.zkNodes,callback:function(t){e.$set(e.formModel,"zkNodes",t)},expression:"formModel.zkNodes"}})],1),o("el-form-item",{attrs:{label:"Data path:",prop:"path"}},[o("el-input",{staticClass:"width-350",model:{value:e.formModel.path,callback:function(t){e.$set(e.formModel,"path",t)},expression:"formModel.path"}})],1),o("el-form-item",{attrs:{label:"Cluster Username:",prop:"user"}},[o("el-input",{staticClass:"width-350",model:{value:e.formModel.user,callback:function(t){e.$set(e.formModel,"user",t)},expression:"formModel.user"}})],1),o("el-form-item",{attrs:{label:"Cluster Password:",prop:"password"}},[o("el-input",{staticClass:"width-350",model:{value:e.formModel.password,callback:function(t){e.$set(e.formModel,"password",t)},expression:"formModel.password"}})],1)],1),o("el-button",{staticClass:"ml-200",attrs:{type:"primary"},on:{click:e.save}},[e._v("Save & Reboot")])],1)},r=[],s=o("a34a"),n=o.n(s),l=o("c949"),i=o("3355"),c=o("c281");function u(e,t,o,a,r,s,n){try{var l=e[s](n),i=l.value}catch(c){return void o(c)}l.done?t(i):Promise.resolve(i).then(a,r)}function d(e){return function(){var t=this,o=arguments;return new Promise((function(a,r){var s=e.apply(t,o);function n(e){u(s,a,r,n,l,"next",e)}function l(e){u(s,a,r,n,l,"throw",e)}n(void 0)}))}}var f={data:function(){return{formModel:{zkNodes:"",user:"",path:"",password:"",isReplica:!1}}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var e=this;return d(n.a.mark((function t(){var o,a,r;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o=e.$route.params.id,!Object(i["a"])(e.$root.clusterBench)){t.next=9;break}return t.next=4,l["a"].getCluster();case 4:a=t.sent,r=a.data.entity,e.formModel=r["".concat(o)],t.next=10;break;case 9:e.formModel=e.$root.clusterBench;case 10:case"end":return t.stop()}}),t)})))()},save:function(){var e=this;return d(n.a.mark((function t(){return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l["a"].updateCluster(Object.assign({},e.formModel,{zkNodes:Object(c["b"])(e.formModel.zkNodes),hosts:Object(c["b"])(e.formModel.hosts)}));case 2:e.$message.success("更新成功");case 3:case"end":return t.stop()}}),t)})))()}},components:{}},p=f,m=(o("a9e7"),o("2877")),h=Object(m["a"])(p,a,r,!1,null,"f33f5dd2",null);t["default"]=h.exports}}]);