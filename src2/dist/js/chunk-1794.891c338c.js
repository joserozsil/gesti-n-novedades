(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1794"],{"07a4":function(t,n,a){"use strict";a("f751");var e=a("2f62"),o=new e["a"].Store({state:{user:{},count:0,token:""},mutations:{setDataUser:function(t,n){Object.assign(t.user,n)},setToken:function(t,n){t.token=n},increment:function(t){t.count++}}});n["a"]=o},"218a":function(t,n,a){},2621:function(t,n){n.f=Object.getOwnPropertySymbols},"52a7":function(t,n){n.f={}.propertyIsEnumerable},7333:function(t,n,a){"use strict";var e=a("0d58"),o=a("2621"),i=a("52a7"),s=a("4bf8"),c=a("626a"),r=Object.assign;t.exports=!r||a("79e5")(function(){var t={},n={},a=Symbol(),e="abcdefghijklmnopqrst";return t[a]=7,e.split("").forEach(function(t){n[t]=t}),7!=r({},t)[a]||Object.keys(r({},n)).join("")!=e})?function(t,n){var a=s(t),r=arguments.length,u=1,l=o.f,d=i.f;while(r>u){var f,p=c(arguments[u++]),b=l?e(p).concat(l(p)):e(p),g=b.length,m=0;while(g>m)d.call(p,f=b[m++])&&(a[f]=p[f])}return a}:r},"8b48":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"img-bg app flex-row align-items-center"},[a("div",{staticClass:"container"},[a("b-row",{staticClass:"justify-content-center"},[a("b-col",{attrs:{md:"8"}},[a("b-card-group",{staticClass:"card-signin"},[a("b-card",{staticClass:"p-4",attrs:{"no-body":""}},[a("b-card-body",[a("b-form",[a("h1",[t._v("Iniciar Sesión")]),a("p",{staticClass:"text-muted"},[t._v("Iniciar sesión en el sistema")]),a("b-input-group",{staticClass:"mb-3"},[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"icon-user"})])],1),a("b-form-input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Usuario",autocomplete:"username email"},model:{value:t.loginData.usuario,callback:function(n){t.$set(t.loginData,"usuario",n)},expression:"loginData.usuario"}})],1),a("b-input-group",{staticClass:"mb-4"},[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"icon-lock"})])],1),a("b-form-input",{staticClass:"form-control",attrs:{type:"password",placeholder:"Contraseña",autocomplete:"current-password"},on:{keyup:function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key,"Enter"))return null;t.signIn()}},model:{value:t.loginData.contraseña,callback:function(n){t.$set(t.loginData,"contraseña",n)},expression:"loginData.contraseña"}})],1),a("b-row",[a("b-col",{attrs:{cols:"6"}},[a("b-button",{staticClass:"px-4",attrs:{variant:"primary"},on:{click:function(n){t.signIn()}}},[t._v("\n                        Iniciar Sesión\n                    ")])],1),a("b-col",{staticClass:"text-right",attrs:{cols:"6"}})],1)],1)],1)],1)],1)],1)],1)],1)])},o=[],i=(a("4917"),a("28a5"),a("ac6a"),a("07a4")),s=a("bb36"),c=a("db49"),r=a("1940"),u=a.n(r),l={name:"Login",data:function(){return{alertCount:0,ip:"",loginData:{usuario:"jrodriguez","contraseña":"Joseangel19$"}}},store:i["a"],mounted:function(){var t=this;this.getUserIP(function(n){console.log(n),t.ip=n})},methods:{signIn:function(){var t=this;s["a"].post(c["a"].API_URL+"/signin",this.loginData).then(function(n){200==n.status&&(localStorage.setItem("token",n.data.token),t.$store.commit("setDataUser",n.data.user),s["a"].post(c["a"].API_URL+"/history",{usuario_id:n.data.user.id}).then(function(a){u()("¡Listo!","Bienvenido al sistema ".concat(n.data.user.nombre),"success"),t.$router.push({name:"Dashboard"})}))}).catch(function(n){u()("¡Atención!",n.response.data.message,"error"),t.alertCount++,t.alertCount>=2&&t.storeAlert()})},storeAlert:function(){var t=this;s["a"].post(c["a"].API_URL+"/alerts",{ip:this.ip,usuario:this.loginData.usuario}).then(function(n){t.alertCount=0})},getUserIP:function(t){var n=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,a=new n({iceServers:[]}),e=function(){},o={},i=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;function s(n){o[n]||t(n),o[n]=!0}a.createDataChannel(""),a.createOffer().then(function(t){t.sdp.split("\n").forEach(function(t){t.indexOf("candidate")<0||t.match(i).forEach(s)}),a.setLocalDescription(t,e,e)}).catch(function(t){}),a.onicecandidate=function(t){t&&t.candidate&&t.candidate.candidate&&t.candidate.candidate.match(i)&&t.candidate.candidate.match(i).forEach(s)}}}},d=l,f=(a("bd2c"),a("2877")),p=Object(f["a"])(d,e,o,!1,null,"90ee0c0a",null);n["default"]=p.exports},bd2c:function(t,n,a){"use strict";var e=a("218a"),o=a.n(e);o.a},f751:function(t,n,a){var e=a("5ca1");e(e.S+e.F,"Object",{assign:a("7333")})}}]);
//# sourceMappingURL=chunk-1794.891c338c.js.map