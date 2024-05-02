import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-button-theme',
  templateUrl: './button-theme.component.html',
  styleUrls: ['./button-theme.component.scss'],
})
export class ButtonThemeComponent implements OnInit {
  isChecked: boolean = false;

  constructor( private renderer: Renderer2, @Inject(DOCUMENT) private bodyElement: Document) {}

  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      this.enableDarkMode();
      this.isChecked = true;
    }
  }

  public toggle(): void {
    if (this.isChecked) {
      this.enableLightMode();
    } else {
      this.enableDarkMode();
    }
  }

  enableDarkMode(): void {
    this.renderer.addClass(this.bodyElement.body, 'dark-mode');
    localStorage.setItem('theme', 'dark');
  }

  enableLightMode(): void {
    this.renderer.removeClass(this.bodyElement.body, 'dark-mode');
    localStorage.setItem('theme', 'light');
  }
}
