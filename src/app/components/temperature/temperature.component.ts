import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/interfaces/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent //implements OnInit 
{
  
  constructor(public weatherService: WeatherService){}
  
  // weatherData!: Weather;

  // ngOnInit(): void {
  //   this.weatherService.fetchData().subscribe(
  //     (data: Weather | undefined) => {
  //       this.weatherData = data as Weather;
  //     },
  //   );
  // }

  getForecastDescription(): string {
    return this.weatherService.weatherData ? this.weatherService.weatherData.results.forecast[0].description : '';
  }

  getTemperature(): string {
    return this.weatherService.weatherData ? this.weatherService.weatherData.results.temp.toString() : '';
  }
}
