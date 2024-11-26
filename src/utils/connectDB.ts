import { PrismaClient } from "@prisma/client";

// Export prisma instance so it can be imported elsewhere
export const prisma = new PrismaClient();

export const connectDb = async (): Promise<PrismaClient> => {
  try {
    await prisma.$connect();
    console.log("Successfully connected to database");
    return prisma;
  } catch (error) {
    console.error("Failed to connect to database:", error);
    throw error;
  }
};
