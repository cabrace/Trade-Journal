// src/routes/test-fetch/+page.server.ts
import { fetchClosedTrades } from '$lib/server/exchange/bybit';
import { insertOrUpdateTrades } from '$lib/server/db/insertTrades';
import { mapBybitTrades } from '$lib/server/utils/mapBybitTrades';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const trades = await fetchClosedTrades();
  const parsedTrades = mapBybitTrades(trades);
  await insertOrUpdateTrades(parsedTrades);
  return { trades };
};

