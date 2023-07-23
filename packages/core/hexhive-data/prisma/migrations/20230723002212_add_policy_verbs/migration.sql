/*
  Warnings:

  - You are about to drop the column `verb` on the `PermissionPolicy` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PermissionPolicy" DROP COLUMN "verb",
ADD COLUMN     "verbs" TEXT[];
