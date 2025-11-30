import { Directive, input } from '@angular/core';

@Directive({
  selector: '[forTags]',
})
export class ForTagsDirective {
  readonly forTags = input<string[]>([]);
  readonly forTagsFilters = input<string[]>([]);
}
