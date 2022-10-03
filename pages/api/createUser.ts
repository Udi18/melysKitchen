// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ServerApiVersion } from "mongodb";

type Data = {
  name: string;
};

const mongoUrl = process.env.MONGODB_URI as string;

const client = new MongoClient(mongoUrl, { serverApi: ServerApiVersion.v1 });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await client.connect();
    const database = client.db(process.env.DB_NAME);
    const users = database.collection(process.env.USERS_COLLECTION as string);
    const thisUser = users.find({ userName: "mona" });
    console.log("users", thisUser);
    // @ts-ignore
    res.status(200).json(thisUser);
  } finally {
    await client.close();
  }
}
