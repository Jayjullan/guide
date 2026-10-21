import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-queries',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule],
  templateUrl: './queries.html',
  styleUrl: './queries.css',
})
export class Queries {
  noteInput = viewChild<ElementRef<HTMLInputElement>>('noteInput');

  newNote = '';

  notes: string[] = ['Finish Angular practice', 'Review TypeScript basics'];

  addNote() {
    if (!this.newNote.trim()) return;

    this.notes.unshift(this.newNote.trim());
    this.newNote = '';

    this.focusInput();
  }

  clearInput() {
    this.newNote = '';
    this.focusInput();
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
  }

  focusInput() {
    this.noteInput()?.nativeElement.focus();
  }
}
