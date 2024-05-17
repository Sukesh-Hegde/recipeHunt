import express from "express";
import expressLayouts from "express-ejs-layouts";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import session from "express-session";
import flash from "connect-flash";
import { connectUsingMongoose } from "./config/database.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);

app.use(cookieParser("SecretKey"));
app.use(
  session({
    secret: "CookingBlogSecretSession",
    saveUninitialized: true,
    resave: true,
  })
);
app.use(flash());
app.use(fileUpload());

app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

import RecipeRouter from "./server/routes/recipeRoutes.js";
app.use("/", RecipeRouter);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
  connectUsingMongoose();
});
