import { Component } from '@angular/core';
import { ButtonGroupComponent } from '@app/components/button-group/button-group.component';
import { ButtonComponent } from '@app/components/button/button.component';

@Component({
  selector: 'app-content-model',
  templateUrl: './content-model.page.html',
  imports: [ButtonComponent, ButtonGroupComponent],
})
export class ContentModelPage {}
