import db from "../Models/Database/index.js";
import { usersTable } from "../Models/Database/Schema.js";
import { eq } from "drizzle-orm";

export const getDetails = async function (req, res) {
    const { formData } = req.body    // extract the actual id string

    console.log(formData)

    if (!formData.Gmail||!formData.Password) {
        return res.status(400).json({ error: "Gmail is required or password is required" });
    }
    

    try {
        const result = await db.select().from(usersTable).where(eq(usersTable.email, formData.Gmail));
        const passwordcheck = await db.select().from(usersTable).where(eq(usersTable.password, formData.Password))
        if (passwordcheck.length===0){
            return res.status(400).json({
                error: "your password is wrong"
            })
        }

        if (result.length === 0) {
            return res.status(400).json({
                error: "your gmail is not there in the database"
            })
        }

        const details = result[0];
        const formattedDetails = {
            Name: details.name,
            Gmail: details.email,
            Password: details.password
        };

        return res.json({ status: "success", details: formattedDetails })
    } catch (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

