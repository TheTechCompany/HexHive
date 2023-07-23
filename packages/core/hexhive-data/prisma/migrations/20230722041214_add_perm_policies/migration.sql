/*
  Warnings:

  - You are about to drop the column `actions` on the `Permission` table. All the data in the column will be lost.
  - You are about to drop the column `effect` on the `Permission` table. All the data in the column will be lost.
  - You are about to drop the column `resources` on the `Permission` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Permission" DROP COLUMN "actions",
DROP COLUMN "effect",
DROP COLUMN "resources";

-- CreateTable
CREATE TABLE "PermissionPolicy" (
    "id" TEXT NOT NULL,
    "verb" TEXT NOT NULL,
    "resource" TEXT NOT NULL,
    "conditions" JSONB NOT NULL,
    "effect" TEXT NOT NULL DEFAULT 'Allow',
    "organisationId" TEXT NOT NULL,

    CONSTRAINT "PermissionPolicy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PermissionToPermissionPolicy" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PermissionToPermissionPolicy_AB_unique" ON "_PermissionToPermissionPolicy"("A", "B");

-- CreateIndex
CREATE INDEX "_PermissionToPermissionPolicy_B_index" ON "_PermissionToPermissionPolicy"("B");

-- AddForeignKey
ALTER TABLE "PermissionPolicy" ADD CONSTRAINT "PermissionPolicy_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "Organisation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionToPermissionPolicy" ADD CONSTRAINT "_PermissionToPermissionPolicy_A_fkey" FOREIGN KEY ("A") REFERENCES "Permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionToPermissionPolicy" ADD CONSTRAINT "_PermissionToPermissionPolicy_B_fkey" FOREIGN KEY ("B") REFERENCES "PermissionPolicy"("id") ON DELETE CASCADE ON UPDATE CASCADE;
