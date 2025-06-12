// src/lib/server/bybit.ts
import { RestClientV5 } from 'bybit-api';
import {BYBIT_API_KEY, BYBIT_API_SECRET } from '$env/static/private';

const test = false;

if (test === true){
  console.log(BYBIT_API_KEY, "TEST KEY");
  console.log(BYBIT_API_SECRET, "TEST SECRET");
}


const client = new RestClientV5({
  key: BYBIT_API_KEY,
  secret: BYBIT_API_SECRET,
  testnet: false,
});

export async function fetchClosedTrades() {
  try {
    const now = Date.now();
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    const fiveDaysAgo = now - 5 * 24 * 60 * 60 * 1000; // 5 days in ms

    const response = await client.getClosedPnL({
      category: 'linear',
      startTime: fiveDaysAgo.toString(),
      endTime: now.toString().toString(),
      limit: 50,
    });

    console.log('ByBit API response:', JSON.stringify(response, null, 2));

    return response.result?.list ?? [];
  } catch (error) {
    console.error('ByBit API error:', error);
    return [];
  }
}
