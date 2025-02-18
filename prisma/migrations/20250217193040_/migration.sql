/*
  Warnings:

  - You are about to drop the column `productId` on the `extra` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `orderproduct` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `size` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `extra` DROP FOREIGN KEY `Extra_productId_fkey`;

-- DropForeignKey
ALTER TABLE `orderproduct` DROP FOREIGN KEY `OrderProduct_productId_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `size` DROP FOREIGN KEY `Size_productId_fkey`;

-- DropIndex
DROP INDEX `Extra_productId_fkey` ON `extra`;

-- DropIndex
DROP INDEX `OrderProduct_productId_fkey` ON `orderproduct`;

-- DropIndex
DROP INDEX `Product_categoryId_fkey` ON `product`;

-- DropIndex
DROP INDEX `Size_productId_fkey` ON `size`;

-- AlterTable
ALTER TABLE `extra` DROP COLUMN `productId`;

-- AlterTable
ALTER TABLE `orderproduct` DROP COLUMN `productId`;

-- AlterTable
ALTER TABLE `size` DROP COLUMN `productId`;
