import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [],
})
export class HeaderComponent implements OnInit{
  today = new Date();
 
  constructor(public weatherService: WeatherService) {}

  selectedCity: string = '';
  
  ngOnInit(): void {
    this.selectedCity = localStorage.getItem('selectedCity') || 'Jaraguá do Sul, SC';
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    this.weatherService.fetchData(this.selectedCity)
  }

  onCityChange(event: any) {
    this.selectedCity = event.target.value;
    this.fetchWeatherData();
    localStorage.setItem('selectedCity',this.selectedCity);
  }
}
