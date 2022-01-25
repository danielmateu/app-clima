window.addEventListener('load', () => {
    let lon;
    let lat;
    

    let temperaturaValor = document.getElementById('temperatura-valor');
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion');

    let ubicacion = document.getElementById('ubicacion');
    let iconoAnimado = document.getElementById('icono-animado');

    let vientoVelocidad = document.getElementById('viento-velocidad');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion =>{
            //console.log(posicion.coords.latitude);
            lon = posicion.coords.longitude;
            lat = posicion.coords.latitude;
            
            //Ubicacion Actual
            //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c813f2748d4825e65ccf6f3bfe4e2464`

            //Ubicacion por Ciudad
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Barcelona&lang=es&units=metric&appid=c813f2748d4825e65ccf6f3bfe4e2464`

            //console.log(url);

            fetch(url)
            .then(response =>{return response.json()})
            .then(data =>{
                //console.log(data.main.temp);
                let temp =(data.main.temp).toFixed(1);
                temperaturaValor.textContent = `${temp} ºC`;
                //console.log(data.name);
                let name = data.name;
                ubicacion.textContent = `${name}`;
                //console.log(data.weather[0].description);
                let desc = data.weather[0].description;
                temperaturaDescripcion.textContent = desc.toUpperCase();
                //console.log(data.wind.speed);
                let velocidad = data.wind.speed;
                vientoVelocidad.textContent =`${velocidad} m/s` 

            })
            .catch(error =>{
                console.log(error);
            });
        })
    }
})