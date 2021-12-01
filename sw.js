///console.log("SW: Hola mundo")

self.addEventListener('install',(event)=>{
    console.log("SW: instalado")
});

self.addEventListener('activate',(event)=>{
    console.log("SW: Activado y controlando la app")
});

self.addEventListener('fetch',(event)=>{
    if(event.request.url.includes('.jpg')){
        let newResp = fetch('/PWA-U1-01/img/minino.jpg');        
        console.log("Es una imagen")
        event.respondWith(newResp);
    }

    if(event.request.url.includes('page.css')){
        let newResponse = new Response(`body{
            background-color: black !important;
            color: blue !important;
        }`, {
            headers:{
                'Content-Type':'text/css'
            }
        });
        event.respondWith(newResponse);
    }
});

