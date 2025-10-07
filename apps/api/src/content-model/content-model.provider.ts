import type {
  ContentModel,
  CreateContentModel,
  GetContentModelsQueryParams,
  UpdateContentModel,
} from '@cms/common';
import { Inject, Injectable } from '@nestjs/common';
import { and, eq, SQL } from 'drizzle-orm';
import { MySql2Database } from 'drizzle-orm/mysql2';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import { contentModel } from 'src/drizzle/schema';

@Injectable()
export class ContentModelProvider {
  constructor(
    @Inject(DrizzleAsyncProvider) private readonly db: MySql2Database,
  ) {}

  async getContentModelById(id: number): Promise<ContentModel> {
    const rows = await this.db
      .select()
      .from(contentModel)
      .where(eq(contentModel.id, id));

    return rows[0];
  }

  async getContentModels(
    queryParams: GetContentModelsQueryParams,
  ): Promise<ContentModel[]> {
    const filters: SQL[] = [];

    if (queryParams.type) {
      filters.push(eq(contentModel.type, queryParams.type));
    }

    if (!queryParams.includeDeleted) {
      filters.push(eq(contentModel.deletedAt, null));
    }

    const rows = await this.db
      .select()
      .from(contentModel)
      .where(and(...filters))
      .orderBy(contentModel.id)
      .limit(queryParams.limit)
      .offset(queryParams.offset);

    return rows;
  }

  async createContentModel(data: CreateContentModel): Promise<ContentModel> {
    const [{ id }] = await this.db
      .insert(contentModel)
      .values(data)
      .$returningId();

    const [row] = await this.db
      .select()
      .from(contentModel)
      .where(eq(contentModel.id, id));

    return row;
  }

  async updateContentModel(
    id: number,
    data: UpdateContentModel,
  ): Promise<ContentModel> {
    await this.db.update(contentModel).set(data).where(eq(contentModel.id, id));

    const [row] = await this.db
      .select()
      .from(contentModel)
      .where(eq(contentModel.id, id));

    return row;
  }

  async softDeleteContentModel(id: number): Promise<ContentModel> {
    await this.db
      .update(contentModel)
      .set({ deletedAt: new Date().toISOString() })
      .where(eq(contentModel.id, id));

    const [row] = await this.db
      .select()
      .from(contentModel)
      .where(eq(contentModel.id, id));

    return row;
  }

  async deleteContentModel(id: number): Promise<ContentModel> {
    const [row] = await this.db
      .select()
      .from(contentModel)
      .where(eq(contentModel.id, id));

    await this.db.delete(contentModel).where(eq(contentModel.id, id));

    return row;
  }
}
