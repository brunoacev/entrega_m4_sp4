import { Router } from "express";
import createCategoryController from "../controllers/createCategory.Controller";
import deleteCategoryController from "../controllers/deleteCategory.Controller";
import listCategoriesController from "../controllers/listCategories.Controller";
import getCategoryController from "../controllers/getCategory.Controller";
import updateCategoryController from "../controllers/updateCategory.Controller";
import verifyIdCategoryMiddleware from "../middlewares/verifyIdCategory.Middlewares";

const router = Router();

router.post("", createCategoryController);
router.delete("/:id", verifyIdCategoryMiddleware, deleteCategoryController);
router.patch("/:id", verifyIdCategoryMiddleware, updateCategoryController);
router.get("", listCategoriesController);
router.get("/:id", verifyIdCategoryMiddleware, getCategoryController);

export default router;
