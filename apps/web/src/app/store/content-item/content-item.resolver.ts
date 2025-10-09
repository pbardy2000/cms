import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngrx/store';

export const contentItemResolver: ResolveFn<void> = (route) => {
  const store = inject(Store);
};

export const contentItemsResolver: ResolveFn<void> = (route) => {
  const store = inject(Store);
};
