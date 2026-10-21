import { Component, input } from '@angular/core';

@Component({
  selector: 'app-welcome-card',
  standalone: true,
  templateUrl: './welcome-card.html',
  styleUrl: './welcome-card.css',
})
export class WelcomeCard {
  message = input('Welcome to my website!');
}
