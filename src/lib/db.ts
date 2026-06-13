import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "DATABASE_URL is not set. Add it to your .env file (see .env.example).",
  );
}

/**
 * Reuse a single postgres client across hot reloads in development so we don't
 * exhaust the database connection pool. In production a single module instance
 * is used.
 */
const globalForDb = globalThis as unknown as {
  sql?: ReturnType<typeof postgres>;
};

const sql = globalForDb.sql ?? postgres(connectionString);

if (process.env.NODE_ENV !== "production") {
  globalForDb.sql = sql;
}

export default sql;
