var mongoose = require('mongoose');
var Libro = mongoose.model('Libro');
var Autor = mongoose.model('Autor');


var libros=[
	{
		id:'101',
		titulo: 'Codigo Da Vinci',
		autor: 'Dan Brown',
		anio: 2012,
		genero: 'novela'
	},
	{
		id:'102',
		titulo: 'Relatos de un viejo indecente',
		autor: 'Charles bukowski',
		anio: 2012,
		genero: 'Relato'
	},
	{
		id:'103',
		titulo: 'Otro',
		autor: 'Dan Brown',
		anio: 2012,
		genero: 'novela'
	},
	{
		id:'104',
		titulo: 'Las batallas en el desierto',
		autor: 'Jose Emilio Pacheco',
		anio: 1981,
		genero: 'Cuento'
	},
	{
		id:'105',
		titulo: 'Le petit prince',
		autor: 'Antoine de Saint-Exupéry',
		anio: 1943,
		genero: 'Ficción'
	}
]
//Get Libros con db  **YA
exports.getLibros=function(req, res, next){
  console.log('GET/libros');
  	//res.status(200).jsonp(libros);
  	Libro.find({},function(err,libros){//WHERE: Libro.find({autor:'Dan Brown'},function(err,libros){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			console.log('GET/libros');
  			Autor.populate(libros, {path: "autor"},function(err, libros){
        	res.status(200).send(libros);
        	}); 
  		}		
  	});
};

exports.addLibro=function(req,res,next){
	//req.body traer la información del post
	console.log('POST/libros');
	//libros.push(req.body);
	//res.status(200).jsonp(libros);
	var libro = new Libro({
		titulo : req.body.titulo,
		anio : req.body.anio,
		autor: req.body.autor,
		genero : req.body.genero
	});

	libro.save(function(err,libro){
		if(err) return res.send(500,err.message);
		res.status(200).jsonp(libro);
	});
};
//Get Libros con db libros/:id  **YA
exports.getById=function(req, res, next){
	console.log('GET/libros/:id');	//59ee55a29c39c21b986d395a
	console.log(req.params.id);
	//res.status(200).jsonp(libros[0]);
	Libro.find({_id: req.params.id},function(err,libros){//WHERE: Libro.find({autor:'Dan Brown'},function(err,libros){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			console.log('GET/libros');
  			res.status(200).jsonp(libros);
  		}
  	});
};
//PUT libros/:id 
exports.updateLibro=function(req, res, next){
	console.log('PUT/libros/:id');
	console.log(req.params.id);
	console.log(req.body.titulo+" ");
	//res.status(200).jsonp(libros[0]);

	/*var encontrar=false;
	for (var i = 0; i < libros.length; i++) { 
 		if(libros[i].id==req.params.id){ 			
 			libros=req.body;
 			res.status(200).jsonp(libros[i]);
 			encontrar=true;
		}
	}*/
	var libro = new Libro({
		titulo : req.body.titulo,
		anio : req.body.anio,
		autor : req.body.autor,
		genero : req.body.genero
	});
	//Libro.find({_id: req.params.id},function(err,libros){
		libro.update({_id: req.params.id},libro);
		/*if(err) return res.send(500,err.message);
			res.status(200).jsonp(libro);*/
		libro.save(function(err,libro){
			if(err) return res.send(500,err.message);
			res.status(200).jsonp(libro);
		});
	//});
};
//DELETE libros/:id **YA
exports.deleteLibro=function(req, res, next){
	console.log('DELETE/libros/:id');
	console.log(req.params.id);
	//res.status(200).jsonp(libros[0]);
	Libro.remove({_id: req.params.id},function(err,libros){//WHERE: Libro.find({autor:'Dan Brown'},function(err,libros){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			console.log('DELETE/libros');
  			//res.status(200).jsonp(libros);
  			Autor.populate(libros, {path: "autor"},function(err, libros){
        	res.status(200).send(libros);
        	}); 
  		}		
  	});
};
//POST autores **YA
exports.addAutor=function(req,res,next){
	//req.body traer la información del post
	console.log('POST/autores');
	//libros.push(req.body);
	//res.status(200).jsonp(libros);
	var autor = new Autor({
		nombre : req.body.nombre,
		apellido : req.body.apellido
	});

	autor.save(function(err,libro){
		if(err) return res.send(500,err.message);
		res.status(200).jsonp(autor);
	});
};
//GET /autores **YA
exports.getAutores=function(req, res, next){
	/*console.log('GET/autores');
	console.log('BODY '+req.body);
	//res.status(200).jsonp(libros[1].autor);
	Autor.find(function(err,libros){//WHERE: Libro.find({autor:'Dan Brown'},function(err,libros){
  		
  		if(err){
  			res.send(500, err.message);
  		}else{
  			var librosAutor=[];
  			for(var i=0; i<libros.length;i++){
  				librosAutor[i]=libros[i].autor;
  			}
  			console.log('GET/autores');
  			res.status(200).jsonp(librosAutor);
  			console.log(librosAutor);
  		}
  	});*/
  	console.log('GET/autores');
  	//res.status(200).jsonp(libros);
  	Autor.find(function(err,libros){//WHERE: Libro.find({autor:'Dan Brown'},function(err,libros){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			console.log('GET/autores');
  			res.status(200).jsonp(libros);
  		}		
  	});
};
//GET /autores/:nombre **YA
exports.getByAutor=function(req,res,next){
	console.log('GET/autores/:id');
	console.log(req.params.id);
	Autor.find({_id: req.params.id},function(err,libros){//WHERE: Libro.find({autor:'Dan Brown'},function(err,libros){  		
  		if(err){
  			res.send(500, err.message);
  		}else{
			console.log('GET/autores/:id');
  			res.status(200).jsonp(libros);
  		}
  	});
};
//PUT /autores/:nombre 
exports.updateAutores=function(req, res, next){
	console.log('PUT/autores/:nombre');
	console.log(req.body);

	var encontrar=false;
	for(var i in libros){
		if(req.params.nombre.toUpperCase()===libros[i].autor.toUpperCase()){
			libros[i].autor=req.body.autor;
			encontrar=true;
		}
	}
	if(!encontrar){
		res.status(200).jsonp({valor: '404 Not found - couldn´t update'});
	}else{
		res.status(200).jsonp(libros);
	}
};
//DELETE /autores/:nombre **YA
exports.deleteAutor=function(req,res,next){
	console.log('DELETE/autores/:id');
	console.log(req.params.id);
	//res.status(200).jsonp(libros[0]);
	Autor.remove({_id: req.params.id},function(err,libros){//WHERE: Libro.find({autor:'Dan Brown'},function(err,libros){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			console.log('DELETE/autores/:id');
  			res.status(200).jsonp(libros);
  		}		
  	});
};