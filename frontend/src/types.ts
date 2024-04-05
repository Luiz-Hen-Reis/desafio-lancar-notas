export enum IBimestre {
    PRIMEIRO = "PRIMEIRO",
    SEGUNDO = "SEGUNDO",
    TERCEIRO = "TERCEIRO",
    QUARTO = "QUARTO"
}

export enum IDisciplina {
    Biologia = "Biologia",
    Artes = "Artes",
    Geografia = "Geografia",
    Sociologia = "Sociologia"
}

export interface Resultado {
    id?: string;
    bimestre: IBimestre;
    disciplina: IDisciplina;
    nota: number;
    criadoEm?: Date | string;
  }