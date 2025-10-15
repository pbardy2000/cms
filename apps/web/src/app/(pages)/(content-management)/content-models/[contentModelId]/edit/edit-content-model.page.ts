import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ButtonGroupComponent } from '@app/components/button-group/button-group.component';
import { ButtonComponent } from '@app/components/button/button.component';
import { TextInputComponent } from '@app/components/text-input/text-input.component';
import { TextareaComponent } from '@app/components/textarea/textarea.component';
import jsonToSchema from 'json-schema-generator';
import { EditContentModelService } from './edit-content-model.service';

@Component({
  selector: 'app-edit-content-model',
  templateUrl: './edit-content-model.page.html',
  imports: [
    FormsModule,
    ButtonGroupComponent,
    ButtonComponent,
    ReactiveFormsModule,
    TextInputComponent,
    TextareaComponent,
    RouterLink,
  ],
})
export class EditContentModelPage {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  readonly editContentModelService = inject(EditContentModelService);

  addProperty(): void {
    this.router.navigate(['property'], { relativeTo: this.route });
  }

  editProperty(path: string): void {
    this.router.navigate(['property'], { relativeTo: this.route, queryParams: { path } });
  }

  saveContentModel(): void {
    const result = jsonToSchema({
      title: 'requiredStandard',
      requiredStandard: {
        type: 'string',
        description: '{}',
      },
    });

    console.log(result);
  }
}
