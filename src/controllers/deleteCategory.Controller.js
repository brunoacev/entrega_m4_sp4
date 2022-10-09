import deleteCategoryService from "../services/deleteCategory.Services";

const deleteCategoryController = async (req, res) => {
            const id = req.params.id
      try {
            await deleteCategoryService(id);
            return res.status(204).send();
  
  } catch (error) {
        return res.status(400).json({
            message: error.message
        });
  }
};

export default deleteCategoryController;