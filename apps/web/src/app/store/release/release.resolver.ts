import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import type { GetReleasesQueryParams } from '@cms/common';
import { Store } from '@ngrx/store';
import { getRelease, getReleases } from './release.actions';

export const releaseResolver: ResolveFn<void> = (route) => {
  const store = inject(Store);
  const id = route.paramMap.get('releaseId') as string;
  store.dispatch(getRelease({ id }));
};

export const releasesResolver: ResolveFn<void> = (route) => {
  const store = inject(Store);
  const queryParams = route.queryParamMap as GetReleasesQueryParams;
  store.dispatch(getReleases({ queryParams }));
};
