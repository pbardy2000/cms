import { Component, forwardRef, inject, input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from '@app/components/select/select.component';
import { TextInputComponent } from '@app/components/text-input/text-input.component';
import { ForTagsDirective } from '@app/directives/for-tags.directive';
import { ConstantsService, TechRecord } from '@app/services/constants.service';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-approval-type-form',
  templateUrl: './approval-type.form.html',
  styleUrls: ['./approval-type.form.scss'],
  imports: [
    FormsModule,
    ForTagsDirective,
    ReactiveFormsModule,
    SelectComponent,
    TextInputComponent,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ApprovalTypeForm),
      multi: true,
    },
  ],
})
export class ApprovalTypeForm extends BaseForm {
  readonly constants = inject(ConstantsService);

  readonly techRecord = input<TechRecord>();
  readonly filters = input<string[]>([]);

  override form = this.fb.group({
    techRecord_approvalType: this.fb.control<string | undefined>(undefined),
    techRecord_approvalTypeNumber: this.fb.control<string | null | undefined>(undefined, []),
    techRecord_variantNumber: this.fb.control<string | null | undefined>(undefined, []),
    techRecord_variantVersionNumber: this.fb.control<string | null | undefined>(undefined, []),
  });
}
