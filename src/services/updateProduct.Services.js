import database from "../database";

const updateCategoryService = async (id, user) => {
    
   try {
       let query = 'UPDATE products SET'
       const values = Object.values(user)
       const keys = Object.keys(user)
        
        keys.forEach((key, index) => {
            query += ` ${key} = \$${index+1}, `         
        });

        query = query.slice(0, -2) 
        query += ` WHERE id = \$${keys.length+1} RETURNING *;`

       const res = await database.query(query, [...values, id])
       return res.rows[0]
   } catch (error) {
     throw new Error(error)
   }
};

export default updateCategoryService;