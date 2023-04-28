/*
  Warnings:

  - You are about to drop the `states` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `type` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Type" AS ENUM ('DOG', 'CAT');

-- AlterTable
ALTER TABLE "pets" ADD COLUMN     "type" "Type" NOT NULL;

-- DropTable
DROP TABLE "states";
