/*
  Warnings:

  - You are about to drop the column `independecy_level` on the `pets` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "pets" DROP COLUMN "independecy_level",
ADD COLUMN     "independency_level" "IndependencyLevel" NOT NULL DEFAULT 'MEDIUM';
