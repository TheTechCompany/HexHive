-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_organisationId_fkey";

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "Organisation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
