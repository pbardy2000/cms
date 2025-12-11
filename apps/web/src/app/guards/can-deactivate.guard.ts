import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export const canDeactivateGuard = (target: CanComponentDeactivate) => {
  return target.canDeactivate ? target.canDeactivate() : true;
};
