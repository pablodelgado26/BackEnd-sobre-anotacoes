-- CreateTable
CREATE TABLE "notas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "favorito" BOOLEAN NOT NULL DEFAULT false,
    "cor" TEXT,
    "criadaEM" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadaEM" DATETIME NOT NULL
);
