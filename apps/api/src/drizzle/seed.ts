import { drizzle } from "drizzle-orm/mysql2";
import { contentItem, contentModel, release } from "./schema";

async function main() {
  const db = drizzle(process.env.DATABASE_URL);

  console.log("Seed started");

  // clear tables here
  await db.delete(release).execute();
  await db.delete(contentItem).execute();
  await db.delete(contentModel).execute();

  // insert data here

  console.log("Seed completed");

  process.exit(0);
}

main();
