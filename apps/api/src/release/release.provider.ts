import type {
  CreateRelease,
  GetReleasesQueryParams,
  Release,
  UpdateRelease,
} from '@cms/common';
import { Inject, Injectable } from '@nestjs/common';
import { and, eq, SQL } from 'drizzle-orm';
import { MySql2Database } from 'drizzle-orm/mysql2';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import { release } from 'src/drizzle/schema';

@Injectable()
export class ReleaseProvider {
  constructor(
    @Inject(DrizzleAsyncProvider) private readonly db: MySql2Database,
  ) {}

  async getReleaseById(id: number): Promise<Release> {
    const rows = await this.db.select().from(release).where(eq(release.id, id));

    return rows[0];
  }

  async getReleases(queryParams: GetReleasesQueryParams): Promise<Release[]> {
    const filters: SQL[] = [];

    if (queryParams.name) {
      filters.push(eq(release.name, queryParams.name));
    }

    if (!queryParams.includeDeleted) {
      filters.push(eq(release.deletedAt, null));
    }

    const rows = await this.db
      .select()
      .from(release)
      .where(and(...filters))
      .orderBy(release.id)
      .limit(queryParams.limit)
      .offset(queryParams.offset);

    return rows;
  }

  async createRelease(data: CreateRelease): Promise<Release> {
    const [{ id }] = await this.db.insert(release).values(data).$returningId();

    const [row] = await this.db
      .select()
      .from(release)
      .where(eq(release.id, id));

    return row;
  }

  async updateRelease(id: number, data: UpdateRelease): Promise<Release> {
    await this.db.update(release).set(data).where(eq(release.id, id));

    const [row] = await this.db
      .select()
      .from(release)
      .where(eq(release.id, id));

    return row;
  }

  async softDeleteRelease(id: number): Promise<Release> {
    const [row] = await this.db
      .select()
      .from(release)
      .where(eq(release.id, id));

    await this.db.update(release).set({ deletedAt: new Date().toISOString() });

    return row;
  }

  async deleteRelease(id: number): Promise<Release> {
    const [row] = await this.db
      .select()
      .from(release)
      .where(eq(release.id, id));

    await this.db.delete(release).where(eq(release.id, id));

    return row;
  }
}
