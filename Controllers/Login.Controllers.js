import db from "../Models/Database/index.js";
import { usersTable } from "../Models/Database/Schema.js";
import { eq } from "drizzle-orm";

export const postLogin = async function (req, res) {
     const { Name, Gmail, Password } = req.body
     //if (Name == ""||Gmail==""||Password=="")
     if (!Name || !Gmail || !Password) {
          return res.status(400).json({ error: `wrong input` })
     }

     try {
          const existingUser = await db.select().from(usersTable).where(eq(usersTable.email, Gmail));
          if (existingUser.length > 0) {
               return res.status(400).json({ error: "Email has already been taken" });
          }

          const [newUser] = await db.insert(usersTable).values({
               name: Name,
               email: Gmail,
               password: Password, // NOTE: In a real app, hash this password!
               salt: "random_salt", // Placeholder as per schema requirement
          }).returning({ id: usersTable.id });

          return res.status(200).json({ status: 'succes', uniqueId: newUser.id })
     } catch (error) {
          console.error("Database error:", error);
          return res.status(500).json({ error: "Internal Server Error" });
     }
}