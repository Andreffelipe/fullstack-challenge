-- CreateEnum
CREATE TYPE "Status" AS ENUM ('draft', 'imported');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "barcode" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'imported',
    "imported_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "categories" TEXT[],
    "packaging" TEXT[],
    "brands" TEXT[],
    "image_url" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_code_key" ON "Product"("code");
