import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjectClima-Angular';
  public toggle(){
    document.body.classList.toggle('dark-mode');
    document.querySelector(".cidades")?.classList.toggle('dark-mode');
  }
}
