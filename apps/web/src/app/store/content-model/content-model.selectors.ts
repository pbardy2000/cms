import { getRouterSelectors } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CONTENT_MODEL_FEATURE_KEY, ContentModelState } from './content-model.models';
import { contentModelAdapter } from './content-model.reducer';

export const selectContentModelFeature =
  createFeatureSelector<ContentModelState>(CONTENT_MODEL_FEATURE_KEY);

export const selectContentModels = createSelector(
  selectContentModelFeature,
  contentModelAdapter.getSelectors().selectAll,
);

export const selectContentModelEntities = createSelector(
  selectContentModelFeature,
  contentModelAdapter.getSelectors().selectEntities,
);

export const selectContentModelFromRoute = createSelector(
  selectContentModelEntities,
  getRouterSelectors().selectRouteParam('contentModelId'),
  (entities, contentModelId) => (contentModelId ? entities[contentModelId] : undefined),
);
