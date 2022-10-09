import listCategoriesService from "../services/listCategories.Services";

const listCategoriesController = async (req, res) => {
  try {
    const categories = await listCategoriesService();
   
    return res.status(200).json(categories);
  
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
};

export default listCategoriesController;