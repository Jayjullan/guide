import { Component } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  standalone: true,
  imports: [CdkDrag],
  templateUrl: './drag-drop.html',
  styleUrl: './drag-drop.css',
})
export class DragDrop {}
