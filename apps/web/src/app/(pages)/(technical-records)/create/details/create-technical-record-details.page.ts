import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonGroupComponent } from '@app/components/button-group/button-group.component';
import { ButtonComponent } from '@app/components/button/button.component';
import { ErrorSummaryComponent } from '@app/components/error-summary/error-summary.component';
import { TechnicalRecordForm } from '@app/forms/technical-record/technical-record.form';
import { CanComponentDeactivate } from '@app/guards/can-deactivate.guard';
import { TechRecord, VehicleStatus, VehicleType } from '@app/services/constants.service';
import { ErrorService } from '@app/services/error.service';
import { stashTechnicalRecordChanges } from '@app/store/technical-record/technical-record.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-technical-record-details',
  templateUrl: './create-technical-record-details.page.html',
  imports: [TechnicalRecordForm, ButtonGroupComponent, ButtonComponent, ErrorSummaryComponent],
})
export class CreateTechnicalRecordPage implements CanComponentDeactivate {
  readonly fb = inject(FormBuilder);
  readonly store = inject(Store);
  readonly router = inject(Router);
  readonly activatedRoute = inject(ActivatedRoute);
  readonly errorService = inject(ErrorService);

  readonly form = this.fb.group({});
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

  saveAndContinue(): void {
    this.errorService.markAllAsTouched(this.form);

    if (this.form.valid) {
      this.router.navigate(['technical-records', 'create', 'preview']);
    }
  }

  cancel(): void {
    this.router.navigate(['technical-records', 'create']);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    this.store.dispatch(stashTechnicalRecordChanges({ technicalRecord: this.form.value as any }));
    return true;
  }
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
