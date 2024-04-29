import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from '../interfaces/weather';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  
  selectedCity: string = '';
  private behavior = new BehaviorSubject<Weather | undefined>(undefined);

  get(): Observable<Weather | undefined>{
    return this.behavior.asObservable();
  }

  set(weatherData: Weather | undefined): void{
    this.behavior.next(weatherData);
  }
  
  constructor(private http: HttpClient) {}
    fetchData(): Observable<Weather> { 
      this.selectedCity = localStorage.getItem('selectedCity') || 'Jaraguá do Sul, SC';
      return this.http.get<Weather>(
        `https://api.hgbrasil.com/weather?format=json-cors&key=437ede73&city_name=${this.selectedCity}`
      ).pipe(tap((weatherData) => {
        this.behavior.next(weatherData);
      }))
    }
    }

  // weatherData!: Weather;

  // constructor(private http: HttpClient) {}

  // fetchData(selectedCity: string) {
  //   return this.http
  //     .get<Weather>(
  //       `https://api.hgbrasil.com/weather?format=json-cors&key=6bde0c23&city_name=${selectedCity}`
  //     )
  //     .subscribe((data) => {
  //       this.weatherData = data;
  //     });
  //   }
  //}

