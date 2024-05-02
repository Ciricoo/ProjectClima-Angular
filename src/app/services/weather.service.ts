import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from '../interfaces/weather';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  
  public selectedCity: string = '';
  private behavior = new BehaviorSubject<Weather | undefined>(undefined);

  get(): Observable<Weather | undefined>{
    return this.behavior.asObservable();
  }

  set(weatherData: Weather): void{
    this.behavior.next(weatherData);
  }
  
  constructor(private http: HttpClient) {}
    fetchData(): Observable<Weather> { 
      this.selectedCity = localStorage.getItem('selectedCity') || 'Jaraguá do Sul, SC';
      return this.http.get<Weather>(
        `https://api.hgbrasil.com/weather?format=json-cors&key=783861a3&city_name=${this.selectedCity}`
      ).pipe(tap((data) => {
        this.set(data)
      }))
    }
    }

 

