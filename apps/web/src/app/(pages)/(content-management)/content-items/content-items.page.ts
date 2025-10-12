import { Component } from '@angular/core';
import { ButtonGroupComponent } from '@app/components/button-group/button-group.component';
import { ButtonComponent } from '@app/components/button/button.component';

@Component({
  selector: 'app-content-items',
  templateUrl: './content-items.page.html',
  imports: [ButtonGroupComponent, ButtonComponent],
})
export class ContentItemsPage {}
