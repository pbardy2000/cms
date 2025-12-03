import { Injectable } from '@angular/core';
import { EUVehicleCategory, TechRecord, TechRecordStub, VehicleType } from './constants.service';

@Injectable({ providedIn: 'root' })
export class TechRecordService {
  isHeavyTrailer(data: TechRecord) {
    if (data.techRecord_vehicleType !== 'trl') return false;
    return data.techRecord_euVehicleCategory === 'O3' || data.techRecord_euVehicleCategory === 'O4';
  }

  isHeavyVehicle(data: TechRecord) {
    if (data.techRecord_vehicleType === 'hgv') return true;
    if (data.techRecord_vehicleType === 'psv') return false;
    return this.isHeavyTrailer(data);
  }

  canHaveGeneralVehicleDetails(data: TechRecord) {
    return true;
  }

  canHaveAxles(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.techRecord_vehicleType;
    return type === 'psv' || type === 'trl' || type === 'hgv';
  }

  canHaveWeights(data: TechRecord) {
    return this.isHeavyVehicle(data);
  }

  canHaveTyres(data: TechRecord) {
    return this.isHeavyVehicle(data);
  }

  canHaveDimensions(data: TechRecord) {
    return this.isHeavyVehicle(data);
  }

  canHaveApprovalType(data: TechRecord) {
    return this.isHeavyVehicle(data);
  }

  canHaveAuthorisationIntoService(data: TechRecord) {
    return this.isHeavyTrailer(data);
  }

  canHaveManufacturer(data: TechRecord) {
    return this.isHeavyTrailer(data);
  }

  canHavePurchaser(data: TechRecord) {
    return this.isHeavyTrailer(data);
  }

  canHaveConfiguration(data: TechRecord) {
    return this.isHeavyVehicle(data);
  }

  canHaveEmissionsAndExemptions(data: TechRecord) {
    return this.isHeavyVehicle(data);
  }

  canHaveAdr(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.techRecord_vehicleType;
    return type === 'lgv' || type === 'trl' || type === 'hgv';
  }

  canCarryDangerousGoods(data: TechRecord) {
    if (!this.canHaveAdr(data)) return false;
    return data.techRecord_adrDetails_dangerousGoods;
  }

  canHaveLastApplicant(data: TechRecord) {
    return true;
  }

  canHaveSeatsAndVehicleSize(data: TechRecord) {
    return data.techRecord_vehicleType === 'psv';
  }

  canHaveBrakes(data: TechRecord) {
    const VehicleType = data.techRecord_vehicleType;
    return VehicleType === 'psv' || VehicleType === 'trl';
  }

  canHaveDisabilityDiscriminationAct(data: TechRecord) {
    return data.techRecord_vehicleType === 'psv';
  }

  canHaveDocuments(data: TechRecord) {
    return this.isHeavyVehicle(data);
  }

  canHaveNotes(data: TechRecord) {
    return true;
  }

  canHaveReasonForAmendment(data: TechRecord) {
    return true;
  }

  canHaveGBWeight(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.techRecord_vehicleType;
    return type === 'psv' || type === 'trl' || type === 'hgv';
  }

  canHaveEECWeight(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.techRecord_vehicleType;
    return type === 'trl' || type === 'hgv';
  }

  canHaveDesignWeight(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.techRecord_vehicleType;
    return type === 'psv' || type === 'trl' || type === 'hgv';
  }

  canHaveLadenWeight(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.techRecord_vehicleType;
    return type === 'psv' || type === 'trl';
  }

  canHaveKerbWeight(data: TechRecord | TechRecordStub | string) {
    const type = typeof data === 'string' ? data : data.techRecord_vehicleType;
    return type === 'psv' || type === 'trl';
  }

  getDefaultEUVehicleCategory(
    data: TechRecord | TechRecordStub | string,
  ): EUVehicleCategory | null {
    const type = typeof data === 'string' ? data : (data.techRecord_vehicleType as VehicleType);
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
