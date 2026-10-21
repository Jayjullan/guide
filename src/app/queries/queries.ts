import { Component, ElementRef, viewChild } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-queries',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule],
  templateUrl: './queries.html',
  styleUrl: './queries.css',
})
export class Queries {
  // Find the input element in HTML
  nameInput = viewChild<ElementRef<HTMLInputElement>>('nameInput');

  // Focus on the input when button is clicked
  focusInput() {
    this.nameInput()?.nativeElement.focus();
  }

  // Clear the input
  clearInput() {
    const input = this.nameInput()?.nativeElement;

    if (input) {
      input.value = '';
      input.focus();
    }
  }
}
