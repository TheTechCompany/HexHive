-- DropForeignKey
ALTER TABLE "UserTrust" DROP CONSTRAINT "UserTrust_issuerId_fkey";

-- DropForeignKey
ALTER TABLE "UserTrust" DROP CONSTRAINT "UserTrust_trustId_fkey";

-- AddForeignKey
ALTER TABLE "UserTrust" ADD CONSTRAINT "UserTrust_trustId_fkey" FOREIGN KEY ("trustId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTrust" ADD CONSTRAINT "UserTrust_issuerId_fkey" FOREIGN KEY ("issuerId") REFERENCES "Organisation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
