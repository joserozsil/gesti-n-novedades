(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-354f"],{4812:function(e,t,r){"use strict";var a=r("6a01"),o=r.n(a);o.a},"6a01":function(e,t,r){},fec9:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"animated fadeIn"},[r("b-row",[r("b-col",{attrs:{sm:"12"}},[r("b-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("strong",[e._v("Actualizar Usuario")])]),r("b-row",[r("b-col",{attrs:{sm:"6"}},[r("b-form-group",{attrs:{description:"Ej: José Angel",label:"Nombre","laber-for":"firstName",horizontal:!1}},[r("b-form-input",{attrs:{type:"text",id:"firstName"},model:{value:e.user.nombre,callback:function(t){e.$set(e.user,"nombre",t)},expression:"user.nombre"}})],1)],1),r("b-col",{attrs:{sm:"6"}},[r("b-form-group",{attrs:{description:"Ej: Rodríguez",label:"Apellido","laber-for":"lastName",horizontal:!1}},[r("b-form-input",{attrs:{type:"text",id:"lastName"},model:{value:e.user.apellido,callback:function(t){e.$set(e.user,"apellido",t)},expression:"user.apellido"}})],1)],1)],1),r("b-form-group",{attrs:{description:"Ej: Ud 104 San Félix, Edo Bolívar",label:"Dirección","laber-for":"address",horizontal:!1}},[r("b-form-input",{attrs:{type:"text",id:"address"},model:{value:e.user.direccion,callback:function(t){e.$set(e.user,"direccion",t)},expression:"user.direccion"}})],1),r("b-form-group",{attrs:{description:"Ej: 04249566351",label:"Teléfono","laber-for":"phone",horizontal:!1}},[r("b-form-input",{attrs:{type:"text",id:"phone"},model:{value:e.user.telefono,callback:function(t){e.$set(e.user,"telefono",t)},expression:"user.telefono"}})],1),r("b-row",[r("b-col",{attrs:{sm:"12"}},[r("b-form-group",{attrs:{description:"Ej: jrodriguez",label:"Nombre de Usuario","laber-for":"username",horizontal:!1}},[r("b-form-input",{attrs:{type:"text",id:"username"},model:{value:e.user.usuario,callback:function(t){e.$set(e.user,"usuario",t)},expression:"user.usuario"}})],1)],1)],1),r("b-row",[r("b-col",{attrs:{sm:"6"}},[r("b-form-group",{attrs:{description:"Ej: Ayub*19_",label:"Contraseña","laber-for":"password",horizontal:!1}},[r("b-form-input",{attrs:{type:"password",id:"password"},model:{value:e.user.contraseña,callback:function(t){e.$set(e.user,"contraseña",t)},expression:"user.contraseña"}})],1)],1),r("b-col",{attrs:{sm:"6"}},[r("b-form-group",{attrs:{description:"Ej: Ayub*19_",label:"Repetir Contraseña","laber-for":"repeatPassword",horizontal:!1}},[r("b-form-input",{attrs:{type:"password",id:"repeatPassword"},model:{value:e.user.repetirContraseña,callback:function(t){e.$set(e.user,"repetirContraseña",t)},expression:"user.repetirContraseña"}})],1)],1)],1)],1),r("div",{staticClass:"form-actions"},[r("b-button",{staticClass:"mr",attrs:{type:"submit",variant:"primary"},on:{click:function(t){e.updateUser()}}},[e._v("Actualizar")]),r("b-button",{attrs:{type:"button",variant:"secondary"},on:{click:function(t){e.$router.go(-1)}}},[e._v("Cancelar")])],1)],1)],1)],1)},o=[],s=(r("ac6a"),r("db49")),n=r("1940"),i=r.n(n),u={data:function(){return{user:{}}},mounted:function(){this.getUser(),axios.defaults.headers.common["authorization"]=localStorage.getItem("token")},methods:{getUser:function(){var e=this;axios.get("".concat(s["a"].API_URL,"/users/").concat(this.$route.params.id)).then(function(t){e.user=t.data})},updateUser:function(){var e=this;if(""!=this.user.contrasena&&this.user.contraseña!=this.user.repetirContraseña)return i()({title:"Atención",text:"Las contraseñas no coinciden",icon:"error"}),"";axios.put("".concat(s["a"].API_URL,"/users/").concat(this.$route.params.id),{usuario:this.user.usuario,nombre:this.user.nombre,apellido:this.user.apellido,direccion:this.user.direccion,"contraseña":this.user.contraseña}).then(function(t){i()({title:"Usuario actualizado correctamente",text:"El usuario ".concat(t.data.usuario," se ha actualizado correctamente"),icon:"success"}),e.$router.push({name:"userList"})}).catch(function(e){e.response.data.errors.forEach(function(e){i()({title:"Atención",text:"".concat(e.message),icon:"error"})}),console.dir(e)})}}},c=u,l=(r("4812"),r("2877")),d=Object(l["a"])(c,a,o,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-354f.8b325372.js.map