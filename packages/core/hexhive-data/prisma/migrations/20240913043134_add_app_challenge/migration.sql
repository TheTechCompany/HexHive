/*
  Warnings:

  - A unique constraint covering the columns `[publicKey]` on the table `Application` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Application_publicKey_key" ON "Application"("publicKey");
