import { Component, inject, input } from '@angular/core';
import { Modes, TechRecord } from '@app/services/constants.service';
import { TechRecordService } from '@app/services/tech-record.service';

@Component({
  selector: 'app-tech-record',
  templateUrl: './tech-record.component.html',
})
export class TechRecordComponent {
  readonly techRecordService = inject(TechRecordService);

  readonly mode = input<Modes>('EDIT');
  readonly techRecord = input.required<TechRecord>();
}
