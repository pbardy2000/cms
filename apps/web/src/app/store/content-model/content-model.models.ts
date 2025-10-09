import type { ContentModel } from '@cms/common';
import { EntityState } from '@ngrx/entity';

export const CONTENT_MODEL_FEATURE_KEY = 'content-model';

export type ContentModelState = EntityState<ContentModel>;
