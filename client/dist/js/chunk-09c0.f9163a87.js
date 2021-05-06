(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09c0"],{"07a4":function(t,e,n){"use strict";n("f751");var a=n("2f62"),i=n("bc3a"),o=n.n(i),r=n("db49"),s=new a["a"].Store({state:{user:{},token:"",loading:!1},mutations:{setDataUser:function(t,e){Object.assign(t.user,e)},setToken:function(t,e){t.token=e},updateUser:function(t,e){t.user=e},setLoading:function(t,e){t.loading=e}},getters:{user:function(t){return t.user}},actions:{getUser:function(t){return t.commit("setLoading",!0),o.a.post("".concat(r["a"].API_URL,"/token"),{token:localStorage.getItem("token")},{headers:{authorization:localStorage.getItem("token")}}).then(function(e){t.commit("updateUser",e.data),t.commit("setLoading",!1)})}}});e["a"]=s},2621:function(t,e){e.f=Object.getOwnPropertySymbols},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"60e4":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",[n("b-col",{staticClass:"ml-auto",attrs:{md:"4",sm:"12"}},[n("b-form-group",{attrs:{label:"Buscar por exp y clise","laber-for":"date",horizontal:!1}},[n("b-form-input",{attrs:{type:"text",placeholder:"Buscar exp y clise"},on:{change:function(e){t.search()}},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})],1)],1),n("b-col",{attrs:{cols:"12",xl:"12"}},[n("transition",{attrs:{name:"slide"}},[n("b-card",{attrs:{header:t.caption}},[n("b-table",{attrs:{responsive:"sm",hover:t.hover,striped:t.striped,bordered:t.bordered,small:t.small,fixed:t.fixed,items:t.items,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage},scopedSlots:t._u([{key:"id",fn:function(e){return[n("strong",[t._v(t._s(e.item.id))])]}},{key:"retrato",fn:function(e){return[n("b-navbar",{attrs:{variant:"faded",type:"light"}},[n("b-navbar-brand",{attrs:{tag:"h1",href:"#"}},[n("img",{staticClass:"img-avatar d-inline-block align-top",attrs:{src:t.urlImage+"/"+e.item.Evidencium.Imagens[0].nombre_archivo,width:"40px",alt:"BV"}})])],1)]}},{key:"exp",fn:function(e){return[n("strong",[t._v(t._s(e.item.exp))])]}},{key:"dibujante",fn:function(e){return[e.item.Usuario?n("strong",[t._v("\n            "+t._s(e.item.Usuario.nombre)+" "+t._s(e.item.Usuario.apellido)+"\n          ")]):t._e()]}},{key:"fecha",fn:function(e){return[n("b-badge",[t._v(t._s(t._f("listDate")(e.item.f_creacion)))])]}},{key:"solicitud",fn:function(e){return[n("strong",[t._v(t._s(e.item.solicitado_por))])]}},{key:"acción",fn:function(e){return[n("b-button",{staticClass:"btn-pill",attrs:{variant:"primary"},on:{click:function(n){t.generateReport(e.item.id)}}},[t._v("Reporte")]),n("b-button",{staticClass:"btn-pill",attrs:{variant:"primary"},on:{click:function(n){t.goToDetail(e.item.evidencia_id)}}},[t._v("Detalles")]),t.isEnabled(e.item.f_creacion)?n("b-button",{staticClass:"btn-pill",attrs:{variant:"success"},on:{click:function(n){t.goToEdit(e.item.evidencia_id)}}},[t._v("Actualizar")]):t._e()]}}])}),n("nav",[n("b-pagination",{attrs:{size:"sm","total-rows":t.getRowCount(t.items),"per-page":t.perPage,"prev-text":"Prev","next-text":"Next","hide-goto-end-buttons":""},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1)],1)},i=[],o=(n("f751"),n("cadf"),n("551c"),n("db49")),r=(n("1940"),n("07a4"),n("c1df")),s=n.n(r),c={name:"Usuarios",props:{caption:{type:String,default:"Lista de Retratos Realizados"},hover:{type:Boolean,default:!0},striped:{type:Boolean,default:!0},bordered:{type:Boolean,default:!1},small:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1}},data:function(){return{items:[],fields:[{key:"retrato"},{key:"exp"},{key:"dibujante"},{key:"fecha"},{key:"solicitud"},{key:"acción"}],currentPage:1,perPage:15,totalRows:0,urlImage:o["a"].API_IMAGE,query:""}},computed:{},mounted:function(){axios.defaults.headers.common["authorization"]=localStorage.getItem("token"),this.getActs()},methods:{getRowCount:function(t){return t.length},getActs:function(){var t=this;Event.$emit("loading"),axios.get("".concat(o["a"].API_URL,"/portraits?limit=1")).then(function(e){axios.get("".concat(o["a"].API_URL,"/portraits?limit=").concat(e.data.total)).then(function(e){t.items=e.data.data.filter(function(t){return"COMPLETADO"==t.Evidencium.estado}),Event.$emit("stopLoading")}).catch(function(t){console.dir(t),Event.$emit("stopLoading")})})},generateReport:function(t){Event.$emit("loading");var e=this.items.filter(function(e){return e.id==t})[0],n=o["a"].API_IMAGE+"/"+e.Evidencium.Imagens[0].nombre_archivo;Object.assign(e,{image:n}),axios.post("".concat(o["a"].API_REPORT,"/portraits"),{data:e}).then(function(t){window.open(o["a"].RENDER_REPORT+"/"+t.data,"_blank"),Event.$emit("stopLoading")}).catch(function(t){console.dir(t),Event.$emit("stopLoading")})},goToEdit:function(t){this.$router.push({name:"editAct",params:{id:t}})},goToDetail:function(t){this.$router.push({name:"detailAct",params:{id:t}})},isEnabled:function(t){var e=s()(t).add(1,"day").unix()<s()().unix();return!0!==e},search:function(){var t=this;this.query.length>2?(Event.$emit("loading"),axios.post("".concat(o["a"].API_URL,"/search/portraits"),{quering:this.query}).then(function(e){t.items=e.data.data,Event.$emit("stopLoading")}).catch(function(t){console.dir(t),Event.$emit("stopLoading")})):this.getActs()}}},u=c,l=(n("d21b"),n("2877")),d=Object(l["a"])(u,a,i,!1,null,"3a40e1ac",null);e["default"]=d.exports},73334:function(t,e,n){"use strict";var a=n("0d58"),i=n("2621"),o=n("52a7"),r=n("4bf8"),s=n("626a"),c=Object.assign;t.exports=!c||n("79e5")(function(){var t={},e={},n=Symbol(),a="abcdefghijklmnopqrst";return t[n]=7,a.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=a})?function(t,e){var n=r(t),c=arguments.length,u=1,l=i.f,d=o.f;while(c>u){var f,m=s(arguments[u++]),p=l?a(m).concat(l(m)):a(m),g=p.length,b=0;while(g>b)d.call(m,f=p[b++])&&(n[f]=m[f])}return n}:c},"80b7":function(t,e,n){},d21b:function(t,e,n){"use strict";var a=n("80b7"),i=n.n(a);i.a},f751:function(t,e,n){var a=n("5ca1");a(a.S+a.F,"Object",{assign:n("73334")})}}]);
//# sourceMappingURL=chunk-09c0.f9163a87.js.map