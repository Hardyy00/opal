import { PrismaClient } from "@/generated/prisma";

const globalThisForPrisma = globalThis as unknown as {
  prismaClient: PrismaClient;
};
