import { getRouterSelectors } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import dayjs from 'dayjs';
import { RELEASE_FEATURE_KEY, ReleaseState } from './release.model';
import { releaseAdapter } from './release.reducer';

export const selectReleaseFeature = createFeatureSelector<ReleaseState>(RELEASE_FEATURE_KEY);

export const selectAllReleases = createSelector(
  selectReleaseFeature,
  releaseAdapter.getSelectors().selectAll
);

export const selectReleases = createSelector(selectAllReleases, (releases) =>
  releases.filter((r) => r.deletedAt === null)
);

export const selectReleaseEntities = createSelector(
  selectReleaseFeature,
  releaseAdapter.getSelectors().selectEntities
);

export const selectReleaseFromRoute = createSelector(
  selectReleaseEntities,
  getRouterSelectors().selectRouteParam('id'),
  (entities, id) => id && entities[id]
);

export const selectArchivedReleases = createSelector(selectReleases, (releases) =>
  releases.filter((r) => dayjs(r.publishAt).isAfter(dayjs()))
);

export const selectPendingReleases = createSelector(selectReleases, (releases) =>
  releases.filter((r) => dayjs(r.publishAt).isBefore(dayjs()))
);
