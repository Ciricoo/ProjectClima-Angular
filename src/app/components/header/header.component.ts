import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
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

}
