/*
  Warnings:

  - You are about to drop the column `action` on the `Permission` table. All the data in the column will be lost.
  - You are about to drop the column `scope` on the `Permission` table. All the data in the column will be lost.
  - Added the required column `scopeId` to the `Permission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Permission" DROP COLUMN "action",
DROP COLUMN "scope",
ADD COLUMN     "actions" TEXT[],
ADD COLUMN     "effect" TEXT NOT NULL DEFAULT E'Allow',
ADD COLUMN     "resources" TEXT[],
ADD COLUMN     "scopeId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Permission" ADD CONSTRAINT "Permission_scopeId_fkey" FOREIGN KEY ("scopeId") REFERENCES "Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
