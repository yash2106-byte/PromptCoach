import db from "../Models/Database/index.js";
import { usersTable } from "../Models/Database/Schema.js";
import { eq } from "drizzle-orm";
import { createHmac } from 'crypto';
import jwt from 'jsonwebtoken';

export const postLogin = async function (req, res) {
     const { Gmail, Password } = req.body;
     
     try {
          if (!Gmail || !Password) {
               return res.status(400).json({ error: `wrong input` });
          }
          
          // First, get the user by email only
          const result = await db.select()
               .from(usersTable)
               .where(eq(usersTable.email, Gmail));
          
          if (result.length === 0) {
               return res.status(400).json({ error: "Invalid credentials" });
          }
          
          const user = result[0];
          
          // Hash the provided password with the stored salt
          const hashedPassword = createHmac('sha256', user.salt)
               .update(Password)
               .digest('hex');
          
          // Compare hashed passwords
          if (hashedPassword === user.password) {
               // Create JWT token
               const token = jwt.sign(
                    { userId: user.id, email: user.email },
                    process.env.JWT_SECRET,
                    { expiresIn: '7d' }
               );
               
               // Return token and user data
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
          console.error("Login error:", error);
          return res.status(500).json({ error: "Internal Server Error" });
     }
}