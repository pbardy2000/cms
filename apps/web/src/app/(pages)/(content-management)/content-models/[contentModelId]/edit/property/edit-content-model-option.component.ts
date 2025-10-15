import {
  AfterViewInit,
  Component,
  DOCUMENT,
  Injector,
  OnDestroy,
  OnInit,
  forwardRef,
  inject,
  model,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonGroupComponent } from '@app/components/button-group/button-group.component';
import { ButtonComponent } from '@app/components/button/button.component';
import { SelectComponent, SelectOption } from '@app/components/select/select.component';
import { TextInputComponent } from '@app/components/text-input/text-input.component';
import { ReplaySubject, takeUntil } from 'rxjs';
import { EditContentModelService } from '../edit-content-model.service';

@Component({
  selector: 'app-edit-content-model-option',
  templateUrl: './edit-content-model-option.component.html',
  styleUrls: ['./edit-content-model-option.component.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TextInputComponent,
    SelectComponent,
    ButtonComponent,
    ButtonGroupComponent,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditContentModelOptionComponent),
      multi: true,
    },
  ],
})
export class EditContentModelOptionComponent
  implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy
{
  private readonly fb = inject(FormBuilder);
  private readonly injector = inject(Injector);
  private readonly document = inject(DOCUMENT);
  private readonly editContentModelService = inject(EditContentModelService);

  readonly form = this.fb.group({
    options: this.fb.array([this.editContentModelService.buildPropertyOptionForm()]),
  });
  readonly value = model<any[]>([]);
  readonly disabled = model(false);

  readonly valueTypes: SelectOption<string>[] = [
    { value: 'string', label: 'String' },
    { value: 'number', label: 'Number' },
    { value: 'boolean', label: 'Boolean' },
    { value: 'null', label: 'Null' },
    { value: 'object', label: 'Object' },
    { value: 'array', label: 'Array' },
  ];

  readonly booleanOptions: SelectOption<string>[] = [
    { value: 'true', label: 'Yes' },
    { value: 'false', label: 'No' },
  ];

  private readonly destroy = new ReplaySubject<boolean>(1);

  onChange = (_: any[]) => {};
  onTouched = () => {};

  writeValue(obj: any[]): void {
    this.value.set(obj);

    this.form.setControl(
      'options',
      this.fb.array(
        obj.length
          ? obj.map((option) => this.editContentModelService.buildPropertyOptionForm(option))
          : [this.editContentModelService.buildPropertyOptionForm()],
      ),
    );

    this.form.patchValue({ options: obj });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  onChangeOptionType(index: number, value: string): void {}

  onChangeOptionLabel(index: number, value: string | null): void {}

  removeOption(index: number): void {
    this.form.controls.options.removeAt(index);
  }

  addOption(index: number) {
    const form = this.editContentModelService.buildPropertyOptionForm();
    form.markAsPristine();
    this.form.controls.options.insert(index, form);

    setTimeout(() => {
      this.document.getElementById(`options-${index}-label`)?.focus();
    }, 200);
  }

  addOptionAbove(index: number): void {
    this.addOption(index);
  }

  addOptionBelow(index: number): void {
    const options = this.form.controls.options.getRawValue();
    this.addOption(index + 1 >= options.length + 1 ? options.length : index + 1);
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy)).subscribe(() => {
      console.log('setting value', this.form.controls.options.getRawValue());
      this.onChange(this.form.controls.options.getRawValue());
    });
  }

  ngAfterViewInit(): void {
    const control = this.injector.get<NgControl>(NgControl);
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }
}
