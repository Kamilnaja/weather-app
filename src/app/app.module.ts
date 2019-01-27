import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppWeatherComponent } from './app.weather';
import { WeatherService } from './services/app.weather.service';
import { WeatherFormComponent } from './weather-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserDataService } from './services/UserData.service';
import { UserSettings } from './models/UserSettings';

@NgModule({
  declarations: [
    AppComponent,
    AppWeatherComponent,
    WeatherFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [WeatherService, UserDataService, UserSettings],
  bootstrap: [AppComponent]
})

export class AppModule { }