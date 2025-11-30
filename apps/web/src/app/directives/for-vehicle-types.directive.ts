import { Directive, TemplateRef, ViewContainerRef, effect, inject, input } from '@angular/core';
import { VehicleType } from '@app/services/constants.service';

@Directive({
  selector: '[forVehicleTypes]',
})
export class ForVehicleTypesDirective {
  readonly templateRef = inject(TemplateRef<any>);
  readonly viewContainerRef = inject(ViewContainerRef);

  readonly forVehicleTypes = input<VehicleType[]>([]);
  readonly forVehicleTypesVehicleType = input<VehicleType>();

  constructor() {
    effect(() => {
      const forVehicleTypes = this.forVehicleTypes();
      const forVehicleTypesVehicleType = this.forVehicleTypesVehicleType();

      if (!forVehicleTypes) return;
      if (!forVehicleTypesVehicleType) return;

      if (forVehicleTypes.includes(forVehicleTypesVehicleType)) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
}
