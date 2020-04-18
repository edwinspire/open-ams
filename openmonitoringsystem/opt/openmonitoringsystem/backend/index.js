require('dotenv').config(); // Esto setea las variables de entorno para que esten disponibles
const express = require('express')
const morgan = require('morgan')
const socketio = require('socket.io')
const http = require('http')
const pSQL = require('./src/postgresql/PostgreSQL.js');
const path = require('path')
const fs = require('fs');
const cookieParser = require('cookie-parser')
const socketIO = require('./src/socketio/sio.js');

const root_web = 'dist';
const pG = new pSQL();

//process.env.DATABASE_URL = 'postgres://izmtgwzkgjlxju:a06760017acf6a21117a33d5d2148e126fbdcc67bec2cade5b40f718874aee14@ec2-174-129-27-3.compute-1.amazonaws.com:5432/d8gshtdo0j0s5s';
//const PORT = process.env.PORT || 5000 // Esto lo define Heroku
const app = express()//instancia de express
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
// Define las rutas
app.use(require('./src/express/routes'));
//app.use(require('./src/express/contacts'));
//app.use(require('./src/express/vehicles'));
//app.use(require('./src/express/fueling'));

(
	async ()=>{
		var r = await pG.Query({
			name: 'routes',
			text: `SELECT * FROM public.routes;`,
			values: []
		});

		if(r.rows.length > 0){

			r.rows.forEach((item, i)=>{

				console.log(item.method, item.route);

				switch(item.method.toUpperCase()){
					case 'POST':
					app.post(item.route, (req, res) => {
						pG.AccessPoint(item.route, req, res).then((data)=>{
							console.log(data)
						})
					})
					break; 
					case 'GET':
					app.get(item.route, (req, res) => {
						pG.AccessPoint(item.route, req, res).then((data)=>{
							console.log(data)
						})
					})
					break; 
					case 'PUT':
					app.put(item.route, (req, res) => {
						pG.AccessPoint(item.route, req, res).then((data)=>{
							console.log(data)
						})
					})
					break; 					
					case 'DELETE':
					app.delete(item.route, (req, res) => {
						pG.AccessPoint(item.route, req, res).then((data)=>{
							console.log(data)
						})
					})
					break; 						
				}
			})
		}

	}
	)()



// Carpeta pública
app.use(express.static(root_web));

const server = http.createServer(app)//creando el server con http y express como handle request
const io = new socketIO(server)//iniciando el server de socket.io

io._clients();

server.listen(process.env.PORT, () => {
	console.log('Example app listening on port '+process.env.PORT)
	console.log('Public Path: '+root_web);
});
