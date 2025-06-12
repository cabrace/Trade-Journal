import { db } from '$lib/server/db/client';
import { trades } from '$lib/server/db/schema'; // adjust to your schema
import { eq } from 'drizzle-orm';

export async function load() {
  try {
    // Simple query (get first 5 trades, or change to any real table)
    const result = await db.select().from(trades).limit(5);

    return {
      success: true,
      result
    };
  } catch (err) {
    console.error('Database connection failed:', err);
    return {
      success: false,
      error: String(err)
    };
  }
}

