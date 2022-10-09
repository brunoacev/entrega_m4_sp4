import database from "../database";

const deleteCategoryService = async (id) => {
   try {
     const res = await database.query(
        `DELETE FROM
            categories
         WHERE
            id = $1 RETURNING *; 
        `,
        [id])
           
   } catch (error) {
     throw new Error(error)
   }
};

export default deleteCategoryService;