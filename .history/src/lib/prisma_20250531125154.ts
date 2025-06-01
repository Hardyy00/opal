import { PrismaClient } from "@/generated/prisma";

const globalThisForPrisma = globalThis as unknown as {
  prismaClient: PrismaClient;
};

export const db = globalThisForPrisma.prismaClient || new PrismaClient();

if (process.env.NODE_ENV != "production") globalThisForPrisma.prismaClient = db;
