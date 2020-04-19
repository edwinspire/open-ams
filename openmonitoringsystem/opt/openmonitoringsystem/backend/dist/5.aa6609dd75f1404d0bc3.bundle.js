/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonppen_onitoring_ystem=window.dojoWebpackJsonppen_onitoring_ystem||[]).push([[5],{252:function(e,t,r){e.exports={" _key":"OpenMonitoringSystem/Register",btn:"Register-m__btn__309e8d3A0lO",active:"Register-m__active__309e8dLCCjU",disabled:"Register-m__disabled__309e8d1qye4",btn_large:"Register-m__btn_large__309e8d38cCT",btn_primary:"Register-m__btn_primary__309e8dgqhsy",btn_block:"Register-m__btn_block__309e8d2mgbe",container:"Register-m__container__309e8dJoasP",container_html:"Register-m__container_html__309e8dw7uTU",root:"Register-m__root__309e8dG_7Wm",login:"Register-m__login__309e8d1Pf17",input:"Register-m__input__309e8d1GdYa",register:"Register-m__register__309e8dMMy_x",anchor:"Register-m__anchor__309e8d1PeFF"}},257:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return _});var a=r(36),n=r(18),i=r(19),s=r(252),o=r(43),c=r(35);class _ extends i.b{constructor(){super(...arguments),this._openSnack=!1,this._MsgSnackBar="-",this._typeSnackBar="error"}SnackBar(e,t){console.log("SnackBar "+e),this._openSnack=!0,this._MsgSnackBar=e,this._typeSnackBar=t,this.invalidate(),setTimeout(()=>{this._openSnack=!1,this.invalidate()},5e3)}render(){return Object(n.j)("div",{classes:[s.root]},[Object(n.j)("div",{classes:[s.login,s.container,s.container_html]},[Object(n.j)("h1",{},["Registro"]),Object(n.j)("form",{action:"/register",method:"post",onsubmit:e=>{if(e.target){let r=e.target.getElementsByTagName("input"),a=0;var t={};let n="",i="";for(a=0;a<r.length;a++)Object.defineProperty(t,r[a].name,{value:r[a].value,enumerable:!0}),"pwd"==r[a].name&&(n=r[a].value),"pwd2"==r[a].name&&(i=r[a].value),a+1==r.length&&(n==i?(async()=>{let e=await fetch("/register",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}),r=await e.json();200==e.status?(console.log(r),r.Register?(this.SnackBar("Cuenta creada... no olvide sus datos. Redireccionando a Login","success"),setTimeout(()=>{window.location.href="/#login"},5e3)):this.SnackBar(r.Message,"error")):(console.log("No se pudo registrar",r),this.SnackBar("no se pudo guardar","error"))})():this.SnackBar("Las contraseñas no coinciden","error"))}e.preventDefault()}},[Object(n.j)("input",{classes:[s.input],name:"firstname",type:"text",placeholder:"Nombre",required:"required"}),Object(n.j)("input",{classes:[s.input],name:"lastname",type:"text",placeholder:"Apellido",required:"required"}),Object(n.j)("input",{classes:[s.input],name:"email",type:"email",placeholder:"Email",required:"required"}),Object(n.j)("input",{classes:[s.input],name:"username",type:"text",placeholder:"Usuario",required:"required"}),Object(n.j)("input",{classes:[s.input],name:"pwd",type:"password",placeholder:"Contraseña",required:"required"}),Object(n.j)("input",{classes:[s.input],name:"pwd2",type:"password",placeholder:"Confirme Contraseña",required:"required"}),Object(n.j)("input",{name:"register",classes:[s.btn,s.btn_primary,s.btn_block,s.btn_large],type:"submit",value:"Aceptar"})]),Object(n.j)("div",{classes:s.register},[Object(n.j)("a",{classes:[s.anchor],href:"/#login"},["Login"])])]),Object(n.k)(o.a,{open:this._openSnack,leading:!1,type:this._typeSnackBar,messageRenderer:()=>this._MsgSnackBar})])}}Object(a.a)([Object(c.a)()],_.prototype,"_openSnack",void 0),Object(a.a)([Object(c.a)()],_.prototype,"_MsgSnackBar",void 0),Object(a.a)([Object(c.a)()],_.prototype,"_typeSnackBar",void 0)}}]);
//# sourceMappingURL=5.aa6609dd75f1404d0bc3.bundle.js.map