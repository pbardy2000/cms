import { sql } from 'drizzle-orm';
import {
  int,
  json,
  mysqlTable,
  timestamp,
  varchar,
} from 'drizzle-orm/mysql-core';

export const contentModel = mysqlTable('content_model', {
  id: varchar('id', { length: 36 })
    .primaryKey()
    .$defaultFn(() => sql`UUID()`),
  type: varchar('type', { length: 255 }).notNull(),
  description: varchar('description', { length: 255 }),
  version: int('version').notNull().default(1),
  createdAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string' }),
  deletedAt: timestamp('deleted_at', { mode: 'string' }),
  data: json('data').notNull().$type<Record<string, unknown>>(),
});

export const contentItem = mysqlTable('content_item', {
  id: varchar('id', { length: 36 })
    .primaryKey()
    .$defaultFn(() => sql`UUID()`),
  key: varchar('key', { length: 255 }).notNull(),
  contentType: varchar('content_type', { length: 255 }).notNull(),
  contentModelId: varchar('content_model_id', { length: 36 }).notNull(),
  releaseId: varchar('release_id', { length: 36 }),
  createdAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string' }),
  deletedAt: timestamp('deleted_at', { mode: 'string' }),
  publishAt: timestamp('publish_at', { mode: 'string' }),
  data: json('data').notNull().$type<Record<string, unknown>>(),
});

export const release = mysqlTable('release', {
  id: varchar('id', { length: 36 })
    .primaryKey()
    .$defaultFn(() => sql`UUID()`),
  name: varchar('name', { length: 255 }).notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string' }),
  deletedAt: timestamp('deleted_at', { mode: 'string' }),
  publishAt: timestamp('publish_at', { mode: 'string' }).notNull(),
});
