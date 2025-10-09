import type { Release } from '@cms/common';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {
  deleteReleaseSuccess,
  getReleasesSuccess,
  getReleaseSuccess,
  insertReleaseSuccess,
  softDeleteReleaseSuccess,
  updateReleaseSuccess,
} from './release.actions';
import { ReleaseState } from './release.model';

export const releaseAdapter: EntityAdapter<Release> = createEntityAdapter<Release>({
  selectId: (release) => release.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

export const releaseInitialState: ReleaseState = releaseAdapter.getInitialState({});

export const releaseReducer = createReducer<ReleaseState>(
  releaseInitialState,
  on(
    getReleaseSuccess,
    insertReleaseSuccess,
    updateReleaseSuccess,
    softDeleteReleaseSuccess,
    (state, { release }) => {
      return releaseAdapter.upsertOne(release, state);
    }
  ),
  on(getReleasesSuccess, (state, { releases }) => {
    return releaseAdapter.upsertMany(releases, state);
  }),
  on(deleteReleaseSuccess, (state, { release }) => {
    return releaseAdapter.removeOne(release.id, state);
  })
);
