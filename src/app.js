import express from "express";
import { startDatabase } from "./database"
import categoriesRoutes from "./routes/categories.router"
import productsRoutes from "./routes/products.router"
import "dotenv/config";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes)
app.use("/products", productsRoutes)

export default app.listen(3001, () => {
  startDatabase() 
  console.log("Server running");
});
