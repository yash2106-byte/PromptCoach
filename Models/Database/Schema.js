import { pgTable, serial, varchar, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: serial('id').primaryKey(),  // Changed from uuid to serial
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: text('password').notNull(),
  salt: text('salt').notNull(),
});