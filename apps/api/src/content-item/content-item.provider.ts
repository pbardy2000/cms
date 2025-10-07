import type {
  ContentItem,
  CreateContentItem,
  GetContentItemsQueryParams,
  UpdateContentItem,
} from '@cms/common';
import { Inject, Injectable } from '@nestjs/common';
import { and, eq, like, SQL } from 'drizzle-orm';
import { MySql2Database } from 'drizzle-orm/mysql2';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import { contentItem } from 'src/drizzle/schema';

@Injectable()
export class ContentItemProvider {
  constructor(
    @Inject(DrizzleAsyncProvider) private readonly db: MySql2Database,
  ) {}

  async getContentItemById(id: number): Promise<ContentItem> {
    const rows = await this.db
      .select()
      .from(contentItem)
      .where(eq(contentItem.id, id));

    return rows[0];
  }

  async getContentItems(
    queryParams: GetContentItemsQueryParams,
  ): Promise<ContentItem[]> {
    const filters: SQL[] = [];

    if (queryParams.key) {
      filters.push(like(contentItem.key, `%${queryParams.key}%`));
    }

    if (queryParams.contentModelId) {
      filters.push(eq(contentItem.contentModelId, queryParams.contentModelId));
    }

    if (queryParams.contentType) {
      filters.push(
        like(contentItem.contentType, `%${queryParams.contentType}%`),
      );
    }

    if (queryParams.contentType && queryParams.version) {
      // Restrict to content items of a content model with a specific version
    }

    if (queryParams.releaseId) {
      filters.push(eq(contentItem.releaseId, queryParams.releaseId));
    }

    if (!queryParams.includeDeleted) {
      filters.push(eq(contentItem.deletedAt, null));
    }

    const rows = await this.db
      .select()
      .from(contentItem)
      .where(and(...filters))
      .orderBy(contentItem.id)
      .limit(queryParams.limit)
      .offset(queryParams.offset);

    return rows;
  }

  async createContentItem(data: CreateContentItem): Promise<ContentItem> {
    const [{ id }] = await this.db
      .insert(contentItem)
      .values(data)
      .$returningId();

    const [row] = await this.db
      .select()
      .from(contentItem)
      .where(eq(contentItem.id, id));

    return row;
  }

  async updateContentItem(
    id: number,
    data: UpdateContentItem,
  ): Promise<ContentItem> {
    await this.db.update(contentItem).set(data).where(eq(contentItem.id, id));

    const [row] = await this.db
      .select()
      .from(contentItem)
      .where(eq(contentItem.id, id));

    return row;
  }

  async deleteContentItem(id: number): Promise<ContentItem> {
    const [row] = await this.db
      .select()
      .from(contentItem)
      .where(eq(contentItem.id, id));

    await this.db.delete(contentItem).where(eq(contentItem.id, id));

    return row;
  }

  async softDeleteContentItem(id: number): Promise<ContentItem> {
    await this.db
      .update(contentItem)
      .set({ deletedAt: new Date().toISOString() })
      .where(eq(contentItem.id, id));

    const [row] = await this.db
      .select()
      .from(contentItem)
      .where(eq(contentItem.id, id));

    return row;
  }
}
