import { Component, inject } from '@angular/core';
import { selectEditingTechRecord } from '@app/store/technical-record/technical-record.selectors';
import { Store } from '@ngrx/store';
import { TechRecordComponent } from '../../_components/tech-record/tech-record.component';

@Component({
  selector: 'app-create-preview-technical-record',
  templateUrl: './create-preview-technical-record.page.html',
  imports: [TechRecordComponent],
})
export class CreatePreviewTechnicalRecordPage {
  readonly store = inject(Store);
  readonly editingTechRecord = this.store.selectSignal(selectEditingTechRecord);
}
