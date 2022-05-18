// 1. pastikan selalu import dotenv di line pertama
import "dotenv/config";
import config from "./config/config";
import express from "express";
import cors from "cors";
import compress from "compression";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import middleware from "./helpers/middleware";

//for access models to db
import models, { sequelize } from "./models/init-models";
import routes from "./routes/IndexRoute";

// declare port
const port = process.env.PORT || 3000;

const app = express();
// parse body params and attache them to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// use helmet spy bisa dikenali SEO
app.use(helmet());
// secure apps by setting various HTTP headers
app.use(compress());
// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// load models dan simpan di req.context
app.use(async (req, res, next) => {
  req.context = { models };
  next();
});

//auth.setMiddleware(app);

// call routes

app.use(config.URL_API + "/auth", routes.UserRoute);
app.use(config.URL_API + "/placement", routes.PlacementRoute);
app.use(config.URL_API + "/batch", routes.BatchRoute);
app.use(config.URL_API + "/talent", routes.TalentRoute);
app.use(config.URL_API + "/instructor", routes.InstructorRoute);
app.use(config.URL_API + "/curriculum", routes.CurriculumRoute);
app.use(config.URL_API + "/curriculum_materi", routes.CurriculumMateriRoute);
app.use(config.URL_API + "/curriculum_reviews", routes.CurriculumReviewsRoute);
app.use(config.URL_API + "/jobs", routes.JobRoute);
app.use(config.URL_API + "/bootcamp", routes.BootcampRoute);
app.use(config.URL_API + "/settings", routes.SettingRoute);

//use middleware to handle error from others modules
app.use(middleware.handleError);
app.use(middleware.notFound);

// set to false agar tidak di drop tables yang ada didatabase
const dropDatabaseSync = false;

sequelize.sync({ force: dropDatabaseSync }).then(async () => {
  if (dropDatabaseSync) {
    console.log("Database do not drop");
  }

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});

export default app;
