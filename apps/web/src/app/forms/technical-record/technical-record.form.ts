import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionControlsComponent } from '@app/components/accordion/accordion-controls/accordion-controls.component';
import { AccordionSectionComponent } from '@app/components/accordion/accordion-section/accordion-section.component';
import { AccordionComponent } from '@app/components/accordion/accordion.component';
import { TechRecord } from '@app/services/constants.service';
import { TechRecordService } from '@app/services/tech-record.service';
import { AdrForm } from '../adr/adr.form';
import { ApprovalTypeForm } from '../approval-type/approval-type.form';
import { AuthorisationIntoServiceForm } from '../authorisation-into-service/authorisation-into-service';
import { BrakesForm } from '../brakes/brakes.form';
import { ConfigurationForm } from '../configuration/configuration.form';
import { DimensionsForm } from '../dimensions/dimensions.form';
import { DisabilityDiscriminationActForm } from '../disability-discrimination-act/disability-discrimination-act.form';
import { DocumentsForm } from '../documents/documents.form';
import { EmissionsAndExemptionsForm } from '../emissions-and-exemptions/emissions-and-exemptions.form';
import { GeneralVehicleDetailsForm } from '../general-vehicle-details/general-vehicle-details.form';
import { LastApplicantForm } from '../last-applicant/last-applicant.form';
import { ManufacturerForm } from '../manufacturer/manufacturer.form';
import { NotesForm } from '../notes/notes.form';
import { PurchaserForm } from '../purchaser/purchaser.form';
import { ReasonForCreationForm } from '../reason-for-creation/reason-for-creation.form';
import { SeatsAndVehicleSizeForm } from '../seats-and-vehicle-size/seats-and-vehicle-size.form';
import { TyresForm } from '../tyres/tyres.form';
import { WeightsForm } from '../weights/weights.form';

@Component({
  selector: 'app-technical-record-form',
  templateUrl: './technical-record.form.html',
  imports: [
    AdrForm,
    ApprovalTypeForm,
    AuthorisationIntoServiceForm,
    BrakesForm,
    ConfigurationForm,
    DimensionsForm,
    DisabilityDiscriminationActForm,
    DocumentsForm,
    EmissionsAndExemptionsForm,
    GeneralVehicleDetailsForm,
    LastApplicantForm,
    ManufacturerForm,
    NotesForm,
    PurchaserForm,
    ReasonForCreationForm,
    SeatsAndVehicleSizeForm,
    TyresForm,
    WeightsForm,
    AccordionComponent,
    AccordionControlsComponent,
    AccordionSectionComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TechnicalRecordForm {
  private readonly fb = inject(FormBuilder);
  readonly techRecordService = inject(TechRecordService);
  readonly techRecord = signal(createEmptyHGV());

  readonly form = this.fb.group({});
}

export function createEmptyHGV(): TechRecord {
  return {
    id: 0,
    type: 'hgv',
    createdAt: '',
    updatedAt: '',
    vin: '',
    vrm: '',
    trailerId: '',
    completeness: 'SKELETON',
    status: 'PROVISIONAL',
    systemNumber: '',
    partialVin: null,
    primaryVrm: null,
    secondaryVrms: [],
    techRecord_hiddenInVta: null,
    techRecord_updateType: null,
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
