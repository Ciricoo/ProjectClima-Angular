import { Component, OnInit } from '@angular/core';

import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [],
})
export class HeaderComponent implements OnInit {
  today = new Date();

  constructor(public weatherService: WeatherService) {}

  selectedCity: string = '';

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
  ];

  ngOnInit(): void {
    this.selectedCity = localStorage.getItem('selectedCity') || 'Jaraguá do Sul, SC';
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    this.weatherService.fetchData(this.selectedCity);
  }

  onCityChange(event: Event) {
    const optionElement = event.target as HTMLOptionElement;
    this.selectedCity = optionElement.value;
    this.fetchWeatherData();
    localStorage.setItem('selectedCity', this.selectedCity);
  }
}
