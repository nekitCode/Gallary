import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() colorSchema?: 'primary' | 'secondary' | 'brand' | 'brand2' = 'brand';
  @Input() typeBtn: 'button' | 'submit' | 'reset' = 'button';
  @Output() onClick = new EventEmitter<void>();
  @Input() className?: string;

  handleClick() {
    this.onClick.emit();
  }
}
