-- CreateTable
CREATE TABLE "orgs" (
    "id" TEXT NOT NULL,
    "responsible_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "whatsapp_number" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,

    CONSTRAINT "orgs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "orgs_email_key" ON "orgs"("email");
