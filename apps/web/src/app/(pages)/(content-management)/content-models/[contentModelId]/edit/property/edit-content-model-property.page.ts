import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonGroupComponent } from '@app/components/button-group/button-group.component';
import { ButtonComponent } from '@app/components/button/button.component';
import { CheckboxComponent } from '@app/components/checkbox/checkbox.component';
import { CheckboxesComponent } from '@app/components/checkboxes/checkboxes.component';
import { CodeExampleComponent } from '@app/components/code-example/code-example.component';
import { ExampleComponent } from '@app/components/example/example.component';
import { FormControlComponent } from '@app/components/form-control/form-control.component';
import { RadioComponent } from '@app/components/radio/radio.component';
import { RadiosComponent } from '@app/components/radios/radios.component';
import { SelectComponent } from '@app/components/select/select.component';
import { TabListComponent } from '@app/components/tabs/tab-list/tab-list.component';
import { TabPanelComponent } from '@app/components/tabs/tab-panel/tab-panel.component';
import { TabComponent } from '@app/components/tabs/tab/tab.component';
import { TabsComponent } from '@app/components/tabs/tabs.component';
import { TagComponent } from '@app/components/tag/tag.component';
import { TextInputComponent } from '@app/components/text-input/text-input.component';
import { TextareaComponent } from '@app/components/textarea/textarea.component';
import { ReplaySubject, takeUntil } from 'rxjs';
import { EditContentModelService } from '../edit-content-model.service';
import { EditContentModelOptionComponent } from './edit-content-model-option.component';

@Component({
  selector: 'app-edit-content-model-property',
  templateUrl: './edit-content-model-property.page.html',
  imports: [
    ButtonComponent,
    ButtonGroupComponent,
    FormsModule,
    ReactiveFormsModule,
    TextInputComponent,
    TextareaComponent,
    CheckboxComponent,
    CheckboxesComponent,
    RadioComponent,
    RadiosComponent,
    SelectComponent,
    ExampleComponent,
    CodeExampleComponent,
    TabsComponent,
    TabListComponent,
    TabPanelComponent,
    TabComponent,
    TagComponent,
    FormControlComponent,
    EditContentModelOptionComponent,
  ],
})
export class EditContentModelPropertyPage implements OnInit, OnDestroy {
  private readonly editContentModelService = inject(EditContentModelService);
  readonly form = this.editContentModelService.buildPropertiesForm();

  private readonly destroy = new ReplaySubject<boolean>(1);

  ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy)).subscribe(() => {
      console.log(this.form.value);
    });
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }

  saveProperty(): void {}

  cancel(): void {}
}
