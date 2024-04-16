
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root',
})


export class WeatherService {
  weatherData: any;

  constructor(private http: HttpClient){}

  fetchData(){
    return this.http  
    .get<any>(
      'https://api.hgbrasil.com/weather?format=json-cors&key=a6c3f225&city_name=Itajaí,SC'
    )
    .subscribe((data) => {
      this.weatherData = data;

      
    })
  }
}
