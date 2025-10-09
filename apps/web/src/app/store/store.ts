import { RouterState } from '@angular/router';
import { DEFAULT_ROUTER_FEATURENAME, routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { ContentItemEffects } from './content-item/content-item.effects';
import { CONTENT_ITEM_FEATURE_KEY, ContentItemState } from './content-item/content-item.models';
import { contentItemInitialState, contentItemReducer } from './content-item/content-item.reducer';
import { ContentModelEffects } from './content-model/content-model.effects';
import { CONTENT_MODEL_FEATURE_KEY, ContentModelState } from './content-model/content-model.models';
import {
  contentModelInitialState,
  contentModelReducer,
} from './content-model/content-model.reducer';
import { ReleaseEffects } from './release/release.effects';
import { RELEASE_FEATURE_KEY, ReleaseState } from './release/release.model';
import { releaseInitialState, releaseReducer } from './release/release.reducer';

export type AppState = {
  [CONTENT_ITEM_FEATURE_KEY]: ContentItemState;
  [CONTENT_MODEL_FEATURE_KEY]: ContentModelState;
  [DEFAULT_ROUTER_FEATURENAME]: RouterState | undefined;
  [RELEASE_FEATURE_KEY]: ReleaseState;
};

export const appInitialState: AppState = {
  [CONTENT_ITEM_FEATURE_KEY]: contentItemInitialState,
  [CONTENT_MODEL_FEATURE_KEY]: contentModelInitialState,
  [DEFAULT_ROUTER_FEATURENAME]: undefined,
  [RELEASE_FEATURE_KEY]: releaseInitialState,
};

export const reducers: ActionReducerMap<AppState> = {
  [CONTENT_ITEM_FEATURE_KEY]: contentItemReducer,
  [CONTENT_MODEL_FEATURE_KEY]: contentModelReducer,
  [DEFAULT_ROUTER_FEATURENAME]: routerReducer,
  [RELEASE_FEATURE_KEY]: releaseReducer,
};

export const effects = [ContentItemEffects, ContentModelEffects, ReleaseEffects];

export const metaReducers = [];
