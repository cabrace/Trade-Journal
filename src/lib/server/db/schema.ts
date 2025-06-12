import {
  pgTable,
  unique,
  uuid,
  text,
  numeric,
  integer,
  timestamp,
} from 'drizzle-orm/pg-core';

export const trades = pgTable('trade_journal', {
  id: uuid('id').primaryKey().defaultRandom(), // generate unique UUID per trade
  symbol: text('symbol').notNull(),
  orderType: text('order_type').notNull(),
  leverage: numeric('leverage', { precision: 10, scale: 2 }).notNull(), // converted to number
  updatedTime: timestamp('updated_time', { mode: 'date' }).notNull(),
  side: text('side').notNull(),
  orderId: text('order_id').notNull(),
  closedPnl: numeric('closed_pnl', { precision: 18, scale: 8 }),
  avgEntryPrice: numeric('avg_entry_price', { precision: 18, scale: 8 }),
  avgExitPrice: numeric('avg_exit_price', { precision: 18, scale: 8 }),
  qty: numeric('qty', { precision: 18, scale: 8 }),
  cumEntryValue: numeric('cum_entry_value', { precision: 18, scale: 8 }),
  cumExitValue: numeric('cum_exit_value', { precision: 18, scale: 8 }),
  createdTime: timestamp('created_time', { mode: 'date' }).notNull(),
  orderPrice: numeric('order_price', { precision: 18, scale: 8 }),
  closedSize: numeric('closed_size', { precision: 18, scale: 8 }),
  execType: text('exec_type'),
  fillCount: integer('fill_count'), // stored as integer now
}, (table) => ({
    uniqueOrder: unique().on(table.orderId),
}));



// import { pgTable, serial, integer, uuid, text, numeric, timestamp } from 'drizzle-orm/pg-core';
//
// export const trades = pgTable('trade_journal', {
// 	id: text('id').primaryKey().defaultRandom(), // API returns a unique "id"
// 	symbol: text('symbol').notNull(),
// 	orderType: text('order_type').notNull(),
// 	leverage: text('leverage', {precision:10, scale:2 }).notNull(),
// 	updatedTime: timestamp('updated_time', { mode: 'date' }).notNull(),
// 	side: text('side').notNull(),
// 	orderId: text('order_id').notNull(), // not PK because multiple entries can share it
// 	closedPnl: numeric('closed_pnl', { precision: 18, scale: 8 }),
// 	avgEntryPrice: numeric('avg_entry_price', { precision: 18, scale: 8 }),
// 	avgExitPrice: numeric('avg_exit_price', { precision: 18, scale: 8 }),
// 	qty: numeric('qty', { precision: 18, scale: 8 }),
// 	cumEntryValue: numeric('cum_entry_value', { precision: 18, scale: 8 }),
// 	cumExitValue: numeric('cum_exit_value', { precision: 18, scale: 8 }),
// 	createdTime: timestamp('created_time', { mode: 'date' }).notNull(),
// 	orderPrice: numeric('order_price', { precision: 18, scale: 8 }),
// 	closedSize: numeric('closed_size', { precision: 18, scale: 8 }),
// 	execType: text('exec_type'),
// 	fillCount: integer('fill_count')
// });
//
//
//
