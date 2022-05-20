const config = {
  env: process.env.NODE_ENV || "development",
  port: 3001,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  db_name: process.env.DATABASE || "codeiddb",
  db_username: process.env.DATABASE_USER || "postgres",
  db_password: process.env.DATABASE_PASSWORD || "admin",
  URL_DOMAIN: "/codeid",
  URL_IMAGE: "/codeid/api/images/",
  URL_API: "/codeid/api",
  UPLOAD_DIR: "/storages",
};

export default config;
