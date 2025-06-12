import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";
import { DATABASE_URL } from "$env/static/private";

let test = false;

if (test === true){
  console.log(DATABASE_URL);
}

const pool = new Pool({
  connectionString: DATABASE_URL
});

export const db = drizzle(pool, { schema });

