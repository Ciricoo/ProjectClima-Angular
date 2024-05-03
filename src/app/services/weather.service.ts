import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from '../interfaces/weather';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
  /** Indica que o serviço será injetado em todo o aplicativo.
  
  Este decorator torna a classe disponível para injeção de dependência em todo o aplicativo,
  permitindo que seja acessada em qualquer componente, serviço ou módulo.
  
  providedIn: 'root' significa que uma única instância deste serviço é compartilhada
  por todos os componentes, serviços e módulos que o utilizam.**/
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
        `https://api.hgbrasil.com/weather?format=json-cors&key=a6c3f225&city_name=${this.selectedCity}`
      ).pipe /**Encadeia uma operação de manipulação de dados em um fluxo de dados assíncrono. **/ 
       (tap /** Executa uma função de efeito colateral em cada item do fluxo de dados, sem modificá-lo. **/((data) => { 
        this.set(data) // atualiza o objeto com os dados recebidos
      }))
    }
    }

 

