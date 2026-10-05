import { QdrantVectorStore } from "@langchain/qdrant";
import { embeddings } from "./embeddings.js";
import dotenv from "dotenv"
dotenv.config()
export const vectorStore = async (docs, collectionName) => {
  const qdrantUrl = process.env.QDRANT_URL || "http://localhost:6333";
  if (!qdrantUrl) {
    throw new Error("QDRANT_URL is not defined in environment variables.");
  }
  return await QdrantVectorStore.fromDocuments(docs, embeddings, {
    url: qdrantUrl,
    collectionName,
  });
};