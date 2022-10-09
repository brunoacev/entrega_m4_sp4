import createCategoryService from "../services/createCategory.Services";

const createCategoryController = async (req, res) => {
  const { name } = req.body;

  try {
    const category = await createCategoryService(name);
      
    return res.status(201).json({
      message: "Categoria criada com sucesso",
      category: category
    });
    
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
};

export default createCategoryController;