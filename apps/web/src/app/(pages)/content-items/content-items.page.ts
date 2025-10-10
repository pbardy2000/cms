import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { insertContentItem } from '@app/store/content-item/content-item.action';
import { selectContentItems } from '@app/store/content-item/content-item.selectors';
import { Store } from '@ngrx/store';
import { createId } from '@paralleldrive/cuid2';
import { ContentItemPage } from './[contentItemId]/content-item.page';

@Component({
  selector: 'app-content-items',
  templateUrl: './content-items.page.html',
  imports: [JsonPipe, ContentItemPage],
})
export class ContentItemsPage {
  private readonly store = inject(Store);

  readonly contentItems = this.store.selectSignal(selectContentItems);

  onClick() {
    this.store.dispatch(
      insertContentItem({
        optimistic: true,
        contentItem: {
          key: 'test',
          contentModelId: createId(),
          contentType: 'text',
          releaseId: null,
          publishAt: null,
          data: {},
        },
      })
    );
  }
}
