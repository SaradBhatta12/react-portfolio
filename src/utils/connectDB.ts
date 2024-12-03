import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const connectDb = async (): Promise<PrismaClient> => {
  try {
    await prisma.$connect();
    return prisma;
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    throw error;
  }
};
