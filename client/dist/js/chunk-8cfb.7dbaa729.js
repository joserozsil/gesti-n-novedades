(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8cfb"],{"11e9":function(t,e,n){var a=n("52a7"),o=n("4630"),i=n("6821"),r=n("6a99"),c=n("69a8"),s=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=i(t),e=r(e,!0),s)try{return u(t,e)}catch(t){}if(c(t,e))return o(!a.f.call(t,e),t[e])}},1653:function(t,e,n){"use strict";var a=n("9ccc"),o=n.n(a);o.a},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,n){var a=n("d3f4"),o=n("8b97").set;t.exports=function(t,e,n){var i,r=e.constructor;return r!==n&&"function"==typeof r&&(i=r.prototype)!==n.prototype&&a(i)&&o&&o(t,i),t}},6370:function(t,e,n){"use strict"},"8b97":function(t,e,n){var a=n("d3f4"),o=n("cb7c"),i=function(t,e){if(o(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:a(t,n),t}}({},!1):void 0),check:i}},9093:function(t,e,n){var a=n("ce10"),o=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,o)}},"9ccc":function(t,e,n){},c5f6:function(t,e,n){"use strict";var a=n("7726"),o=n("69a8"),i=n("2d95"),r=n("5dbc"),c=n("6a99"),s=n("79e5"),u=n("9093").f,f=n("11e9").f,l=n("86cc").f,p=n("aa77").trim,d="Number",m=a[d],h=m,g=m.prototype,_=i(n("2aeb")(g))==d,b="trim"in String.prototype,v=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():p(e,3);var n,a,o,i=e.charCodeAt(0);if(43===i||45===i){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:a=2,o=49;break;case 79:case 111:a=8,o=55;break;default:return+e}for(var r,s=e.slice(2),u=0,f=s.length;u<f;u++)if(r=s.charCodeAt(u),r<48||r>o)return NaN;return parseInt(s,a)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof m&&(_?s(function(){g.valueOf.call(n)}):i(n)!=d)?r(new h(v(e)),n,m):v(e)};for(var y,I=n("9e1e")?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;I.length>E;E++)o(h,y=I[E])&&!o(m,y)&&l(m,y,f(h,y));m.prototype=g,g.constructor=m,n("2aba")(a,d,m)}},db49:function(t,e,n){"use strict";n("cadf"),n("551c");var a={API_URL:"https://cicpc-novedades.herokuapp.com/api/v1",API_IMAGE:"https://cicpc-novedades.herokuapp.com/uploads",API_REPORT:"https://cicpc-report.herokuapp.com/api",RENDER_REPORT:"https://cicpc-report.herokuapp.com/"};e["a"]=a},dfcf:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",[n("b-col",{attrs:{md:"4",sm:"6"}},[n("b-form-group",{attrs:{label:"Fecha de Inicio","laber-for":"date",horizontal:!1}},[n("b-form-input",{attrs:{type:"date",placeholder:"Buscar por fecha inicia"},model:{value:t.initialDate,callback:function(e){t.initialDate=e},expression:"initialDate"}})],1)],1),n("b-col",{attrs:{md:"4",sm:"6"}},[n("b-form-group",{attrs:{label:"Fecha Final","laber-for":"date",horizontal:!1}},[n("b-form-input",{attrs:{type:"date",placeholder:"Buscar por fecha final"},model:{value:t.finalDate,callback:function(e){t.finalDate=e},expression:"finalDate"}})],1)],1),t._v("\n  "+t._s(t.initialDate)+" "+t._s(t.finalDate)+"\n  "),n("b-col",{attrs:{cols:"12",xl:"12"}},[n("transition",{attrs:{name:"slide"}},[n("b-card",{attrs:{header:t.caption}},[n("b-table",{attrs:{hover:t.hover,striped:t.striped,bordered:t.bordered,small:t.small,fixed:t.fixed,responsive:"sm",items:t.items,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage},scopedSlots:t._u([{key:"id",fn:function(e){return[n("strong",[t._v(t._s(e.item.id))])]}},{key:"usuario",fn:function(e){return[n("strong",[t._v(t._s(e.item.Usuario.usuario))])]}},{key:"nombre",fn:function(e){return[n("strong",[t._v(t._s(e.item.Usuario.nombre)+" "+t._s(e.item.Usuario.apellido))])]}},{key:"descripción",fn:function(e){return[n("strong",[t._v(t._s(e.item.descripcion))])]}},{key:"fecha",fn:function(e){return[n("strong",[t._v(t._s(t._f("listDate")(e.item.f_creacion)))])]}}])}),n("nav",[n("b-pagination",{attrs:{size:"sm","total-rows":t.getRowCount(t.items),"per-page":t.perPage,"prev-text":"Prev","next-text":"Next","hide-goto-end-buttons":""},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1)],1)},o=[],i=(n("c5f6"),n("6370"),n("db49")),r=n("c1df"),c=n.n(r),s={name:"Alert",props:{caption:{type:String,default:"Historial de Acciones"},hover:{type:Boolean,default:!0},striped:{type:Boolean,default:!0},bordered:{type:Boolean,default:!1},small:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1}},data:function(){return{items:[],fields:[{key:"usuario"},{key:"nombre"},{key:"descripción"},{key:"fecha"}],currentPage:1,perPage:15,totalRows:0,initialDate:c()().format("YYYY-MM-DD"),finalDate:c()().format("YYYY-MM-DD")}},watch:{initialDate:function(){var t=this;Event.$emit("loading"),axios.get("".concat(i["a"].API_URL,"/history?limit=1")).then(function(e){axios.get("".concat(i["a"].API_URL,"/history?limit=").concat(e.total,"&DATE_MIN=").concat(t.initialDate,"&DATE_MAX=").concat(t.finalDate)).then(function(e){t.items=e.data.data,Event.$emit("stopLoading")})}).catch(function(t){Event.$emit("stopLoading"),console.dir(t)})},finalDate:function(){var t=this;Event.$emit("loading"),axios.get("".concat(i["a"].API_URL,"/history?limit=1")).then(function(e){axios.get("".concat(i["a"].API_URL,"/history?limit=").concat(e.total,"&DATE_MIN=").concat(t.initialDate,"&DATE_MAX=").concat(t.finalDate)).then(function(e){t.items=e.data.data,Event.$emit("stopLoading")})}).catch(function(t){Event.$emit("stopLoading"),console.dir(t)})}},computed:{},mounted:function(){axios.defaults.headers.common["authorization"]=localStorage.getItem("token"),this.getHistory()},methods:{getRowCount:function(t){return t.length},getHistory:function(){var t=this;Event.$emit("loading"),axios.get("".concat(i["a"].API_URL,"/history?limit=").concat(Number(1))).then(function(e){axios.get("".concat(i["a"].API_URL,"/history?limit=").concat(Number(e.data.total+1))).then(function(e){t.items=e.data.data,Event.$emit("stopLoading")}).catch(function(t){console.dir(t),Event.$emit("stopLoading")})})}}},u=s,f=(n("1653"),n("2877")),l=Object(f["a"])(u,a,o,!1,null,"06022203",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-8cfb.7dbaa729.js.map