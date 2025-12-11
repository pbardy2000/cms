import { TechRecord } from '@app/services/constants.service';
import { createActionGroup, props } from '@ngrx/store';
import { TECHNICAL_RECORD_FEATURE_KEY } from './technical-record.model';

export const {
  addTechnicalRecord,
  viewTechnicalRecord,
  removeTechnicalRecord,
  stashTechnicalRecordChanges,

  createTechnicalRecord,
  createTechnicalRecordSuccess,
  createTechnicalRecordFailure,

  amendTechnicalRecord,
  amendTechnicalRecordSuccess,
  amendTechnicalRecordFailure,

  archiveTechnicalRecord,
  archiveTechnicalRecordSuccess,
  archiveTechnicalRecordFailure,

  unarchiveTechnicalRecord,
  unarchiveTechnicalRecordSuccess,
  unarchiveTechnicalRecordFailure,
} = createActionGroup({
  source: TECHNICAL_RECORD_FEATURE_KEY,
  events: {
    addTechnicalRecord: props<{ technicalRecord: TechRecord }>(),
    viewTechnicalRecord: props<{ technicalRecord: TechRecord }>(),
    removeTechnicalRecord: props<{ technicalRecord: TechRecord }>(),
    stashTechnicalRecordChanges: props<{ technicalRecord: TechRecord }>(),

    createTechnicalRecord: props<{ technicalRecord: TechRecord }>(),
    createTechnicalRecordSuccess: props<{ technicalRecord: TechRecord }>(),
    createTechnicalRecordFailure: props<{ error: unknown }>(),

    amendTechnicalRecord: props<{ technicalRecord: TechRecord }>(),
    amendTechnicalRecordSuccess: props<{ technicalRecord: TechRecord }>(),
    amendTechnicalRecordFailure: props<{ error: unknown }>(),

    archiveTechnicalRecord: props<{ technicalRecord: TechRecord }>(),
    archiveTechnicalRecordSuccess: props<{ technicalRecord: TechRecord }>(),
    archiveTechnicalRecordFailure: props<{ error: unknown }>(),

    unarchiveTechnicalRecord: props<{ technicalRecord: TechRecord }>(),
    unarchiveTechnicalRecordSuccess: props<{ technicalRecord: TechRecord }>(),
    unarchiveTechnicalRecordFailure: props<{ error: unknown }>(),
  },
});
