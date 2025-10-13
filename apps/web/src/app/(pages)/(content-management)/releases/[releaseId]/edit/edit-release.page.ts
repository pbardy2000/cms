import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateInputComponent } from '@app/components/date-input/date-input.component';
import { TextInputComponent } from '@app/components/text-input/text-input.component';
import { TextareaComponent } from '@app/components/textarea/textarea.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-edit-release',
  templateUrl: './edit-release.page.html',
  imports: [
    FormsModule,
    TextInputComponent,
    TextareaComponent,
    DateInputComponent,
    ReactiveFormsModule,
  ],
})
export class EditReleasePage {
  private readonly fb = inject(FormBuilder);
  private readonly store = inject(Store);

  readonly form = this.fb.group({
    name: this.fb.control(''),
    publishAt: this.fb.control(''),
  });

  onSubmit(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      const release = this.form.getRawValue();
      // dispatch action
    }
  }
}
