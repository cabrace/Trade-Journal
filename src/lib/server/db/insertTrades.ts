import { db } from './client';
import { trades } from './schema';
import { eq } from 'drizzle-orm';
import type { InferInsertModel } from 'drizzle-orm';

const log = true;

type Trade = InferInsertModel<typeof trades>;

export async function insertOrUpdateTrades(tradeList: Trade[]) {

if (log === true) {
  console.log('insertOrUpdateTrades START');
}
  
  for (const trade of tradeList) {
    try {
      // Check if the trade already exists
      const existing = await db
        .select()
        .from(trades)
        .where(eq(trades.orderId, trade.orderId));

      // Only insert NEW RECORDS, uncomment below to overwrite existing ones.
      if (existing.length > 0) {
        // console.log(`Updating trade with orderId: ${trade.orderId}`);
        // await db
        //   .update(trades)
        //   .set(trade)
        //   .where(eq(trades.orderId, trade.orderId));
      } else {
        // Insert new trade
        console.log(`Inserting new trade with orderId: ${trade.orderId}`);
        await db.insert(trades).values(trade);
      }
    } catch (error) {
      console.error(`Failed to insert or update trade with ID ${trade.orderId}`, error);
    }
  }
}

// import { db } from './client'; // your drizzle db client
// import { trades } from './schema';
// import { eq } from 'drizzle-orm';
//
// export async function insertOrUpdateTrades(bybitTrades: any[]) {
//   for (const trade of bybitTrades) {
//     const existing = await db
//       .select()
//       .from(trades)
//       .where(eq(trades.id, trade.id));
//
//     const formatted = {
//       id: trade.id,
//       symbol: trade.symbol,
//       orderType: trade.orderType,
//       leverage: trade.leverage,
//       side: trade.side,
//       orderId: trade.orderId,
//       closedPnl: trade.closedPnl,
//       avgEntryPrice: trade.avgEntryPrice,
//       qty: trade.qty,
//       cumEntryValue: trade.cumEntryValue,
//       orderPrice: trade.orderPrice,
//       closedSize: trade.closedSize,
//       avgExitPrice: trade.avgExitPrice,
//       execType: trade.execType,
//       fillCount: trade.fillCount,
//       cumExitValue: trade.cumExitValue,
//       createdTime: new Date(Number(trade.createdTime)),
//       updatedTime: new Date(Number(trade.updatedTime)),
//     };
//
//     if (existing.length === 0) {
//       await db.insert(trades).values(formatted);
//     } else {
//       await db
//         .update(trades)
//         .set(formatted)
//         .where(eq(trades.id, trade.id));
//     }
//   }
//
//   console.log(`Inserted/Updated ${bybitTrades.length} trades.`);
// }
// ;
// import { trades } from './schema';
// import { eq } from 'drizzle-orm';
// import type { InferInsertModel } from 'drizzle-orm';
//
// export async function insertTrades(closedTrades: any[]) {
//   for (const trade of closedTrades) {
//     const exists = await db
//       .select()
//       .from(trades)
//       .where(eq(trades.orderId, trade.orderId));
//
//     if (exists.length === 0) {
//       const formatted: InferInsertModel<typeof trades> = {
//         symbol: trade.symbol,
//         orderType: trade.orderType,
//         leverage: trade.leverage,
//         updatedTime: new Date(Number(trade.updatedTime)),
//         side: trade.side,
//         orderId: trade.orderId,
//         closedPnl: trade.closedPnl,
//         avgEntryPrice: trade.avgEntryPrice,
//         qty: trade.qty,
//         cumEntryValue: trade.cumEntryValue,
//         createdTime: new Date(Number(trade.createdTime)),
//         orderPrice: trade.orderPrice,
//         closedSize: trade.closedSize,
//         avgExitPrice: trade.avgExitPrice,
//         execType: trade.execType,
//         fillCount: trade.fillCount,
//         cumExitValue: trade.cumExitValue,
//         externalId: trade.id,
//       };
//
//       await db.insert(trades).values(formatted);
//     }
//   }
// }
//
