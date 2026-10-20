import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
  name = '';
  email = '';
  submitted = false;

  submitForm() {
    this.submitted = true;
  }
}
