import { TechRecord } from '@app/services/constants.service';
import { EntityState } from '@ngrx/entity';

export const TECHNICAL_RECORD_FEATURE_KEY = 'technicalRecord';

export type TechnicalRecordState = EntityState<TechRecord> & {
  editingTechRecord: TechRecord | null;
};
