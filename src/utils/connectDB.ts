import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const connectDb = async (): Promise<PrismaClient> => {
  try {
    await prisma.$connect();
    console.log("Successfully connected to the database");
    return prisma;
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    throw error;
  }
};
