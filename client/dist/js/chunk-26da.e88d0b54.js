(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26da"],{"1aa0":function(t,e,o){"use strict";var a=o("b099"),r=o.n(a);r.a},"757a":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"animated fadeIn"},[o("b-row",[o("b-col",{attrs:{sm:"12"}},[o("b-card",[o("div",{attrs:{slot:"header"},slot:"header"},[o("strong",[t._v("Detalles de Cronología")])]),o("b-row",[o("b-col",{attrs:{sm:"6"}},[o("b-form-group",{attrs:{description:"CC-"+t.port.clise,label:"Clise","laber-for":"clise",horizontal:!1}},[o("b-form-input",{attrs:{disabled:"COMPLETADO"===t.receptionData.estado,type:"number",id:"clise"},model:{value:t.port.clise,callback:function(e){t.$set(t.port,"clise",e)},expression:"port.clise"}})],1)],1),o("b-col",{attrs:{sm:"6"}},[o("b-form-group",{attrs:{description:"K-18-0071-"+t.port.exp,label:"Exp","laber-for":"exp",horizontal:!1}},[o("b-form-input",{attrs:{disabled:"COMPLETADO"===t.receptionData.estado,type:"number",id:"exp"},model:{value:t.port.exp,callback:function(e){t.$set(t.port,"exp",e)},expression:"port.exp"}})],1)],1)],1),o("b-row",[o("b-col",{attrs:{sm:"6"}},[o("b-form-group",{attrs:{description:"Ej: Camisa",label:"Tipo","laber-for":"tipo",horizontal:!1}},[o("b-form-input",{attrs:{type:"text",id:"tipo"},model:{value:t.port.tipo,callback:function(e){t.$set(t.port,"tipo",e)},expression:"port.tipo"}})],1)],1),o("b-col",{attrs:{sm:"6"}},[o("b-form-group",{attrs:{description:"Ej: Algodón",label:"Textura","laber-for":"textura",horizontal:!1}},[o("b-form-input",{attrs:{type:"text",id:"textura"},model:{value:t.port.textura,callback:function(e){t.$set(t.port,"textura",e)},expression:"port.textura"}})],1)],1),o("b-col",{attrs:{sm:"6"}},[o("b-form-group",{attrs:{description:"Ej: Negro",label:"Color","laber-for":"color",horizontal:!1}},[o("b-form-input",{attrs:{type:"text",id:"color"},model:{value:t.port.color,callback:function(e){t.$set(t.port,"color",e)},expression:"port.color"}})],1)],1),o("b-col",{attrs:{sm:"6"}},[o("b-form-group",{attrs:{description:"Ej: SS",label:"Talla:","laber-for":"talla",horizontal:!1}},[o("b-form-input",{attrs:{type:"text",id:"talla"},model:{value:t.port.talla,callback:function(e){t.$set(t.port,"talla",e)},expression:"port.talla"}})],1)],1),o("b-col",{attrs:{sm:"6"}},[o("b-form-group",{attrs:{description:"Ej: Adidas",label:"Marca","laber-for":"marca",horizontal:!1}},[o("b-form-input",{attrs:{type:"text",id:"marca"},model:{value:t.port.marca,callback:function(e){t.$set(t.port,"marca",e)},expression:"port.marca"}})],1)],1),o("b-col",{attrs:{sm:"6"}},[o("b-form-group",{attrs:{description:"Ej: Empresa X C,A.",label:"Fabricante","laber-for":"fabricante",horizontal:!1}},[o("b-form-input",{attrs:{type:"text",id:"fabricante"},model:{value:t.port.fabricante,callback:function(e){t.$set(t.port,"fabricante",e)},expression:"port.fabricante"}})],1)],1),o("b-col",{attrs:{sm:"6"}},[o("b-form-group",{attrs:{description:"Ej: 1 kg",label:"Peso","laber-for":"peso",horizontal:!1}},[o("b-form-input",{attrs:{type:"text",id:"peso"},model:{value:t.port.peso,callback:function(e){t.$set(t.port,"peso",e)},expression:"port.peso"}})],1)],1)],1),o("b-row",[o("b-col",{attrs:{sm:"12"}},[o("b-form-group",{attrs:{label:"Comentario","laber-for":"comentarios",horizontal:!1}},[o("b-form-textarea",{staticClass:"form-control",attrs:{rows:"5"},model:{value:t.port.comentarios,callback:function(e){t.$set(t.port,"comentarios",e)},expression:"port.comentarios"}})],1)],1)],1)],1),o("b-card",[o("div",{attrs:{slot:"header"},slot:"header"},[o("strong",[t._v("Imágenes")])]),o("b-row",[o("b-col",{attrs:{sm:"12"}},[o("div",{staticClass:"wrapper"},[o("gallery",{attrs:{images:t.images,index:t.index},on:{close:function(e){t.index=null}}}),t._l(t.images,function(e,a){return o("div",{key:a,staticClass:"image",class:["image",t.index==a?"selected":""],style:{backgroundImage:"url("+e+")",width:"100%",height:"300px"},on:{click:function(e){t.index=a}}})})],2)])],1)],1),o("b-card",[o("div",{attrs:{slot:"header"},slot:"header"},[o("strong",[t._v("Datos de Recepción")])]),t.loading?t._e():o("b-row",[o("b-col",{attrs:{sm:"6"}},[o("b-form-group",{attrs:{label:"Tipo","laber-for":"tipo_recepcion",disabled:!0,horizontal:!1}},[o("b-form-input",{staticClass:"form-control",attrs:{disabled:"",value:t.receptionData.tipo_recepcion,type:"text",id:"clise"}})],1)],1),o("b-col",{attrs:{sm:"6"}},[o("b-form-group",{attrs:{label:"Funcionario",disabled:!0,horizontal:!1}},[o("b-form-input",{staticClass:"form-control",attrs:{disabled:"",value:t.receptionData.Usuario.nombre+" "+t.receptionData.Usuario.apellido,type:"text"}})],1)],1),o("b-col",{attrs:{sm:"12"}},[o("b-form-group",{attrs:{label:"Descripción","laber-for":"Descripción",disabled:!0,horizontal:!1}},[o("b-form-textarea",{staticClass:"form-control",attrs:{disabled:"",value:t.receptionData.descripcion,rows:"5"}})],1)],1)],1)],1),o("div",{staticClass:"form-actions padding"},[o("b-button",{staticClass:"mr",attrs:{type:"button",variant:"secondary"},on:{click:function(e){t.$router.go(-1)}}},[t._v("\n          Cancelar\n        ")]),t._v("\n        Estado: "+t._s(t.receptionData.estado)+"\n      ")],1)],1)],1)],1)},r=[],s=(o("7f7f"),o("f751"),o("ac6a"),o("28a5"),o("cadf"),o("551c"),o("92c3")),i=o.n(s),n=(o("1e3f"),o("067c")),c=o.n(n),l=o("db49"),p=o("1940"),d=o.n(p),u=(o("07a4"),{components:{vueDropzone:i.a,gallery:c.a},data:function(){return{users:[],user:{},port:{},receptionData:{},images:[],index:null,isNew:!1,loading:!0,dropzoneOptions:{url:"".concat(l["a"].API_URL,"/pictures"),dictDefaultMessage:"CARGAR IMAGEN",headers:{authorization:localStorage.getItem("token")}}}},mounted:function(){var t=this;this.user=this.$store.getters.user,axios.defaults.headers.common["authorization"]=localStorage.getItem("token"),this.clothesExist().then(function(e){if(t.isEmpty(e.data.data))t.isNew=!0;else{t.isNew=!1;var o=e.data.data.clise.split("-")[1],a=e.data.data.exp.split("-")[3];t.port=e.data.data,t.port.clise=o,t.port.exp=a,t.port.Evidencium.Imagens.forEach(function(e){var o="".concat(l["a"].API_IMAGE,"/").concat(e.nombre_archivo);t.images.push(o)})}}),this.getUsers(),this.getEvidence()},methods:{clothesExist:function(){var t=this;return new Promise(function(e,o){axios.get("".concat(l["a"].API_URL,"/evidences/").concat(t.$route.params.id,"/clothes")).then(function(t){e(t)})})},storeClothes:function(){var t=this;Object.assign(this.port,{evidencia_id:this.$route.params.id}),Object.assign(this.port,{clise:"CC-".concat(this.port.clise)}),Object.assign(this.port,{exp:"K-18-0071-".concat(this.port.exp)}),axios.post("".concat(l["a"].API_URL,"/clothes"),this.port).then(function(e){d()({title:"Item modificado exitosamente",text:"",icon:"success"}),t.$router.push({name:"chronologyList"})}).catch(function(t){"SequelizeDatabaseError"==t.response.data.name&&d()({title:"Atención",text:"Algo ha salido mal, intentelo nuevamente",icon:"error"}),t.response.data.message&&d()({title:"Atención",text:"".concat(t.response.data.message),icon:"error"}),t.response.data.errors.forEach(function(t){d()({title:"Atención",text:"".concat(t.message),icon:"error"})})})},updateClothes:function(){var t=this;Object.assign(this.port,{clise:"CC-".concat(this.port.clise)}),Object.assign(this.port,{exp:"K-18-0071-".concat(this.port.exp)}),axios.put("".concat(l["a"].API_URL,"/clothes/").concat(this.port.id),this.port).then(function(e){d()({title:"Retrato modificado exitosamente",text:"",icon:"success"}),t.$router.push({name:"chronologyList"})}).catch(function(t){"SequelizeDatabaseError"==t.response.data.name&&d()({title:"Atención",text:"Algo ha salido mal, intentelo nuevamente",icon:"error"}),t.response.data.message&&d()({title:"Atención",text:"".concat(t.response.data.message),icon:"error"}),t.response.data.errors.forEach(function(t){d()({title:"Atención",text:"".concat(t.message),icon:"error"})})})},getUsers:function(){var t=this;axios.get("".concat(l["a"].API_URL,"/users?limit=1")).then(function(e){axios.get("".concat(l["a"].API_URL,"/users?limit=").concat(e.total)).then(function(e){t.users=e.data.data})})},getEvidence:function(){var t=this;this.loading=!0,axios.get("".concat(l["a"].API_URL,"/evidences/").concat(this.$route.params.id)).then(function(e){t.receptionData=e.data.data,t.loading=!1})},isEmpty:function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return JSON.stringify(t)===JSON.stringify({})},sendingEvent:function(t,e,o){o.append("evidencia_id",this.$route.params.id),o.append("usuario_id",this.user.id)},reloadImages:function(t,e){this.images.push("".concat(l["a"].API_IMAGE,"/").concat(e.nombre_archivo))},onChangeStatus:function(){var t="COMPLETADO"==this.receptionData.estado?"EN_PROCESO":"COMPLETADO";return this.port.clise||"COMPLETADO"!=t?this.port.clise.length<5&&"COMPLETADO"==t?(d()({title:"Atención",text:"El campo clise debe contener 5 digitos",icon:"error"}),this.receptionData.estado="EN_PROCESO",""):this.port.clise.length>5&&"COMPLETADO"==t?(d()({title:"Atención",text:"El campo clise debe contener 5 digitos",icon:"error"}),this.receptionData.estado="EN_PROCESO",""):this.port.exp||"COMPLETADO"!=t?this.port.exp.length<6&&"COMPLETADO"==t?(d()({title:"Atención",text:"El campo exp debe contener 6 digitos",icon:"error"}),this.receptionData.estado="EN_PROCESO",""):this.port.exp.length>6&&"COMPLETADO"==t?(d()({title:"Atención",text:"El campo exp debe contener 6 digitos",icon:"error"}),this.receptionData.estado="EN_PROCESO",""):this.port.tipo||"COMPLETADO"!=t?this.images.length||"COMPLETADO"!=t?this.port.color||"COMPLETADO"!=t?this.port.marca||"COMPLETADO"!=t?this.port.talla||"COMPLETADO"!=t?(this.receptionData.estado="COMPLETADO",void axios.put("".concat(l["a"].API_URL,"/evidences/").concat(this.receptionData.id),{estado:t}).then(function(e){console.log("Estado actualizado a ".concat(t))}).catch(function(t){})):(this.showError("talla"),this.receptionData.estado="EN_PROCESO",""):(this.showError("marca"),this.receptionData.estado="EN_PROCESO",""):(this.showError("color"),this.receptionData.estado="EN_PROCESO",""):(this.showError("Imagenes"),this.receptionData.estado="EN_PROCESO",""):(this.showError("Tipo"),this.receptionData.estado="EN_PROCESO",""):(this.showError("exp"),this.receptionData.estado="EN_PROCESO",""):(this.receptionData.estado="EN_PROCESO",this.showError("clise"),"")},showError:function(t){d()({title:"Atención",text:"El campo ".concat(t," es requerido"),icon:"error"})}}}),h=u,m=(o("1aa0"),o("2877")),b=Object(m["a"])(h,a,r,!1,null,"5551619a",null);e["default"]=b.exports},b099:function(t,e,o){}}]);
//# sourceMappingURL=chunk-26da.e88d0b54.js.map