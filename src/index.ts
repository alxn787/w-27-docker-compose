import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();

const prisma = new PrismaClient();


app.get("/", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

app.post ("/", async (req,res)=>{
    const email = Math.random().toString(36).substring(7) + "@example.com"
    const password = "mysecretpassword"
    await prisma.user.create({
        data: {
            email,
            password
        }
    })
    res.json({
        email,
        password
    })

})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});