//src/db.rs

use sqlx::sqlite::SqlitePool;
use sqlx::Pool;
use std::env;

pub async fn init_pool() -> Pool<SqlitePool> {
    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL is not set in .env");
    SqlitePool::connect(&database_url)
        .await
        .expect("Failed to connect to the database")
}