/*
  Warnings:

  - You are about to drop the column `adminId` on the `Project` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_adminId_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "adminId";
