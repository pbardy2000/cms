import { Injectable } from '@angular/core';
import { EUVehicleCategory, TechRecord, VehicleType } from './constants.service';

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

  canHaveAxles(data: TechRecord) {
    return this.isHeavyVehicle(data);
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

  canHaveAdr({ techRecord_vehicleType: type }: TechRecord) {
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

  canHaveBrakes({ techRecord_vehicleType: type }: TechRecord) {
    return type === 'psv' || type === 'trl';
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

  canHaveGBWeight(data: TechRecord) {
    return this.isHeavyVehicle(data);
  }

  canHaveEECWeight({ techRecord_vehicleType: type }: TechRecord) {
    return type === 'trl' || type === 'hgv';
  }

  canHaveDesignWeight(data: TechRecord) {
    return this.isHeavyVehicle(data);
  }

  canHaveLadenWeight({ techRecord_vehicleType: type }: TechRecord) {
    return type === 'psv' || type === 'trl';
  }

  canHaveKerbWeight({ techRecord_vehicleType: type }: TechRecord) {
    return type === 'psv' || type === 'trl';
  }

  canCarryExplosives(data: TechRecord) {
    if (!this.canHaveAdr(data)) return false;
    if (!Array.isArray(data.techRecord_adrDetails_permittedDangerousGoods)) return false;
    return data.techRecord_adrDetails_permittedDangerousGoods.some((good) => {
      return ['Explosives (type 2)', 'Explosives (type 3)'].includes(good);
    });
  }

  getDefaultEUVehicleCategory(data: TechRecord): EUVehicleCategory | null {
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
