import db from "../Models/Database/index.js";
import { usersTable } from "../Models/Database/Schema.js";
import { eq,and } from "drizzle-orm";

export const getDetails = async function (req, res) {
    const { formData } = req.body    // extract the actual id string

    console.log(formData)

    if (!formData.Gmail||!formData.Password) {
        console.log("data is missing")        
        return res.status(400).json({ error: "Gmail is required or password is required" });
    }
    

    try {
        // const result = await db.select().from(usersTable).where(eq(usersTable.email, formData.Gmail));
        // const passwordcheck = await db.select().from(usersTable).where(eq(usersTable.password, formData.Password))
        // if (passwordcheck.length===0){
        //     return res.status(400).json({
        //         error: "your password is wrong"
        //     })
        // }

        // if (result.length === 0) {
        //     return res.status(400).json({
        //         error: "your gmail is not there in the database"
        //     })
        // }
        // this was a great set back because i was first checking gmail and then the password, if somwone enters there gmail and someone others password then it will allow

        const result = await db.select()
            .from(usersTable)
            .where(
                and(
                    eq(usersTable.email,formData.Gmail),
                    eq(usersTable.password,formData.Password)
                )
            )
        
        // if (result.length === 0)
        // {
        //     return res.status(200).json({
        //         status: "success"
        //     })
        // }
        // else
        // {
        //     return res.status(400).json({
        //         error: "Something went wrong"
        //     })
        // }
        if (result.length === 0) {
            // User doesn't exist, proceed with signup
            await db.insert(usersTable).values({
                name: formData.Name,
                email: formData.Gmail,
                password: formData.Password  // Should be hashed!
            });
            return res.status(200).json({
                status: "success"
            })
        }
        else {
            // User already exists
            return res.status(400).json({
                error: "Email already exists"
            })
        }
    


    } catch (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

