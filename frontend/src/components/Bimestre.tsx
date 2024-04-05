import { useState } from "react";
import { IBimestre, IDisciplina, Resultado } from "../types";
import Disciplina from "./Disciplina";
import LancarNotaModal from "./LancarNotaModal";
import { bimestreEmNumero } from "../helpers/bimestreEmNumero";

type Props = {
  numeroBimestre: IBimestre;
  disciplinas?: Resultado[];
  handleRemoverDisciplina: (id: string) => void;
  handleAdicionarDisciplina: (data: Resultado) => void;
}


export default function Bimestre({ numeroBimestre, disciplinas, handleRemoverDisciplina, handleAdicionarDisciplina }: Props) {
  const [modalAberto, setModalAberto] = useState<boolean>(false);


  const handleAbrirModal = () => {
    setModalAberto(true);
  }

  const handleFecharModal = () => {
    setModalAberto(false)
  }


  return (
    <div className="flex flex-col mt-4">
          { modalAberto && <LancarNotaModal handleFecharModal={handleFecharModal} bimestre={bimestreEmNumero[numeroBimestre]} disciplinas={disciplinas} handleAdicionarDisciplina={handleAdicionarDisciplina} /> }
        <div className="flex justify-between items-center">
            <h2 className="text-lg">Bimestre {bimestreEmNumero[numeroBimestre]}</h2>
            <button className="py-2 px-4 bg-[#E9FF1A] rounded-xl flex gap-4" onClick={handleAbrirModal}>
                <p className="hidden lg:block text-black">Lançar nota</p>
                <img src="/assets/plus-icon.svg" alt="Lançar nota" />
            </button>
        </div>
        <div className="grid grid-cols-2 justify-center items-center align-middle lg:grid-cols-4 mt-3 gap-5">
            {disciplinas?.map((disciplina) => (
              <Disciplina disciplina={disciplina} key={disciplina.id} handleRemoverDisciplina={handleRemoverDisciplina} />
            ))}
        </div>
    </div>
  )
}
