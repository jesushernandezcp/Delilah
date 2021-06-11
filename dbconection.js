const sequelize=require('sequelize');

const path='mysql://root@localhost:3306/delilah';
const dbdelilah=new sequelize(path);

dbdelilah.authenticate()
.then(res=>console.log('conexion exitosa'))
.catch(err=>console.error('fallo de conexion'));

module.exports=dbdelilah;

