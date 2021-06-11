const Registra_productos=()=>{
    let nombre_producto=document.getElementById('nompro').value;
    let precio=document.getElementById('precio').value;
    let url=document.getElementById('url').value;
    //let id='NULL';
    let newpro={nombre_producto,precio,url};
    let endpoint='http://localhost:3000/productos';
    let init={
        method:'POST',
        body: JSON.stringify(newpro),
        cache:'default',
        headers:{'Content-Type':'application/json'}
    };
    
    console.log(newpro);

    fetch(endpoint,init)
    .then(res=>res.json())
    .then(json=>console.log(json))
    .catch(err=>console.error(err));
    
}

document.getElementById('cargar').addEventListener('click',Registra_productos);




