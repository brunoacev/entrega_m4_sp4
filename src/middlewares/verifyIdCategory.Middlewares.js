import database from "../database"

const verifyIdCategoryMiddleware = async (req, res, next) =>{
        const id = req.body.category_id || req.params.id    
      try {
        const verifyId = await database.query(
          `SELECT 
             *
            FROM categories WHERE id = $1
          `,
          [id])
        if(verifyId.rowCount === 0){
            return res.status(400).json({
             message: "Category not found"
            })
          }
      } catch (error) {
        return res.status(400).json({
          message: error.message
        })
      }
         next()
}

export default verifyIdCategoryMiddleware;