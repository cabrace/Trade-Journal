import { db } from '$lib/db/client';
import { trades } from '$lib/db/schema';
import { json } from '@sveltejs/kit';

export async function GET() {
  const results = await db.select().from(trades);
  return json(results);
}

export async function POST({ request }) {
  const data = await request.json();
  const result = await db.insert(trades).values(data).returning();
  return json(result);
}

