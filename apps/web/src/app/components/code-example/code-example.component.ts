import { Component, input, model, signal } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.scss'],
  imports: [Highlight, ButtonComponent],
})
export class CodeExampleComponent {
  readonly copyText = signal('Copy code');
  readonly language = input.required<string>();

  readonly code = model('');

  onCopy() {
    navigator.clipboard.writeText(this.code());

    this.copyText.set('Copied!');
    setTimeout(() => {
      this.copyText.set('Copy code');
    }, 5000);
  }
}
