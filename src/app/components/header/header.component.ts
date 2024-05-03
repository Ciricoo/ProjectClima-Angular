import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/interfaces/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [],
})
export class HeaderComponent implements OnInit {
  weatherData!: Weather;
  selectedCity: string = '';

  constructor(private weatherService: WeatherService) {}

  today = new Date();

  cities = [
    { name: 'Jaraguá do Sul, SC' },
    { name: 'Itajaí, SC' },
    { name: 'Florianópolis, SC' },
    { name: 'Itapema, SC' },
    { name: 'Curitiba, PR' },
    { name: 'São Paulo, SP' },
    { name: 'Belo Horizonte, MG' },
    { name: 'Rio de Janeiro, RJ' },
    { name: 'Salvador, BA' },
    { name: 'Fortaleza, CE' },
    { name: 'Porto Alegre, RS' },
    { name: 'Presidente Getúlio, SC' },
  ];

  ngOnInit(): void {
    this.selectedCity = localStorage.getItem('selectedCity') || 'Jaraguá do Sul, SC';
    this.fetchWeatherData();
  }

  fetchWeatherData(): void {
    this.weatherService.fetchData().subscribe((data: Weather) => {
      this.weatherData = data;
    });
  }

  onCityChange(): void {
    localStorage.setItem('selectedCity', this.selectedCity);
    this.fetchWeatherData();
  }

  getCityName(): string {
    return this.weatherData?.results.city_name;
  }
}
