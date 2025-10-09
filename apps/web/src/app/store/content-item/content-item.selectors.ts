import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CONTENT_ITEM_FEATURE_KEY, ContentItemState } from './content-item.models';
import { contentItemAdapter } from './content-item.reducer';

export const selectContentItemsFeature =
  createFeatureSelector<ContentItemState>(CONTENT_ITEM_FEATURE_KEY);

export const selectContentItems = createSelector(
  selectContentItemsFeature,
  contentItemAdapter.getSelectors().selectAll
);
