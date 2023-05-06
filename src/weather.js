


// const city=
const city=document.querySelector('#cN')
const key=`be3af875b1b5298674f92829eac4a710`

async function getW(citi) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${citi}&appid=${key}&units=metric`;
    const response = await fetch(url);
	const result = await response.json();
	// console.log(result);


    if(response.status==404){
        document.querySelector('.error').style.display='block';
        document.querySelector('.details').style.display='none';
        
        document.querySelector('.temp').innerHTML=`?? °C`
    }
    else{
        const how=result.weather[0].main
        const mo=document.querySelector('.icon')
        
        if(how=='cloudy') mo='https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png'
        else if(how=='sunny') mo='https://ssl.gstatic.com/onebox/weather/64/sunny.png'
        else if(how=='rainy') mo='https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png'
        else if(how=='drizzle') mo='https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png'
        else if(how=='mist') mo='https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png'
        
        
        document.querySelector('.temp').innerHTML=result.main.temp +`°C`;
        document.querySelector('.city').innerHTML=`city    :`+result.name ;
        document.querySelector('.Ws').innerHTML=  `speed   :`+result.wind.speed +'Kmph';
        document.querySelector('.h').innerHTML=   `humidity:`+result.main.humidity + '%';
        
// document.querySelector('.details').style.display='flex';
document.querySelector('.details').style.display='block'
document.querySelector('.error').style.display='none'
}
    
}


document.querySelector('.press').addEventListener('click',()=>{

    getW(city.value)

})