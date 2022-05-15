-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "entrypoint" TEXT,
ADD COLUMN     "slug" TEXT,
ADD COLUMN     "staging_entrypoint" TEXT;
