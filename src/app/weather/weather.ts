import { Component, ElementRef, afterNextRender, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { timeout } from 'rxjs';

interface WeatherData {
  name: string;
  main: { temp: number; humidity: number };
  weather: { description: string }[];
  wind: { speed: number };
}

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule, // was missing, so <mat-spinner> never rendered
  ],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather {
  private http = inject(HttpClient);
  private elementRef = inject(ElementRef<HTMLElement>);

  city = 'Kuching,MY';
  private readonly apiKey = 'b6704e492aec77492d36a03797232497';

  weather = signal<WeatherData | null>(null);
  loading = signal(false);
  error = signal('');

  constructor() {
    afterNextRender(() => {
      this.elementRef.nativeElement.querySelector('input')?.focus();
    });
    this.getWeather();
  }

  getWeather() {
    const cityName = this.city.trim();
    if (!cityName) {
      this.error.set('Please enter a city.');
      return;
    }

    this.loading.set(true);
    this.error.set('');
    this.weather.set(null);

    this.http
      .get<WeatherData>('https://api.openweathermap.org/data/2.5/weather', {
        params: { q: cityName, appid: this.apiKey, units: 'metric' },
      })
      .pipe(timeout(10000)) // don't hang forever on a stalled request
      .subscribe({
        next: (data) => {
          this.weather.set(data);
          this.loading.set(false);
        },
        error: (err) => {
          this.loading.set(false);
          if (err.status === 404) this.error.set('City not found.');
          else if (err.status === 401) this.error.set('Invalid or inactive API key.');
          else this.error.set('Unable to load weather data.');
        },
      });
  }
}
