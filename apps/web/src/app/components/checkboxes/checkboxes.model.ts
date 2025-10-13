import { InjectionToken } from '@angular/core';
import { CheckboxesComponent } from './checkboxes.component';

export const CHECKBOXES = new InjectionToken<CheckboxesComponent<any>>('CHECKBOXES');
