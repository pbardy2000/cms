import { inject, Injectable } from '@angular/core';
import { CreateRelease, UpdateRelease } from '@cms/common';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatLatestFrom } from '@ngrx/operators';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  deleteRelease,
  deleteReleaseFailure,
  deleteReleaseSuccess,
  getRelease,
  getReleaseFailure,
  getReleases,
  getReleasesFailure,
  getReleasesSuccess,
  getReleaseSuccess,
  insertRelease,
  insertReleaseFailure,
  insertReleaseSuccess,
  saveRelease,
  softDeleteRelease,
  softDeleteReleaseFailure,
  softDeleteReleaseSuccess,
  updateRelease,
  updateReleaseFailure,
  updateReleaseSuccess,
} from './release.actions';
import { selectIsEditingRelease, selectReleaseId } from './release.selectors';
import { ReleaseService } from './release.service';

@Injectable()
export class ReleaseEffects {
  private readonly store = inject(Store);
  private readonly actions = inject(Actions);
  private readonly releaseService = inject(ReleaseService);

  readonly getRelease = createEffect(() =>
    this.actions.pipe(
      ofType(getRelease),
      switchMap((action) =>
        this.releaseService.getRelease(action.id).pipe(
          map((release) => getReleaseSuccess({ release })),
          catchError((error) => of(getReleaseFailure({ error }))),
        ),
      ),
    ),
  );

  readonly getReleases = createEffect(() =>
    this.actions.pipe(
      ofType(getReleases),
      switchMap((action) =>
        this.releaseService.getReleases(action.queryParams).pipe(
          map((releases) => getReleasesSuccess({ releases })),
          catchError((error) => of(getReleasesFailure({ error }))),
        ),
      ),
    ),
  );

  readonly saveRelease = createEffect(() =>
    this.actions.pipe(
      ofType(saveRelease),
      concatLatestFrom(() => [
        this.store.select(selectReleaseId),
        this.store.select(selectIsEditingRelease),
      ]),
      map(([action, id, isEditMode]) =>
        isEditMode
          ? updateRelease({ id, release: action.release as UpdateRelease })
          : insertRelease({ release: action.release as CreateRelease }),
      ),
    ),
  );

  readonly insertRelease = createEffect(() =>
    this.actions.pipe(
      ofType(insertRelease),
      switchMap((action) =>
        this.releaseService.createRelease(action.release).pipe(
          map((release) => insertReleaseSuccess({ release })),
          catchError((error) => of(insertReleaseFailure({ release: action.release, error }))),
        ),
      ),
    ),
  );

  readonly updateRelease = createEffect(() =>
    this.actions.pipe(
      ofType(updateRelease),
      switchMap((action) =>
        this.releaseService.updateRelease(action.id, action.release).pipe(
          map((release) => updateReleaseSuccess({ release })),
          catchError((error) => of(updateReleaseFailure({ error }))),
        ),
      ),
    ),
  );

  readonly deleteRelease = createEffect(() =>
    this.actions.pipe(
      ofType(deleteRelease),
      switchMap((action) =>
        this.releaseService.deleteRelease(action.id).pipe(
          map((release) => deleteReleaseSuccess({ release })),
          catchError((error) => of(deleteReleaseFailure({ error }))),
        ),
      ),
    ),
  );

  readonly softDeleteRelease = createEffect(() =>
    this.actions.pipe(
      ofType(softDeleteRelease),
      switchMap((action) =>
        this.releaseService.softDeleteRelease(action.id).pipe(
          map((release) => softDeleteReleaseSuccess({ release })),
          catchError((error) => of(softDeleteReleaseFailure({ error }))),
        ),
      ),
    ),
  );
}
