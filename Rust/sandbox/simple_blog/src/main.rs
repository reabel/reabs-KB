// src/main.rs

use actix_web::{web, App, HttpServer, Responder};
use sqlx::sqlite::SqlitePool;
use sqlx::Row;
use dotenv::dotenv;

mod db;

async fn index(pool: web::Data<SqlitePool>) -> impl Responder {
    let mut conn = pool.acquire().await.expect("Failed to acquire a database connection");

    let result = sqlx::query!("SELECT id, title, content FROM posts")
        .fetch_all(&mut conn)
        .await
        .expect("Failed to fetch posts from the database");

    let posts: Vec<String> = result
        .iter()
        .map(|row| format!("{}: {}\n{}", row.id, row.title, row.content))
        .collect();

    posts.join("\n")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();

    let pool = db::init_pool().await;

    HttpServer::new(move || {
        App::new()
            .app_data(web::Data::new(pool.clone()))
            .route("/", web::get().to(index))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}