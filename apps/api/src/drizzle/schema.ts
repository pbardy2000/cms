import {
  int,
  json,
  mysqlTable,
  timestamp,
  varchar,
} from 'drizzle-orm/mysql-core';

export const contentModel = mysqlTable('content_model', {
  id: int('id').primaryKey().autoincrement(),
  type: varchar('type', { length: 255 }).notNull(),
  description: varchar('description', { length: 255 }),
  version: int('version').notNull().default(1),
  createdAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string' }),
  deletedAt: timestamp('deleted_at', { mode: 'string' }),
  data: json('data').notNull().$type<Record<string, unknown>>(),
});

export const contentItem = mysqlTable('content_item', {
  id: int('id').primaryKey().autoincrement(),
  key: varchar('key', { length: 255 }).notNull(),
  contentType: varchar('content_type', { length: 255 }).notNull(),
  contentModelId: int('content_model_id').notNull(),
  releaseId: int('release_id'),
  createdAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string' }),
  deletedAt: timestamp('deleted_at', { mode: 'string' }),
  publishAt: timestamp('publish_at', { mode: 'string' }),
  data: json('data').notNull().$type<Record<string, unknown>>(),
});

export const release = mysqlTable('release', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string' }),
  deletedAt: timestamp('deleted_at', { mode: 'string' }),
  publishAt: timestamp('publish_at', { mode: 'string' }).notNull(),
});
