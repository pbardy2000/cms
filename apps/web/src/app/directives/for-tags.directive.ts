import { Directive, TemplateRef, ViewContainerRef, effect, inject, input } from '@angular/core';

@Directive({
  selector: '[forTags]',
})
export class ForTagsDirective {
  readonly templateRef = inject(TemplateRef<any>);
  readonly viewContainerRef = inject(ViewContainerRef);

  readonly forTags = input<string[]>([]);
  readonly forTagsFilters = input<string[]>([]);

  constructor() {
    effect(() => {
      const forTags = this.forTags();
      const forTagsFilters = this.forTagsFilters();
      if (!forTags) return;
      if (!forTagsFilters) return;
      if (!this.templateRef) return;

      this.viewContainerRef.createEmbeddedView(this.templateRef);

      if (forTags.length === 0) return;
      if (forTagsFilters.length === 0) return;

      if (!forTags.every((tag) => forTagsFilters.includes(tag))) {
        this.viewContainerRef.clear();
      }
    });
  }
}
