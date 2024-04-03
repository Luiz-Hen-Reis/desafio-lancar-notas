import { IBimestre, IDisciplina, Resultado } from "../types";
import Disciplina from "./Disciplina";

type Props = {
  numeroBimestre: IBimestre;
  disciplinas?: Resultado[];
}

const disciplina: Resultado = {
  id: '',
  bimestre: IBimestre.PRIMEIRO,
  disciplina: IDisciplina.Geografia,
  nota: 6.7
}


export default function Bimestre({ numeroBimestre, disciplinas }: Props) {

  const bimestreEmNumero = {
    [IBimestre.PRIMEIRO]: 1,
    [IBimestre.SEGUNDO]: 2,
    [IBimestre.TERCEIRO]: 3,
    [IBimestre.QUARTO]: 4
  }

  return (
    <div className="flex flex-col mt-4">
        <div className="flex justify-between items-center">
            <h2 className="text-lg">Bimestre {bimestreEmNumero[numeroBimestre]}</h2>
            <button className="py-2 px-4 bg-[#E9FF1A] rounded-xl flex gap-4">
                <p className="hidden lg:block text-black">Lançar nota</p>
                <img src="/assets/plus-icon.svg" alt="Lançar nota" />
            </button>
        </div>
        <div className="grid grid-cols-2 justify-center items-center align-middle lg:grid-cols-4 mt-3 gap-5">
            <Disciplina disciplina={disciplina} />
        </div>
    </div>
  )
}
