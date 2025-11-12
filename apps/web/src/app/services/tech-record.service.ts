import { Injectable } from '@angular/core';
import { EUVehicleCategory, TechRecord, TechRecordStub, VehicleType } from './constants.service';

@Injectable({ providedIn: 'root' })
export class TechRecordService {
  canHaveGeneralVehicleDetails(data: TechRecord | TechRecordStub | string) {
    return true;
  }

  canHaveAxles(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.type;
    return type === 'psv' || type === 'trl' || type === 'hgv';
  }

  canHaveWeights(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.type;
    return type === 'psv' || type === 'trl' || type === 'hgv';
  }

  canHaveTyres(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.type;
    return type === 'psv' || type === 'trl' || type === 'hgv';
  }

  canHaveDimensions(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.type;
    return type === 'psv' || type === 'trl' || type === 'hgv';
  }

  canHaveApprovalType(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.type;
    return type === 'trl' || type === 'hgv';
  }

  canHaveAuthorisationIntoService(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.type;
    return type === 'trl';
  }

  canHaveManufacturer(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.type;
    return type === 'trl';
  }

  canHavePurchaser(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.type;
    return type === 'trl';
  }

  canHaveConfiguration(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.type;
    return type === 'psv' || type === 'trl' || type === 'hgv';
  }

  canHaveEmissionsAndExemptions(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.type;
    return type === 'psv' || type === 'trl' || type === 'hgv';
  }

  canHaveAdr(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.type;
    return type === 'lgv' || type === 'trl' || type === 'hgv';
  }

  canCarryDangerousGoods(data: TechRecord) {
    if (!this.canHaveAdr(data)) return false;
    return data.techRecord_adrDetails_dangerousGoods;
  }

  canHaveLastApplicant(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.type;
    return type === 'hgv' || type === 'trl';
  }

  canHaveSeatsAndVehicleSize(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.type;
    return type === 'psv';
  }

  canHaveBrakes(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.type;
    return type === 'psv' || type === 'trl';
  }

  canHaveDisabilityDiscriminationAct(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.type;
    return type === 'psv';
  }

  canHaveDocuments(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.type;
    return type === 'psv' || type === 'trl' || type === 'hgv';
  }

  canHaveNotes(data: TechRecord | TechRecordStub | string) {
    return true;
  }

  canHaveReasonForAmendment(data: TechRecord | TechRecordStub | string) {
    return true;
  }

  canHaveGBWeight(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.type;
    return type === 'psv' || type === 'trl' || type === 'hgv';
  }

  canHaveEECWeight(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.type;
    return type === 'trl' || type === 'hgv';
  }

  canHaveDesignWeight(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.type;
    return type === 'psv' || type === 'trl' || type === 'hgv';
  }

  canHaveLadenWeight(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.type;
    return type === 'psv' || type === 'trl';
  }

  canHaveKerbWeight(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.type;
    return type === 'psv' || type === 'trl';
  }

  getDefaultEUVehicleCategory(
    data: TechRecord | TechRecordStub | string,
  ): EUVehicleCategory | null {
    const type = typeof data === 'string' ? data : (data.type as VehicleType);
    switch (type) {
      case 'car':
        return 'M1';
      case 'lgv':
        return 'N1';
      default:
        return null;
    }
  }
}
