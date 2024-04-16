import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';



@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent {
  constructor(public weatherService: WeatherService){}

ngOnInit(): void {
  this.weatherService.fetchData();
}

  getFormattedDate(dateString: string): string {
    const dateParts = dateString.split('/');
    const day = dateParts[0];
    const month = dateParts[1];
    return `${day}/${month}`;
  }
}
