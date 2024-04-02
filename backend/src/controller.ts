import { Request, Response } from "express";
import prisma from "../prisma/prisma";

enum Bimestre {
    PRIMEIRO = "PRIMEIRO",
    SEGUNDO = "SEGUNDO",
    TERCEIRO = "TERCEIRO",
    QUARTO = "QUARTO"
}

enum Disciplina {
    Biologia = "Biologia",
    Artes = "Artes",
    Geografia = "Geografia",
    Sociologia = "Sociologia"
}

  interface Resultado {
    id: string;
    bimestre: Bimestre;
    disciplina: Disciplina;
    nota: number;
  }

export const resultadoController = {
    index: async (req: Request, res: Response) => {
        try {
            const resultados =  await prisma?.resultado.findMany();

        if (!resultados) throw new Error("Nenhum resultado foi encontrado.");

        res.status(200).json(resultados);

        } catch (error) {
            console.log('Erro ', error);
        }
    },

    create: async (req: Request, res: Response) => {
        const { data }: { data: Resultado } = req.body;

        try {
            if (!data) throw new Error("Nenhum dado foi fornecido.")

            const disciplinaNoBimestreJaExiste = await prisma?.resultado.findFirst({ where: { bimestre: data.bimestre, disciplina: data.disciplina } })

            if (disciplinaNoBimestreJaExiste) {
                return res.status(400).json({ error: "Já existe um registro para essa disciplina nesse bimestre." });
            }

            if (!data.nota || !(data.nota >= 0 || data.nota <= 10)) res.status(400).json({ error: "A nota precisa ser maior ou igual a zero ou menor ou igual a dez." })

            const novoRegistro = await prisma?.resultado.create({
                data: {
                    bimestre: data.bimestre,
                    disciplina: data.disciplina,
                    nota: data.nota,
                }
            });

            res.status(201).json({ message: "Registro criado com sucesso", data: novoRegistro });
        } catch (error) {
            console.log('Erro ', error);
        }
    },

    delete: async (req: Request, res: Response) => {
        const { id } = req.params;

         try {
                const resultado = await prisma?.resultado.findUnique({ where: { id } });
    
                if (!resultado) {
                    return res.status(404).json({ error: "Registro não encontrado." });
                }
    
                await prisma?.resultado.delete({ where: { id } });
    
                res.status(200).json({ message: "Registro excluído com sucesso" });
        } catch (error) {
            console.log('Erro ', Error);
        }
    }
}