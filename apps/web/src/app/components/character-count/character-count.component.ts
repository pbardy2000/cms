import { Component, input } from '@angular/core';

@Component({
  selector: 'app-character-count',
  templateUrl: './character-count.component.html',
  imports: [],
})
export class CharacterCountComponent {
  readonly id = input<string>();
  readonly value = input.required<string>();
  readonly maxlength = input.required<number>();
}
