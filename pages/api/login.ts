import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ServerApiVersion } from "mongodb";
import { comparePassword } from "../../tools/dbActions";

type EnteredUserData = {
  userName: string;
  password: string;
};

const mongoUrl = process.env.MONGODB_URI as string;

const client = new MongoClient(mongoUrl, { serverApi: ServerApiVersion.v1 });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const enteredUserData: EnteredUserData = req.body;
    await client.connect();
    const database = client.db(process.env.DB_NAME);
    const users = database.collection(process.env.USERS_COLLECTION as string);
    const result = await users.findOne({ userName: enteredUserData.userName });
    if (result) {
      const isValidPassword = await comparePassword(
        enteredUserData.password,
        result.password[0]
      );
      result.password = undefined;
      if (isValidPassword) {
        res.status(200).json({ user: result });
      } else {
        res.status(401).json({ message: "failed to login" });
      }
    } else {
      res.status(401).json({ message: "failed to login" });
    }
  } finally {
    await client.close();
  }
}
