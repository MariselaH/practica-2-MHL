# practica-2-MHL
Practica 2. Sistemas Distribuidos<br>
INTRODUCCIÓN A MONGODB<br>
Para la implementacion de este API REST se creo un modelo Autor y un modelo Libro, los cuales estaran relacionados de la siguiente manera:<br>
Un libro tiene un autor y un autor tiene varios libros.<br><br>
Se implementaron distintos metodos:<br>
addAutor: Crea un autor en la base de datos en base al modelo Autor.<br>
addLibro: Crea un libro en la base de datos en base al modelo Libro.<br>
getLibros: Muestra todos los libros que se encuentran en la base de datos.<br>
getById: Muestra el libro que se le indico por medio del id en el URI.<br>
updateLibro: Permite actualizar los atributos de el libro que le fue indicado en el id del URI<br>
deleteLibro: Permite borrar el libro que se le indico en el id del URI.<br>
getAutores: Muestra todos los autores que se encuentran en la base de datos.<br>
getByAutor: Muestra el autor que se l e indico por medio del id en el URI.<br>
updateAutores: Permite actualizar los atributos del autor que le fue indicado en el id del URI<br>
deleteAutor: Permite borrar el autor que se le indico en el id del URI.<br>

PASOS PARA EJECUTAR LA APLICACION:<br>
1. git clone<br>
2. npm install<br>
3. npm install multer --save<br>
4. npm start<br>
