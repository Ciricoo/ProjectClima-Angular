import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { WeatherService } from './weather.service';
import { ButtonThemeComponent } from './components/button-theme/button-theme.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TemperatureComponent,
    WeatherForecastComponent,
    ButtonThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
