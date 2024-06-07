import clientPromise from "@/lib/mongodb";

export default async (req, res) => {
    const client = await clientPromise;
    const db = client.db();
    
    const {email} = req.body;
    
    const user = await db.collection("users").findOne({ email });

    if (user) {
        res.status(201).json(user);
    }
    else {
        res.status(400).json({ message: "User not found" });
    }
}