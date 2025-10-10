import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { optimisticUpdate, pessimisticUpdate } from '@ngrx/router-store/data-persistence';
import { createId } from '@paralleldrive/cuid2';
import { catchError, filter, map, of, switchMap } from 'rxjs';
import {
  deleteContentItem,
  deleteContentItemFailure,
  deleteContentItemSuccess,
  getContentItem,
  getContentItemFailure,
  getContentItems,
  getContentItemsFailure,
  getContentItemsSuccess,
  getContentItemSuccess,
  insertContentItem,
  insertContentItemFailure,
  insertContentItemOptimistically,
  insertContentItemOptimisticallyFailure,
  insertContentItemOptimisticallySuccess,
  insertContentItemSuccess,
  softDeleteContentItem,
  softDeleteContentItemFailure,
  softDeleteContentItemSuccess,
  updateContentItem,
  updateContentItemFailure,
  updateContentItemSuccess,
} from './content-item.action';
import { ContentItemService } from './content-item.service';

@Injectable()
export class ContentItemEffects {
  private readonly actions = inject(Actions);
  private readonly contentItemService = inject(ContentItemService);

  readonly getContentItem = createEffect(() =>
    this.actions.pipe(
      ofType(getContentItem),
      switchMap((action) =>
        this.contentItemService.getContentItem(action.id).pipe(
          map((contentItem) => getContentItemSuccess({ contentItem })),
          catchError((error) => of(getContentItemFailure({ error })))
        )
      )
    )
  );

  readonly getContentItems = createEffect(() =>
    this.actions.pipe(
      ofType(getContentItems),
      switchMap((action) =>
        this.contentItemService.getContentItems(action.queryParams).pipe(
          map((contentItems) => getContentItemsSuccess({ contentItems })),
          catchError((error) => of(getContentItemsFailure({ error })))
        )
      )
    )
  );

  readonly insertContentItemWithOptimism = createEffect(() =>
    this.actions.pipe(
      ofType(insertContentItem),
      filter((action) => action.optimistic === true),
      map((action) =>
        insertContentItemOptimistically({
          contentItem: {
            ...action.contentItem,
            id: createId(),
            createdAt: new Date().toISOString(),
            updatedAt: null,
            deletedAt: null,
          },
        })
      )
    )
  );

  readonly insertContentItemOptimistically = createEffect(() =>
    this.actions.pipe(
      ofType(insertContentItemOptimistically),
      optimisticUpdate({
        run: (action) => {
          const { id, createdAt, updatedAt, deletedAt, ...contentItem } = action.contentItem;
          return this.contentItemService
            .createContentItem(contentItem)
            .pipe(
              map((contentItem) =>
                insertContentItemOptimisticallySuccess({ stubId: id, contentItem })
              )
            );
        },
        undoAction: (action) => {
          return insertContentItemOptimisticallyFailure({ contentItem: action.contentItem });
        },
      })
    )
  );

  readonly insertContentItemPessimistically = createEffect(() =>
    this.actions.pipe(
      ofType(insertContentItem),
      filter((action) => !action.optimistic),
      pessimisticUpdate({
        run: (action) => {
          return this.contentItemService
            .createContentItem(action.contentItem)
            .pipe(map((contentItem) => insertContentItemSuccess({ contentItem })));
        },
        onError: (_, error) => {
          return insertContentItemFailure({ error });
        },
      })
    )
  );

  readonly updateContentItem = createEffect(() =>
    this.actions.pipe(
      ofType(updateContentItem),
      switchMap((action) =>
        this.contentItemService.updateContentItem(action.id, action.contentItem).pipe(
          map((contentItem) => updateContentItemSuccess({ contentItem })),
          catchError((error) => of(updateContentItemFailure({ error })))
        )
      )
    )
  );

  readonly deleteContentItem = createEffect(() =>
    this.actions.pipe(
      ofType(deleteContentItem),
      switchMap((action) =>
        this.contentItemService.deleteContentItem(action.id).pipe(
          map((contentItem) => deleteContentItemSuccess({ contentItem })),
          catchError((error) => of(deleteContentItemFailure({ error })))
        )
      )
    )
  );

  readonly softDeleteContentItem = createEffect(() =>
    this.actions.pipe(
      ofType(softDeleteContentItem),
      switchMap((action) =>
        this.contentItemService.softDeleteContentItem(action.id).pipe(
          map((contentItem) => softDeleteContentItemSuccess({ contentItem })),
          catchError((error) => of(softDeleteContentItemFailure({ error })))
        )
      )
    )
  );
}
