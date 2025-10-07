import type {
  ContentItem,
  CreateContentItem,
  GetContentItemsQueryParams,
  UpdateContentItem,
} from '@cms/common';
import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { ContentItemProvider } from './content-item.provider';

@Injectable()
export class ContentItemService {
  private readonly logger = new Logger();

  constructor(private readonly contentItemProvider: ContentItemProvider) {}

  async getContentItemById(id: number): Promise<ContentItem> {
    this.logger.log(`Calling getContentItemById`);
    this.logger.log(JSON.stringify(id));

    const item = await this.contentItemProvider.getContentItemById(id);
    if (!item) {
      this.logger.log('No content item found');
      this.logger.log(JSON.stringify(item));

      throw new NotFoundException();
    }

    return item;
  }

  async getContentItems(
    queryParams: GetContentItemsQueryParams,
  ): Promise<ContentItem[]> {
    this.logger.log(`Calling getContentItems`);
    this.logger.log(JSON.stringify(queryParams));

    return await this.contentItemProvider.getContentItems(queryParams);
  }

  async createContentItem(
    contentItem: CreateContentItem,
  ): Promise<ContentItem> {
    this.logger.log(`Calling createContentItem`);
    this.logger.log(JSON.stringify(contentItem));

    // Attempt to find a content model with the same key and id, if so throw a conflict error
    const existingItems = await this.contentItemProvider.getContentItems({
      key: contentItem.key,
      contentModelId: contentItem.contentModelId,
      limit: 1,
    });

    if (existingItems.length > 0) {
      this.logger.log(`Found existing content items`);
      this.logger.log(JSON.stringify(existingItems));

      throw new ConflictException();
    }

    return await this.contentItemProvider.createContentItem(contentItem);
  }

  async updateContentItem(
    id: number,
    contentItem: UpdateContentItem,
  ): Promise<ContentItem> {
    this.logger.log(`Calling updateContentItem`);
    this.logger.log(JSON.stringify(id));
    this.logger.log(JSON.stringify(contentItem));

    // Attempt to find the content item using the id
    const existingItem = await this.contentItemProvider.getContentItemById(id);
    if (!existingItem) {
      this.logger.log('No content item found');
      this.logger.log(JSON.stringify(existingItem));

      throw new NotFoundException();
    }

    // TODO: in future clone the existing item and save as an audit item

    return await this.contentItemProvider.updateContentItem(id, contentItem);
  }

  async deleteContentItem(id: number): Promise<ContentItem> {
    this.logger.log(`Calling deleteContentItem`);
    this.logger.log(JSON.stringify(id));

    // Attempt to find the content item using the id
    const existingItem = await this.contentItemProvider.getContentItemById(id);
    if (!existingItem) {
      this.logger.log('No content item found');
      this.logger.log(JSON.stringify(existingItem));

      throw new NotFoundException();
    }

    return await this.contentItemProvider.deleteContentItem(id);
  }

  async softDeleteContentItem(id: number): Promise<ContentItem> {
    this.logger.log(`Calling softDeleteContentItem`);
    this.logger.log(JSON.stringify(id));

    // Attempt to find the content item using the id
    const existingItem = await this.contentItemProvider.getContentItemById(id);
    if (!existingItem) {
      this.logger.log('No content item found');
      this.logger.log(JSON.stringify(existingItem));

      throw new NotFoundException();
    }

    return await this.contentItemProvider.softDeleteContentItem(id);
  }
}
