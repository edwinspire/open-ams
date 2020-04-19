/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonppen_onitoring_ystem=window.dojoWebpackJsonppen_onitoring_ystem||[]).push([[10],{22:function(e,t,i){"use strict";i.d(t,"a",function(){return a});var l=i(0);i(1);function a(e,t=!1,i=!1){return i?l.default[e].bind(l.default):l.default[e]}},261:function(e,t,i){"use strict";i.r(t);var l=i(18),a=i(19),r=i(80),o=i(56),s=i(37),n=i(33);class c extends a.b{constructor(){super(...arguments),this.url="/fuelinglog",this.Params={idvehicle:"0"},this.columnConfig=[{id:"date_reg",title:"Fecha",filterable:!0,sortable:!0,resizable:!0},{id:"odometer",title:"Odometer",filterable:!0,sortable:!0,resizable:!0},{id:"quantity",title:"Cantidad",filterable:!0,sortable:!0,resizable:!0},{id:"price_by_unit",title:"Precio x Unidad",filterable:!0,sortable:!0,resizable:!0},{id:"total",title:"Total",filterable:!0,sortable:!0,resizable:!0},{id:"address",title:"Dirección",sortable:!0,resizable:!0},{id:"note",title:"Notas",sortable:!0,resizable:!0}]}async onAttach(){setTimeout(()=>{this.columnConfig=[{id:"date_reg",title:"Fecha",filterable:!1,sortable:!0,resizable:!0},{id:"odometer",title:"Odometer",filterable:!1,sortable:!0,resizable:!0},{id:"quantity",title:"Cantidad",filterable:!1,sortable:!0,resizable:!0},{id:"total",title:"Total",filterable:!1,sortable:!0,resizable:!0},{id:"address",title:"Dirección",sortable:!1,resizable:!0}],this.invalidate()},1e4);var e=window.location.hash.split("?")[1],t=new URLSearchParams(e);this.Params.idvehicle=t.get("idvehicle")||"-2";const i=await fetch(this.url+"?idvehicle="+this.Params.idvehicle,{method:"GET",headers:{"Content-Type":"application/json"}});let l=await i.json();console.log(l),this._fetcher=Object(o.a)(l),this.invalidate()}render(){return Object(l.j)("div",{},[Object(l.k)(s.a,{heading:"ABASTECIMIENTOS",collapseWidth:150},[Object(l.k)(n.a,{label:"NUEVO",classes:["fas","fa-user-plus"],ShowLabel:!0,onClick:e=>{window.location.href="/#fueling?idfueling=0&rowkey=0"}})]),Object(l.j)("div",{},[this._fetcher?Object(l.k)(r.a,{columnConfig:this.columnConfig,fetcher:this._fetcher,height:400,onRowSelect:e=>{console.log(e,this._fetcher),window.location.href="/#fueling?idfueling="+e[0].idfueling+"&rowkey="+e[0].rowkey}}):null])])}}var d=i(28),b=i(38);const h=Object(l.a)();t.default=h(function({properties:e}){return Object(l.j)("div",{classes:[d.root]},[Object(l.k)(b.a,{}),Object(l.k)(c,{idvehicle:"0"})])})}}]);
//# sourceMappingURL=10.e4c7889e535be6476420.bundle.js.map