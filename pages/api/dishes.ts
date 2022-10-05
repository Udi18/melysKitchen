import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ServerApiVersion } from "mongodb";

const mongoUrl = process.env.MONGODB_URI as string;

const client = new MongoClient(mongoUrl, { serverApi: ServerApiVersion.v1 });

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await client.connect();
    const database = client.db(process.env.DB_NAME);
    const dishes = database.collection(process.env.DISHES_COLLECTION as string);
    const result = await dishes.find().toArray();
    res.status(200).json({ dishes: result });
  } finally {
    await client.close();
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      await getHandler(req, res);
      break;
    default:
      res.status(400).json({ message: "Invalid request" });
  }
}
