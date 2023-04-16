-- AlterTable
ALTER TABLE "pets" ADD COLUMN     "orgId" TEXT;

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "orgs"("id") ON DELETE SET NULL ON UPDATE CASCADE;
