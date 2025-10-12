import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  imports: [],
})
export class ButtonComponent {
  id = input<string>();
  type = input<HTMLButtonElement['type']>('button');
  variant = input<'start' | 'default'>('default');
  theme = input<'primary' | 'secondary' | 'warning' | 'inverted'>('primary');
  disabled = input<boolean>(false);
}
