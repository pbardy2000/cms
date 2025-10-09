import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { insertContentItem } from '@app/store/content-item/content-item.action';
import { selectContentItems } from '@app/store/content-item/content-item.selectors';
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-content-items',
  templateUrl: './content-items.page.html',
  imports: [JsonPipe],
})
export class ContentItemsPage {
  private readonly store = inject(Store);

  readonly contentItems = this.store.selectSignal(selectContentItems);

  onClick() {
    this.store.dispatch(
      insertContentItem({
        contentItem: {
          key: 'test',
          contentModelId: uuidv4(),
          contentType: 'text',
          releaseId: null,
          publishAt: null,
          data: {},
        },
      })
    );
  }
}
