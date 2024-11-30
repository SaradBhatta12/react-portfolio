/*
  Warnings:

  - You are about to drop the column `adminId` on the `Experience` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_adminId_fkey";

-- DropIndex
DROP INDEX "Experience_adminId_key";

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "adminId";
