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
  
  getDayWeek(date: Date) {
    const week = [
      "Sunday",
      "Monday", 
      "Tuesday", 
      "Wednesday", 
      "Thursday", 
      "Friday", 
      "Saturday"
    ]
    return week[date.getDay()];
  }

  getMonth(date: Date) {
    const months = [
      "January", 
      "February", 
      "March", 
      "April", 
      "May", 
      "June", 
      "July", 
      "August", 
      "September", 
      "October",
      "November",
      "December"
    ];
    return months[date.getMonth()];
}

constructor(public weatherService: WeatherService){}

ngOnInit(): void {
  this.weatherService.fetchData();
}

}
