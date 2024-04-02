/*
  Warnings:

  - You are about to drop the `Resultado` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Resultado";

-- CreateTable
CREATE TABLE "resultado" (
    "id" TEXT NOT NULL,
    "bimestre" "Bimestre" NOT NULL,
    "disciplina" "Disciplina" NOT NULL,
    "nota" DOUBLE PRECISION NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "resultado_pkey" PRIMARY KEY ("id")
);
