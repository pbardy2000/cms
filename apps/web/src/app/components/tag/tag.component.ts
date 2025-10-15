import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
})
export class TagComponent {
  readonly color = input<
    | 'grey'
    | 'green'
    | 'turquoise'
    | 'light-blue'
    | 'blue'
    | 'light-purple'
    | 'purple'
    | 'pink'
    | 'red'
    | 'orange'
    | 'yellow'
  >('green');
}
