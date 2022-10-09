import { Router } from "express";
import getProductController from "../controllers/getProduct.Controller";
import listProductsController from "../controllers/listProducts.Controller";
import createProductController from "../controllers/createProduct.Controller";
import deleteProductController from "../controllers/deleteProduct.Controller";
import updateProductController from "../controllers/updateProduct.Controller";
import listCategoryProductsController from "../controllers/listCategoryProducts.Controller";
import verifyIdMiddleware from "../middlewares/verifyIdCategory.Middlewares";
import verifyIdProductMiddleware from "../middlewares/verifyIdProduct.Middlewares";

const router = Router();

router.get("", listProductsController);
router.get("/:id", verifyIdProductMiddleware, getProductController);
router.get("/category/:id", listCategoryProductsController);
router.post("", verifyIdMiddleware, createProductController);
router.delete("/:id", verifyIdProductMiddleware, deleteProductController);
router.patch("/:id", updateProductController);

export default router;
