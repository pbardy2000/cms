import { getRouterSelectors } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TECHNICAL_RECORD_FEATURE_KEY, TechnicalRecordState } from './technical-record.model';
import { technicalRecordAdapter } from './technical-record.reducer';

export const selectTechRecordFeature = createFeatureSelector<TechnicalRecordState>(
  TECHNICAL_RECORD_FEATURE_KEY,
);

export const selectEditingTechRecord = createSelector(
  selectTechRecordFeature,
  (state) => state.editingTechRecord,
);

export const selectTechRecords = createSelector(
  selectTechRecordFeature,
  technicalRecordAdapter.getSelectors().selectAll,
);

export const selectTechRecordEntities = createSelector(
  selectTechRecordFeature,
  technicalRecordAdapter.getSelectors().selectEntities,
);

export const selectTechRecord = createSelector(
  selectTechRecordEntities,
  getRouterSelectors().selectRouteParams,
  (entities, params) => {
    const id = `${params['systemNumber']}/${params['createdAt']}`;
    return entities[id];
  },
);
