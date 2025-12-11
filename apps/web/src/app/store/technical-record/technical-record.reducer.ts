import { TechRecord } from '@app/services/constants.service';
import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {
  addTechnicalRecord,
  amendTechnicalRecordSuccess,
  archiveTechnicalRecordSuccess,
  createTechnicalRecordSuccess,
  removeTechnicalRecord,
  stashTechnicalRecordChanges,
  unarchiveTechnicalRecordSuccess,
  viewTechnicalRecord,
} from './technical-record.actions';
import { TechnicalRecordState } from './technical-record.model';

export function getTechRecordId(techRecord: TechRecord) {
  return `${techRecord.systemNumber}/${techRecord.createdAt}`;
}

export const technicalRecordAdapter = createEntityAdapter<TechRecord>({
  selectId: getTechRecordId,
});

export const technicalRecordInitialState: TechnicalRecordState =
  technicalRecordAdapter.getInitialState({
    editingTechRecord: null,
  });

export const technicalRecordReducer = createReducer(
  technicalRecordInitialState,
  on(stashTechnicalRecordChanges, (state, action) => {
    return { ...state, editingTechRecord: action.technicalRecord };
  }),
  on(addTechnicalRecord, viewTechnicalRecord, createTechnicalRecordSuccess, (state, action) => {
    return technicalRecordAdapter.addOne(action.technicalRecord, state);
  }),
  on(removeTechnicalRecord, (state, action) => {
    return technicalRecordAdapter.removeOne(getTechRecordId(action.technicalRecord), state);
  }),
  on(
    archiveTechnicalRecordSuccess,
    unarchiveTechnicalRecordSuccess,
    amendTechnicalRecordSuccess,
    (state, action) => {
      return technicalRecordAdapter.upsertOne(action.technicalRecord, state);
    },
  ),
);
