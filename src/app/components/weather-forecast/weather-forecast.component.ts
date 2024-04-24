import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';



@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent {
  constructor(public weatherService: WeatherService){}

}
