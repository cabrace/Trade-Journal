// +server.ts
import { json } from '@sveltejs/kit';
import { fetchClosedTrades } from '$lib/server/exchange/bybit'; // your API fetch logic
import { mapBybitTrades } from '$lib/server/utils/mapBybitTrades';
import { insertOrUpdateTrades } from '$lib/server/db/insertTrades';

export async function POST() {
  try {
    const rawTrades = await fetchClosedTrades(); // fetch from ByBit
    const mappedTrades = mapBybitTrades(rawTrades);
    await insertOrUpdateTrades(mappedTrades); // insert into DB
    return json({ success: true, inserted: mappedTrades.length });
  } catch (e) {
    console.error(e);
    return json({ success: false, error: e.message }, { status: 500 });
  }
}

