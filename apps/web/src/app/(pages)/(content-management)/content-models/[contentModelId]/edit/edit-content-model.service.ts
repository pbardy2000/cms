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

  private buildForm(contentModel?: ContentModel): FormGroup {
    const form = this.fb.group({
      type: this.fb.control(contentModel?.type || ''),
      description: this.fb.control(contentModel?.description || ''),
      version: this.fb.control(contentModel?.version || 1),
      data: this.fb.group({}),
    });

    return form;
  }
}
