import listCategoryProductsService from "../services/listCategoryProducts.Services";

const listCategoryProductsController = async (req, res) => {
    const id = req.params.id
  try {
    const categoryProducts = await listCategoryProductsService(id);
   
    return res.status(200).json(categoryProducts);
  
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
};

export default listCategoryProductsController;