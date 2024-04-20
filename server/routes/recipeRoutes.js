
import express from "express";
const RecipeRouter = express.Router();
import RecipeController from "../controllers/recipeController.js";

const controller = new RecipeController();

//App routers
RecipeRouter.get("/", (req, res) => {
  controller.homepage(req, res);
});
// RecipeRouter.get("/", (req, res) => {
//   controller.insertRecipeDummyData(req, res);
// });

RecipeRouter.get("/recipe/:id", (req, res) => {
  controller.exploreRecipe(req, res);
});

RecipeRouter.get("/categories/:id", (req, res) => {
  controller.exploreCategoriesById(req, res);
});



RecipeRouter.get("/categories", (req, res) => {
  controller.exploreCategories(req, res);
});



RecipeRouter.post("/search", (req, res) => {
  controller.searchRecipe(req, res);
});

RecipeRouter.get("/explore-latest", (req, res) => {
  controller.exploreLatest(req, res);
});

RecipeRouter.get("/explore-random", (req, res) => {
  controller.exploreRandom(req, res);
});

RecipeRouter.get("/submit-recipe", (req, res) => {
  controller.submitRecipe(req, res);
});

RecipeRouter.post("/submit-recipe", (req, res) => {
  controller.submitRecipeOnPost(req, res);
});

RecipeRouter.get("/contact", (req, res) => {
  controller.contactForm(req, res);
});

RecipeRouter.get("/about", (req, res) => {
  controller.aboutPage(req, res);
});



export default RecipeRouter;