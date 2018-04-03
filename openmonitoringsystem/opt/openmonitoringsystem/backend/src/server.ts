import OpenMonitoringSystem from './class/server';
import {partial} from  '@dojo/core/lang';
import CheckSum from './class/checksum-js/lib/checksumjs';
import * as MFS  from './class/mount-js/lib/mountjs';
import * as fs from 'fs';


process.env.PGDATABASE = 'oms';
process.env.PGUSER = 'postgres';
process.env.PGHOST = 'localhost';
process.env.PGPASSWORD = 'pg4321';
process.env.PGAPPNAME = 'OMSServer';
process.env.EXPRESS_PORT = '49443';

const OMS = new OpenMonitoringSystem();

/*
let m = new MFS.default();
m.mount({protocol: "ftp",  domain: "", location: "ftp.gnome.org/pub/GNOME/sources/", anonymous: true, username: "", password: "", timeout: 90}).then((result)=>{
	try{
		fs.readdirSync((result as MFS.Mounted).mount.location).forEach(file => {
			console.log(file);
		})
	}catch(err){
	console.log("readdirSync 1=>", err);
	}

}, (e)=>{
	console.log("mount 1=>", e);
});
*/

let m2 = new MFS.default();
m2.mount({protocol: "smb",  domain: "", location: "172.16.124.2/c$", anonymous: false, username: "Administrador", password: "1234567", timeout: 90}).then((result)=>{
	try{
		fs.readdirSync((result as MFS.Mounted).mount.location).forEach(file => {
			console.log(file);
		})
	}catch(err){
	console.log("readdirSync 2=>", err);
	}

}, (e)=>{
	console.log("mount2 =>", e);
});

/*
let c = new CheckSum();
c.FromFile('MD5', '/home/edwinspire/Desarrollo/Node/open-monitoring-system/openmonitoringsystem/opt/openmonitoringsystem/old.tar.gz').then(function(r){
console.log(r);
});

c.FromFile('MD5', '/home/edwinspire/Desarrollo/Node/open-monitoring-system/openmonitoringsystem/opt/openmonitoringsystem/backend/src/class/checksum-js/lib/checksumjs.js').then(function(r){
console.log(r);
});
*/

OMS.run();