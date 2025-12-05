import { AfterViewInit, Component, inject, input, model } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionControlsComponent } from '@app/components/accordion/accordion-controls/accordion-controls.component';
import { AccordionSectionComponent } from '@app/components/accordion/accordion-section/accordion-section.component';
import { AccordionComponent } from '@app/components/accordion/accordion.component';
import { ForTagsDirective } from '@app/directives/for-tags.directive';
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
    ForTagsDirective,
  ],
})
export class TechnicalRecordForm implements AfterViewInit {
  readonly techRecordService = inject(TechRecordService);

  readonly form = model<FormGroup>();
  readonly filters = model<string[]>([]);
  readonly techRecord = input.required<TechRecord>();

  ngAfterViewInit(): void {
    const form = this.form();
    const techRecord = this.techRecord();

    if (form && techRecord) {
      form.patchValue(techRecord);
    }
  }
}
