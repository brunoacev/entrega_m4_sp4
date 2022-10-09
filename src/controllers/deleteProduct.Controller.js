import deleteProductService from "../services/deleteProduct.Services";

const deleteProductController = async (req, res) => {
            const id = req.params.id
      try {
            await deleteProductService(id);
            return res.status(204).send();
  
  } catch (error) {
        return res.status(400).json({
            message: error.message
        });
  }
};

export default deleteProductController;