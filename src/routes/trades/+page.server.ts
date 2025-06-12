// src/routes/trades/+page.server.ts
import { desc, asc } from "drizzle-orm";
import { db } from '$lib/server/db/client';
import { trades as tradeJournal } from '$lib/server/db/schema';

export async function load() {
	const allTrades = await db.select().from(tradeJournal).orderBy(desc(tradeJournal.createdTime));
	return { trades: allTrades };
}

