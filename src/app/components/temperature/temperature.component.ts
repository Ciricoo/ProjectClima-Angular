import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/interfaces/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit 
{
  
  constructor(private weatherService: WeatherService){}
  
  weatherData?: Weather;

  ngOnInit(): void {
    this.temperature()
  }

  temperature(): void{
    this.weatherService.get().subscribe(
      (data: Weather | undefined) => {
        if (data !== undefined) {
          this.weatherData = data;
        }
      },
    );
  }

  getForecastDescription(): string | undefined {
    return this.weatherData?.results.forecast[0].description;
  }

  getTemperature(): number | undefined {
    return this.weatherData?.results.temp;
  }

  nascer(): string{
    return `${this.weatherData?.results.sunrise}`;
  }

  por(): string{
    return `${this.weatherData?.results.sunset};`
  }

  

}
