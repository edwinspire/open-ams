/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonppen_onitoring_ystem=window.dojoWebpackJsonppen_onitoring_ystem||[]).push([[7],{250:function(e,t,o){e.exports={" _key":"OpenMonitoringSystem/Login",root:"Login-m__root__309e8d3B_u0",body:"Login-m__body__309e8d39SBB",wrapper:"Login-m__wrapper__309e8d20JBI","form-success":"Login-m__form-success__309e8d1TYVx",container:"Login-m__container__309e8daargL",form:"Login-m__form__309e8d3_nB0",links_block:"Login-m__links_block__309e8d173hP",bg_bubbles:"Login-m__bg_bubbles__309e8d1X-H3",square:"Login-m__square__309e8d3FwE5"}},256:function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return l});var n=o(36),a=o(18),s=o(19),i=o(250),r=o(43),c=o(35);class l extends s.b{constructor(){super(...arguments),this._openSnack=!1,this._MsgSnackBar="-"}SnackBar(e){console.log("SnackBar "+e),this._openSnack=!0,this._MsgSnackBar=e,this.invalidate(),setTimeout(()=>{this._openSnack=!1,this.invalidate()},4e3)}onAttach(){document.cookie="TOKEN_USER= ; expires = Thu, 01 Jan 1970 00:00:00 GMT",console.log("Borrar")}render(){return Object(a.j)("div",{classes:[i.root]},[Object(a.j)("div",{classes:[i.body]},[Object(a.j)("div",{classes:i.wrapper},[Object(a.j)("div",{classes:[i.container]},[Object(a.j)("h1",{},["Login"]),Object(a.j)("form",{classes:i.form,action:"/login",method:"post",onsubmit:e=>{if(e.target){let o=e.target.getElementsByTagName("input"),n=0;var t={};for(n=0;n<o.length;n++)Object.defineProperty(t,o[n].name,{value:o[n].value,enumerable:!0}),n+1==o.length&&(async()=>{let e=await fetch("/login",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});var o=await e.json();console.log(o),200==e.status?o.login?(localStorage.setItem("idaccount",o.idaccount),localStorage.setItem("iduser",o.iduser),localStorage.setItem("preferences",o.preferences),localStorage.setItem("fullname",o.fullname),localStorage.setItem("user",JSON.stringify(o)),window.location.href="/#home"):this.SnackBar(o.message):this.SnackBar("Sucedió un inconveniente con el servidor")})()}e.preventDefault()}},[Object(a.j)("input",{name:"username",type:"text",placeholder:"Usuario",required:"required"},[]),Object(a.j)("input",{name:"pwd",type:"password",placeholder:"Contraseña",required:"required"},[]),Object(a.j)("input",{type:"submit",value:"Aceptar"}),Object(a.j)("div",{classes:i.links_block},[Object(a.j)("a",{href:"/#register"},["Registro"])])])]),Object(a.j)("ul",{classes:i.bg_bubbles},[Object(a.j)("li"),Object(a.j)("li"),Object(a.j)("li"),Object(a.j)("li"),Object(a.j)("li"),Object(a.j)("li"),Object(a.j)("li"),Object(a.j)("li"),Object(a.j)("li"),Object(a.j)("li")]),Object(a.k)(r.a,{open:this._openSnack,leading:!1,type:"error",messageRenderer:()=>this._MsgSnackBar})])])])}}Object(n.a)([Object(c.a)()],l.prototype,"_openSnack",void 0),Object(n.a)([Object(c.a)()],l.prototype,"_MsgSnackBar",void 0)}}]);
//# sourceMappingURL=7.67ff8ac1ecb5894e2d4e.bundle.js.map