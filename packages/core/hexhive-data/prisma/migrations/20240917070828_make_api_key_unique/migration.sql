/*
  Warnings:

  - A unique constraint covering the columns `[apiKey]` on the table `APIKey` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[apiKey]` on the table `ApplicationServiceAccount` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "APIKey_apiKey_key" ON "APIKey"("apiKey");

-- CreateIndex
CREATE UNIQUE INDEX "ApplicationServiceAccount_apiKey_key" ON "ApplicationServiceAccount"("apiKey");
