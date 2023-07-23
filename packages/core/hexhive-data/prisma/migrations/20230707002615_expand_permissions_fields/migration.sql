-- DropForeignKey
ALTER TABLE "Permission" DROP CONSTRAINT "Permission_scopeId_fkey";

-- AlterTable
ALTER TABLE "Permission" ALTER COLUMN "scopeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Permission" ADD CONSTRAINT "Permission_scopeId_fkey" FOREIGN KEY ("scopeId") REFERENCES "Application"("id") ON DELETE SET NULL ON UPDATE CASCADE;
