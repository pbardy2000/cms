import {
  AfterViewInit,
  Component,
  Injector,
  OnDestroy,
  OnInit,
  forwardRef,
  inject,
  input,
  model,
  signal,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import dayjs from 'dayjs';
import { ReplaySubject, startWith, takeUntil } from 'rxjs';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { DateFocusNextDirective } from './date-input-focus-next.directive';
import { DateNumberOnlyDirective } from './date-input-number-only.directive';

type DateFormat = 'YYYY-MM-DD' | 'YYYY-MM-DDTHH:mm:ss' | 'YYYY-MM-DDTHH:mm:ss' | (string & {});

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ErrorMessageComponent,
    DateFocusNextDirective,
    DateNumberOnlyDirective,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true,
    },
  ],
})
export class DateInputComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly injector = inject(Injector);

  readonly id = input<string>();
  readonly hint = input<string>();
  readonly label = input<string>();
  readonly days = input<boolean>(true);
  readonly months = input<boolean>(true);
  readonly years = input<boolean>(true);
  readonly hours = input<boolean>(false);
  readonly minutes = input<boolean>(false);
  readonly seconds = input<boolean>(false);
  readonly format = input<DateFormat>('YYYY-MM-DD');

  readonly value = model<string>();
  readonly disabled = model(false);

  readonly error = signal<string>('');
  private readonly destroy = new ReplaySubject<boolean>(1);

  readonly form = this.fb.group({
    year: this.fb.nonNullable.control<string | null>(null),
    month: this.fb.nonNullable.control<string | null>(null),
    day: this.fb.nonNullable.control<string | null>(null),
    hours: this.fb.nonNullable.control<string | null>(null),
    minutes: this.fb.nonNullable.control<string | null>(null),
    seconds: this.fb.nonNullable.control<string | null>(null),
  });

  onChange = (_: string) => {};
  onTouched = () => {};

  writeValue(obj: string): void {
    this.value.set(obj);
    this.patchDate(obj);
    this.onChange(obj);
  }

  private patchDate(obj: string): void {
    if (!obj) return;
    const date = dayjs(obj as any);

    this.form.patchValue({
      year: date.year().toString(),
      month: (date.month() + 1).toString(),
      day: date.date().toString(),
      hours: date.hour().toString(),
      minutes: date.minute().toString(),
      seconds: date.second().toString(),
    });
  }

  registerOnChange(fn: (_: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
    isDisabled ? this.form.disable() : this.form.enable();
  }

  private getPartialISO(
    year?: string | null,
    month?: string | null,
    day?: string | null,
    hours?: string | null,
    minutes?: string | null,
    seconds?: string | null,
  ): string {
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
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

  ngOnInit(): void {
    // Ensure events of children are propagated to the parent
    this.form.events.pipe(takeUntil(this.destroy)).subscribe((value) => {
      if ('touched' in value && value.touched) {
        this.onTouched();
      }
    });

    // Map the separate form controls to a single date string
    this.form.valueChanges.pipe(takeUntil(this.destroy)).subscribe(() => {
      const { year, month, day, hours, minutes, seconds } = this.form.value;

      // If any field that is meant to be displayed is empty, output a partial ISO string
      if (this.years() && year == null)
        return this.onChange(this.getPartialISO(year, month, day, hours, minutes, seconds));
      if (this.months() && month == null)
        return this.onChange(this.getPartialISO(year, month, day, hours, minutes, seconds));
      if (this.days() && day == null)
        return this.onChange(this.getPartialISO(year, month, day, hours, minutes, seconds));
      if (this.hours() && hours == null)
        return this.onChange(this.getPartialISO(year, month, day, hours, minutes, seconds));
      if (this.minutes() && minutes == null)
        return this.onChange(this.getPartialISO(year, month, day, hours, minutes, seconds));
      if (this.seconds() && seconds == null)
        return this.onChange(this.getPartialISO(year, month, day, hours, minutes, seconds));

      // If the date would fail a govuk-date validation, return the partial ISO string
      const DD = parseInt(day || '');
      const MM = parseInt(month || '');
      const YYYY = parseInt(year || '');

      //const result = validateDate(DD, MM, YYYY);
      const result = {} as any;

      if (result.errors?.[0]?.reason) {
        return this.onChange(this.getPartialISO(year, month, day, hours, minutes, seconds));
      }

      // Only if all fields are filled, set the day and output in the correct format
      const d = dayjs(new Date(), this.format(), true)
        .set('date', parseInt(day || '0'))
        .set('month', parseInt(month || '0') - 1)
        .set('year', parseInt(year || '0'))
        .set('hour', parseInt(hours || '0'))
        .set('minute', parseInt(minutes || '0'))
        .set('second', parseInt(seconds || '0'))
        .format(this.format());

      this.onChange(d);
    });
  }
}

export type DateInputProps = {
  type: 'date-input';
  id?: string;
  hint?: string;
  label?: string;
  placeholder?: string;
};
