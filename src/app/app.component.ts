import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ProjectClima-Angular';
  isChecked: boolean = false
  
ngOnInit(){
  const theme = localStorage.getItem('theme');
  if (theme === 'dark'){
    this.enableDarkMode();
    this.isChecked = true;
  }
}

public toggle(){
  if(this.isChecked){
    this.enableLightMode();
  }
  else{
    this.enableDarkMode();
  }
}

enableDarkMode(){
  document.body.classList.add('dark-mode');
    document.querySelector(".cidades")?.classList.add('dark-mode');
    const options = document.querySelectorAll(".cidades option");
    options.forEach((option) => {
      option.classList.add("dark-mode");
    })
    document.querySelector(".label")?.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    
}

enableLightMode(){
  document.body.classList.remove('dark-mode');
    document.querySelector(".cidades")?.classList.remove('dark-mode');
    const options = document.querySelectorAll(".cidades option");
    options.forEach((option) => {
      option.classList.remove("dark-mode");
    })
    document.querySelector(".label")?.classList.remove('dark-mode');

    localStorage.setItem('theme', 'light');
    
}

}


