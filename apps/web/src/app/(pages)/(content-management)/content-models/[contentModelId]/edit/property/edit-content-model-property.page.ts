import { Component, inject } from '@angular/core';
import { EditContentModelService } from '../edit-content-model.service';

@Component({
  selector: 'app-edit-content-model-property',
  templateUrl: './edit-content-model-property.page.html',
})
export class EditContentModelPropertyPage {
  private readonly editContentModelService = inject(EditContentModelService);
}
