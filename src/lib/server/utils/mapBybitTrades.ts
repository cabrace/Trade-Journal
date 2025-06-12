// src/lib/server/utils/mapBybitTrades.ts
export function mapBybitTrades(trades: any[]) {
  return trades
    .filter((trade) => trade.orderId && trade.symbol) // ensure required fields
    .map((trade) => ({
      id: trade.id || crypto.randomUUID(),
      orderId: trade.orderId,
      symbol: trade.symbol,
      orderType: trade.orderType,
      leverage: Number(trade.leverage),
      side: trade.side,
      closedPnl: trade.closedPnl ? Number(trade.closedPnl) : null,
      avgEntryPrice: trade.avgEntryPrice ? Number(trade.avgEntryPrice) : null,
      avgExitPrice: trade.avgExitPrice ? Number(trade.avgExitPrice) : null,
      cumEntryValue: trade.cumEntryValue ? Number(trade.cumEntryValue) : null,
      cumExitValue: trade.cumExitValue ? Number(trade.cumExitValue) : null,
      orderPrice: trade.orderPrice ? Number(trade.orderPrice) : null,
      qty: trade.qty ? Number(trade.qty) : null,
      closedSize: trade.closedSize ? Number(trade.closedSize) : null,
      fillCount: trade.fillCount ? Number(trade.fillCount) : null,
      execType: trade.execType,
      createdTime: trade.createdTime ? new Date(Number(trade.createdTime)) : null,
      updatedTime: trade.updatedTime ? new Date(Number(trade.updatedTime)) : null,
    }));
}

