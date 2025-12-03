import {
  AfterViewInit,
  Component,
  forwardRef,
  inject,
  Injector,
  input,
  model,
  OnDestroy,
  signal,
} from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { ReplaySubject, startWith, takeUntil } from 'rxjs';
import { CharacterCountComponent } from '../character-count/character-count.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  imports: [FormsModule, CharacterCountComponent, ErrorMessageComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
  private readonly injector = inject(Injector);

  readonly id = input<string>();
  readonly name = input<string>('');
  readonly hint = input<string>();
  readonly label = input<string>();
  readonly rows = input<number>(5);
  readonly maxlength = input<number>();

  readonly value = model<string | null>(null);
  readonly disabled = model(false);

  readonly error = signal<string>('');
  private readonly destroy = new ReplaySubject<boolean>(1);

  onChange = (_: string | null) => {};
  onTouched = () => {};

  writeValue(obj: string | null): void {
    this.value.set(obj);
  }

  registerOnChange(fn: (_: string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  ngAfterViewInit(): void {
    const control = this.injector.get<NgControl>(NgControl);
    if (control.control && control.control.statusChanges) {
      control.control.statusChanges
        .pipe(startWith(control.control.status), takeUntil(this.destroy))
        .subscribe((status) => {
          switch (status) {
            case 'VALID':
            case 'PENDING':
            case 'DISABLED':
              this.error.set('');
              break;
            case 'INVALID':
              if (control.control && control.control.errors) {
                const errors = Object.values(control.control.errors);
                this.error.set(errors[0]);
              }
              break;
          }
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }
}

export type TextareaProps = {
  type: 'textarea';
  id?: string;
  hint?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
};
