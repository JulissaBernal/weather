const temperaturaValor=document.getElementById('tem-valor');
const temperaturaDescripcion=document.getElementById('tem-des');
const ubicacion=document.getElementById('ubi');
const icono=document.getElementById('icono');
const vientoVelocidad=document.getElementById('vin-vel');

window.addEventListener('load',() =>{

    let lat;
    let lon;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( (position) =>{
            //variables que nos pide la api
            let lat=position.coords.latitude
            let lon=position.coords.longitude

            //ubicacion por geolocation
            const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=a20691acd8c88fece369dc6419f7c9ee`
            //ubicacion por ciudad
            //const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a20691acd8c88fece369dc6419f7c9ee`
            //Obtener los datos fetch
            fetch(url)
            .then(response => response.json())

            .then((data) =>{
                //muestra la consola el valor json todos los datos
                console.log(data)
                //muestra el valor de la temperatura
                let temp=Math.round(data.main.temp)
                temperaturaValor.innerHTML=`${temp}°C`
                //muestra la descripcion del clima
                let descriptionclima=data.weather[0].description;
                temperaturaDescripcion.innerHTML=descriptionclima
                //muestra la ubicacion
                let place=data.name
                ubicacion.innerHTML=place
                //muestra el viento
                let viento=data.wind.speed
                vientoVelocidad.innerHTML=`${viento} m/s`
                //muestra el icono
                let desIcono=data.weather[0].main
                console.log(desIcono)
                switch (desIcono){
                    case 'Thunderstorm':
                        icono.src='animated/thunder.svg'
                        console.log("tormenta")
                        break;
                    case 'Drizzle':
                        icono.src='animated/rainy-2.svg'
                        console.log("llovizna")
                        break;
                    case 'Rain':
                        icono.src='animated/rainy-7.svg'
                        console.log("lluvia")
                        break;
                    case 'Snow':
                        icono.src='animated/snowy-6.svg'
                        console.log("nieve")
                        break;
                    case 'Clear':
                        icono.src='animated/day.svg'
                        console.log("limpio")
                        break;
                    case 'Atmosphere':
                        icono.src='animated/weather.svg'
                        console.log("atmosfera")
                        break;
                    case 'Clouds':
                        icono.src='animated/cloudy-day-1.svg'
                        console.log("nubes")
                        break;
                    case 'Clouds':
                        icono.src='animated/cloudy-day-1.svg'
                        console.log("nubes")
                        break;
                    default:
                        icono.src='animated/cloudy.day-1.svg'
                        console.log("por defecto")
                }
            
            })
            .catch(error =>{
                console.log(error)
            })
        })
    }
})