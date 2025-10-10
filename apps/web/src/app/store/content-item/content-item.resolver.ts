import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import type { GetContentItemsQueryParams } from '@cms/common';
import { Store } from '@ngrx/store';
import { getContentItem, getContentItems } from './content-item.action';

export const contentItemResolver: ResolveFn<void> = (route) => {
  const store = inject(Store);
  const id = route.paramMap.get('contentItemId') as string;
  store.dispatch(getContentItem({ id }));
};

export const contentItemsResolver: ResolveFn<void> = (route) => {
  const store = inject(Store);
  const queryParams = route.queryParamMap as GetContentItemsQueryParams;
  store.dispatch(getContentItems({ queryParams }));
};
