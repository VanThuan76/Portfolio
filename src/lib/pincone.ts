import { Pinecone } from "@pinecone-database/pinecone"

const apiKey = process.env.PINECONE_API_KEY as string
if (!apiKey) throw new Error('PINECONE_API_KEY is required')

const pinecone = new Pinecone({ apiKey })
export const portfolioIndex = pinecone.Index('portfolio')