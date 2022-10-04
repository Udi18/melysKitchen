import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ServerApiVersion } from "mongodb";
import { NewDish } from "../../atoms/newDish";

const mongoUrl = process.env.MONGODB_URI as string;

const client = new MongoClient(mongoUrl, { serverApi: ServerApiVersion.v1 });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const newDish: NewDish = req.body;
    await client.connect();
    const database = client.db(process.env.DB_NAME);
    const dishes = database.collection(process.env.DISHES_COLLECTION as string);
    const alreadyExists = await dishes.findOne({ name: newDish.name });
    if (!alreadyExists) {
      const result = await dishes.insertOne(newDish);
      console.log("result", result);
      res.status(200).json({ message: "success" });
    } else {
      res.status(400).json({ message: "Dish already exists" });
    }
  } finally {
    await client.close();
  }
}
