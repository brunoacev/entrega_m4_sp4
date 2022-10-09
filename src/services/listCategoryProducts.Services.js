import database from "../database";

const listCategoryProductsService = async (id) => {
    try {
     const res = await database.query(
        `SELECT 
            pd.name,
            pd.price,
            ct.name as category
          FROM products pd
          JOIN categories ct ON ct.id = pd.category_id
          WHERE pd.category_id = $1
        `,
        [id])
       
       return res.rows 
   } catch (error) {
     throw new Error(error)
   }
};

export default listCategoryProductsService;