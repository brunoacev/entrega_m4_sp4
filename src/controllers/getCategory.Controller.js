import getCategoryService from "../services/getCategory.Services";

const getCategoryController = async (req, res) => {
    const id = req.params.id
   try {
    const category = await getCategoryService(id);
        
    return res.status(200).json(category);
  
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
};

export default getCategoryController;