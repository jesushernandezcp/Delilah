
/*
function log() {
    let usuario=document.getElementById('user').value;
    let apellido=document.getElementById('lastname').value;
    let contrasena=document.getElementById('pwd').value;
    let info={usuario,apellido,contrasena};
    
    var url='http://localhost:3000/registro';
    var init={
        method:'POST',
        body: JSON.stringify(info),
        cache:'default',
        headers:{'Content-Type':'application/json', }

    };

    fetch(url,init)
    .then(res=>res.json())
    .then(json=>console.log(json))
    .catch(err=>console.error(err));

    //let response = await fetch(url,init);
    
    //let json = await response.json();
    //console.log(json);

};

*/

//const { json } = require("sequelize/types");


let login=document.getElementById('login');


login.addEventListener('click',()=>{
    let usuario=document.getElementById('user').value;
    let apellido=document.getElementById('lastname').value;
    let contrasena=document.getElementById('pwd').value;
    let info={usuario,apellido,contrasena};
    
    
        
        


});




/*
let newuser=document.getElementById('register');
let a=document.createElement('a');
a.href='http://127.0.0.1:5500/newuser.html'
newuser.addEventListener('click',a);
*/