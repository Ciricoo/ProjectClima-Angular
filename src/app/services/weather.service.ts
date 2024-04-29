import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from '../interfaces/weather';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  // selectedCity: string = '';
  // cidadeArmazenada:String = ''
  // constructor(private http: HttpClient) {
  //   this.cidadeArmazenada = localStorage.getItem('selectedCity') || 'Jaraguá do Sul, SC';
  // }
  //   fetchData(): Observable<Weather> { 
  //     if( this.cidadeArmazenada === this.selectedCity){
  //       const cachedData = JSON.parse(localStorage.getItem('selectedCity')|| 'null');
  //       return of(cachedData);
  //     }else{
  //     return this.http.get<Weather>(
  //       `https://api.hgbrasil.com/weather?format=json-cors&key=6bde0c23&city_name=${this.selectedCity}`
  //     );
  //   }
  //   }

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
