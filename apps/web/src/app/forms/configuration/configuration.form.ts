import { Component, forwardRef, inject } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { RadioComponent } from '@app/components/radio/radio.component';
import { RadiosComponent } from '@app/components/radios/radios.component';
import { SelectComponent } from '@app/components/select/select.component';
import { TextInputComponent } from '@app/components/text-input/text-input.component';
import { ForVehicleTypesDirective } from '@app/directives/for-vehicle-types.directive';
import { ConstantsService } from '@app/services/constants.service';
import { BaseForm } from '../base-form/base-form.form';

@Component({
  selector: 'app-configuration-form',
  templateUrl: './configuration.form.html',
  imports: [
    RadiosComponent,
    RadioComponent,
    SelectComponent,
    TextInputComponent,
    FormsModule,
    ReactiveFormsModule,
    ForVehicleTypesDirective,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ConfigurationForm),
      multi: true,
    },
  ],
})
export class ConfigurationForm extends BaseForm {
  readonly constants = inject(ConstantsService);

  override form = this.fb.group({
    techRecord_offRoad: this.fb.control<boolean | null>(null),
    techRecord_departmentalVehicleMarker: this.fb.control<boolean | null>(null),
    techRecord_alterationMarker: this.fb.control<boolean | null>(null),
    techRecord_fuelPropulsionSystem: this.fb.control<string | null>(null),
    techRecord_roadFriendly: this.fb.control<boolean | null>(null),
    techRecord_suspensionType: this.fb.control<string | null>(null),
    techRecord_speedRestriction: this.fb.control<number | null>(null, [
      this.validators.max(99, 'Speed restriction mph'),
    ]),
  });
}
