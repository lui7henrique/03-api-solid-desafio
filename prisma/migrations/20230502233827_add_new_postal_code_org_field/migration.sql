/*
  Warnings:

  - You are about to drop the column `postalCode` on the `orgs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "orgs" DROP COLUMN "postalCode",
ADD COLUMN     "postal_code" TEXT;
