-- AlterTable
ALTER TABLE "PermissionPolicy" ALTER COLUMN "verb" DROP NOT NULL,
ALTER COLUMN "resource" DROP NOT NULL,
ALTER COLUMN "conditions" DROP NOT NULL;
