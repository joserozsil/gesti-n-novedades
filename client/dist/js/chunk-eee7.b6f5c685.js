(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eee7"],{"07a4":function(t,e,n){"use strict";n("f751");var a=n("2f62"),o=n("bc3a"),i=n.n(o),r=n("db49"),s=new a["a"].Store({state:{user:{},token:"",loading:!1},mutations:{setDataUser:function(t,e){Object.assign(t.user,e)},setToken:function(t,e){t.token=e},updateUser:function(t,e){t.user=e},setLoading:function(t,e){t.loading=e}},getters:{user:function(t){return t.user}},actions:{getUser:function(t){return t.commit("setLoading",!0),i.a.post("".concat(r["a"].API_URL,"/token"),{token:localStorage.getItem("token")},{headers:{authorization:localStorage.getItem("token")}}).then(function(e){t.commit("updateUser",e.data),t.commit("setLoading",!1)})}}});e["a"]=s},2621:function(t,e){e.f=Object.getOwnPropertySymbols},"47b7":function(t,e,n){},"52a7":function(t,e){e.f={}.propertyIsEnumerable},73334:function(t,e,n){"use strict";var a=n("0d58"),o=n("2621"),i=n("52a7"),r=n("4bf8"),s=n("626a"),c=Object.assign;t.exports=!c||n("79e5")(function(){var t={},e={},n=Symbol(),a="abcdefghijklmnopqrst";return t[n]=7,a.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=a})?function(t,e){var n=r(t),c=arguments.length,u=1,l=o.f,d=i.f;while(c>u){var f,p=s(arguments[u++]),m=l?a(p).concat(l(p)):a(p),g=m.length,h=0;while(g>h)d.call(p,f=m[h++])&&(n[f]=p[f])}return n}:c},"73e9":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",[n("b-col",{staticClass:"ml-auto",attrs:{md:"4",sm:"12"}},[n("b-form-group",{attrs:{label:"Buscar por exp y clise","laber-for":"date",horizontal:!1}},[n("b-form-input",{attrs:{type:"text",placeholder:"Buscar exp y clise"},on:{change:function(e){t.search()}},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})],1)],1),n("b-col",{attrs:{cols:"12",xl:"12"}},[n("transition",{attrs:{name:"slide"}},[n("b-card",{attrs:{header:t.caption}},[n("b-table",{attrs:{hover:t.hover,striped:t.striped,bordered:t.bordered,small:t.small,fixed:t.fixed,responsive:"sm",items:t.items,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage},scopedSlots:t._u([{key:"id",fn:function(e){return[n("strong",[t._v(t._s(e.item.id))])]}},{key:"imagen",fn:function(e){return[n("b-navbar",{attrs:{variant:"faded",type:"light"}},[n("b-navbar-brand",{attrs:{tag:"h1",href:"#"}},[n("img",{staticClass:"img-avatar d-inline-block align-top",attrs:{src:t.urlImage+"/"+e.item.Evidencium.Imagens[0].nombre_archivo,width:"60px",alt:"BV"}})])],1)]}},{key:"exp",fn:function(e){return[n("strong",[t._v(t._s(e.item.exp))])]}},{key:"tipo",fn:function(e){return[n("strong",[t._v(t._s(e.item.tipo))])]}},{key:"color",fn:function(e){return[n("strong",[t._v(t._s(e.item.color))])]}},{key:"talla",fn:function(e){return[n("strong",[t._v(t._s(e.item.talla))])]}},{key:"fecha",fn:function(e){return[n("b-badge",[t._v(t._s(t._f("listDate")(e.item.f_creacion)))])]}},{key:"acción",fn:function(e){return[n("b-button",{staticClass:"btn-pill",attrs:{variant:"primary"},on:{click:function(n){t.generateReport(e.item.id)}}},[t._v("Reporte")]),n("b-button",{staticClass:"btn-pill",attrs:{variant:"info"},on:{click:function(n){t.goToDetail(e.item.evidencia_id)}}},[t._v("Detalles")]),t.isEnabled(e.item.f_creacion)?n("b-button",{staticClass:"btn-pill",attrs:{variant:"success"},on:{click:function(n){t.goToUpdate(e.item.evidencia_id)}}},[t._v("Actualizar")]):t._e()]}}])}),n("nav",[n("b-pagination",{attrs:{size:"sm","total-rows":t.getRowCount(t.items),"per-page":t.perPage,"prev-text":"Prev","next-text":"Next","hide-goto-end-buttons":""},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1)],1)},o=[],i=(n("f751"),n("db49")),r=(n("1940"),n("07a4"),n("c1df")),s=n.n(r),c={name:"Usuarios",props:{caption:{type:String,default:"Prendas de Vestir"},hover:{type:Boolean,default:!0},striped:{type:Boolean,default:!0},bordered:{type:Boolean,default:!1},small:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1}},data:function(){return{items:[],fields:[{key:"imagen"},{key:"exp"},{key:"tipo"},{key:"color"},{key:"talla"},{key:"fecha"},{key:"acción"}],currentPage:1,perPage:15,totalRows:0,urlImage:i["a"].API_IMAGE,query:""}},computed:{},mounted:function(){this.getClothes()},methods:{getRowCount:function(t){return t.length},getClothes:function(){var t=this;Event.$emit("loading"),axios.get("".concat(i["a"].API_URL,"/clothes?limit=1")).then(function(e){axios.get("".concat(i["a"].API_URL,"/clothes?limit=").concat(e.data.total)).then(function(e){t.items=e.data.data.filter(function(t){return"COMPLETADO"==t.Evidencium.estado}),Event.$emit("stopLoading")}).catch(function(t){console.dir(t),Event.$emit("stopLoading")})})},goToUpdate:function(t){this.$router.push({name:"editClothes",params:{id:t}})},goToDetail:function(t){this.$router.push({name:"detailClothes",params:{id:t}})},generateReport:function(t){Event.$emit("loading");var e=this.items.filter(function(e){return e.id==t})[0],n=i["a"].API_IMAGE+"/"+e.Evidencium.Imagens[0].nombre_archivo;Object.assign(e,{image:n}),axios.post("".concat(i["a"].API_REPORT,"/clothes"),{data:e}).then(function(t){window.open(i["a"].RENDER_REPORT+"/"+t.data,"_blank"),Event.$emit("stopLoading")}).catch(function(t){console.dir(t),Event.$emit("stopLoading")})},isEnabled:function(t){var e=s()(t).add(1,"day").unix()<s()().unix();return!0!==e},search:function(){var t=this;this.query.length>2?(Event.$emit("loading"),axios.post("".concat(i["a"].API_URL,"/search/clothes"),{quering:this.query}).then(function(e){t.items=e.data.data,Event.$emit("stopLoading")}).catch(function(t){console.dir(t),Event.$emit("stopLoading")})):this.getClothes()}}},u=c,l=(n("d231"),n("2877")),d=Object(l["a"])(u,a,o,!1,null,"67b41004",null);e["default"]=d.exports},d231:function(t,e,n){"use strict";var a=n("47b7"),o=n.n(a);o.a},f751:function(t,e,n){var a=n("5ca1");a(a.S+a.F,"Object",{assign:n("73334")})}}]);
//# sourceMappingURL=chunk-eee7.b6f5c685.js.map