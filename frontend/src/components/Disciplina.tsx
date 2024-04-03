import { IDisciplina, Resultado } from "../types"

type Props = {
    disciplina: Resultado;
}

export default function Disciplina({ disciplina }: Props) {

    const corDisciplina = {
        [IDisciplina.Artes]: "#05A2C2",
        [IDisciplina.Biologia]: "#CC4090",
        [IDisciplina.Geografia]: "#C26719",
        [IDisciplina.Sociologia]: "#9B19C2",
    }

  return (
    <div className="flex justify-center items-center">
        <div style={{ backgroundColor: corDisciplina[disciplina.disciplina] }} className={`flex flex-col justify-around w-36 h-36 rounded-xl`}>
        <div className="flex justify-between items-center">
            <div>
                <h3>{disciplina.disciplina}</h3>
                <p>Data</p>
            </div>
            <button className="cursor-pointer">
                <img src="/assets/trash-can-icon.svg" alt="Remover disciplina" />
            </button>
        </div>
        <div>
            <p className="bg-[#0F0F0F] flex gap-2">
                <img src="/assets/grade.svg" alt="Nota: " />
                Nota: {disciplina.nota}
            </p>
        </div>
    </div>
    </div>
  )
}
