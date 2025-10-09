import type { ContentItem } from '@cms/common';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {
  deleteContentItemSuccess,
  getContentItemsSuccess,
  getContentItemSuccess,
  insertContentItemSuccess,
  softDeleteContentItemSuccess,
  updateContentItemSuccess,
} from './content-item.action';
import { ContentItemState } from './content-item.models';

export const contentItemAdapter: EntityAdapter<ContentItem> = createEntityAdapter<ContentItem>({
  selectId: (contentItem) => contentItem.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

export const contentItemInitialState: ContentItemState = contentItemAdapter.getInitialState();

export const contentItemReducer = createReducer<ContentItemState>(
  contentItemInitialState,
  on(
    getContentItemSuccess,
    insertContentItemSuccess,
    updateContentItemSuccess,
    softDeleteContentItemSuccess,
    (state, action) => {
      return contentItemAdapter.upsertOne(action.contentItem, state);
    }
  ),
  on(getContentItemsSuccess, (state, action) => {
    return contentItemAdapter.upsertMany(action.contentItems, state);
  }),
  on(deleteContentItemSuccess, (state, action) => {
    return contentItemAdapter.removeOne(action.contentItem.id, state);
  })
);
