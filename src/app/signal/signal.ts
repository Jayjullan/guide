import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  count = signal(0);

  increment() {
    this.count.update((value) => value + 1);
  }

  decrement() {
    this.count.update((value) => value - 1);
  }
}
