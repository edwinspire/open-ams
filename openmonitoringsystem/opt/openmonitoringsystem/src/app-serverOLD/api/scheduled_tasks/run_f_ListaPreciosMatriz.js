// Dojo 1.7+ (AMD)
"dojo/promise/all"
require(["dojo/_base/lang", "api/scheduled_tasks/scheduled_tasks", "api/PromiseAll",  "dojo/Deferred", "dojo/_base/array", "dojo/promise/all", "dojo/on",  "dojo/node!mssql", "dojo/date"], function(lang, Octopus, PromiseAll, Deferred, array, all, on, mssql, dojoDate){
	lang.extend(Octopus, {
/////////////////////////////////////////
run_f_ListaPreciosMatriz: function(task){

	var deferred = new Deferred();
	var t = this;
	var name_event = 'run_f_ListaPreciosMatriz'+(new Date()).getTime()+ Math.random().toString().replace('.', '_');
		var p = PromiseAll();
	var devicesProcceced = 0;

	t.getNetworkDevices().then(function(devices){

		var totalDevices = devices.rows.length;

		var signal = t.on(name_event, function(r){

			var a = [];
			array.forEach(r.result, function(event, i){
				if(r.valid){
					a.push(t.send_event_pg(event, []));
				}
			});

			if(a.length > 0){
				p.run(a).then(function(result){
					devicesProcceced++;
					if(devicesProcceced == totalDevices){
						signal.remove();
						deferred.resolve({});
					}
				});

			}else{
				devicesProcceced++;
			}

		});

		array.forEach(devices.rows, function(device, i){

			if(device.ip && device.ip.length > 0){
				var param = device;
				param.parameters = task.task_parameters;
				t._run_f_ListaPreciosMatriz_check(param, i).then(function(result){
					t.emit(name_event, {result: result, valid: true});
				}, function(error){
					t.emit(name_event, {result: error, valid: false});
				});
			}else{
				t.emit(name_event, {result: 'IP Invalid', valid: false});
			}

		});


	});

	return deferred.promise;
},
_run_f_ListaPreciosMatriz_check: function(param){
	
	var deferred = new Deferred();
	var t = this;
	var srtquery = `SELECT Compania, Sucursal, Oficina, Nombre, provincia, estado, Lista_Principal, (SELECT top(1) lista_precio from [EasyGestionEmpresarial].[dbo].[pv_lista_precio_oficina] WHERE oficina = o.oficina AND estado = 'activo') as Lista_Activa, (SELECT COUNT(*) AS Productos FROM [EasyGestionEmpresarial].[dbo].[TBL_PRECIOS_SUCURSALES] WHERE SUCURSAL = o.Lista_Principal GROUP BY SUCURSAL ) as productos FROM [EasyGestionEmpresarial].[dbo].[Oficina] o WHERE (estado = 'A')`;

	var config = {
		user: param.username,
		password: param.pwd,
		server: param.ip, 
		database: 'msdb',
    //requestTimeout: 30000,
    //connectionTimeout: 30000//,
    //options: {
      // encrypt: true
  //}
}

mssql.connect(config).then((cnx) => {

	return new mssql.Request(cnx).query(srtquery)
}).then((result, error)  => {

	if(error){
		deferred.resolve([{idequipment: param.idequipment, ideventtype: param.parameters.ideventtype_on_no_connect, details: {Error: error, Task: 'run_f_ListaPreciosMatriz'}}]);  
	}else{

	var ResultEvents = [];

		if(result.length > 0){

/*
TODO Implementar
			array.forEach(result, function(item, i){

				if(item.drive && param.parameters[item.drive]){

					var driveMin = param.parameters[item.drive];
					var Megas = item["MB libres"] || item["MB free"];

					var r = {idequipment: param.idequipment, source: t.textToMD5(item.drive), ideventtype: param.parameters.ideventtype_over_min, description: '', valid: true};

					if(Megas  && Megas<=driveMin){
						r.ideventtype = param.parameters.ideventtype_under_min;
					}
					r.details = {};
					r.details[item.drive] = Megas;
					ResultEvents.push(r);
				}

			});
			*/

			deferred.resolve(ResultEvents); 

		}else{
			deferred.resolve(ResultEvents);
		}
	}  	
}).catch(err => {
	deferred.resolve([{idequipment: param.idequipment, ideventtype: param.parameters.ideventtype_on_no_connect, details: {Error: err, Task: 'run_f_ListaPreciosMatriz'}}]);  
})


mssql.on('error', err => {
	deferred.resolve([{idequipment: param.idequipment, ideventtype: param.parameters.ideventtype_on_no_connect, details: {Error: err, Task: 'run_f_ListaPreciosMatriz'}}]);  
});

return deferred.promise;
}




});
});

