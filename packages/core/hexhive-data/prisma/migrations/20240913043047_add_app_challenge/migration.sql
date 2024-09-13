-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "publicKey" TEXT;

-- CreateTable
CREATE TABLE "ApplicationChallenge" (
    "id" TEXT NOT NULL,
    "publicKey" TEXT NOT NULL,
    "challenge" TEXT NOT NULL,
    "application" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ApplicationChallenge_pkey" PRIMARY KEY ("id")
);
