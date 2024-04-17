import { Component } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent {
  constructor(public weatherService: WeatherService){}

ngOnInit(): void {
  this.weatherService.fetchData('');
}

}
