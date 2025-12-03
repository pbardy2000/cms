import { Component, forwardRef, inject, input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseForm } from '../base-form/base-form.form';
import { ConstantsService, TechRecord } from '@app/services/constants.service';

@Component({
  selector: 'app-tyres-form',
  templateUrl: './tyres.form.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TyresForm),
      multi: true,
    },
  ],
})
export class TyresForm extends BaseForm {
  readonly constants = inject(ConstantsService);

  readonly techRecord = input<TechRecord>();
  readonly filters = input<string[]>([]);

  override form = this.fb.group({});
}
