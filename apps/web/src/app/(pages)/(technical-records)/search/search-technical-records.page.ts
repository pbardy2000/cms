import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from '@app/components/button/button.component';
import { CheckboxesComponent } from '@app/components/checkboxes/checkboxes.component';
import { DetailsComponent } from '@app/components/details/details.component';
import { TextInputComponent } from '@app/components/text-input/text-input.component';
import { ValidatorsService } from '@app/services/validators.service';

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
  readonly router = inject(Router);
  readonly validators = inject(ValidatorsService);
  readonly activatedRoute = inject(ActivatedRoute);

  readonly queryParams = toSignal(this.activatedRoute.queryParams);

  readonly form = this.fb.group({
    searchTerm: this.fb.control<string>('', [this.validators.minLength(3, 'Search term')]),
    searchCritera: this.fb.control<string[]>([]),
  });

  search() {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
    }

    if (this.form.valid) {
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: this.form.value,
        queryParamsHandling: 'merge',
      });
    }
  }
}
