import database from "../database";

const deleteProductService = async (id) => {
   try {
     const res = await database.query(
        `DELETE FROM
            products
         WHERE
            id = $1 RETURNING *; 
        `,
        [id])
           
   } catch (error) {
     throw new Error(error)
   }
};

export default deleteProductService;