let url = window.location.href;
let swDirect = "nombre de mi repo/sw.js"

if(navigator.serviceWorker){
    console.log("Ya se puede usar ")
    
    if(url.includes('localhost')){
        swDirect = '/sw.js';
    }
    navigator.serviceWorker.register('/sw.js');
}else{
    console.log("Cambia de navegador")
}
