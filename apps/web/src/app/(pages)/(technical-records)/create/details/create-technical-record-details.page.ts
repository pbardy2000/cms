import { Component } from '@angular/core';
import { TechnicalRecordForm } from '@app/forms/technical-record/technical-record.form';

@Component({
  selector: 'app-create-technical-record-details',
  templateUrl: './create-technical-record-details.page.html',
  imports: [TechnicalRecordForm],
})
export class CreateTechnicalRecordPage {
  onSubmit(): void {}

  onCancel(): void {}
}
