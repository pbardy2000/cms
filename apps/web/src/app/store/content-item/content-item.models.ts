import type { ContentItem } from '@cms/common';
import { EntityState } from '@ngrx/entity';

export const CONTENT_ITEM_FEATURE_KEY = 'content-item';

export type ContentItemState = EntityState<ContentItem>;
