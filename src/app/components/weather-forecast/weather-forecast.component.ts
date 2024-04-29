import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs';
import { Forecast } from 'src/app/interfaces/forecast';
import { Weather } from 'src/app/interfaces/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit
 {
  weatherData!: Weather;
  constructor(public weatherService: WeatherService) {}
  
  ngOnInit(): void {
    this.weatherForecast()
  }
  
 weatherForecast() {
  this.weatherService.get().subscribe(
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
    return `${forecast.max}° / ${forecast.min}`
  }

  getRain(forecast: Forecast): string{
    return `💧${forecast.rain_probability}%`
  }
}
