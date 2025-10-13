import { effect, inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { selectContentModelFromRoute } from '@app/store/content-model/content-model.selectors';
import type { ContentModel } from '@cms/common';
import { Store } from '@ngrx/store';

@Injectable()
export class EditContentModelService {
  private readonly fb = inject(FormBuilder);
  private readonly store = inject(Store);
  private readonly contentModel = this.store.selectSignal(selectContentModelFromRoute);

  form?: FormGroup;

  constructor() {
    effect(() => {
      this.form = this.buildForm(this.contentModel());
    });
  }

  buildForm(contentModel?: ContentModel): FormGroup {
    const form = this.fb.group({
      type: this.fb.control(contentModel?.type || ''),
      description: this.fb.control(contentModel?.description || ''),
      version: this.fb.control(contentModel?.version || 1),
      data: this.fb.group({
        type: this.fb.control('object'),
        properties: this.buildPropertiesForm(contentModel),
      }),
    });

    return form;
  }

  buildPropertiesForm(contentModel?: ContentModel): FormGroup {
    const form = this.fb.group({
      type: this.fb.control<string | null>(null),
      title: this.fb.control<string | null>(null),
      hint: this.fb.control<string | undefined>(undefined),
      label: this.fb.control<string | undefined>(undefined),
      size: this.fb.control<number | undefined>(undefined),
      multiple: this.fb.control<boolean | undefined>(undefined),
      options: this.fb.array([]),
    });

    return form;
  }

  buildPropertyOptionForm(): FormGroup {
    const form = this.fb.group({
      type: this.fb.control<string>('string'),
      hint: this.fb.control<string | undefined>(undefined),
      label: this.fb.control<string | undefined>(undefined),
      value: this.fb.control<string | undefined>(undefined),
      divider: this.fb.control<string | undefined>(undefined),
      exclusive: this.fb.control<boolean>(false),
    });

    return form;
  }
}
