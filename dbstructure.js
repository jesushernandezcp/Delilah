const delilah=require('./dbconection.js');



//CREANDO TABLAS
//Tabla productos
delilah.query(
    "CREATE TABLE Productos(id INT PRIMARY KEY,nombre_producto VARCHAR(30),precio INT,url_imagen VARCHAR(50))");
//Tabla usuarios
//delilah.query("CREATE TABLE Usuarios(usuario VARCHAR(30),nombre VARCHAR(100), email VARCHAR(30), telefono INT, direccion VARCHAR(100), contrasena VARCHAR(10))");
//Tabla pedidos
//delilah.query("CREATE TABLE Pedidos(pedido_num INT, usuario VARCHAR(30), id_prod INT, cantidad INT, hora DATETIME, estado VARCHAR(10), forma_pago VARCHAR(10))");
