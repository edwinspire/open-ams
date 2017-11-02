// Dojo 1.7+ (AMD)
require(["dojo/_base/lang", "api/postgres/oms",  "dojo/node!pg", "dojo/_base/array"], function(lang, OMS, pg, array){
	lang.extend(OMS, {
/////////////////////////////////////////

udc_table_account_events_isopen: function(req, res){

	var t = this;

	if(req.body.UdcTable){

		var post = req.body;
		var qp;

		switch(post.UdcAction){
			case 'select_rows':
			var w = {};
			w["idaccount"] = post.idaccount;
			w["isopen"] = true;

			qp = t.Select('view_events_isopen', []).whereAnd([w]).orderBy(' dateevent DESC').build();
			t.response_query(res, qp.query, qp.param);
			break;
			case 'select':
			var w = {};
			w["idevent"] = post.idevent;

			qp = t.Select('view_events_isopen', []).whereAnd([w]).orderBy(' dateevent ').build();
			t.response_query(res, qp.query, qp.param);
			break;
			
			default:
			res.status(500).json({success: false, data: "Intentando una accion invalida "+post.UdcAction, req: post});
			break;

		}



	}else{
		res.status(500).json({success: false, data: "No ha definido una tabla a buscar"});
	}


}              


});
});
