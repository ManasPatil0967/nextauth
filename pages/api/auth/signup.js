// pages/api/auth/signup.js
import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db();

  const { username, email, password } = req.body;

  const user = await db.collection("users").findOne({ username });

  if (user) {
    res.status(400).json({ message: "User already exists" });
  } else {
    await db.collection("users").insertOne({ username, email, password });
    res.status(201).json({ message: "User created" });
  }
};
