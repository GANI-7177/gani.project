var inputvalue= document.querySelector('#cityinput')
var btn=document.querySelector('#add')
var city=document.querySelector('#cityoutput')
var descrip = document.querySelector('#descrition')
var temp =document.querySelector('#temp')
var wind=document.querySelector('#wind')
apik="3796a01b4b2b00b4df00fb79d379277"
function convertion(val)
{
    return(val-273).toFixed(3)
}

btn.addEventListener('click',function()
{ 

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.'&appid='+apik)
    .then(res => res.json())

        .then(data =>
            {
                var nameval = data['name']
                var descrip = data['weather']['0']['description']
                var temparature = data['main']['temp']
                var wndspeed = data['wind']['speed']

                city.innerHTML=`weather of <span> ${nameval} `
                temp.innerHTML=`Temperature:<span> ${ convertion(temparature)}c</span> `
                description.innerHTML=` sky conditions:<span>${windspeed} km/h</span> `
                wind.innerHTML=`wind speed: <span>${windspeed}</span>`
            })

            .catch(err => alert('you entered wrong city name'))
})
