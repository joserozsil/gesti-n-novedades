(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7423"],{"0bfb":function(e,t,n){"use strict";var o=n("cb7c");e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"1ca3":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",[n("b-col",{attrs:{cols:"12",xl:"12"}},[n("transition",{attrs:{name:"slide"}},[n("b-card",{attrs:{header:e.caption}},[n("b-table",{attrs:{hover:e.hover,striped:e.striped,bordered:e.bordered,small:e.small,fixed:e.fixed,responsive:"sm",items:e.items,fields:e.fields,"current-page":e.currentPage,"per-page":e.perPage},on:{"row-clicked":e.rowClicked},scopedSlots:e._u([{key:"id",fn:function(t){return[n("strong",[e._v(e._s(t.item.id))])]}},{key:"usuario",fn:function(t){return[n("strong",[e._v(e._s(t.item.Usuario.usuario))])]}},{key:"nombre",fn:function(t){return[n("strong",[e._v(e._s(t.item.Usuario.nombre)+" "+e._s(t.item.Usuario.apellido))])]}},{key:"fecha",fn:function(t){return[e._v("\n          "+e._s(e._f("listDate")(t.item.f_creacion))+"\n        ")]}},{key:"rol",fn:function(t){return[n("b-badge",[e._v(e._s(t.item.Usuario.rol))])]}}])}),n("nav",[n("b-pagination",{attrs:{size:"sm","total-rows":e.getRowCount(e.items),"per-page":e.perPage,"prev-text":"Prev","next-text":"Next","hide-goto-end-buttons":""},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)],1)],1)],1)},a=[],r=(n("28a5"),n("6b54"),n("db49")),i={name:"Usuarios",props:{caption:{type:String,default:"Historial de Acceso"},hover:{type:Boolean,default:!0},striped:{type:Boolean,default:!0},bordered:{type:Boolean,default:!1},small:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1}},data:function(){return{items:[],fields:[{key:"id"},{key:"usuario"},{key:"nombre"},{key:"fecha"},{key:"rol"}],currentPage:1,perPage:15,totalRows:0}},computed:{},mounted:function(){axios.defaults.headers.common["authorization"]=localStorage.getItem("token"),this.getHistory()},methods:{getBadge:function(e){return"Active"===e?"success":"Inactive"===e?"secondary":"Pending"===e?"warning":"Banned"===e?"danger":"primary"},getRowCount:function(e){return e.length},userLink:function(e){return"users/".concat(e.toString())},rowClicked:function(e){var t=this.userLink(e.id);this.$router.push({path:t})},getUsername:function(e){return e.split(" ")[0]},getHistory:function(){var e=this;axios.get("".concat(r["a"].API_URL,"/access?limit=1")).then(function(t){axios.get("".concat(r["a"].API_URL,"/access?limit=").concat(t.total)).then(function(t){e.items=t.data.data})})}}},s=i,c=(n("2223"),n("2877")),u=Object(c["a"])(s,o,a,!1,null,"a11ef80a",null);t["default"]=u.exports},2223:function(e,t,n){"use strict";var o=n("2508"),a=n.n(o);a.a},2508:function(e,t,n){},3846:function(e,t,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"6b54":function(e,t,n){"use strict";n("3846");var o=n("cb7c"),a=n("0bfb"),r=n("9e1e"),i="toString",s=/./[i],c=function(e){n("2aba")(RegExp.prototype,i,e,!0)};n("79e5")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?c(function(){var e=o(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?a.call(e):void 0)}):s.name!=i&&c(function(){return s.call(this)})},db49:function(e,t,n){"use strict";var o={API_URL:"http://localhost:3000/api/v1",API_IMAGE:"http://localhost:3000/uploads",API_REPORT:"http://localhost:8000/api",RENDER_REPORT:"http://localhost:8000"};t["a"]=o}}]);
//# sourceMappingURL=chunk-7423.ad0735dc.js.map