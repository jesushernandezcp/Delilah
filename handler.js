const dbdelilah = require('./dbconection.js');


//----------------FUNCION PARA INSERTAR UN USUARIO


function insert_user(newuser) {
    dbdelilah.query('INSERT INTO usuarios VALUES(:usuario,:nombre,:email,:telefono,:direccion,:contrasena)',{ 
        replacements:{
            usuario:newuser.usuario, 
            nombre:newuser.nombre, 
            email: newuser.email, 
            telefono:newuser.telefono, 
            direccion:newuser.direccion, 
            contrasena:newuser.contrasena
        } 
    
    })
    .then(res => console.log("el nuevo usuario se agrego exitosamente"))
    .catch(err => console.error("no se pudo agregar el usuario, intente de nuevo"));
    
};

function insert_prod(newpro) {
    dbdelilah.query('INSERT INTO productos VALUES(NULL,:nombre_producto,:precio,:url)',{
        replacements:{
            
            nombre_producto:newpro.nombre_producto,
            precio:newpro.precio,
            url:newpro.url
            
        }
    })
    .then(res=>console.log("el nuevo producto se agrego correctamente"))
    .catch(err=>console.error("no se pudo agregar el producto"));

    
}


/*
//------------FUNCION PARA ELIMINAR UN USUARIO
function delete_user(user) {
    dbdelilah.query("DELETE FROM users WHERE user=:user",{replacements:{user:user}})
    .then(res=>console.log("usuario borrado"))
    .catch(err=>console.error("no se pudo borrar el usuario"));

    
};

//delete_user('placard');
*/


//FUNCION PARA CONSULTAR USUARIOS //funcionando

function query_user(usuario) {
    
    dbdelilah.query('SELECT * FROM usuarios WHERE usuario=:usuario',{type: dbdelilah.QueryTypes.SELECT,replacements:{usuario:usuario}})
    .then(res=>console.log('AQUI TIENES TUS RESULTADOS',res))
    .catch(err=>console.error("no existe el usuario"));
    
    
};

//FUNCION PARA CONSULTAR PRODUCTOS//funcionando

function query_prod(x) {
    dbdelilah.query('SELECT * FROM productos WHERE nombre_producto=:x',{type:dbdelilah.QueryTypes.SELECT, replacements:{x:x}})
    .then(res=>console.log('AQUI TIENES TUS RESULTADOS',res))
    .catch(err=>console.error('NO EXISTE EL PRODUCTO'));

    
}

query_user('montecristo');
query_prod('maruchan');
module.exports={insert_user};
module.exports={insert_prod};
