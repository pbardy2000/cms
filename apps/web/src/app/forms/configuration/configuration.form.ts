import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-configuration-form',
  templateUrl: './configuration.form.html',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ConfigurationForm),
      multi: true,
    },
  ],
})
export class ConfigurationForm extends BaseForm {
  override form = this.fb.group({
    
  });
}
