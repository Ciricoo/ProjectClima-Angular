import { Component, OnInit } from '@angular/core';
import { Forecast } from 'src/app/interfaces/forecast';
import { Weather } from 'src/app/interfaces/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit{
  weatherData!: Weather;
  constructor(private weatherService: WeatherService) {}
  
  ngOnInit(): void {
    this.weatherForecast()
  }
  
 weatherForecast(): void {
  this.weatherService.get().subscribe( // Inscreve-se em um fluxo de dados assíncrono para receber notificações de novos valores. 
  //Este método é usado para observar um Observable e reagir sempre que um novo valor é emitido.
    (data: Weather | undefined) => {
      if (data !== undefined) {
        this.weatherData = data;
      }
    },
  );
}

  getList(): Forecast[]{
    return this.weatherData.results.forecast.slice(0,5);
  }

  getWeekdayAndDate(forecast: Forecast): string {
    return `${forecast.weekday} - ${forecast.date}`;
  }

  getIcon(forecast: Forecast): string{
    return `./assets/iconsClima/${forecast.condition}.svg`
  }

  getTemp(forecast: Forecast): string{
    return `${forecast.max}° / ${forecast.min}°`
  }

  getRain(forecast: Forecast): string{
    return `💧${forecast.rain_probability}%`
  }

  wind(forecast: Forecast): string{
    return `🍃${forecast.wind_speedy}`
  }
}
