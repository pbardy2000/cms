import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '@app/components/button/button.component';
import { CheckboxesComponent } from '@app/components/checkboxes/checkboxes.component';
import { DetailsComponent } from '@app/components/details/details.component';
import { TextInputComponent } from '@app/components/text-input/text-input.component';

@Component({
  selector: 'app-search-technical-records',
  templateUrl: './search-technical-records.page.html',
  styleUrls: ['./search-technical-records.page.scss'],
  imports: [
    TextInputComponent,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    CheckboxesComponent,
    DetailsComponent,
  ],
})
export class SearchTechnicalRecordsPage {
  readonly fb = inject(FormBuilder);

  readonly form = this.fb.group({
    searchTerm: this.fb.control<string>(''),
    searchCritera: this.fb.control<string[]>([]),
  });

  search() {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
    }

    if (this.form.valid) {
    }
  }
}
