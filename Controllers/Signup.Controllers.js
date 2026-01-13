import db from "../Models/Database/index.js";
import { usersTable } from "../Models/Database/Schema.js";
import { eq } from "drizzle-orm";

export const getDetails = async function (req, res) {
    const { id } = req.body    // extract the actual id string

    console.log(id)

    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }

    try {
        const result = await db.select().from(usersTable).where(eq(usersTable.id, id));

        if (result.length === 0) {
            return res.status(400).json({
                error: "your id is not there in the database"
            })
        }

        const details = result[0];
        // Map back to frontend expectation if needed, or return raw. 
        // Frontend expects {Details: {Name, Gmail, Password}} based on Login controller structure?
        // Login controller previously saved {Name, Gmail, Password}.
        // The DB returns { name, email, password, salt, id }.
        // Let's ensure compatibility.

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

