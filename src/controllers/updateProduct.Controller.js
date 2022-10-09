import updateProductService from "../services/updateProduct.Services";

const updateProductController = async (req, res) => {
  const id = req.params.id;
  const user = req.body;

  try {
    const editedCategory = await updateProductService(id, user);

    return res.status(200).json({
      message: "successfully updated",
      product: editedCategory,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default updateProductController;
