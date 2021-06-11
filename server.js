const express=require('express');
const cors=require('cors');
const server=express();
const crud=require('./handler.js');




server.use(express.json());
server.use(cors());



server.listen(3000,()=>{
    console.log("servidor iniciado con exito");

});

//ENDPOINTS

server.get('/usuarios',(request,response)=>{
    response.send('aun no existen usuarios')

})


server.post('/registro', async (req, res) => {
    
    const user = {usuario, nombre, email, telefono, direccion, contrasena} = req.body;
    console.log(`${usuario} - ${nombre}-${email}-${telefono}- ${direccion} - ${contrasena}`);
    crud.insert_user(user);
    console.log(user);
    res.status(201);
    res.send({message: 'Usuario creado satisfactoriamente'});
    
})



server.put('/usuarios')
server.delete('/usuarios')

server.get('/productos',(request,response)=>{
    response.status(200);
    response.send('aun no tienes productos cargados');
    
})

server.post('/productos', async (request,response)=>{
    const producto = {nombre_producto, precio, url} = request.body;
    console.log(`${nombre_producto} - ${precio}-${url}`);
    crud.insert_prod(producto);
    response.status(201);
    response.send({message: 'Nuevo producto agregado satisfactoriamente'});
})


server.put('/productos')
server.delete('/productos')

server.get('/pedidos',(request,response)=>{
    response.send('aun no tienes pedidos')
})
server.post('/pedidos')
server.put('/pedidos')
server.delete('/pedidos')

