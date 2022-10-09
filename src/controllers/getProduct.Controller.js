import getProductService from "../services/getProduct.Services";

const getProductController = async (req, res) => {
    const id = req.params.id
   try {
    const product = await getProductService(id);
        
    return res.status(200).json(product);
  
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
};

export default getProductController;