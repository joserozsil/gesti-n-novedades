(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51b2"],{"0bfb":function(e,r,t){"use strict";var a=t("cb7c");e.exports=function(){var e=a(this),r="";return e.global&&(r+="g"),e.ignoreCase&&(r+="i"),e.multiline&&(r+="m"),e.unicode&&(r+="u"),e.sticky&&(r+="y"),r}},"1ca3":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("b-row",[t("b-col",{attrs:{cols:"12",xl:"12"}},[t("transition",{attrs:{name:"slide"}},[t("b-card",{attrs:{header:e.caption}},[t("b-table",{attrs:{hover:e.hover,striped:e.striped,bordered:e.bordered,small:e.small,fixed:e.fixed,responsive:"sm",items:e.items,fields:e.fields,"current-page":e.currentPage,"per-page":e.perPage},on:{"row-clicked":e.rowClicked},scopedSlots:e._u([{key:"id",fn:function(r){return[t("strong",[e._v(e._s(r.item.id))])]}},{key:"usuario",fn:function(r){return[t("strong",[e._v(e._s(r.item.username)+e._s(e.getUsername(r.item.name)))])]}},{key:"nombre",fn:function(r){return[t("strong",[e._v(e._s(r.item.name))])]}},{key:"fecha",fn:function(r){return[t("b-badge",[e._v(e._s(r.item.registered))])]}},{key:"acción",fn:function(r){return[t("b-button",{staticClass:"btn-pill",attrs:{variant:"primary"}},[e._v("Detalles")])]}}])}),t("nav",[t("b-pagination",{attrs:{size:"sm","total-rows":e.getRowCount(e.items),"per-page":e.perPage,"prev-text":"Prev","next-text":"Next","hide-goto-end-buttons":""},model:{value:e.currentPage,callback:function(r){e.currentPage=r},expression:"currentPage"}})],1)],1)],1)],1)],1)},n=[],s=(t("28a5"),t("6b54"),t("bd76")),i={name:"Usuarios",props:{caption:{type:String,default:"Historial de Acceso"},hover:{type:Boolean,default:!0},striped:{type:Boolean,default:!0},bordered:{type:Boolean,default:!1},small:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1}},data:function(){return{items:s["a"].filter(function(e){return e.id<42}),fields:[{key:"id"},{key:"usuario"},{key:"nombre"},{key:"fecha"},{key:"acción"}],currentPage:1,perPage:15,totalRows:0}},computed:{},methods:{getBadge:function(e){return"Active"===e?"success":"Inactive"===e?"secondary":"Pending"===e?"warning":"Banned"===e?"danger":"primary"},getRowCount:function(e){return e.length},userLink:function(e){return"users/".concat(e.toString())},rowClicked:function(e){var r=this.userLink(e.id);this.$router.push({path:r})},getUsername:function(e){return e.split(" ")[0]}}},o=i,u=(t("fba7"),t("2877")),d=Object(u["a"])(o,a,n,!1,null,"74c1a5fb",null);r["default"]=d.exports},3225:function(e,r,t){},3846:function(e,r,t){t("9e1e")&&"g"!=/./g.flags&&t("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:t("0bfb")})},"6b54":function(e,r,t){"use strict";t("3846");var a=t("cb7c"),n=t("0bfb"),s=t("9e1e"),i="toString",o=/./[i],u=function(e){t("2aba")(RegExp.prototype,i,e,!0)};t("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?u(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!s&&e instanceof RegExp?n.call(e):void 0)}):o.name!=i&&u(function(){return o.call(this)})},bd76:function(e,r,t){"use strict";var a=[{id:0,username:"@",name:"John Doe",registered:"2018/01/01 8:25am",role:"Guest",status:"Pending"},{id:1,username:"@",name:"Samppa Nori",registered:"2018/01/01 8:25am",role:"Operador",status:"Active"},{id:2,username:"@",name:"Estavan Lykos",registered:"2018/02/01 7:19am",role:"Recepcionista",status:"Banned"},{id:3,username:"@",name:"Chetan Mohamed",registered:"2018/02/01 7:19am",role:"Administrador",status:"Inactive"},{id:4,username:"@",name:"Derick Maximinus",registered:"2018/03/01 1:40 pm",role:"Operador",status:"Pending"},{id:5,username:"@",name:"Friderik Dávid",registered:"2018/01/21 1:50pm",role:"Recepcionista",status:"Active"},{id:6,username:"@",name:"Yiorgos Avraamu",registered:"2018/01/01 8:25am",role:"Operador",status:"Active"},{id:7,username:"@",name:"Avram Tarasios",registered:"2018/02/01 7:19am",role:"Recepcionista",status:"Banned"},{id:8,username:"@",name:"Quintin Ed",registered:"2018/02/01 7:19am",role:"Administrador",status:"Inactive"},{id:9,username:"@",name:"Enéas Kwadwo",registered:"2018/03/01 1:40 pm",role:"Operador",status:"Pending"},{id:10,username:"@",name:"Agapetus Tadeáš",registered:"2018/01/21 1:50pm",role:"Recepcionista",status:"Active"},{id:11,username:"@",name:"Carwyn Fachtna",registered:"2018/01/01 8:25am",role:"Operador",status:"Active"},{id:12,username:"@",name:"Nehemiah Tatius",registered:"2018/02/01 7:19am",role:"Recepcionista",status:"Banned"},{id:13,username:"@",name:"Ebbe Gemariah",registered:"2018/02/01 7:19am",role:"Administrador",status:"Inactive"},{id:14,username:"@",name:"Eustorgios Amulius",registered:"2018/03/01 1:40 pm",role:"Operador",status:"Pending"},{id:15,username:"@",name:"Leopold Gáspár",registered:"2018/01/21 1:50pm",role:"Recepcionista",status:"Active"},{id:16,username:"@",name:"Pompeius René",registered:"2018/01/01 8:25am",role:"Operador",status:"Active"},{id:17,username:"@",name:"Paĉjo Jadon",registered:"2018/02/01 7:19am",role:"Recepcionista",status:"Banned"},{id:18,username:"@",name:"Micheal Mercurius",registered:"2018/02/01 7:19am",role:"Administrador",status:"Inactive"},{id:19,username:"@",name:"Ganesha Dubhghall",registered:"2018/03/01 1:40 pm",role:"Operador",status:"Pending"},{id:20,username:"@",name:"Hiroto Šimun",registered:"2018/01/21 1:50pm",role:"Recepcionista",status:"Active"},{id:21,username:"@",name:"Vishnu Serghei",registered:"2018/01/01 8:25am",role:"Operador",status:"Active"},{id:22,username:"@",name:"Zbyněk Phoibos",registered:"2018/02/01 7:19am",role:"Recepcionista",status:"Banned"},{id:23,username:"@",name:"Einar Randall",registered:"2018/02/01 7:19am",role:"Administrador",status:"Inactive"},{id:24,username:"@",name:"Félix Troels",registered:"2018/03/21",role:"Recepcionista",status:"Active"},{id:25,username:"@",name:"Aulus Agmundr",registered:"2018/01/01 8:25am",role:"Operador",status:"Pending"},{id:42,username:"@",name:"Ford Prefex",registered:"2001/05/21",role:"Alien",status:"Don't panic!"}];r["a"]=a},fba7:function(e,r,t){"use strict";var a=t("3225"),n=t.n(a);n.a}}]);
//# sourceMappingURL=chunk-51b2.1bcc6141.js.map