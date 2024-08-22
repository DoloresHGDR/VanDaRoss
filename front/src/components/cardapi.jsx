import React from 'react'
import '../style/style.css'

const Cardapi = ({loadingData, showData, weather, forecast}) => {

    var today = new Date();
    var day = today.getDate();
    var month =today.getMonth() +1;
    var year = today.getFullYear();
    var date = day + '/' + month + '/' + year;

    var url = "";
    var iconUrl = "";

    var iconUrl3 = "";
    var iconUrl6 = "";
    var iconUrl9 = "";

    var forecastDate3 = "";
    var forecastDate6 = "";
    var forecastDate9 = "";

    //if(loadingData){
    //    return <Spinner />;
    //}

    if(showData){
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";
        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/'+ forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/'+ forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13);
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/'+ forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 13);

    }

    return (
        <div className='mt-5'>
            {
                showData === true ? (
                    <div className='container'>
                        <div className='card mb-3 mx-auto text-light bg-dark'>
                            <div className='row g-0'>
                                <div className='col-md-4'>
                                    <h2 className='bitter-uniquifier card-title card-text1'>{weather.name}</h2> 
                                    <h4 className='bitter-uniquifier card-date card-text1'>{date}</h4>
                                    <h1 className='bitter-uniquifier card-temp card-text1'>{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                                    <h4 className='bitter-uniquifier card-desc card-text1'><img src={iconUrl} alt="icon"/>{weather.weather[0].description}</h4>
                                    <url style={{ backgroundImage: 'url(https://source.unsplash.com/featured/?city)', backgroundSize: 'cover', backgroundPosition: 'center' }}/>
                                </div>
                                <div className='col-md-8'>
                                    <div className='card-body text-start mt-2'>
                                        <h5 className='bitter-uniquifier card-text'> Temperatura máxima: {(weather.main.temp_max -273.15).toFixed(1)}°C</h5>
                                        <h5 className='bitter-uniquifier card-text'> Temperatura mínima: {(weather.main.temp_min -273.15).toFixed(1)}°C</h5>
                                        <h5 className='bitter-uniquifier card-text'> Sensación termica: {(weather.main.feels_like -273.15).toFixed(1)}°C</h5>
                                        <h5 className='bitter-uniquifier card-text'> Velocidad del viento: {weather.wind.speed}m/s</h5>
                                    </div>
                                    <hr/>
                                        <div className='row mt-4 ms-2'>
                                            <div className='col'>
                                                <h6>{forecastDate3}h</h6>
                                                <h6 className='bitter-uniquifier description'><img src={iconUrl3} alt='icon'/>{forecast.list[1].weather[0].description}</h6>
                                                <h6 className='temp'>{(forecast.list[1].main.temp - 273.15).toFixed(1)}°C</h6>
                                            </div>
                                            <div className='col'>
                                                <h6>{forecastDate6}h</h6>
                                                <h6 className='bitter-uniquifier description'><img src={iconUrl6} alt='icon'/>{forecast.list[2].weather[0].description}</h6>
                                                <h6 className='temp'>{(forecast.list[2].main.temp - 273.15).toFixed(1)}°C</h6>
                                            </div>  
                                            <div className='col'>
                                                <h6>{forecastDate9}h</h6>
                                                <h6 className='bitter-uniquifier description'><img src={iconUrl9} alt='icon'/>{forecast.list[3].weather[0].description}</h6>
                                                <h6 className='bitter-uniquifier temp'>{(forecast.list[3].main.temp - 273.15).toFixed(1)}°C</h6>
                                            </div>     
                                        </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ):(
                    <h2 className='text-light mx-auto text-center text-dark'> Sin datos </h2>
                )
            }

        </div>

    );

}

export default Cardapi;