import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [],
})
export class HeaderComponent implements OnInit{
  date: Date = new Date();
  day: number = this.date.getDate();
  year: number = this.date.getFullYear();
  
  getDayWeek() {
    const day = this.date.toLocaleString("default", {weekday:"long"});
    return day.charAt(0).toUpperCase() + day.slice(1);
  }

  getMonth() {
    const month = this.date.toLocaleString("default", { month: "long" });
    return month.charAt(0).toUpperCase() + month.slice(1);
}


  constructor(public weatherService: WeatherService) {}

  selectedCity: string = '';
  ngOnInit(): void {
    this.selectedCity = localStorage.getItem('selectedCity') || 'Jaraguá do Sul, SC';
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    this.weatherService.fetchData(this.selectedCity)
    .subscribe((data) => {
      this.weatherService.weatherData = data;
    });

  }

  onCityChange(event: any) {
    this.selectedCity = event.target.value;
    this.fetchWeatherData();
    localStorage.setItem('selectedCity',this.selectedCity);
  }
}
