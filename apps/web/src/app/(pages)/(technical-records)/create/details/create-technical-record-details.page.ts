import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { TechnicalRecordForm } from '@app/forms/technical-record/technical-record.form';
import { TechRecord, VehicleStatus, VehicleType } from '@app/services/constants.service';

@Component({
  selector: 'app-create-technical-record-details',
  templateUrl: './create-technical-record-details.page.html',
  imports: [TechnicalRecordForm],
})
export class CreateTechnicalRecordPage {
  readonly activatedRoute = inject(ActivatedRoute);

  readonly queryParams = toSignal(this.activatedRoute.queryParamMap);

  readonly techRecord = computed(() => {
    const queryParams = this.queryParams();

    return {
      ...createEmptyHGV(),
      vin: queryParams?.get('vin') as string,
      primaryVrm: queryParams?.get('primaryVrm') as string,
      trailerId: queryParams?.get('trailerId') as string,
      techRecord_statusCode: queryParams?.get('techRecord_statusCode') as VehicleStatus,
      techRecord_vehicleType: queryParams?.get('techRecord_vehicleType') as VehicleType,
    };
  });

  onSubmit(): void {}

  onCancel(): void {}
}

export function createEmptyHGV(): TechRecord {
  return {
    id: 0,
    techRecord_vehicleType: 'hgv',
    createdAt: '',
    updatedAt: '',
    vin: '',
    vrm: '',
    trailerId: '',
    systemNumber: '',
    partialVin: null,
    primaryVrm: null,
    secondaryVrms: [],
    techRecord_statusCode: 'PROVISIONAL',
    techRecord_recordCompleteness: 'SKELETON',
    techRecord_hiddenInVta: null,
    techRecord_updateType: null,
    techRecord_firstUseDate: '2022-01-01',
    techRecord_approvalType: null,
    techRecord_approvalTypeNumber: null,
    techRecord_ntaNumber: null,
    techRecord_variantNumber: null,
    techRecord_variantVersionNumber: null,
    techRecord_offRoad: null,
    techRecord_departmentalVehicleMarker: null,
    techRecord_alterationMarker: null,
    techRecord_roadFriendly: null,
    techRecord_dimensions_axleSpacing: [],
    techRecord_frontAxleToRearAxle: null,
    techRecord_dimensions_length: null,
    techRecord_dimensions_width: null,
    techRecord_dimensions_height: null,
    techRecord_frontVehicleTo5thWheelCouplingMin: null,
    techRecord_frontVehicleTo5thWheelCouplingMax: null,
    techRecord_frontAxleTo5thWheelMin: null,
    techRecord_frontAxleTo5thWheelMax: null,
    techRecord_centreOfRearmostAxleToRearOfTrl: null,
    techRecord_couplingCenterToRearAxleMax: null,
    techRecord_couplingCenterToRearAxleMin: null,
    techRecord_couplingCenterToRearTrlMax: null,
    techRecord_couplingCenterToRearTrlMin: null,
    techRecord_couplingType: null,
    techRecord_maxLoadOnCoupling: null,
    techRecord_rearAxleToRearTrl: null,
    techRecord_axles: [],
    techRecord_grossDesignWeight: null,
    techRecord_grossEecWeight: null,
    techRecord_grossGbWeight: null,
    techRecord_trainDesignWeight: null,
    techRecord_grossKerbWeight: null,
    techRecord_grossLadenWeight: null,
    techRecord_unladenWeight: null,
    techRecord_maxTrainGbWeight: null,
    techRecord_letterOfAuth_letterType: null,
    techRecord_letterOfAuth_letterDateRequested: null,
    techRecord_letterOfAuth_paragraphId: null,
    techRecord_letterOfAuth_letterIssuer: null,
    techRecord_plates: [],
    techRecord_microfilm: null,
    techRecord_microfilm_microfilmDocumentType: '',
    techRecord_microfilm_microfilmRollNumber: '',
    techRecord_microfilm_microfilmSerialNumber: '',
    techRecord_drawbarCouplingFitted: false,
    techRecord_euroStandard: null,
    techRecord_emissionsLimit: null,
    techRecord_speedLimiterMrk: null,
    techRecord_tachoExemptMrk: null,
    techRecord_vehicleClass_description: null,
    techRecord_vehicleSize: '',
    techRecord_seatsUpperDeck: null,
    techRecord_seatsLowerDeck: null,
    techRecord_standingCapacity: null,
    techRecord_seatbeltInstallationApprovalDate: null,
    techRecord_numberOfWheelsDriven: null,
    techRecord_numberOfSeatbelts: null,
    techRecord_coifSerialNumber: null,
    techRecord_coifCertifierName: null,
    techRecord_coifDate: null,
    techRecord_speedRestriction: null,
    techRecord_purchaserDetails_address1: null,
    techRecord_purchaserDetails_address2: null,
    techRecord_purchaserDetails_address3: null,
    techRecord_purchaserDetails_emailAddress: null,
    techRecord_purchaserDetails_faxNumber: null,
    techRecord_purchaserDetails_name: null,
    techRecord_purchaserDetails_postCode: null,
    techRecord_purchaserDetails_postTown: null,
    techRecord_purchaserDetails_purchaserNotes: null,
    techRecord_purchaserDetails_telephoneNumber: null,
    techRecord_manufacturerDetails_address1: null,
    techRecord_manufacturerDetails_address2: null,
    techRecord_manufacturerDetails_address3: null,
    techRecord_manufacturerDetails_emailAddress: null,
    techRecord_manufacturerDetails_faxNumber: null,
    techRecord_manufacturerDetails_name: null,
    techRecord_manufacturerDetails_postCode: null,
    techRecord_manufacturerDetails_postTown: null,
    techRecord_manufacturerDetails_manufacturerNotes: null,
    techRecord_manufacturerDetails_telephoneNumber: null,
    techRecord_applicationId: null,
    techRecord_notes: null,
    techRecord_remarks: null,
    techRecord_dispensations: null,
    techRecord_reasonForCreation: null,
    techRecord_fuelPropulsionSystem: '',
  };
}
