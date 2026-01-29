import db from "../Models/Database/index.js";  // Make sure path is correct
import { usersTable } from "../Models/Database/Schema.js";
import { eq } from "drizzle-orm";
import { createHmac } from 'crypto';
import jwt from 'jsonwebtoken';

export const postLogin = async function (req, res) {
     const { Gmail, Password } = req.body;
     
     try {
          console.log('DB object:', db); // Debug log to check if db is defined
          
          if (!Gmail || !Password) {
               return res.status(400).json({ error: `wrong input` });
          }
          
          const result = await db.select()
               .from(usersTable)
               .where(eq(usersTable.email, Gmail));
          
          if (result.length === 0) {
               return res.status(400).json({ error: "Invalid credentials" });
          }
          
          const user = result[0];
          
          const hashedPassword = createHmac('sha256', user.salt)
               .update(Password)
               .digest('hex');
          
          if (hashedPassword === user.password) {
               console.log('Password matched, creating token...'); // Debug log
               
               // Check if JWT_SECRET exists
               if (!process.env.JWT_SECRET) {
                    console.error('JWT_SECRET is missing!');
                    return res.status(500).json({ error: "Server configuration error" });
               }
               
               const token = jwt.sign(
                    { userId: user.id, email: user.email },
                    process.env.JWT_SECRET,
                    { expiresIn: '7d' }
               );
               
               console.log('Token created successfully'); // Debug log
               
               return res.status(200).json({ 
                    status: "success",
                    token: token,
                    user: { 
                         id: user.id, 
                         email: user.email 
                    }
               });
          }
          
          return res.status(400).json({ error: "Invalid credentials" });
          
     } catch (error) {
          console.error("Login error:", error); // This should show in Render logs
          console.error("Error stack:", error.stack);
          return res.status(500).json({ error: "Internal Server Error" });
     }
}