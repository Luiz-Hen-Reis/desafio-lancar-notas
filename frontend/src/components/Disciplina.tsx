import { corDisciplina } from "../helpers/corDisciplina";
import { formatarData } from "../helpers/formatarData";
import { IDisciplina, Resultado } from "../types"

type Props = {
    disciplina: Resultado;
    handleRemoverDisciplina: (id: string) => void;
}

export default function Disciplina({ disciplina, handleRemoverDisciplina }: Props) {

    let corNota = '';

    if (disciplina.nota < 6) {
        corNota = "#FF5964";
    } else if (disciplina.nota >= 6 && disciplina.nota < 8) {
        corNota = "#FFFF99";
    } else {
        corNota = "#05FF00";
    }

  return (
    <div className="flex justify-center items-center">
        <div style={{ backgroundColor: corDisciplina[disciplina.disciplina] }} className={`flex flex-col justify-around w-36 h-36 rounded-xl`}>
        <div className="flex justify-between items-center">
            <div>
                <h3>{disciplina.disciplina}</h3>
                <p>{formatarData(disciplina.criadoEm as string)}</p>
            </div>
            <button className="cursor-pointer" onClick={() => handleRemoverDisciplina(disciplina.id as string)}>
                <img src="/assets/trash-can-icon.svg" alt="Remover disciplina" />
            </button>
        </div>
        <div>
            <p style={{ color: corNota }} className="bg-[#0F0F0F] flex gap-2">
                <img src="/assets/grade.svg" alt="Nota: " />
                Nota: {disciplina.nota}
            </p>
        </div>
    </div>
    </div>
  )
}
