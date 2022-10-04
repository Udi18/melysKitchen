// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ServerApiVersion } from "mongodb";
import bcrypt from "bcrypt";

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
    await bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash("Udi is my favorite son in law!", salt, async function (err, hash) {
        await client.connect();
        const database = client.db(process.env.DB_NAME);
        const users = database.collection(
          process.env.USERS_COLLECTION as string
        );
        const result = await users.updateOne(
          { userName: "mely" },
          {
            $addToSet: {
              password: hash,
            },
          }
        );
        console.log("result", result);
      });
    });
    res.status(200).json({ name: "success" });
  } finally {
    await client.close();
  }
}
