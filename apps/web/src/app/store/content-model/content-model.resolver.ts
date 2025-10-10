import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import type { GetContentModelsQueryParams } from '@cms/common';
import { Store } from '@ngrx/store';
import { getContentModel, getContentModels } from './content-model.actions';

export const contentModelResolver: ResolveFn<void> = (route) => {
  const store = inject(Store);
  const id = route.paramMap.get('contentModelId') as string;
  store.dispatch(getContentModel({ id }));
};

export const contentModelsResolver: ResolveFn<void> = (route) => {
  const store = inject(Store);
  const queryParams = route.queryParamMap as GetContentModelsQueryParams;
  store.dispatch(getContentModels({ queryParams }));
};
