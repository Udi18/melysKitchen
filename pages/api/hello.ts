// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { MongoClient, ServerApiVersion } from 'mongodb'

type Data = {
  name: string
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  ) {
  const client = await new MongoClient(process.env.MONGODB_URI as string)
  const result = await client.connect( err => {
    const collection = client.db(process.env.DB_NAME).collection(process.env.USERS_COLLECTION as string)
    return collection.count || "This here"
  })
  client.close()
  res.status(200).json({ name: 'John Doe' })
}
