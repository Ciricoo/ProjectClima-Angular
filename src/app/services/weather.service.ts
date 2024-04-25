import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from '../interfaces/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weatherData!: Weather;

  constructor(private http: HttpClient) {}

  fetchData(selectedCity: string) {
    return this.http
      .get<Weather>(
        `https://api.hgbrasil.com/weather?format=json-cors&key=6bde0c23&city_name=${selectedCity}`
      )
      .subscribe((data) => {
        this.weatherData = data;
      });
  }
}