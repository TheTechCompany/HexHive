-- CreateTable
CREATE TABLE "_hasPermission" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_hasPermission_AB_unique" ON "_hasPermission"("A", "B");

-- CreateIndex
CREATE INDEX "_hasPermission_B_index" ON "_hasPermission"("B");

-- AddForeignKey
ALTER TABLE "_hasPermission" ADD FOREIGN KEY ("A") REFERENCES "Permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_hasPermission" ADD FOREIGN KEY ("B") REFERENCES "UserTrust"("id") ON DELETE CASCADE ON UPDATE CASCADE;
