/*
  Warnings:

  - You are about to drop the `_OrganisationToUser` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_OrganisationToUser" DROP CONSTRAINT "_OrganisationToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_OrganisationToUser" DROP CONSTRAINT "_OrganisationToUser_B_fkey";

-- DropTable
DROP TABLE "_OrganisationToUser";

-- CreateTable
CREATE TABLE "UserTrust" (
    "id" TEXT NOT NULL,
    "trustId" TEXT NOT NULL,
    "issuerId" TEXT NOT NULL,

    CONSTRAINT "UserTrust_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_hasRole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_hasRole_AB_unique" ON "_hasRole"("A", "B");

-- CreateIndex
CREATE INDEX "_hasRole_B_index" ON "_hasRole"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "UserTrust" ADD CONSTRAINT "UserTrust_trustId_fkey" FOREIGN KEY ("trustId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTrust" ADD CONSTRAINT "UserTrust_issuerId_fkey" FOREIGN KEY ("issuerId") REFERENCES "Organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_hasRole" ADD FOREIGN KEY ("A") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_hasRole" ADD FOREIGN KEY ("B") REFERENCES "UserTrust"("id") ON DELETE CASCADE ON UPDATE CASCADE;
