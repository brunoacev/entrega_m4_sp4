import updateCategoryService from "../services/updateCategory.Services";

const updateCategoryController = async (req, res) => {
        const id = req.params.id
        const {name} = req.body
      try {
        const editedCategory = await updateCategoryService(id, name);
              
        return res.status(200).json({
          message: "successfully updated",
          category: editedCategory
        });

  } catch (error) {
        return res.status(400).json({
          message: error.message
        });
  }
};

export default updateCategoryController;