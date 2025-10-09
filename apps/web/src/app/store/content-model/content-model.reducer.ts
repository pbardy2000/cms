import type { ContentModel } from '@cms/common';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {
  deleteContentModelSuccess,
  getContentModelsSuccess,
  getContentModelSuccess,
  insertContentModelSuccess,
  softDeleteContentModelSuccess,
  updateContentModelSuccess,
} from './content-model.actions';
import { ContentModelState } from './content-model.models';

export const contentModelAdapter: EntityAdapter<ContentModel> = createEntityAdapter<ContentModel>({
  selectId: (contentModel) => contentModel.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

export const contentModelInitialState: ContentModelState = contentModelAdapter.getInitialState({});

export const contentModelReducer = createReducer<ContentModelState>(
  contentModelInitialState,
  on(
    getContentModelSuccess,
    insertContentModelSuccess,
    updateContentModelSuccess,
    softDeleteContentModelSuccess,
    (state, { contentModel }) => contentModelAdapter.upsertOne(contentModel, state)
  ),
  on(getContentModelsSuccess, (state, { contentModels }) =>
    contentModelAdapter.upsertMany(contentModels, state)
  ),
  on(deleteContentModelSuccess, (state, { contentModel }) =>
    contentModelAdapter.removeOne(contentModel.id, state)
  )
);
