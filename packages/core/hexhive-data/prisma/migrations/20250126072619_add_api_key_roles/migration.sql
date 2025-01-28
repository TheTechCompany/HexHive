-- AlterTable
ALTER TABLE "APIKey" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "lastUpdated" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "_hasAPIRole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_hasAPIRole_AB_unique" ON "_hasAPIRole"("A", "B");

-- CreateIndex
CREATE INDEX "_hasAPIRole_B_index" ON "_hasAPIRole"("B");

-- AddForeignKey
ALTER TABLE "_hasAPIRole" ADD CONSTRAINT "_hasAPIRole_A_fkey" FOREIGN KEY ("A") REFERENCES "APIKey"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_hasAPIRole" ADD CONSTRAINT "_hasAPIRole_B_fkey" FOREIGN KEY ("B") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
