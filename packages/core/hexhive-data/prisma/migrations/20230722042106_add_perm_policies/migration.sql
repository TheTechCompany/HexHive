/*
  Warnings:

  - Added the required column `name` to the `PermissionPolicy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PermissionPolicy" ADD COLUMN     "name" TEXT NOT NULL;
