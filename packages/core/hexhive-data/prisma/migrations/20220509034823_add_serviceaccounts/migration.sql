-- CreateTable
CREATE TABLE "ApplicationServiceAccount" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "apiKey" TEXT NOT NULL,
    "applicationId" TEXT NOT NULL,

    CONSTRAINT "ApplicationServiceAccount_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ApplicationServiceAccount" ADD CONSTRAINT "ApplicationServiceAccount_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
