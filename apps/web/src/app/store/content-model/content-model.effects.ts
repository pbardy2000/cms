import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  deleteContentModel,
  deleteContentModelFailure,
  deleteContentModelSuccess,
  getContentModel,
  getContentModelFailure,
  getContentModels,
  getContentModelsFailure,
  getContentModelsSuccess,
  getContentModelSuccess,
  insertContentModel,
  insertContentModelFailure,
  insertContentModelSuccess,
  softDeleteContentModel,
  softDeleteContentModelFailure,
  softDeleteContentModelSuccess,
  updateContentModel,
  updateContentModelFailure,
  updateContentModelSuccess,
} from './content-model.actions';
import { ContentModelService } from './content-model.service';

@Injectable()
export class ContentModelEffects {
  private readonly actions = inject(Actions);
  private readonly contentModelService = inject(ContentModelService);

  readonly getContentModel = createEffect(() =>
    this.actions.pipe(
      ofType(getContentModel),
      switchMap((action) =>
        this.contentModelService.getContentModel(action.id).pipe(
          map((contentModel) => getContentModelSuccess({ contentModel })),
          catchError((error) => of(getContentModelFailure({ error })))
        )
      )
    )
  );

  readonly getContentModels = createEffect(() =>
    this.actions.pipe(
      ofType(getContentModels),
      switchMap((action) =>
        this.contentModelService.getContentModels(action.queryParams).pipe(
          map((contentModels) => getContentModelsSuccess({ contentModels })),
          catchError((error) => of(getContentModelsFailure({ error })))
        )
      )
    )
  );

  readonly insertContentModel = createEffect(() =>
    this.actions.pipe(
      ofType(insertContentModel),
      switchMap((action) =>
        this.contentModelService.createContentModel(action.contentModel).pipe(
          map((contentModel) => insertContentModelSuccess({ contentModel })),
          catchError((error) =>
            of(insertContentModelFailure({ contentModel: action.contentModel, error }))
          )
        )
      )
    )
  );

  readonly updateContentModel = createEffect(() =>
    this.actions.pipe(
      ofType(updateContentModel),
      switchMap((action) =>
        this.contentModelService.updateContentModel(action.id, action.contentModel).pipe(
          map((contentModel) => updateContentModelSuccess({ contentModel })),
          catchError((error) => of(updateContentModelFailure({ error })))
        )
      )
    )
  );

  readonly deleteContentModel = createEffect(() =>
    this.actions.pipe(
      ofType(deleteContentModel),
      switchMap((action) =>
        this.contentModelService.deleteContentModel(action.id).pipe(
          map((contentModel) => deleteContentModelSuccess({ contentModel })),
          catchError((error) => of(deleteContentModelFailure({ error })))
        )
      )
    )
  );

  readonly softDeleteContentModel = createEffect(() =>
    this.actions.pipe(
      ofType(softDeleteContentModel),
      switchMap((action) =>
        this.contentModelService.softDeleteContentModel(action.id).pipe(
          map((contentModel) => softDeleteContentModelSuccess({ contentModel })),
          catchError((error) => of(softDeleteContentModelFailure({ error })))
        )
      )
    )
  );
}
