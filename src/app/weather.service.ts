
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root',
})

export class WeatherService {
  weatherData: any;

  constructor(private http: HttpClient){}

  fetchData(selectedCity:string){
    return this.http  
    .get<JSON>(
      `https://api.hgbrasil.com/weather?format=json-cors&key=a6c3f225&city_name=${selectedCity}`
    )
    .subscribe((data) => {
      this.weatherData = data;
    });
  }
  
  

}
