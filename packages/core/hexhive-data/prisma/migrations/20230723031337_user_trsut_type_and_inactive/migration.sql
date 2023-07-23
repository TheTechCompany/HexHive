-- AlterTable
ALTER TABLE "UserTrust" ADD COLUMN     "inactive" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'User';
