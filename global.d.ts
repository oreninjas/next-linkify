import { PrismaClient } from "@prisma/client";
import { Connection } from "mongoose";

declare global {
  var prisma: PrismaClient | undefined;
}
