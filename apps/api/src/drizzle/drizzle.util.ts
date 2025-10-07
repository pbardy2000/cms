import { SQL, sql } from 'drizzle-orm';
import { MySqlColumn } from 'drizzle-orm/mysql-core';

export function getISOFormatDateQuery(
  dateTimeColumn: MySqlColumn,
): SQL<string> {
  return sql<string>`DATE_FORMAT(${dateTimeColumn}, '%Y-%m-%dT%TZ')`;
}
