/*
  Warnings:

  - A unique constraint covering the columns `[trustId,issuerId]` on the table `UserTrust` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserTrust_trustId_issuerId_key" ON "UserTrust"("trustId", "issuerId");
