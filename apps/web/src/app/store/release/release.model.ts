import type { Release } from '@cms/common';
import { EntityState } from '@ngrx/entity';

export const RELEASE_FEATURE_KEY = 'release';

export type ReleaseState = EntityState<Release>;
