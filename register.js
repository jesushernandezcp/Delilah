const limpiarform=()=>{
    let clean=document.getElementsByTagName('input');
    console.log(clean);
    for (let index = 0; index < clean.length; index++) {
        clean[index].value="";

        
    }
    console.log(clean);
}

const registro=()=>{
    let usuario=document.getElementById('user_name').value;
    let nombre=document.getElementById('name').value;
    let email=document.getElementById('mail').value;
    let telefono=document.getElementById('phone').value;
    let direccion=document.getElementById('address').value;
    let contrasena=document.getElementById('pass').value;
    let registro={usuario,nombre,email,telefono,direccion,contrasena};
    console.log(registro);
    var url='http://localhost:3000/registro';
    var init={
        method:'POST',
        body: JSON.stringify(registro),
        cache:'default',
        headers:{'Content-Type':'application/json', }

    };

    fetch(url,init)
    .then(res=>res.json())
    .then(json=>console.log(json))   
    .catch(err=>console.error(err));

    limpiarform();
}



document.getElementById('crear').addEventListener('click',registro);
